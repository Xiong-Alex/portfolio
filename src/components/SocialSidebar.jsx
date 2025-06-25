import { Github, Linkedin, Mail } from "lucide-react";

export const SocialSidebar = () => {
  return (
    <div className="hidden lg:flex fixed top-0 h-full z-50 flex-col items-center">
      {/* Hover-sensitive region */}

      <div className="w-full h-[450px] pl-6 group rounded-br-[50px]">

        {/* Top vertical line */}
        <div className="absolute top-0 left-[34px] -translate-x-1/2 w-px h-[11rem] bg-gray-500 group-hover:bg-primary transition-colors duration-200" />

        {/* Social Icons */}
        <div className="mt-50 flex flex-col items-center space-y-4 z-10">
          <a href="https://github.com/Xiong-Alex" target="_blank" rel="noopener noreferrer">
            <Github className="h-5 w-5 hover:text-primary transition-colors transition-transform hover:-translate-y-0.5" />
          </a>
          <a href="https://www.linkedin.com/in/xiong-alex/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-5 w-5 hover:text-primary transition-colors transition-transform hover:-translate-y-0.5" />
          </a>
          <a href="mailto:alex.chufue.xiong@gmail.com">
            <Mail className="h-5 w-5 hover:text-primary transition-colors transition-transform hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Decorative lines that change on hover */}
        <div className="absolute top-[315px] left-[34px] -translate-x-1/2 w-px h-[4rem] bg-gray-500 group-hover:bg-primary transition-colors duration-200" />
        <div className="absolute top-[371px] left-[16px] rotate-45 -translate-x-1/2 w-px h-[50px] bg-gray-500 group-hover:bg-primary transition-colors duration-200" />
        <div className="absolute top-[381px] left-[16px] rotate-45 -translate-x-1/2 w-px h-[50px] bg-gray-500 group-hover:bg-primary transition-colors duration-200" />
        <div className="absolute top-[401px] left-[8px] rotate-45 -translate-x-1/2 w-px h-[50px] bg-gray-500 group-hover:bg-primary transition-colors duration-200" />
      </div>
    </div>
  );
};
