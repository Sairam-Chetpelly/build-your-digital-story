
import React from "react";
import { SocialLinks } from "./ui/SocialLinks";
import { AnimatedButton } from "./ui/AnimatedButton";
import { ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  
  const footerLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-white py-12 border-t border-gray-100">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="flex flex-col md:flex-row justify-between items-center w-full mb-8">
            <a href="#home" className="text-xl font-bold font-display mb-4 md:mb-0">
              <span className="sr-only">Your Name</span>
              YN
            </a>
            
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-gray-600 hover:text-black hover-link"
                >
                  {link.label}
                </a>
              ))}
            </div>
            
            <AnimatedButton
              variant="outline"
              size="icon"
              className="hidden md:flex"
              onClick={scrollToTop}
            >
              <ArrowUp className="h-4 w-4" />
              <span className="sr-only">Back to top</span>
            </AnimatedButton>
          </div>
          
          <div className="border-t border-gray-100 w-full py-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 mb-4 md:mb-0">
              © {currentYear} Your Name. All rights reserved.
            </p>
            
            <SocialLinks />
            
            <AnimatedButton
              variant="outline"
              size="icon"
              className="mt-6 md:hidden"
              onClick={scrollToTop}
            >
              <ArrowUp className="h-4 w-4" />
              <span className="sr-only">Back to top</span>
            </AnimatedButton>
          </div>
        </div>
      </div>
    </footer>
  );
};
