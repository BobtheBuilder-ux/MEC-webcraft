import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { sendEmail } from "@/lib/emailService";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      // Send email to admin
      await sendEmail({
        to: 'miracle@mecwebcraft.com',
        subject: `New Contact Form Message: ${data.subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background-color: #FFD700; padding: 20px; text-align: center;">
              <h1 style="color: #000000; margin: 0;">MEC Webcraft</h1>
            </div>
            <div style="padding: 20px;">
              <h2>New Contact Form Submission</h2>
              <p><strong>From:</strong> ${data.name} (${data.email})</p>
              <p><strong>Subject:</strong> ${data.subject}</p>
              <p><strong>Message:</strong></p>
              <p>${data.message}</p>
            </div>
          </div>
        `,
      });

      // Send confirmation email to user
      await sendEmail({
        to: data.email,
        subject: 'Thank You for Contacting MEC Webcraft',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background-color: #FFD700; padding: 20px; text-align: center;">
              <h1 style="color: #000000; margin: 0;">MEC Webcraft</h1>
            </div>
            <div style="padding: 20px;">
              <p>Dear ${data.name},</p>
              <p>Thank you for reaching out to us. This email confirms that we have received your message regarding "${data.subject}".</p>
              <p>Here's a copy of your message:</p>
              <blockquote style="margin: 20px 0; padding: 10px 20px; border-left: 4px solid #FFD700; background-color: #f9f9f9;">
                ${data.message}
              </blockquote>
              <p>We will review your message and get back to you as soon as possible.</p>
              <p style="margin-top: 20px; font-size: 14px; color: #666;">
                Best regards,<br>
                The MEC Webcraft Team
              </p>
            </div>
          </div>
        `,
      });
      
      toast({
        title: "Message Sent",
        description: "Thank you for your message. A confirmation email has been sent to your inbox.",
      });
      reset();
    } catch (error: any) {
      console.error('Failed to send message:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-600">
            Have a question or want to work together? I'd love to hear from you.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Input
                  {...register("name", { required: "Name is required" })}
                  placeholder="Your Name"
                  className="w-full"
                />
                {errors.name && (
                  <span className="text-sm text-red-500 mt-1">{errors.name.message}</span>
                )}
              </div>
              
              <div>
                <Input
                  {...register("email", { 
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                  type="email"
                  placeholder="Your Email"
                  className="w-full"
                />
                {errors.email && (
                  <span className="text-sm text-red-500 mt-1">{errors.email.message}</span>
                )}
              </div>
            </div>

            <div>
              <Input
                {...register("subject", { required: "Subject is required" })}
                placeholder="Subject"
                className="w-full"
              />
              {errors.subject && (
                <span className="text-sm text-red-500 mt-1">{errors.subject.message}</span>
              )}
            </div>

            <div>
              <Textarea
                {...register("message", { required: "Message is required" })}
                placeholder="Your Message"
                className="w-full min-h-[200px]"
              />
              {errors.message && (
                <span className="text-sm text-red-500 mt-1">{errors.message.message}</span>
              )}
            </div>

            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full md:w-auto bg-[#FFD700] hover:bg-[#e6c300] text-black"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
