import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from "@/components/Navbar";
import { useToast } from "@/hooks/use-toast";
import { registerUser } from "@/lib/firebaseUtils";
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '@/lib/firebase';
import { navItems } from "@/lib/data";
import RegisterForm from "@/components/ui/register-form";

const Register = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  // Handle registration with email/password
  const handleRegister = async (email: string, password: string) => {
    try {
      await registerUser(email, password);
      toast({
        title: "Registration Successful",
        description: "Your account has been created.",
      });
      navigate('/dashboard');
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Failed to register. Please try again.",
      });
      throw error; // Re-throw to allow form to handle error state
    }
  };

  // Handle Google sign-in
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      toast({
        title: "Registration Successful",
        description: `Welcome, ${result.user.displayName}!`,
      });
      navigate('/dashboard');
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Failed to sign in with Google.",
      });
    }
  };

  return (
    <>
      <Navbar items={navItems} />
      <RegisterForm 
        onRegister={handleRegister}
        onGoogleSignIn={handleGoogleSignIn}
      />
    </>
  );
};

export default Register;