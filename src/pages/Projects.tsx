import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { getAllProjects, Project as FirebaseProject } from "@/lib/firebaseUtils";
import { navItems } from "@/lib/data";
import { Loader2 } from "lucide-react";
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

// Update Project type to match Firebase
type Project = FirebaseProject;

const Projects = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [categories, setCategories] = useState<string[]>(["All"]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleNavClick = (sectionId: string) => {
    if (sectionId.startsWith('/')) {
      navigate(sectionId);
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  // Fetch projects from Firebase
  useEffect(() => {
    const fetchProjects = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const allProjects = await getAllProjects();
        setProjects(allProjects);
        setFilteredProjects(allProjects);
        
        // Extract unique categories
        const uniqueCategories = ["All", ...new Set(allProjects.map(project => project.category))];
        setCategories(uniqueCategories);
      } catch (err: any) {
        console.error("Failed to fetch projects:", err);
        setError("Could not load projects. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Filter projects by category
  useEffect(() => {
    if (activeFilter === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeFilter));
    }
  }, [activeFilter, projects]);

  return (
    <>
      <Helmet>
        <title>Web Development Portfolio & Cloud Projects | MEC-webcraft</title>
        <meta name="description" content="Explore our portfolio of web development, cloud computing, and Python backend projects. Custom solutions built with React, TypeScript, and modern cloud architecture." />
        <meta name="keywords" content="web development portfolio, cloud projects, Python applications, React projects, full-stack development, case studies" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Web Development Portfolio & Cloud Projects | MEC-webcraft" />
        <meta property="og:description" content="Showcase of innovative web applications, cloud solutions, and full-stack development projects." />
        <link rel="canonical" href="https://mecwebcraft.com/projects" />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        <Navbar items={navItems} onNavClick={handleNavClick} />
        
        <main className="container mx-auto px-4 py-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Projects</h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore all my projects showcasing various technologies and creative solutions.
              </p>
            </div>
            
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={activeFilter === category ? "default" : "outline"}
                  className={activeFilter === category ? "bg-[#FFD700] text-black hover:bg-[#e6c300]" : ""}
                  onClick={() => setActiveFilter(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
            
            {/* Loading State */}
            {isLoading && (
              <div className="flex justify-center py-20">
                <Loader2 className="h-8 w-8 animate-spin text-[#FFD700]" />
              </div>
            )}
            
            {/* Error State */}
            {error && (
              <div className="text-center py-12">
                <p className="text-red-500 mb-4">{error}</p>
                <Button onClick={() => window.location.reload()}>Try Again</Button>
              </div>
            )}
            
            {/* Project Grid */}
            {!isLoading && !error && (
              <>
                {filteredProjects.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-gray-500">No projects found in this category.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                      <ProjectCard key={project.id} project={project} />
                    ))}
                  </div>
                )}
              </>
            )}
          </motion.div>
        </main>
      </div>
    </>
  );
};

export default Projects;