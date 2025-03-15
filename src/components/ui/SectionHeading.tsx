
import React from "react";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  alignment?: "left" | "center" | "right";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  subtitle,
  title,
  alignment = "center",
  className = "",
}) => {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <div className={`mb-12 ${alignmentClasses[alignment]} ${className}`}>
      {subtitle && (
        <Reveal delay={100}>
          <div className="inline-block px-3 py-1 mb-3 text-xs font-medium uppercase tracking-wider text-black bg-gray-100 rounded-full">
            {subtitle}
          </div>
        </Reveal>
      )}
      <Reveal delay={200}>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold mb-4 text-balance">
          {title}
        </h2>
      </Reveal>
      <Reveal delay={300}>
        <div className="h-0.5 w-12 bg-black mx-auto mt-6 mb-6" 
          style={{ 
            margin: alignment === "left" ? "1.5rem 0" : alignment === "right" ? "1.5rem 0 1.5rem auto" : "1.5rem auto" 
          }} 
        />
      </Reveal>
    </div>
  );
};
