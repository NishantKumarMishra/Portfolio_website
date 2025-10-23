import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <footer className="border-t bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4" data-testid="text-footer-brand">
              Nishant<span className="text-primary">.</span>
            </h3>
            <p className="text-muted-foreground" data-testid="text-footer-tagline">
              Building scalable systems with passion and precision.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4" data-testid="text-footer-nav-title">
              Quick Links
            </h4>
            <div className="flex flex-wrap gap-2">
              {navLinks.map((link) => (
                <Button
                  key={link.id}
                  variant="ghost"
                  size="sm"
                  onClick={() => scrollToSection(link.id)}
                  data-testid={`button-footer-nav-${link.id}`}
                >
                  {link.label}
                </Button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4" data-testid="text-footer-social-title">
              Connect
            </h4>
            <div className="flex gap-3">
              <Button
                size="icon"
                variant="outline"
                asChild
                data-testid="button-footer-github"
              >
                <a href="https://github.com/NishantKumarMishra" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button
                size="icon"
                variant="outline"
                asChild
                data-testid="button-footer-linkedin"
              >
                <a href="https://www.linkedin.com/in/nishantkumarmishra/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button
                size="icon"
                variant="outline"
                asChild
                data-testid="button-footer-email"
              >
                <a href="mailto:iammishranishant@gmail.com">
                  <Mail className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t">
          <p className="text-sm text-muted-foreground" data-testid="text-footer-copyright">
            © 2025 Nishant Kumar Mishra. Built with React & TypeScript
          </p>
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            data-testid="button-back-to-top"
          >
            <ArrowUp className="w-4 h-4 mr-2" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
}
