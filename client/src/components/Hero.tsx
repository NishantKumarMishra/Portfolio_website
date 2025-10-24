import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ArrowRight } from "lucide-react";
import heroBackground from "@assets/generated_images/Tech_hero_background_c727a431.png";

export default function Hero() {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/attached_file/Nishant_1761243653228.pdf"; // file in public folder
    link.download = "Nishant.pdf";
    document.body.appendChild(link); // sometimes needed
    link.click();
    document.body.removeChild(link);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/95" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <p className="text-lg text-primary font-medium" data-testid="text-greeting">
              Hi, I'm Nishant
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold" data-testid="text-hero-title">
              Software Engineer
            </h1>
            <div className="flex justify-center">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold" data-testid="badge-system-design">
                System Design Expert
              </span>
            </div>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-hero-subtitle">
              Building scalable systems with Java, React & Cloud
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-sm sm:text-base text-muted-foreground">
            <span className="flex items-center gap-2" data-testid="text-stat-problems">
              <span className="w-2 h-2 rounded-full bg-primary" />
              500+ Problems Solved
            </span>
            <span className="flex items-center gap-2" data-testid="text-stat-experience">
              <span className="w-2 h-2 rounded-full bg-primary" />
              3+ Years Experience
            </span>
            <span className="flex items-center gap-2" data-testid="text-stat-expertise">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Full Stack Expert
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              data-testid="button-view-projects"
            >
              View Projects
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={handleDownloadResume}
              data-testid="button-download-resume"
              className="bg-background/50 backdrop-blur-sm"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </div>

          <div className="flex justify-center gap-4 pt-4">
            <Button
              size="icon"
              variant="outline"
              asChild
              className="bg-background/50 backdrop-blur-sm"
              data-testid="button-github"
            >
              <a href="https://github.com/NishantKumarMishra" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
              </a>
            </Button>
            <Button
              size="icon"
              variant="outline"
              asChild
              className="bg-background/50 backdrop-blur-sm"
              data-testid="button-linkedin"
            >
              <a href="https://www.linkedin.com/in/nishantkumarmishra/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
            <Button
              size="icon"
              variant="outline"
              asChild
              className="bg-background/50 backdrop-blur-sm"
              data-testid="button-email"
            >
              <a href="mailto:iammishranishant@gmail.com">
                <Mail className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
