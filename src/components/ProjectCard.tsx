import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Pencil, Trash2 } from "lucide-react";
import { Link } from 'react-router-dom';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  githubUrl?: string;
}

interface ProjectCardProps {
  project: Project;
  onDelete?: (id: string) => void;
  isAdmin?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onDelete, isAdmin = false }) => {
  // If in admin mode, don't make the card clickable
  const CardWrapper = isAdmin ? React.Fragment : (props: any) => (
    <Link to={`/project/${project.id}`} className="block h-full" {...props} />
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <CardWrapper>
        <Card className="overflow-hidden group h-full hover:shadow-lg transition-shadow duration-300">
          <div className="relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            />
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
            <p className="text-sm text-gray-600 mb-4">{project.description}</p>
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
