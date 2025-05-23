import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { navItems } from "@/lib/data";
import { NotFoundPage } from "@/components/ui/not-found-page";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const handleNavClick = (sectionId: string) => {
    if (sectionId.startsWith('/')) {
      navigate(sectionId);
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar items={navItems} onNavClick={handleNavClick} />
      <NotFoundPage />
    </div>
  );
};

export default NotFound;
