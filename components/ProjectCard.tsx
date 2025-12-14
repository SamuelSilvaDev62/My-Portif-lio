import React, { useState } from 'react';
import { Project } from '../types';
import { ExternalLink, Code, Loader2 } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <div className="group relative bg-cyber-dark border border-cyber-gray overflow-hidden hover:border-cyber-cyan transition-all duration-300 rounded-sm">
      {/* Hover Overlay Effect */}
      <div className="absolute inset-0 bg-cyber-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10" />
      
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden bg-cyber-black flex items-center justify-center">
        {/* Loading Spinner */}
        {!isImageLoaded && !imageError && (
          <div className="absolute inset-0 flex items-center justify-center text-cyber-cyan">
             <Loader2 className="w-8 h-8 animate-spin opacity-50" />
          </div>
        )}
        
        {/* Fallback for Error */}
        {imageError ? (
          <div className="text-gray-600 font-mono text-xs p-4 text-center">
            [PREVIEW_OFFLINE]
          </div>
        ) : (
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className={`w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setIsImageLoaded(true)}
            onError={() => setImageError(true)}
          />
        )}
        
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-cyber-black to-transparent h-20 opacity-90" />
        <div className="absolute top-2 right-2 bg-cyber-black/80 backdrop-blur border border-cyber-purple px-2 py-0.5 text-xs text-cyber-purple font-mono uppercase z-20">
          {project.category}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 relative z-20">
        <h3 className="font-display text-xl text-white mb-2 group-hover:text-cyber-cyan transition-colors truncate">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2 font-mono h-10">
          {project.description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <span 
              key={tech} 
              className="px-2 py-0.5 text-[10px] uppercase font-bold border border-cyber-gray text-gray-300 rounded bg-cyber-black/50"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center mt-auto pt-4 border-t border-dashed border-cyber-gray/50">
          <a href={project.link} className="flex items-center gap-1 text-xs font-mono text-cyber-cyan hover:text-white transition-colors">
            <Code className="w-3 h-3" /> Detalhes
          </a>
          <a href={project.link} className="flex items-center gap-1 text-xs font-mono text-cyber-green hover:text-white transition-colors">
            Acessar <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Decorative Corners */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-cyber-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-cyber-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  );
};