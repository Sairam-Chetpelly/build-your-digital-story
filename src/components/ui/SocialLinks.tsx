
import React from "react";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Reveal } from "./Reveal";

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
  color?: string;
  vertical?: boolean;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({
  className = "",
  iconSize = 18,
  color = "currentColor",
  vertical = false,
}) => {
  const links = [
    {
      label: "GitHub",
      url: "https://github.com/yourusername",
      icon: <Github size={iconSize} />,
    },
    {
      label: "LinkedIn",
      url: "https://linkedin.com/in/yourusername",
      icon: <Linkedin size={iconSize} />,
    },
    {
      label: "Twitter",
      url: "https://twitter.com/yourusername",
      icon: <Twitter size={iconSize} />,
    },
    {
      label: "Email",
      url: "mailto:hello@yourdomain.com",
      icon: <Mail size={iconSize} />,
    },
  ];

  return (
    <div
      className={`flex ${
        vertical ? "flex-col space-y-4" : "space-x-4"
      } items-center ${className}`}
    >
      {links.map((link, index) => (
        <Reveal key={link.label} delay={index * 100} direction="up">
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-200 hover:scale-110 text-gray-600 hover:text-black"
            aria-label={link.label}
          >
            {link.icon}
          </a>
        </Reveal>
      ))}
    </div>
  );
};
