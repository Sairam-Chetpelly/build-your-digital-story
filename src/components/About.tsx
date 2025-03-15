
import React from "react";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { AnimatedButton } from "./ui/AnimatedButton";
import { FileText } from "lucide-react";

export const About: React.FC = () => {
  return (
    <section id="about" className="section bg-white py-20">
      <div className="container">
        <SectionHeading subtitle="About Me" title="My Background" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Reveal>
              <div className="relative z-10">
                <div className="relative rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80"
                    alt="Developer coding"
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
                <div className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4 w-40 h-40 bg-gray-100 -z-10 rounded-full" />
              </div>
            </Reveal>
            <div className="absolute top-0 left-0 transform -translate-x-1/4 -translate-y-1/4 w-64 h-64 bg-gray-100 -z-10 rounded-full" />
          </div>
          
          <div className="space-y-6">
            <Reveal delay={100}>
              <p className="text-lg text-gray-600 leading-relaxed">
                Hi there! I'm a passionate software developer with 5+ years of experience specializing in building exceptional digital experiences. I enjoy creating elegant solutions to complex problems.
              </p>
            </Reveal>
            
            <Reveal delay={200}>
              <p className="text-lg text-gray-600 leading-relaxed">
                My journey in software development began at [University/Bootcamp], where I learned the fundamentals of programming and software design. Since then, I've worked with various technologies and frameworks to deliver high-quality products.
              </p>
            </Reveal>
            
            <Reveal delay={300}>
              <p className="text-lg text-gray-600 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or enjoying outdoor activities. I believe in continuous learning and pushing my boundaries to grow both personally and professionally.
              </p>
            </Reveal>
            
            <Reveal delay={400}>
              <div className="pt-4">
                <AnimatedButton variant="outline" className="font-medium">
                  <FileText className="mr-2 h-4 w-4" />
                  Download Resume
                </AnimatedButton>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
