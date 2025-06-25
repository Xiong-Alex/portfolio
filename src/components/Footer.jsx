import React from "react";
import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative py-6 px-4 mt-12">
      {/* Centered credit text */}
      <div className="flex justify-center">
        <a
          href="https://github.com/Xiong-Alex/portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          Designed and Built by Alex Xiong
        </a>
      </div>

      {/* Back-to-top button */}
      <a
        href="#hero"
        className="absolute right-10 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
