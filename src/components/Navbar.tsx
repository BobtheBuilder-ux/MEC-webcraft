import React, { useState } from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

interface NavBarProps {
  items: NavItem[];
  className?: string;
}

export function Navbar({ items, className }: NavBarProps) {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [showTopNav, setShowTopNav] = useState(true);
  
  // Determine active tab based on current path
  const currentPath = location.pathname;
  const activeTabName = items.find(item => 
    currentPath === item.url || 
    (item.url !== '/' && currentPath.startsWith(item.url))
  )?.name || items[0].name;
  
  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      if (isMobile) {
        const currentScrollY = window.scrollY;
        if (currentScrollY > 50) {
          setShowTopNav(false);
        } else {
          setShowTopNav(true);
        }
      } else {
        setShowTopNav(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile]);

  const navContent = (
    <div className="flex items-center gap-3 border border-black/10 py-1 px-1 rounded-full shadow-lg bg-white backdrop-blur-lg">
      {items.map((item) => {
        const Icon = item.icon;
        const isActive = activeTabName === item.name;

        return (
          <Link
            key={item.name}
            to={item.url}
            className={cn(
              "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
              "text-black hover:text-[#FFD700]",
              isActive && "bg-black/5 text-[#FFD700]",
            )}
          >
            <span className="md:hidden">
              <Icon size={18} strokeWidth={2.5} />
            </span>
            <span className="hidden md:inline">{item.name}</span>
            {isActive && (
              <motion.div
                layoutId="lamp"
                className="absolute inset-0 w-full bg-[#FFD700]/5 rounded-full -z-10"
                initial={false}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
              >
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-[#FFD700] rounded-t-full">
                  <div className="absolute w-12 h-6 bg-[#FFD700]/20 rounded-full blur-md -top-2 -left-2" />
                  <div className="absolute w-8 h-6 bg-[#FFD700]/20 rounded-full blur-md -top-1" />
                  <div className="absolute w-4 h-4 bg-[#FFD700]/20 rounded-full blur-sm top-0 left-2" />
                </div>
              </motion.div>
            )}
          </Link>
        );
      })}
    </div>
  );

  return (
    <>
      <div
        className={cn(
          "fixed top-0 left-1/2 -translate-x-1/2 z-50 mt-6 md:hidden transition-transform duration-300 ease-in-out",
          showTopNav ? "translate-y-0" : "-translate-y-[200%]",
          className,
        )}
      >
        {navContent}
      </div>

      <div
        className={cn(
          "fixed bottom-0 left-1/2 -translate-x-1/2 z-50 mb-6 md:hidden transition-transform duration-300 ease-in-out",
          !showTopNav ? "translate-y-0" : "translate-y-[200%]",
          className,
        )}
      >
        {navContent}
      </div>

      <div
        className={cn(
          "fixed top-0 left-1/2 -translate-x-1/2 z-50 mt-6 hidden md:block",
          className,
        )}
      >
        {navContent}
      </div>
    </>
  );
}
