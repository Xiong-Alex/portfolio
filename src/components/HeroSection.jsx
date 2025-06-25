import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

export const HeroSection = () => {
    const [showArrow, setShowArrow] = useState(true);

    useEffect(() => {
        const checkHeight = () => {
            setShowArrow(window.innerHeight >= 650);
        };

        checkHeight(); // Run on mount
        window.addEventListener("resize", checkHeight);

        return () => window.removeEventListener("resize", checkHeight);
    }, []);

    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            <div className="relative py-8 sm:py-10 md:py-16 lg:py-20 sm:px-8 lg:px-15 w-full max-w-4xl group">
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

                <div className="container max-w-4xl mx-auto text-left z-10">
                    <div className="space-y-6">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-wide">
                            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-1">
                                Alex Xiong
                            </span>
                        </h1>

                        <h1 className="text-2xl md:text-4xl font-bold tracking-widest">
                            <span className="text-primary opacity-0 animate-fade-in-delay-2">
                                Full-Stack Developer, Web & Mobile
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                            I create practical solutions with stellar user experiences with modern technologies.
                            Specializing in full-stack development, I craft scalable scalable,
                            user-centric web applications from end to end.
                        </p>

                        <br />

                        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-4">
                            <a
                                href="#projects"
                                className="press-button text-center"
                            >
                                View My Work
                            </a>

                            <a
                                href=""
                                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 text-center"
                            >
                                Download Resume
                            </a>
                        </div>

                    </div>
                </div>
            </div>

            {/* <div className="flex absolute bottom-1 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex-col items-center animate-bounce"> */}

            {showArrow && (

                <div className="flex absolute bottom-8 left-1/2 transform -translate-x-1/2 flex-col items-center animate-bounce">
                    <a href="#about" className="flex flex-col items-center cursor-pointer">
                        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
                        <ArrowDown className="h-5 w-5 text-primary" />
                    </a>
                </div>
            )}
        </section>
    );
};
