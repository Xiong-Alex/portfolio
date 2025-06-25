import {
  Github,
  Linkedin,
  Mail,
  Send,
} from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        {/* "Say Hello" button linking to email */}
        <div className="text-center mt-12">
          <a
            className="press-button w-fit flex items-center mx-auto gap-2"
            href="mailto:alex.chufue.xiong@gmail.com"
          >
            Get In Touch <Send className="h-5 w-5" />
          </a>
        </div>

        {/* Social Icons below the button */}
        <div className="mt-8 flex justify-center items-center space-x-6">
          <a
            href="https://github.com/Xiong-Alex"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/xiong-alex/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:alex.chufue.xiong@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};
