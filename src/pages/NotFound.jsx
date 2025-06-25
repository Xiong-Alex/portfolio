import React, { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4">

      <div className="relative py-10 sm:py-10 md:py-16 lg:py-20 sm:px-8 lg:px-15 w-full max-w-4xl group">
        {/* Bottom left lines */}
        <div className="absolute bottom-0 left-0 w-[100px] h-[50px]">
          <div className="absolute left-0 bottom-[29px] h-[31px] w-[2px] bg-gray-500 group-hover:bg-primary transition-colors duration-200" />
          <div className="absolute left-[1px] bottom-[29px] w-[41px] h-[2px] bg-gray-500 rotate-45 origin-left group-hover:bg-primary transition-colors duration-200" />
          <div className="absolute left-[29px] bottom-[0px] w-[82px] h-[2px] bg-gray-500 group-hover:bg-primary transition-colors duration-200" />
          <div className="absolute left-[110px] bottom-[0px] w-[20px] h-[2px] bg-gray-500 -rotate-45 origin-left group-hover:bg-primary transition-colors duration-200" />
          <div className="absolute left-[124px] bottom-[14px] h-[2px] w-[120px] bg-gray-500 group-hover:bg-primary transition-colors duration-200" />
        </div>

        {/* Top right lines */}
        <div className="absolute top-0 right-0 w-[100px] h-[50px]">
          <div className="absolute right-[31px] top-[0px] w-[120px] h-[2px] bg-gray-500 group-hover:bg-primary transition-colors duration-200" />
          <div className="absolute right-[1px] top-[30px] w-[43px] h-[2px] bg-gray-500 rotate-45 origin-right group-hover:bg-primary transition-colors duration-200" />
          <div className="absolute right-0 top-[31px] h-[30px] w-[2px] bg-gray-500 group-hover:bg-primary transition-colors duration-200" />
        </div>

        <div className="max-w-xl mx-auto text-center space-y-6 animate-fade-in">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-wider">
            404
          </h1>
          <h2 className="text-2xl sm:text-3xl font-semibold text-primary">
            Page Not Found
          </h2>
          <p className="text-muted-foreground text-lg sm:text-xl">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <a
            href="/"
            className="cosmic-button flex items-center justify-center gap-2 w-fit mx-auto"
          >
            <ArrowLeft className="h-5 w-5" />
            Go Back Home
          </a>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
