"use client"

import * as React from "react"
import { ChevronLeft, Mail, User, Lock } from "lucide-react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { useNavigate } from "react-router-dom"

interface RegisterFormProps {
  onRegister?: (email: string, password: string) => Promise<void>;
  onGoogleSignIn?: () => Promise<void>;
}

const RegisterForm: React.FC<RegisterFormProps> = ({
  onRegister,
  onGoogleSignIn
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
        <SocialButtons onGoogleSignIn={onGoogleSignIn} />
        <Divider />
        <RegisterFormFields onSubmit={onRegister} />
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
    <h1 className="text-2xl font-semibold">Create an account</h1>
    <p className="mt-2 text-zinc-500">
      Already have an account?{" "}
      <a href="/login" className="text-[#FFD700] hover:underline">
        Sign in
      </a>
    </p>
  </div>
)

interface SocialButtonsProps {
  onGoogleSignIn?: () => Promise<void>;
}

const SocialButtons: React.FC<SocialButtonsProps> = ({ onGoogleSignIn }) => (
  <div className="mb-6 space-y-3">
    <SocialButton 
      fullWidth
      icon={<Mail size={20} />}
      onClick={onGoogleSignIn}
    >
      Sign up with Google
    </SocialButton>
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
    ${fullWidth ? "w-full" : ""}`}
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

interface RegisterFormFieldsProps {
  onSubmit?: (email: string, password: string) => Promise<void>;
}

const RegisterFormFields: React.FC<RegisterFormFieldsProps> = ({ onSubmit }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    if (!onSubmit) return;
    
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    
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
        <div className="relative">
          <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
            <Mail size={16} />
          </span>
          <input
            id="email-input"
            type="email"
            placeholder="your.email@provider.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-md border border-zinc-300 
            bg-white pl-10 px-3 py-2 text-zinc-800
            placeholder-zinc-400
            ring-1 ring-transparent transition-shadow focus:outline-0 focus:ring-[#FFD700]"
            required
          />
        </div>
      </div>
      <div className="mb-3">
        <label
          htmlFor="password-input"
          className="block text-zinc-500 mb-1.5"
        >
          Password
        </label>
        <div className="relative">
          <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
            <Lock size={16} />
          </span>
          <input
            id="password-input"
            type="password"
            placeholder="Create a strong password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-md border border-zinc-300
            bg-white pl-10 px-3 py-2 text-zinc-800
            placeholder-zinc-400
            ring-1 ring-transparent transition-shadow focus:outline-0 focus:ring-[#FFD700]"
            required
          />
        </div>
      </div>
      <div className="mb-6">
        <label
          htmlFor="confirm-password-input"
          className="block text-zinc-500 mb-1.5"
        >
          Confirm Password
        </label>
        <div className="relative">
          <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
            <Lock size={16} />
          </span>
          <input
            id="confirm-password-input"
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full rounded-md border border-zinc-300
            bg-white pl-10 px-3 py-2 text-zinc-800
            placeholder-zinc-400
            ring-1 ring-transparent transition-shadow focus:outline-0 focus:ring-[#FFD700]"
            required
          />
        </div>
      </div>
      
      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 rounded-md text-sm">
          {error}
        </div>
      )}
      
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Creating account..." : "Create account"}
      </Button>
    </form>
  )
}

const TermsAndConditions: React.FC = () => (
  <p className="mt-9 text-xs text-zinc-500">
    By creating an account, you agree to our{" "}
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

export default RegisterForm 