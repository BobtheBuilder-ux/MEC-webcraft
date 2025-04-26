import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from "@/components/Navbar";
import { useToast } from "@/hooks/use-toast";
import { 
  GoogleAuthProvider, 
  signInWithPopup, 
  sendSignInLinkToEmail, 
  isSignInWithEmailLink, 
  signInWithEmailLink, 
  signInWithEmailAndPassword, 
  PhoneAuthProvider, 
  RecaptchaVerifier,
  signInWithCredential
} from 'firebase/auth';
import { auth, provider } from '@/lib/firebase';
import { navItems } from "@/lib/data";
import AuthForm from "@/components/ui/auth-form";

const Login = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  
  // Check if URL has email sign-in link when component mounts
  useEffect(() => {
    if (isSignInWithEmailLink(auth, window.location.href)) {
      handleEmailLinkCompleteSignIn();
    }
  }, []);

  // Email and password sign-in
  const handleFormSubmit = async (email: string, password: string) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      toast({
        title: "Login Successful",
        description: `Welcome back, ${result.user.email}!`,
      });
      navigate('/dashboard');
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Failed to login. Please try again.",
      });
    }
  };

  // Google sign-in
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      toast({
        title: "Login Successful",
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

  // Email link sign-in
  const handleEmailLinkSignIn = async (email: string) => {
    if (!email) return;
    
    const actionCodeSettings = {
      url: window.location.href,
      handleCodeInApp: true,
    };
    
    try {
      await sendSignInLinkToEmail(auth, email, actionCodeSettings);
      window.localStorage.setItem('emailForSignIn', email);
      toast({
        title: "Email Sent",
        description: "Check your email for the sign-in link.",
      });
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Failed to send sign-in link.",
      });
    }
  };

  // Complete email link sign-in
  const handleEmailLinkCompleteSignIn = async () => {
    let email = window.localStorage.getItem('emailForSignIn');
    if (!email) {
      email = window.prompt('Please provide your email for confirmation');
    }
    
    if (!email) return;
    
    try {
      const result = await signInWithEmailLink(auth, email, window.location.href);
      window.localStorage.removeItem('emailForSignIn');
      toast({
        title: "Login Successful",
        description: `Welcome, ${result.user.email}!`,
      });
      navigate('/dashboard');
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Failed to sign in with email link.",
      });
    }
  };

  // Phone authentication
  const handlePhoneSignIn = async () => {
    const phoneNumber = window.prompt('Enter your phone number (with country code):');
    if (!phoneNumber) return;
    
    try {
      // Setup reCAPTCHA
      const recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        size: 'invisible',
      });
      
      const provider = new PhoneAuthProvider(auth);
      const verificationId = await provider.verifyPhoneNumber(phoneNumber, recaptchaVerifier);
      
      // Store verification ID and show verification code input
      const verificationCode = window.prompt('Enter the verification code sent to your phone:');
      if (!verificationCode) return;
      
      // Use verification code to sign in
      const credential = PhoneAuthProvider.credential(verificationId, verificationCode);
      const result = await signInWithCredential(auth, credential);
      
      toast({
        title: "Login Successful",
        description: `Welcome!`,
      });
      navigate('/dashboard');
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Failed to sign in with phone number.",
      });
    }
  };

  return (
    <>
      <Navbar items={navItems} />
      <div id="recaptcha-container"></div>
      
      {/* Pass the authentication handlers to AuthForm */}
      <AuthForm 
        onEmailPasswordSignIn={handleFormSubmit}
        onGoogleSignIn={handleGoogleSignIn}
        onEmailLinkSignIn={handleEmailLinkSignIn}
        onPhoneSignIn={handlePhoneSignIn}
      />
    </>
  );
};

export default Login;
