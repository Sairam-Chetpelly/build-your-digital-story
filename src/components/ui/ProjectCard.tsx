
import React, { useState } from "react";
import { Reveal } from "./Reveal";
import { AnimatedButton } from "./AnimatedButton";
import { cn } from "@/lib/utils";
import { ExternalLink, Github } from "lucide-react";

export interface ProjectProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  repoUrl?: string;
  featured?: boolean;
}

export const ProjectCard: React.FC<ProjectProps> = ({
  title,
  description,
  image,
  tags,
  demoUrl,
  repoUrl,
  featured = false,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "group rounded-xl overflow-hidden bg-white border border-gray-100 h-full transition-all duration-300 hover:shadow-elevated",
        featured && "md:col-span-2 lg:col-span-2"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden aspect-video">
        <div
          className={cn(
            "absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out",
            isHovered ? "scale-105" : "scale-100",
            !isLoaded && "image-loading"
          )}
          style={{ backgroundImage: `url(${image})` }}
        >
          <img
            src={image}
            alt={title}
            className="opacity-0 w-full h-full object-cover"
            onLoad={() => setIsLoaded(true)}
          />
        </div>
      </div>

      <div className="p-6">
        <Reveal direction="up">
          <h3 className="text-xl font-semibold mb-2 font-display">{title}</h3>
        </Reveal>

        <Reveal direction="up" delay={100}>
          <p className="text-gray-600 mb-4 text-balance">{description}</p>
        </Reveal>

        <Reveal direction="up" delay={150}>
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700 font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal direction="up" delay={200}>
          <div className="flex items-center space-x-3">
            {demoUrl && (
              <AnimatedButton
                href={demoUrl}
                variant="default"
                size="sm"
                className="font-medium"
              >
                View Demo
                <ExternalLink className="ml-1.5 w-3.5 h-3.5" />
              </AnimatedButton>
            )}
            {repoUrl && (
              <AnimatedButton
                href={repoUrl}
                variant="outline"
                size="sm"
                className="font-medium"
              >
                Code
                <Github className="ml-1.5 w-3.5 h-3.5" />
              </AnimatedButton>
            )}
          </div>
        </Reveal>
      </div>
    </div>
  );
};
