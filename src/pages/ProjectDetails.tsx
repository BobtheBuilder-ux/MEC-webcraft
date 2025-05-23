import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Clock, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { navItems } from "@/lib/data";
import { getProject, getAllProjects, onAuthStateChange } from "@/lib/firebaseUtils";
import { ImageLightbox } from "@/components/ImageLightbox";

// Update Project type for Firebase
interface Project {
  id: string;
  title: string;
  description: string;
  images: string[];
  tags: string[];
  category: string;
  githubUrl?: string;
  liveDemo?: string;
  tools?: string[];
  phoneScreenshots?: string[];
  desktopScreenshots?: string[];
  createdAt?: Date;
}

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [relatedProjects, setRelatedProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeLightboxImages, setActiveLightboxImages] = useState<string[]>([]);
  const [lightboxInitialIndex, setLightboxInitialIndex] = useState(0);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChange((user) => {
      setIsAdmin(!!user);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!id) {
      navigate("/");
      return;
    }
    
    const fetchProject = async () => {
      setIsLoading(true);
      setError(null);
      try {
        // Fetch project from Firebase
        const projectData = await getProject(id);
        setProject(projectData);
        
        // Fetch related projects (same category)
        const allProjects = await getAllProjects();
        const filtered = allProjects
          .filter(p => p.id !== id && p.category === projectData.category)
          .slice(0, 3); // Limit to 3 related projects
        
        setRelatedProjects(filtered);
      } catch (err: any) {
        console.error("Failed to fetch project:", err);
        setError(err.message || "Failed to load project details");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProject();
  }, [id, navigate]);

  const openLightbox = (images: string[], initialIndex: number) => {
    setActiveLightboxImages(images);
    setLightboxInitialIndex(initialIndex);
    setLightboxOpen(true);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar items={navItems} onNavClick={() => {}} />
        <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
          <div className="animate-spin w-8 h-8 border-4 border-[#FFD700] border-t-transparent rounded-full"></div>
        </div>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar items={navItems} onNavClick={function (sectionId: string): void {
          throw new Error("Function not implemented.");
        } } />
        <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
            <p className="text-gray-600 mb-6">{error || "The requested project could not be found."}</p>
            <Button 
              variant="outline" 
              onClick={() => navigate("/")}
              className="bg-[#FFD700] hover:bg-[#e6c300] text-black"
            >
              Return to Home
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar items={navItems} onNavClick={() => {}} />
      
      <main className="pt-20 pb-16">
        {/* Hero Section */}
        <section className="relative h-[60vh]">
          <div className="absolute inset-0">
            <img 
              src={project.images[activeImageIndex]} 
              alt={project.title} 
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => openLightbox(project.images, activeImageIndex)}
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative h-full container mx-auto px-4 flex flex-col justify-end pb-10"
          >
            <div className="flex justify-between items-start mb-6">
              <Button 
                variant="outline" 
                className="w-fit bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white"
                onClick={() => navigate(-1)}
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Back
              </Button>

              {isAdmin && (
                <Button
                  variant="outline"
                  className="w-fit bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white"
                  onClick={() => navigate(`/edit-project/${project.id}`)}
                >
                  <Pencil className="mr-2 h-4 w-4" /> Edit Project
                </Button>
              )}
            </div>
            
            <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
              {project.title}
            </h1>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag: string, i: number) => (
                <span 
                  key={i} 
                  className="px-3 py-1 bg-[#FFD700] text-black text-sm rounded-full font-medium"
                >
                  {tag}
                </span>
              ))}
              <span 
                className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full font-medium"
              >
                {project.category}
              </span>
            </div>
            
            {project.createdAt && (
              <div className="flex items-center text-white/80 text-sm">
                <Clock className="mr-2 h-4 w-4" />
                {new Date(project.createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
            )}
          </motion.div>
        </section>

        {/* Content */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="prose prose-lg max-w-none"
            >
              {project.images.length > 1 && (
                <div className="grid grid-cols-4 gap-4 mb-8">
                  {project.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setActiveImageIndex(index);
                        openLightbox(project.images, index);
                      }}
                      className={`relative rounded-lg overflow-hidden cursor-pointer ${
                        index === activeImageIndex ? 'ring-2 ring-[#FFD700]' : ''
                      }`}
                    >
                      <img 
                        src={image} 
                        alt={`${project.title} view ${index + 1}`}
                        className="w-full h-24 object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}

              <h2 className="text-2xl font-display font-bold mb-6">Project Overview</h2>
              <p className="text-gray-700 mb-8 whitespace-pre-line">
                {project.description}
              </p>
              
              <div className="flex flex-col md:flex-row gap-8 mb-12">
                <div className="md:w-1/2">
                  <h3 className="text-xl font-bold mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag: string, i: number) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {project.tools && project.tools.length > 0 && (
                    <div className="mt-6">
                      <h4 className="text-lg font-semibold mb-2">Tools</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tools.map((tool: string, i: number) => (
                          <span 
                            key={i} 
                            className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="md:w-1/2">
                  <h3 className="text-xl font-bold mb-4">Project Links</h3>
                  <div className="flex gap-4">
                    {project.liveDemo ? (
                      <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                        <Button className="bg-[#FFD700] hover:bg-[#e6c300] text-black">
                          <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                        </Button>
                      </a>
                    ) : (
                      <Button className="bg-[#FFD700] hover:bg-[#e6c300] text-black" disabled>
                        <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                      </Button>
                    )}
                    {project.githubUrl ? (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline">
                          <Github className="mr-2 h-4 w-4" /> Source Code
                        </Button>
                      </a>
                    ) : (
                      <Button variant="outline" disabled>
                        <Github className="mr-2 h-4 w-4" /> Source Code
                      </Button>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Project Screenshots */}
              <h2 className="text-2xl font-display font-bold mb-6">Project Screenshots</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {project.phoneScreenshots && project.phoneScreenshots.length > 0 && (
                  <div>
                    <h4 className="text-lg font-medium mb-2">Mobile Views</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {project.phoneScreenshots.map((screenshot, index) => (
                        <img 
                          key={index}
                          src={screenshot} 
                          alt={`${project.title} - Mobile View ${index + 1}`}
                          className="rounded-lg shadow-lg w-full h-auto object-cover cursor-pointer"
                          onClick={() => openLightbox(project.phoneScreenshots!, index)}
                        />
                      ))}
                    </div>
                  </div>
                )}
                
                {project.desktopScreenshots && project.desktopScreenshots.length > 0 && (
                  <div>
                    <h4 className="text-lg font-medium mb-2">Desktop Views</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {project.desktopScreenshots.map((screenshot, index) => (
                        <img 
                          key={index}
                          src={screenshot} 
                          alt={`${project.title} - Desktop View ${index + 1}`}
                          className="rounded-lg shadow-lg w-full h-auto object-cover cursor-pointer"
                          onClick={() => openLightbox(project.desktopScreenshots!, index)}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              {/* Related Projects */}
              {relatedProjects.length > 0 && (
                <div>
                  <h2 className="text-2xl font-display font-bold mb-6">Related Projects</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {relatedProjects.map((relatedProject) => (
                      <Link 
                        to={`/projects/${relatedProject.id}`} 
                        key={relatedProject.id}
                        className="group"
                      >
                        <div className="rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl bg-white">
                          <div className="h-48 overflow-hidden">
                            <img 
                              src={relatedProject.images[0]} 
                              alt={relatedProject.title} 
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>
                          
                          <div className="p-4">
                            <h3 className="font-bold text-lg mb-2 text-gray-800 group-hover:text-[#FFD700] transition-colors">
                              {relatedProject.title}
                            </h3>
                            <div className="flex flex-wrap gap-1 mb-2">
                              {relatedProject.tags.slice(0, 3).map((tag, i) => (
                                <span 
                                  key={i} 
                                  className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                                >
                                  {tag}
                                </span>
                              ))}
                              {relatedProject.tags.length > 3 && (
                                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                                  +{relatedProject.tags.length - 3} more
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </section>
      </main>

      <ImageLightbox
        images={activeLightboxImages}
        initialIndex={lightboxInitialIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </div>
  );
};

export default ProjectDetails;
