import { useState } from "react";
import * as SiIcons from "react-icons/si";
import { Code } from "lucide-react";
import { cn } from "../lib/utils";

const {
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
  SiMysql,
  SiPython,
  SiPandas,
  SiApacheairflow,
  SiDbt,
  SiSnowflake,
  SiApachespark,
  SiAmazonwebservices,
  SiStreamlit,
} = SiIcons;

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
    { name: "Supabase", desc: "Open-source Firebase", Icon: SiSupabase || Code },
    { name: "PostgreSQL", desc: "Relational Database", Icon: SiPostgresql },
    { name: "SQL", desc: "Query Language", Icon: SiMysql },
  ],
  "data engineering": [
    { name: "Python", desc: "Scripting", Icon: SiPython || Code },
    { name: "SQL", desc: "Analytics and transformation queries", Icon: SiMysql },
    { name: "Pandas", desc: "Data manipulation", Icon: SiPandas || Code },
    { name: "Airflow", desc: "Orchestrator", Icon: SiApacheairflow || Code },
    { name: "dbt", desc: "Data transformation", Icon: SiDbt || Code },
    { name: "Snowflake", desc: "Cloud data warehouse", Icon: SiSnowflake || Code },
    { name: "Spark", desc: "Distributed processing", Icon: SiApachespark || Code },
    { name: "AWS", desc: "Cloud infrastructure", Icon: SiAmazonwebservices || Code },
    { name: "Streamlit", desc: "Data app prototyping", Icon: SiStreamlit || Code },
  ],
  tools: [
    { name: "Git/GitHub", desc: "Version Control", Icon: SiGithub },
    { name: "VS Code", desc: "Code Editor", Icon: Code },
    { name: "IntelliJ IDEA", desc: "IDE", Icon: SiIntellijidea || Code },
    { name: "Figma", desc: "Design Tool", Icon: SiFigma },
    { name: "Postman", desc: "API Testing", Icon: SiPostman },
  ],
};

const categories = ["all", ...Object.keys(skillsByCategory)];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills =
    activeCategory === "all"
      ? Object.values(skillsByCategory)
          .flat()
          .filter(
            (skill, index, skills) =>
              skills.findIndex((item) => item.name === skill.name) === index
          )
      : skillsByCategory[activeCategory] || [];

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <div className="flex items-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-secondary whitespace-nowrap">
            Technologies & Tools
          </h2>
          <hr className="flex-grow border-t border-primary ml-4" />
        </div>

        <p className="text-left mb-6 max-w-3xl">
          I work across full-stack development and data engineering, using modern
          tools to build applications, pipelines, and practical end-to-end systems.
        </p>

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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill, idx) => {
            const { name, desc, Icon } = skill;

            return (
              <div
                key={`${name}-${idx}`}
                className="hover:shadow-sm hover:shadow-primary/80 bg-card p-4 rounded-lg shadow-xs card-hover"
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
