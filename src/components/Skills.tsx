
import React from "react";
import { SectionHeading } from "./ui/SectionHeading";
import { SkillBadge } from "./ui/SkillBadge";
import { Reveal } from "./ui/Reveal";

export const Skills: React.FC = () => {
  const skillGroups = [
    {
      title: "Frontend Development",
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "React", level: 90 },
        { name: "Next.js", level: 80 },
        { name: "HTML5", level: 95 },
        { name: "CSS3/SASS", level: 90 },
        { name: "Tailwind CSS", level: 90 },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 80 },
        { name: "Python", level: 75 },
        { name: "Django", level: 70 },
        { name: "PostgreSQL", level: 75 },
        { name: "MongoDB", level: 80 },
        { name: "RESTful APIs", level: 85 },
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
        { name: "CI/CD", level: 75 },
        { name: "Jest", level: 80 },
        { name: "Webpack", level: 75 },
        { name: "Figma", level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="section bg-gray-50 py-24">
      <div className="container">
        <SectionHeading subtitle="My Skills" title="What I Bring to the Table" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {skillGroups.map((group, groupIndex) => (
            <div key={group.title} className="space-y-6">
              <Reveal delay={groupIndex * 100}>
                <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-subtle h-full">
                  <h3 className="text-lg font-semibold mb-6 font-display">
                    {group.title}
                  </h3>

                  <div className="space-y-4">
                    {group.skills.map((skill, skillIndex) => (
                      <Reveal
                        key={skill.name}
                        delay={100 + skillIndex * 50 + groupIndex * 100}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">
                            {skill.name}
                          </span>
                          <div className="w-24 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-black rounded-full transition-all duration-1000 ease-out"
                              style={{ 
                                width: "0%", 
                                animation: `growWidth 1.5s ease-out forwards ${100 + skillIndex * 50 + groupIndex * 100}ms`
                              }}
                              onAnimationEnd={(e) => {
                                e.currentTarget.style.width = `${skill.level}%`;
                              }}
                            />
                          </div>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>

        <style jsx global>{`
          @keyframes growWidth {
            from { width: 0%; }
            to { width: var(--final-width); }
          }
        `}</style>
      </div>
    </section>
  );
};
