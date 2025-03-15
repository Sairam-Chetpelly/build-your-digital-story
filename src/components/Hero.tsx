
import React from "react";
import { AnimatedButton } from "./ui/AnimatedButton";
import { ArrowDownCircle } from "lucide-react";
import { SocialLinks } from "./ui/SocialLinks";

export const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      window.scrollTo({
        top: projectsSection.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 pb-16 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gray-50 -z-10 rounded-bl-[100px]" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gray-50 -z-10 rounded-tr-[60px]" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-6 max-w-lg">
              <div className="inline-block px-3 py-1 mb-3 text-xs font-medium uppercase tracking-wider text-black bg-gray-100 rounded-full animate-fade-up">
                Software Developer
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-display font-semibold leading-tight animate-fade-up animate-delay-100">
                Hi, I'm <span>Your Name</span>
              </h1>
              
              <p className="text-gray-600 text-lg md:text-xl animate-fade-up animate-delay-200">
                I'm a full-stack developer based in [Your Location]. I specialize in building exceptional web applications with modern technologies.
              </p>
              
              <div className="pt-4 flex flex-wrap gap-4 animate-fade-up animate-delay-300">
                <AnimatedButton 
                  onClick={scrollToProjects}
                  className="font-medium"
                >
                  View My Work
                </AnimatedButton>
                
                <AnimatedButton 
                  href="#contact" 
                  variant="primary-outline"
                  className="font-medium"
                >
                  Contact Me
                </AnimatedButton>
              </div>
              
              <div className="pt-8 animate-fade-up animate-delay-400">
                <SocialLinks />
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative flex items-center justify-center">
              <div className="absolute -z-10 w-[350px] h-[350px] md:w-[450px] md:h-[450px] bg-gray-100 rounded-full" />
              <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden bg-white border-8 border-white shadow-subtle animate-scale-in">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                  alt="Your Name"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block animate-fadeIn">
          <a 
            href="#about"
            className="flex flex-col items-center text-gray-500 hover:text-black transition-colors"
            onClick={(e) => {
              e.preventDefault();
              const aboutSection = document.getElementById("about");
              if (aboutSection) {
                window.scrollTo({
                  top: aboutSection.offsetTop - 80,
                  behavior: "smooth",
                });
              }
            }}
          >
            <span className="text-xs font-medium mb-2">Scroll Down</span>
            <ArrowDownCircle className="w-5 h-5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};
