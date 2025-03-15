
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 
    | "default"
    | "outline"
    | "ghost"
    | "link"
    | "destructive"
    | "secondary"
    | "primary-outline";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  href?: string;
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  variant = "default",
  size = "default",
  className = "",
  href,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const customVariants = {
    "primary-outline": 
      "bg-transparent border border-black text-black hover:bg-black hover:text-white transition-colors duration-300",
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const variantClass = 
    variant === "primary-outline" ? customVariants["primary-outline"] : "";

  const buttonContent = (
    <Button
      variant={variant !== "primary-outline" ? variant : "outline"}
      size={size}
      className={cn(
        "relative overflow-hidden transition-all duration-300 transform hover:-translate-y-1",
        variantClass,
        className
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <span
        className={cn(
          "relative z-10 transition-transform duration-300",
          isHovered ? "transform translate-x-1" : ""
        )}
      >
        {children}
      </span>
    </Button>
  );

  if (href) {
    return (
      <a href={href} className="inline-block no-underline">
        {buttonContent}
      </a>
    );
  }

  return buttonContent;
};
