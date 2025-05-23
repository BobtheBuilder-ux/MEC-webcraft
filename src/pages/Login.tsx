import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
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
  signInWithCredential,
  onAuthStateChanged
} from 'firebase/auth';
import { auth, provider } from '@/lib/firebase';
import { navItems } from "@/lib/data";
import AuthForm from "@/components/ui/auth-form";

const Login = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Get return url from location state or default to dashboard
        const returnUrl = location.state?.from?.pathname || '/dashboard';
        navigate(returnUrl);
      }
    });

    return () => unsubscribe();
  }, [navigate, location]);
  
  // Check if URL has email sign-in link when component mounts
  useEffect(() => {
    if (isSignInWithEmailLink(auth, window.location.href)) {
      handleEmailLinkCompleteSignIn();
    }
  }, []);

  const handleFormSubmit = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Navigation will be handled by the auth state change listener
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Failed to login. Please try again.",
      });
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
      // Navigation will be handled by the auth state change listener
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Failed to sign in with Google.",
      });
    }
  };

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

  const handleEmailLinkCompleteSignIn = async () => {
    let email = window.localStorage.getItem('emailForSignIn');
    if (!email) {
      email = window.prompt('Please provide your email for confirmation');
    }
    
    if (!email) return;
    
    try {
      await signInWithEmailLink(auth, email, window.location.href);
      window.localStorage.removeItem('emailForSignIn');
      // Navigation will be handled by the auth state change listener
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Failed to sign in with email link.",
      });
    }
  };

  const handlePhoneSignIn = async () => {
    const phoneNumber = window.prompt('Enter your phone number (with country code):');
    if (!phoneNumber) return;
    
    try {
      const recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        size: 'invisible',
      });
      
      const provider = new PhoneAuthProvider(auth);
      const verificationId = await provider.verifyPhoneNumber(phoneNumber, recaptchaVerifier);
      
      const verificationCode = window.prompt('Enter the verification code sent to your phone:');
      if (!verificationCode) return;
      
      const credential = PhoneAuthProvider.credential(verificationId, verificationCode);
      await signInWithCredential(auth, credential);
      // Navigation will be handled by the auth state change listener
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
      <Navbar items={navItems} onNavClick={() => {}} />
      <div id="recaptcha-container"></div>
      
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
