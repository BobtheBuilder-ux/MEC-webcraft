import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

// Update Project type for Firebase
interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  githubUrl?: string;
  tools?: string[];
  phoneScreenshot?: string;
  desktopScreenshot?: string;
}

interface PortfolioProps {
  projects: Project[];
  showViewAll?: boolean;
}

export function Portfolio({ projects, showViewAll = false }: PortfolioProps) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // Get unique categories from projects
  const categories = ["All", ...new Set(projects.map(project => project.category))];
  
  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // Update carousel when window resizes
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    if (!isMobile) return;
    const maxSlides = filteredProjects.length - 1;
    setCurrentSlide(prev => (prev >= maxSlides ? 0 : prev + 1));
  };

  const prevSlide = () => {
    if (!isMobile) return;
    const maxSlides = filteredProjects.length - 1;
    setCurrentSlide(prev => (prev <= 0 ? maxSlides : prev - 1));
  };

  // Update carousel position when current slide changes
  useEffect(() => {
    if (carouselRef.current && isMobile) {
      const slideWidth = carouselRef.current.offsetWidth;
      carouselRef.current.scrollTo({
        left: currentSlide * slideWidth,
        behavior: 'smooth'
      });
    }
  }, [currentSlide, isMobile]);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-10"
        >
          <p className="text-gray-600">
          Explore my latest work and creative solutions across different platforms and technologies.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === category
                  ? "bg-[#FFD700] text-black"
                  : "bg-white border border-gray-200 hover:border-[#FFD700]"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
        
        {/* Mobile/Tablet Carousel View */}
        {isMobile && (
          <div className="relative">
            <div 
              ref={carouselRef}
              className="overflow-x-auto flex snap-x snap-mandatory scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {filteredProjects.map((project, index) => (
                <div 
                  key={project.id} 
                  className="min-w-full snap-center px-4"
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
            
            {/* Carousel Controls */}
            {filteredProjects.length > 1 && (
              <div className="flex justify-between mt-6">
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={prevSlide}
                  className="rounded-full"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <div className="flex space-x-2">
                  {filteredProjects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full ${
                        currentSlide === index ? "bg-[#FFD700]" : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={nextSlide}
                  className="rounded-full"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        )}
        
        {/* Desktop Grid View */}
        {!isMobile && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}
          </div>
        )}

        {/* "View All Projects" button */}
        {showViewAll && (
          <div className="mt-10 text-center">
            <Link to="/projects">
              <Button variant="outline" className="px-6 py-2 border-[#FFD700] text-gray-800 hover:bg-[#FFD700] hover:text-black">
                View All Projects
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
