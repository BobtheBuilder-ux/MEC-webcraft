import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

interface NavBarProps {
  items: NavItem[];
  className?: string;
  onNavClick: (sectionId: string) => void;
}

export function Navbar({ items, className, onNavClick }: NavBarProps) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [showTopNav, setShowTopNav] = useState(true);
  const [activeTabName, setActiveTabName] = useState(items[0].name);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Update navigation visibility
      if (isMobile) {
        if (currentScrollY > lastScrollY) {
          setShowTopNav(false); // Hide when scrolling down
        } else {
          setShowTopNav(true); // Show when scrolling up
        }
      } else {
        setShowTopNav(true);
      }
      setLastScrollY(currentScrollY);

      // Update active section based on scroll position
      const sections = items.map(item => ({
        id: item.url.replace('/', ''),
        name: item.name
      }));

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveTabName(section.name);
            break;
          }
        }
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile, items, lastScrollY]);

  const navContent = (
    <div className="flex items-center gap-3 border border-black/10 py-1 px-1 rounded-full shadow-lg bg-white backdrop-blur-lg">
      {items.map((item) => {
        const Icon = item.icon;
        const isActive = activeTabName === item.name;
        const sectionId = item.url.replace('/', '');

        return (
          <button
            key={item.name}
            onClick={() => onNavClick(sectionId)}
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
          </button>
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
