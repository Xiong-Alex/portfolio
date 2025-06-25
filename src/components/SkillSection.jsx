import { useState } from "react";
import { cn } from "../lib/utils";

// Import brand icons from react-icons/si
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiFirebase,
  SiSupabase,
  SiPostgresql,
  SiGithub,
  SiFigma,
  SiPostman,
  SiIntellijidea,
  SiMysql 
} from "react-icons/si";

// Generic placeholder icon for VS Code or fallback
import { Code } from "lucide-react";

// Define skills grouped by category
const skillsByCategory = {
  frontend: [
    { name: "HTML", desc: "Markup", Icon: SiHtml5 },
    { name: "CSS", desc: "Styling", Icon: SiCss3 },
    { name: "JavaScript", desc: "Dynamic Scripting", Icon: SiJavascript },
    { name: "TypeScript", desc: "JavaScript but better", Icon: SiTypescript },
    { name: "React", desc: "UI Library", Icon: SiReact },
    { name: "React Native", desc: "Mobile UI", Icon: SiReact },
    { name: "Tailwind CSS", desc: "Utility-first CSS", Icon: SiTailwindcss },
  ],
  backend: [
    { name: "Node.js", desc: "JavaScript Runtime", Icon: SiNodedotjs },
    { name: "Express", desc: "Web Framework", Icon: SiExpress },
    { name: "Firestore", desc: "Realtime Database", Icon: SiFirebase },
    // If SiSupabase is undefined in your react-icons version, replace Icon: Code
    { name: "Supabase", desc: "Open-source Firebase", Icon: SiSupabase || Code },
    { name: "PostgreSQL", desc: "Relational Database", Icon: SiPostgresql },
    { name: "SQL", desc: "Query Language", Icon: SiMysql },

  ],
  tools: [
    { name: "Git/GitHub", desc: "Version Control", Icon: SiGithub },
    // Use generic placeholder for VS Code
    { name: "VS Code", desc: "Code Editor", Icon: Code },
    // IntelliJ IDEA: use SiIntellijidea if defined, else fallback
    { name: "IntelliJ IDEA", desc: "IDE", Icon: SiIntellijidea || Code },
    { name: "Figma", desc: "Design Tool", Icon: SiFigma },
    { name: "Postman", desc: "API Testing", Icon: SiPostman },
  ],
};

// Categories array (including "all")
const categories = ["all", ...Object.keys(skillsByCategory)];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  // Build filtered skills: if “all”, flatten all; else take that category
  const filteredSkills =
    activeCategory === "all"
      ? Object.values(skillsByCategory).flat()
      : skillsByCategory[activeCategory] || [];

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        {/* Title and underline */}
        <div className="flex items-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-secondary whitespace-nowrap">
            Technologies & Tools
          </h2>
          <hr className="flex-grow border-t border-primary ml-4" />
        </div>

        <p className="text-left mb-6 max-w-3xl">
          I'm proficient in a range of modern technologies that empower me to build
          highly functional solutions. Below are some of my main skills.
        </p>

        {/* Category filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary/80"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredSkills.map((skill, idx) => {
            const { name, desc, Icon } = skill;
            return (
              <div
                key={`${name}-${idx}`}
                className="bg-card p-4 rounded-lg shadow-xs card-hover"
              >
                <div className="flex items-center space-x-4">
                  {Icon && (
                    <Icon
                      className="h-8 w-8 text-primary flex-shrink-0"
                      aria-label={`${name} logo`}
                    />
                  )}
                  <div className="flex-1 text-left">
                    <h3 className="text-foreground font-semibold text-lg">
                      {name}
                    </h3>
                    <p className="text-foreground/70 text-sm">{desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>


      </div>
    </section>
  );
};
