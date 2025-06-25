import { Mail } from "lucide-react";

export const EmailSidebar = () => {
  return (
    <div className="hidden lg:flex fixed right-0 pr-[50px] top-0 h-full z-50 flex-col items-center justify-end group">
      {/* Centered vertical line */}
      <div className="absolute bottom-[0px] right-[14px] -translate-x-1/2 w-px h-[100px] bg-gray-500 group-hover:bg-primary transition-colors duration-200" />
      <div className="absolute bottom-[96px] right-[25px] -rotate-45 w-px h-[28px] bg-gray-500 group-hover:bg-primary transition-colors duration-200" />
      <div className="absolute bottom-[120px] right-[34px] -translate-x-1/2 w-px h-[100px] bg-gray-500 group-hover:bg-primary transition-colors duration-200" />

      {/* Email */}
      <div className="mb-50 flex flex-col items-center space-y-4 z-10">
        <div className="relative w-0 h-0">
          <a
            href="mailto:alex.chufue.xiong@gmail.com"
            className="absolute -right-[17px] bottom-11 transform rotate-90 origin-right whitespace-nowrap tracking-widest hover:text-primary transition-colors transition-transform hover:-translate-y-1"
          >
            alex.chufue.xiong@gmail.com
          </a>
        </div>
      </div>

      {/* Decorative Lines */}
      <div className="absolute bottom-[550px] right-[34px] -translate-x-1/2 w-px h-[100px] bg-gray-500 group-hover:bg-primary transition-colors duration-200" />
      <div className="absolute bottom-[646px] right-[24px] rotate-45 w-px h-[29px] bg-gray-500 group-hover:bg-primary transition-colors duration-200" />
      <div className="absolute top-0 bottom-[670px] right-[14px] -translate-x-1/2 w-px bg-gray-500 group-hover:bg-primary transition-colors duration-200" />
    </div>
  );
};
