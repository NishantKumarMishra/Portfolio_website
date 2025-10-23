import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import aiTestingImage from "@assets/generated_images/AI_testing_assistant_dashboard_3ba308f6.png";
import employeeManagementImage from "@assets/generated_images/Employee_management_system_interface_f868cf1a.png";

interface Project {
  title: string;
  year: string;
  description: string;
  image: string;
  techStack: string[];
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "AI-based Testing Assistant",
      year: "2025",
      description:
        "Automation tool using OpenAI API for intelligent debugging and error correction of code. Features secure JWT authentication, RAG-based chatbot for support, and admin panel for monitoring.",
      image: aiTestingImage,
      techStack: ["Java", "ReactJS", "Flask", "MongoDB", "OpenAI", "Docker", "Jenkins"],
    },
    {
      title: "Employee Management System",
      year: "2024",
      description:
        "Full-stack CRUD application with Spring Boot + React + MySQL, featuring authentication, employee search, and pagination. Successfully deployed on AWS with CI/CD pipeline.",
      image: employeeManagementImage,
      techStack: ["Java", "Spring Boot", "ReactJS", "MySQL", "AWS"],
    },
  ];

  return (
    <section id="projects" className="py-24 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-16" data-testid="text-projects-title">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover-elevate" data-testid={`card-project-${index}`}>
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  data-testid={`img-project-${index}`}
                />
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-semibold" data-testid={`text-project-title-${index}`}>
                      {project.title}
                    </h3>
                    <span className="text-sm text-muted-foreground" data-testid={`text-project-year-${index}`}>
                      {project.year}
                    </span>
                  </div>
                  <p className="text-foreground" data-testid={`text-project-description-${index}`}>
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" data-testid={`badge-project-tech-${index}-${techIndex}`}>
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  <Button variant="outline" className="flex-1" data-testid={`button-view-demo-${index}`}>
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Demo
                  </Button>
                  <Button variant="outline" className="flex-1" data-testid={`button-github-${index}`}>
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
