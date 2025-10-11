import { ArrowRight, ExternalLink, Github } from "lucide-react";

import hobbyistImg from "../assets/projects/Hobbyist.jpg";
import wanderworkImg from "../assets/projects/WonderWork.jpg";
import restaurantTinderImg from "../assets/projects/RestaurantTinder.png";
import portfolioImg from "../assets/projects/Portfolio.png"
import ecommerceImg from "../assets/projects/E-Commerce.png"


const projects = [
  {
    id: 1,
    title: "E-Commerce Shop (In Progress)",
    description:
      "A full-stack e-commerce platform featuring product collections, category filtering, and cart persistence with Supabase integration.",
    image: ecommerceImg,
    tags: ["React", "Supabase", "Tailwind CSS", "TypeScript"],
    demoUrl: "https://e-commerce-lime-phi.vercel.app/",
    githubUrl: "https://github.com/Xiong-Alex/Ecommerce-Site",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description:
      "A responsive and modern portfolio website built to showcase my projects, experience, and technical skills.",
    image: portfolioImg,
    tags: ["React", "JavaScript", "Vite", "Tailwind CSS"],
    demoUrl: "https://xiong-alex.com", 
    githubUrl: "https://github.com/Xiong-Alex/Portfolio-Site",
  },
  {
    id: 3,
    title: "Hobbyist",
    description:
      "A full-featured mobile app that helps users track and manage their hobbies, projects, and inventory. Includes goal setting, calendar integration, and offline-first functionality.",
    image: hobbyistImg,
    tags: ["TypeScript", "React Native", "Expo", "Firebase",],
    demoUrl: "",
    githubUrl: "https://github.com/Xiong-Alex/Hobbyist",
  },
  {
    id: 4,
    title: "WanderWork",
    description:
      "A web application to help users explore curated travel projects and share itineraries. Built with performance and scalability in mind.",
    image: wanderworkImg,
    tags: ["JavaScript", "Firebase", "Express", "React", "Node"],
    demoUrl: "",
    githubUrl: "https://github.com/Xiong-Alex/WanderWorks",
  },
  {
    id: 5,
    title: "RestaurantTinder",
    description:
      "Swipe-based restaurant discovery app that helps users quickly choose where to eat. Features a clean UI and local storage support.",
    image: restaurantTinderImg,
    tags: ["Java", "Spring Boot", "PostgreSQL", "React", "MUI"],
    demoUrl: "",
    githubUrl: "https://github.com/Xiong-Alex/Merit_America-Capstones/tree/main/final-capstone-main",
  },
];


export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {projects.map((project, key) => (
            <div
              key={key}
              className="border-1 hover:border-primary group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col h-full"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex space-x-3  mt-auto justify-start items-center">
                  {/* Conditinally render  demo link if DemoUrl exists/not empty */}
                  {project.demoUrl && project.demoUrl.trim() !== "" && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="press-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Xiong-Alex"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};