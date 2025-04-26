import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Link, useNavigate } from 'react-router-dom';
import { Navbar } from "@/components/Navbar";
import { navItems } from "@/lib/data";
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '@/lib/firebase';

// Form values type
interface ResetPasswordFormValues {
  email: string;
}

const ResetPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  const form = useForm<ResetPasswordFormValues>();

  const onSubmit = async (data: ResetPasswordFormValues) => {
    setIsLoading(true);
    try {
      await sendPasswordResetEmail(auth, data.email);
      
      setIsSubmitted(true);
      toast({
        title: "Reset Email Sent",
        description: "If an account exists with this email, you will receive password reset instructions.",
      });

    } catch (err: any) {
      console.error("Password reset request failed:", err);
      toast({
        variant: "destructive",
        title: "Request Failed",
        description: err.message || "Could not process your request. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar items={navItems} />
        <main className="container mx-auto px-4 py-20">
          <div className="max-w-md mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-xl">
              <h1 className="text-2xl font-bold mb-6 text-center">Password Reset Email Sent</h1>
              <p className="mb-6 text-center text-gray-600">
                If your account exists in our system, you will receive instructions on how to reset your password.
              </p>
              <div className="flex justify-center">
                <Link 
                  to="/login"
                  className="text-[#FFD700] hover:text-[#e6c300] transition-colors"
                >
                  Return to login
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar items={navItems} />

      <main className="container mx-auto px-4 py-20">
        <div className="max-w-md mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-xl">
            <h1 className="text-3xl font-display font-bold mb-6 text-center">
              Reset Password
            </h1>
            
            <p className="text-gray-600 mb-6 text-center">
              Enter your email address below and we'll send you instructions to reset your password.
            </p>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="email"
                  rules={{ 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    }
                  }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="Enter your email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isLoading} className="w-full bg-[#FFD700] hover:bg-[#e6c300] text-black">
                  {isLoading ? "Submitting..." : "Reset Password"}
                </Button>
              </form>
            </Form>
            
            <div className="mt-6 text-center">
              <Link
                to="/login"
                className="text-sm text-gray-600 hover:text-[#FFD700] transition-colors"
              >
                Remember your password? Log in
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ResetPassword; 