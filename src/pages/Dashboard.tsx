import React, { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { navItems } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { onAuthStateChange } from "@/lib/firebaseUtils";

// Lazy load dashboard components
const DashboardTabs = lazy(() =>
  import("@/components/dashboard/DashboardTabs").then(module => ({ default: module.DashboardTabs }))
);

const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-[200px]">
    <div className="animate-spin w-8 h-8 border-4 border-[#FFD700] border-t-transparent rounded-full"></div>
  </div>
);

const Dashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogout = async () => {
    try {
      // This will be replaced with Firebase auth signOut
      onAuthStateChange(null);
      toast({ title: "Logged Out", description: "You have been successfully logged out." });
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error);
      toast({ 
        variant: "destructive", 
        title: "Error", 
        description: "Failed to log out. Please try again." 
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar items={navItems} />
      
      <main className="container mx-auto px-4 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl md:text-4xl font-display font-bold">Dashboard</h1>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={handleLogout}
              className="text-gray-500 hover:text-[#FFD700]"
            >
              Logout
            </Button>
          </div>
          <Suspense fallback={<LoadingSpinner />}>
            <DashboardTabs />
          </Suspense>
        </motion.div>
      </main>
    </div>
  );
};

export default Dashboard;
