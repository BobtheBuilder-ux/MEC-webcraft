import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { navItems } from "@/lib/data";
import { NotFoundPage } from "@/components/ui/not-found-page";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar items={navItems} />
      <NotFoundPage />
    </div>
  );
};

export default NotFound;
