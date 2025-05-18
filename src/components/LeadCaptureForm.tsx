import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Loader2, Calendar, ArrowRight } from "lucide-react";
import { generateFollowUpQuestion } from "@/lib/genkitService";
import { addLead, updateLead } from "@/lib/firebaseUtils";
import { useToast } from "@/components/ui/use-toast";
import AppointmentScheduler from "./AppointmentScheduler";
import { API_URL } from '../config';

// Interface for component props
interface LeadCaptureFormProps {
  useCard?: boolean;
}

const LeadCaptureForm: React.FC<LeadCaptureFormProps> = ({ useCard = true }) => {
  const { toast } = useToast();
  
  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [inquiry, setInquiry] = useState("");
  const [followUpQuestions, setFollowUpQuestions] = useState<string[]>([]);
  const [followUpAnswers, setFollowUpAnswers] = useState<Record<string, string>>({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [leadId, setLeadId] = useState<string | null>(null);
  
  // UI state tracking
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showAppointmentScheduler, setShowAppointmentScheduler] = useState(false);
  
  const handleInitialSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !inquiry) {
      toast({
        title: "Error",
        description: "Please fill out all fields",
        variant: "destructive"
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Try to save lead data first
      const id = await addLead({ name, email, inquiry });
      setLeadId(id);

      // Then try to generate follow-up questions
      try {
        const response = await fetch(`${API_URL}/generate-question`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ context: inquiry }),
        });
        
        const data = await response.json();
        
        if (!response.ok) {
          if (data.fallbackQuestions) {
            setFollowUpQuestions(data.fallbackQuestions);
          } else {
            throw new Error(data.error || 'Failed to generate questions');
          }
        } else {
          setFollowUpQuestions(data.questions);
        }
      } catch (questionError) {
        console.error("Error generating questions:", questionError);
        // Use fallback questions if API fails
        setFollowUpQuestions([
          "Could you tell me more about your specific needs?",
          "What is your timeline for this project?",
          "Do you have any specific design preferences?",
          "What is your budget range for this project?",
          "Have you worked with web developers before?"
        ]);
      }
      
      // Move to next step regardless of question generation result
      setStep(2);
    } catch (error) {
      console.error("Error processing lead submission:", error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleFollowUpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const currentAnswer = followUpAnswers[followUpQuestions[currentQuestionIndex]];
    if (!currentAnswer) {
      toast({
        title: "Error",
        description: "Please provide an answer to continue",
        variant: "destructive"
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Update lead with follow-up answer
      if (leadId) {
        await updateLead(leadId, { 
          followUpAnswers: {
            ...followUpAnswers,
            [followUpQuestions[currentQuestionIndex]]: currentAnswer
          }
        });
      }
      
      // Move to next question or show appointment scheduler
      if (currentQuestionIndex < followUpQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        // Try to send confirmation email, but don't block on failure
        try {
          await fetch(`${API_URL}/send-confirmation`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name,
              email,
              inquiry,
              followUpAnswers
            }),
          });
        } catch (emailError) {
          console.error("Error sending confirmation email:", emailError);
          // Don't show error to user, as this is non-critical
        }
        
        // Show appointment scheduler
        setShowAppointmentScheduler(true);
        setStep(3);
      }
    } catch (error) {
      console.error("Error processing follow-up:", error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleAppointmentScheduled = async (appointmentDate: Date) => {
    if (!leadId) return;
    
    setIsLoading(true);
    try {
      // Update lead with appointment date
      await updateLead(leadId, { appointmentDate });
      
      // Send appointment confirmation email
      const response = await fetch(`${API_URL}/send-confirmation`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          inquiry,
          followUpAnswers,
          appointmentDate: appointmentDate.toISOString()
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to send confirmation');
      }
      
      toast({
        title: "Success!",
        description: "Your appointment has been scheduled. A confirmation email has been sent to you.",
      });
      
      // Reset form for new submissions
      resetForm();
    } catch (error: any) {
      console.error("Error updating appointment:", error);
      toast({
        title: "Error",
        description: error.message || "Failed to update appointment details. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const resetForm = () => {
    setName("");
    setEmail("");
    setInquiry("");
    setFollowUpQuestions([]);
    setFollowUpAnswers({});
    setCurrentQuestionIndex(0);
    setLeadId(null);
    setStep(1);
    setShowAppointmentScheduler(false);
  };
  
  // Render the form content
  const renderFormContent = () => (
    <>
      {step === 1 && (
        <form onSubmit={handleInitialSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input 
              id="name" 
              placeholder="Your name" 
              value={name} 
              onChange={(e) => setName(e.target.value)}
              disabled={isLoading}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="Your email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="inquiry">Your Inquiry</Label>
            <Textarea 
              id="inquiry" 
              placeholder="Tell us about your project or needs" 
              value={inquiry} 
              onChange={(e) => setInquiry(e.target.value)}
              disabled={isLoading}
              required
              className="min-h-24"
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-[#FFD700] hover:bg-[#e6c300] text-black"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing
              </>
            ) : (
              <>
                Continue <ArrowRight className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </form>
      )}
      
      {step === 2 && (
        <form onSubmit={handleFollowUpSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="followUp">
              {followUpQuestions[currentQuestionIndex] || "Could you tell us more about your specific needs?"}
            </Label>
            <Textarea 
              id="followUp" 
              placeholder="Your answer" 
              value={followUpAnswers[followUpQuestions[currentQuestionIndex]] || ""}
              onChange={(e) => setFollowUpAnswers({
                ...followUpAnswers,
                [followUpQuestions[currentQuestionIndex]]: e.target.value
              })}
              disabled={isLoading}
              required
              className="min-h-24"
            />
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">
              Question {currentQuestionIndex + 1} of {followUpQuestions.length}
            </span>
            
            <Button 
              type="submit" 
              className="bg-[#FFD700] hover:bg-[#e6c300] text-black"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing
                </>
              ) : currentQuestionIndex < followUpQuestions.length - 1 ? (
                <>
                  Next Question <ArrowRight className="ml-2 h-4 w-4" />
                </>
              ) : (
                <>
                  Schedule Appointment <Calendar className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        </form>
      )}
      
      {step === 3 && showAppointmentScheduler && (
        <AppointmentScheduler 
          name={name} 
          email={email} 
          onScheduled={handleAppointmentScheduled} 
        />
      )}
    </>
  );
  
  // If useCard is true, wrap content in a Card, otherwise just return the content
  return useCard ? (
    <Card className="w-full max-w-2xl mx-auto">
      <CardContent className="p-6">
        {renderFormContent()}
      </CardContent>
      
      {step > 1 && (
        <CardFooter className="flex justify-start p-4">
          <Button
            variant="outline"
            onClick={() => {
              if (step === 3) {
                setStep(2);
                setShowAppointmentScheduler(false);
              } else if (step === 2) {
                if (currentQuestionIndex > 0) {
                  setCurrentQuestionIndex(currentQuestionIndex - 1);
                } else {
                  setStep(1);
                }
              }
            }}
            disabled={isLoading}
          >
            Back
          </Button>
        </CardFooter>
      )}
    </Card>
  ) : (
    <div className="w-full">
      {renderFormContent()}
    </div>
  );
};

export default LeadCaptureForm;