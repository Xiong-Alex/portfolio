import { cn } from "../lib/utils";
import { AlignRight, X } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { ThemeToggle } from "./ThemeToggle";
import logo from "../assets/alex_logo.svg";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Tech Stack", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [showNav, setShowNav] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 10);

      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setShowNav(false);
      } else if (currentScrollY < lastScrollY.current) {
        setShowNav(true);
      }

      if (currentScrollY <= 0) {
        setShowNav(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transform transition-transform duration-300",
        showNav ? "translate-y-0" : "-translate-y-full",
        isScrolled
          ? "py-1 sm:py-3 bg-background/80 backdrop-blur-md shadow-xs"
          : "py-2 sm:py-5 bg-background"
      )}
    >
      <div className="flex items-center justify-between w-full px-4 sm:px-6 lg:px-8">
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground">Alex Xiong</span> Portfolio
            {/* <img src={logo} className="logo" alt="Alex Xiong" /> */}
          </span>
        </a>

        <div className="hidden md:flex space-x-8 mr-10">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 pr-8 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <AlignRight size={24} />}
        </button>

        <ThemeToggle />
      </div>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          "fixed right-0 top-0 h-screen w-4/5 max-w-xs overflow-y-auto bg-background/80 backdrop-blur-md z-40 flex flex-col items-center pt-24 shadow-lg border-l border-border transition-transform duration-300 md:hidden",
          isMenuOpen
            ? "translate-x-0"
            : "translate-x-full pointer-events-none"
        )}

      >

        <div className="flex flex-col space-y-8 text-xl">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
