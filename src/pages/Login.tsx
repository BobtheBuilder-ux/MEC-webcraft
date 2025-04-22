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
import { useNavigate, Link } from 'react-router-dom';
import { Navbar } from "@/components/Navbar";
import { navItems } from "@/lib/data";
import { User, Lock, Mail } from "lucide-react";

const API_BASE_URL = "http://localhost:5000"; // Match backend URL

// Form values type
interface LoginFormValues {
  username: string;
  password: string;
}

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  const form = useForm<LoginFormValues>();

  const onSubmit = async (data: LoginFormValues) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        mode: 'cors',
        credentials: 'include'
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message || `HTTP error! status: ${response.status}`);
      }

      // Assuming the backend sends back { accessToken: "..." }
      if (responseData.accessToken) {
        localStorage.setItem('authToken', responseData.accessToken);
        toast({
          title: "Login Successful",
          description: "Welcome back!",
        });
        navigate('/dashboard'); // Redirect to dashboard after successful login
      } else {
        throw new Error('Login failed: No access token received');
      }

    } catch (err: any) {
      console.error("Login failed:", err);
      localStorage.removeItem('authToken'); // Clear token on failed login
      toast({
        variant: "destructive",
        title: "Login Failed",
        description: err.message || "Invalid credentials or server error.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar items={navItems} />

      <main className="container mx-auto px-4 py-20">
        <div className="max-w-md mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-xl">
            <h1 className="text-3xl font-display font-bold mb-6 text-center">
              Login
            </h1>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="username"
                  rules={{ required: 'Username is required' }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input placeholder="admin" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  rules={{ required: 'Password is required' }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="********" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isLoading} className="w-full bg-[#FFD700] hover:bg-[#e6c300] text-black">
                  {isLoading ? "Logging In..." : "Login"}
                </Button>
              </form>
            </Form>
            
            <div className="mt-6 text-center">
              <Link
                to="/register"
                className="text-sm text-gray-600 hover:text-[#FFD700] transition-colors"
              >
                Don't have an account? Register
              </Link>
            </div>
            
            <div className="mt-8 text-center">
              <Link
                to="/"
                className="text-sm text-gray-600 hover:text-[#FFD700] transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
