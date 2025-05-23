import * as React from "react";
import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import LandingHero from "@/components/LandingHero";
import { Portfolio } from "@/components/Portfolio";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { navItems, skills } from "@/lib/data";
import * as LucideIcons from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { getAllProjects } from "@/lib/firebaseUtils";
import { onAuthStateChange } from "@/lib/firebaseUtils";

const { CheckCircle2, Github, Linkedin, Twitter, Instagram, Mail } = LucideIcons;

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

const About: React.FC = () => (
  <section id="about" className="py-16 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="order-2 md:order-1"
        >
          <h3 className="text-2xl font-bold mb-4">Web Designer & Full-Stack Developer with 5+ Years of Experience</h3>
          
          <div className="space-y-6 text-black/80">
            <p>
              My name is Miracle Ezechukwu Chimaroke (MEC), I am a passionate and technically proficient web designer and full-stack developer, specializing in building sophisticated, scalable, and high-performance websites and web applications that drive business success. My core expertise spans WordPress development—including custom themes and plugins—as well as modern JavaScript frameworks such as React for building dynamic, responsive user interfaces.
            </p>
            
            <p>
              On the backend, I leverage Node.js and Express.js to develop robust, RESTful APIs and server-side applications, ensuring seamless integration and efficient data management. I am also skilled in Python, using it for scripting, automation, and developing backend services that enhance application functionality and performance.
            </p>

            <p>
              My experience extends to Cloud Computing platforms, specifically Google Cloud and AWS, where I architect, deploy, and maintain scalable cloud-based infrastructures that optimize uptime, security, and load balancing. This cloud proficiency enables me to deliver reliable, secure, and globally accessible web solutions.
            </p>

            <p>
              My workflow is grounded in agile methodologies, emphasizing iterative development, continuous integration and deployment (CI/CD), and rigorous testing to ensure code quality and maintainability. I utilize version control systems such as Git and collaborative tools like Jira and Slack to maintain transparent, efficient communication and project tracking with clients and cross-functional teams.
            </p>

            <p>
              Collaboration is central to my process—I prioritize understanding client goals thoroughly and maintaining open, responsive communication throughout the project lifecycle. By integrating user feedback and analytics, I iteratively refine designs and functionalities to ensure the end product not only meets but exceeds expectations.
            </p>
          </div>

          <div className="mb-8 mt-8">
            <h4 className="font-bold mb-3">My Skills</h4>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">{skill}</span>
              ))}
            </div>
          </div>
          
          <div className="flex gap-3">
            <a href="https://github.com/BobtheBuilder-ux" className="p-2 rounded-full text-gray-600 bg-gray-100 hover:bg-[#FFD700] hover:text-black transition-colors duration-200" aria-label="Github">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/miracle-ezechukwu/" className="p-2 rounded-full text-gray-600 bg-gray-100 hover:bg-[#FFD700] hover:text-black transition-colors duration-200" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="https://x.com/mecwebcraft" className="p-2 rounded-full text-gray-600 bg-gray-100 hover:bg-[#FFD700] hover:text-black transition-colors duration-200" aria-label="Twitter">
              <Twitter size={20} />
            </a>
            <a href="https://www.instagram.com/mecwebcraft" className="p-2 rounded-full text-gray-600 bg-gray-100 hover:bg-[#FFD700] hover:text-black transition-colors duration-200" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="mailto:miracle@mecwebcraft.com" className="p-2 rounded-full text-gray-600 bg-gray-100 hover:bg-[#FFD700] hover:text-black transition-colors duration-200" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#FFD700]">
              <img 
                src="./Images/miracle.jpeg" 
                alt="Professional headshot" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4">
              <p className="font-bold">5+ Years Experience</p>
              <p className="text-sm text-black/70">Web Design & Development</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Projects: React.FC<{ projects: Project[] }> = ({ projects }) => (
  <section id="projects" className="py-20">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="container mx-auto px-4"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Projects</h2>
      <Portfolio projects={projects} showViewAll={false} />
    </motion.div>
  </section>
);

const Contact: React.FC = () => (
  <section id="contact" className="py-20 bg-gray-50">
    <div className="container mx-auto px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Get In Touch</h2>
        <p className="text-gray-600">
          Have a question or want to work together? Fill out the form below and we'll get back to you shortly.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-2xl mx-auto"
      >
        <LeadCaptureForm useCard={false} />
      </motion.div>
    </div>
  </section>
);

const Index = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [authUser, setAuthUser] = useState<any>(null);
  const { toast } = useToast();

  useEffect(() => {
    // Listen to auth state changes
    const unsubscribe = onAuthStateChange(user => {
      setAuthUser(user);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    // Fetch projects from Firebase
    const fetchProjects = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const allProjects = await getAllProjects();
        setProjects(allProjects.slice(0, 4));
      } catch (err: any) {
        console.error("Failed to fetch projects:", err);
        setError("Could not load projects. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const targetId = sectionId.replace('#', '');
    if (targetId === '') {
      // Scroll to top for home section
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }
    
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLogout = async () => {
    try {
      setAuthUser(null);
      toast({ title: "Logged Out", description: "You have been successfully logged out." });
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
    <div className="min-h-screen">
      <Navbar items={navItems} onNavClick={scrollToSection} />
      
      <main>
        <LandingHero />
        <About />
        
        {isLoading && <p className="text-center py-10">Loading projects...</p>}
        {error && <p className="text-center py-10 text-red-600">Error loading projects: {error}</p>}
        {!isLoading && !error && <Projects projects={projects} />}
        
        <Contact />
      </main>

      <footer className="bg-gray-50 py-10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">© {new Date().getFullYear()} Portfolio Website. All rights reserved.</p>
          
          <div className="flex justify-center mt-6 space-x-4 sm:space-x-6">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.url.replace('/', ''))}
                className="text-sm sm:text-base text-gray-500 hover:text-[#FFD700] transition-colors"
              >
                {item.name}
              </button>
            ))}
          </div>

          {authUser && (
            <div className="flex justify-center mt-4 space-x-4 sm:space-x-6 items-center">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleLogout}
                className="text-sm sm:text-base text-gray-500 hover:text-[#FFD700]"
              >
                Logout
              </Button>
            </div>
          )}

          <div className="flex justify-center mt-6 space-x-4 sm:space-x-6">
            <a href="#" className="text-gray-500 hover:text-[#FFD700] transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-500 hover:text-[#FFD700] transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-500 hover:text-[#FFD700] transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
