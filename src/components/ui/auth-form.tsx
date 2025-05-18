"use client"

import * as React from "react"
import { ChevronLeft, Mail, Phone, SendIcon } from "lucide-react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { useNavigate } from "react-router-dom"

interface AuthFormProps {
  onEmailPasswordSignIn?: (email: string, password: string) => Promise<void>;
  onGoogleSignIn?: () => Promise<void>;
  onEmailLinkSignIn?: (email: string) => Promise<void>;
  onPhoneSignIn?: () => Promise<void>;
}

const AuthForm: React.FC<AuthFormProps> = ({
  onEmailPasswordSignIn,
  onGoogleSignIn,
  onEmailLinkSignIn,
  onPhoneSignIn
}) => {
  return (
    <div className="bg-gray-50 py-20 text-zinc-800 selection:bg-zinc-300">
      <BackButton />
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.25, ease: "easeInOut" }}
        className="relative z-10 mx-auto w-full max-w-xl p-4"
      >
        <Header />
        <SocialButtons 
          onGoogleSignIn={onGoogleSignIn}
          onEmailLinkSignIn={onEmailLinkSignIn}
          onPhoneSignIn={onPhoneSignIn}
        />
        <Divider />
        <LoginForm onSubmit={onEmailPasswordSignIn} />
        <TermsAndConditions />
      </motion.div>
      <BackgroundDecoration />
    </div>
  )
}

const BackButton: React.FC = () => {
  const navigate = useNavigate();
  return (
    <SocialButton icon={<ChevronLeft size={16} />} onClick={() => navigate(-1)}>
      Go back
    </SocialButton>
  );
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
}

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => (
  <button
    className={`rounded-md bg-gradient-to-br from-[#FFD700] to-[#e6c300] px-4 py-2 text-lg text-black 
    ring-2 ring-[#FFD700]/50 ring-offset-2 ring-offset-white 
    transition-all hover:scale-[1.02] hover:ring-transparent active:scale-[0.98] active:ring-[#FFD700]/70 ${className}`}
    {...props}
  >
    {children}
  </button>
)

const Header: React.FC = () => (
  <div className="mb-6 text-center">
    <h1 className="text-2xl font-semibold">Sign in to your account</h1>
    <p className="mt-2 text-zinc-500">
      Don't have an account?{" "}
      <a href="/register" className="text-[#FFD700] hover:underline">
        Create one.
      </a>
    </p>
  </div>
)

interface SocialButtonsProps {
  onGoogleSignIn?: () => Promise<void>;
  onEmailLinkSignIn?: (email: string) => Promise<void>;
  onPhoneSignIn?: () => Promise<void>;
}

const SocialButtons: React.FC<SocialButtonsProps> = ({ 
  onGoogleSignIn, 
  onEmailLinkSignIn, 
  onPhoneSignIn 
}) => (
  <div className="mb-6 space-y-3">
    <div className="grid grid-cols-2 gap-3">
      <SocialButton 
        icon={<Phone size={20} />} 
        onClick={onPhoneSignIn}
      >
        Phone
      </SocialButton>
      <SocialButton 
        icon={<Mail size={20} />}
        onClick={onGoogleSignIn}
      >
        Gmail
      </SocialButton>
      <SocialButton 
        fullWidth 
        icon={<SendIcon size={20} />}
        onClick={() => {
          if (onEmailLinkSignIn) {
            const email = window.prompt('Enter your email to receive a sign-in link:');
            if (email) onEmailLinkSignIn(email);
          }
        }}
      >
        Sign in with email link
      </SocialButton>
    </div>
  </div>
)

const SocialButton: React.FC<{
  icon?: React.ReactNode
  fullWidth?: boolean
  children?: React.ReactNode
  onClick?: () => void
}> = ({ icon, fullWidth, children, onClick }) => (
  <button
    onClick={onClick}
    className={`relative z-0 flex items-center justify-center gap-2 overflow-hidden rounded-md 
    border border-zinc-300 bg-zinc-100 
    px-4 py-2 font-semibold text-zinc-800 transition-all duration-500
    before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5]
    before:rounded-[100%] before:bg-[#FFD700] before:transition-transform before:duration-1000 before:content-[""]
    hover:scale-105 hover:text-black hover:before:translate-x-[0%] hover:before:translate-y-[0%] active:scale-95
    ${fullWidth ? "col-span-2" : ""}`}
  >
    {icon}
    <span>{children}</span>
  </button>
)

const Divider: React.FC = () => (
  <div className="my-6 flex items-center gap-3">
    <div className="h-[1px] w-full bg-zinc-300" />
    <span className="text-zinc-500">OR</span>
    <div className="h-[1px] w-full bg-zinc-300" />
  </div>
)

interface LoginFormProps {
  onSubmit?: (email: string, password: string) => Promise<void>;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!onSubmit) return;
    
    try {
      setIsSubmitting(true);
      await onSubmit(email, password);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label
          htmlFor="email-input"
          className="mb-1.5 block text-zinc-500"
        >
          Email
        </label>
        <input
          id="email-input"
          type="email"
          placeholder="your.email@provider.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-md border border-zinc-300 
          bg-white px-3 py-2 text-zinc-800
          placeholder-zinc-400
          ring-1 ring-transparent transition-shadow focus:outline-0 focus:ring-[#FFD700]"
          required
        />
      </div>
      <div className="mb-6">
        <div className="mb-1.5 flex items-end justify-between">
          <label
            htmlFor="password-input"
            className="block text-zinc-500"
          >
            Password
          </label>
          <a href="/reset-password" className="text-sm text-[#FFD700]">
            Forgot?
          </a>
        </div>
        <input
          id="password-input"
          type="password"
          placeholder="••••••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-md border border-zinc-300
          bg-white px-3 py-2 text-zinc-800
          placeholder-zinc-400
          ring-1 ring-transparent transition-shadow focus:outline-0 focus:ring-[#FFD700]"
          required
        />
      </div>
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Signing in..." : "Sign in"}
      </Button>
    </form>
  )
}

const TermsAndConditions: React.FC = () => (
  <p className="mt-9 text-xs text-zinc-500">
    By signing in, you agree to our{" "}
    <a href="#" className="text-[#FFD700]">
      Terms & Conditions
    </a>{" "}
    and{" "}
    <a href="#" className="text-[#FFD700]">
      Privacy Policy.
    </a>
  </p>
)

const BackgroundDecoration: React.FC = () => {
  const { theme } = useTheme()
  const isDarkTheme = theme === "dark"

  return (
    <div
      className="absolute right-0 top-0 z-0 size-[50vw]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke-width='2' stroke='rgb(255 215 0 / 0.5)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 
            "radial-gradient(100% 100% at 100% 0%, rgba(255,255,255,0), rgba(255,255,255,1))"
        }}
      />
    </div>
  )
}

export default AuthForm 