import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Pencil, Trash2 } from "lucide-react";
import { Link } from 'react-router-dom';

// Truncate text to a maximum of 100 words
const truncateDescription = (text: string): string => {
  const words = text.trim().split(/\s+/);
  if (words.length <= 50) return text;
  return words.slice(0, 50).join(' ') + '...';
};

interface Project {
  id: string;
  title: string;
  description: string;
  images: string[];  // Changed from image to images array
  tags: string[];
  category: string;
  githubUrl?: string;
  tools?: string[];
}

interface ProjectCardProps {
  project: Project;
  onDelete?: (id: string) => void;
  isAdmin?: boolean;
}

const CardWrapper = ({ children, project }: { children: React.ReactNode; project: Project }) => {
  if (!project.id) {
    return <>{children}</>;
  }
  return (
    <Link to={`/project/${project.id}`} className="block">
      {children}
    </Link>
  );
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onDelete, isAdmin = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <CardWrapper project={project}>
        <Card className="overflow-hidden group h-full hover:shadow-lg transition-shadow duration-300">
          <div className="relative">
            <img
              src={project.images[0]} // Use first image from array
              alt={project.title}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {project.images.length > 1 && (
              <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
                +{project.images.length - 1} more
              </div>
            )}
            {isAdmin && (
              <div className="absolute top-2 right-2 flex gap-2">
                <Link to={`/edit-project/${project.id}`} onClick={(e) => e.stopPropagation()}>
                  <Button variant="secondary" size="icon" className="w-8 h-8">
                    <Pencil className="h-4 w-4" />
                  </Button>
                </Link>
                <Button 
                  variant="destructive" 
                  size="icon" 
                  className="w-8 h-8"
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    onDelete?.(project.id);
                  }}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{truncateDescription(project.description)}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <Badge key={index} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
            {!isAdmin && (
              <div className="mt-4">
                <Button variant="outline" className="w-full">
                  View Details
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </CardWrapper>
    </motion.div>
  );
};
