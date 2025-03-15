import React from "react";
import { SectionHeading } from "./ui/SectionHeading";
import { ProjectCard, ProjectProps } from "./ui/ProjectCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Reveal } from "./ui/Reveal";

export const Projects: React.FC = () => {
  const projects: ProjectProps[] = [
    {
      title: "TaskMaster App",
      description: "A web-based task management tool that allows users to create, edit, and prioritize tasks in real-time.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      tags: ["React", "Firebase", "Tailwind CSS"],
      demoUrl: "https://taskmasterapp.com",
      repoUrl: "https://github.com/yourusername/taskmaster",
      featured: true,
    },
    {
      title: "E-Commerce Platform",
      description: "A fully functional e-commerce platform with product management, cart functionality, and payment processing.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      tags: ["Next.js", "Stripe", "MongoDB"],
      demoUrl: "https://ecommerce-platform.com",
      repoUrl: "https://github.com/yourusername/ecommerce",
    },
    {
      title: "Weather Dashboard",
      description: "A weather dashboard that displays current conditions and forecasts for any location using weather API data.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      tags: ["JavaScript", "Weather API", "CSS"],
      demoUrl: "https://weather-dashboard.com",
      repoUrl: "https://github.com/yourusername/weather-app",
    },
    {
      title: "Recipe Finder",
      description: "A recipe discovery app that helps users find recipes based on available ingredients and dietary restrictions.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
      tags: ["React", "Node.js", "MongoDB"],
      demoUrl: "https://recipe-finder.com",
      repoUrl: "https://github.com/yourusername/recipe-finder",
    },
    {
      title: "Portfolio Website",
      description: "A modern personal portfolio website showcasing projects and skills in an elegant, minimalist design.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      demoUrl: "https://yourname.dev",
      repoUrl: "https://github.com/yourusername/portfolio",
    },
  ];

  const categories = [
    { value: "all", label: "All Projects" },
    { value: "web", label: "Web Development" },
    { value: "mobile", label: "Mobile Apps" },
    { value: "other", label: "Other Projects" },
  ];

  return (
    <section id="projects" className="section py-24">
      <div className="container">
        <SectionHeading subtitle="My Work" title="Featured Projects" />

        <Reveal>
          <Tabs defaultValue="all" className="mb-12">
            <TabsList className="mx-auto flex flex-wrap justify-center">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.value}
                  value={category.value}
                  className="text-sm font-medium"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="all" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <Reveal key={project.title} delay={index * 100}>
                    <ProjectCard {...project} />
                  </Reveal>
                ))}
              </div>
            </TabsContent>

            {/* Other tabs would have filtered content */}
            {["web", "mobile", "other"].map((category) => (
              <TabsContent key={category} value={category} className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Just display a subset for demonstration */}
                  {projects.slice(0, 2).map((project, index) => (
                    <Reveal key={project.title} delay={index * 100}>
                      <ProjectCard {...project} />
                    </Reveal>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </Reveal>
      </div>
    </section>
  );
};
