import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import aiTestingImage from "@assets/generated_images/AI_testing_assistant_dashboard_3ba308f6.png";
import employeeManagementImage from "@assets/generated_images/Employee_management_system_interface_f868cf1a.png";
import techBlogImage from "@assets/generated_images/Tech_blog_platform_interface_89290caa.png";
import shortestPathImage from "@assets/generated_images/Shortest_path_visualizer_bd1a477a.png";
import treeVisualizerImage from "@assets/generated_images/Tree_visualizer_interface_66d04420.png";
import nQueensImage from "@assets/generated_images/N-Queens_visualizer_b4d737f1.png";
import foodBlogImage from "@assets/generated_images/Food_blog_interface_4e36330f.png";

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
    {
      title: "Tech Blog Platform",
      year: "2024",
      description:
        "Technical blog platform built with Java Servlets using MVC architecture. Features HTTP request management, session handling, JDBC for MySQL integration, and user authentication with servlet filters.",
      image: techBlogImage,
      techStack: ["Java", "Servlets", "JSP", "MySQL", "JDBC", "MVC"],
    },
    {
      title: "Shortest Path Visualizer",
      year: "2024",
      description:
        "Interactive pathfinding visualizer implementing graph data structures and Dijkstra's algorithm. Real-time visualization of the shortest path calculation with step-by-step animation.",
      image: shortestPathImage,
      techStack: ["JavaScript", "HTML", "CSS", "Algorithms", "Data Structures"],
    },
    {
      title: "Tree Visualizer",
      year: "2024",
      description:
        "Comprehensive tree visualization tool for Binary Search Trees, Binary Trees, and Max Heaps. Built with modular and maintainable code for educational purposes.",
      image: treeVisualizerImage,
      techStack: ["JavaScript", "HTML", "CSS", "Data Structures"],
    },
    {
      title: "N-Queens Visualizer",
      year: "2024",
      description:
        "Interactive N-Queens problem solver implementing backtracking algorithm. Visual display of all possible solutions with animated step-by-step solving process.",
      image: nQueensImage,
      techStack: ["JavaScript", "HTML", "CSS", "Backtracking", "Algorithms"],
    },
    {
      title: "Food Blog",
      year: "2024",
      description:
        "Modern food blogging platform developed during Dev Wizards Hackathon at Sathyabama University. Features recipe sharing, user interactions, and responsive design.",
      image: foodBlogImage,
      techStack: ["Java", "Spring Boot", "HTML", "CSS", "Bootstrap"],
    },
  ];

  return (
    <section id="projects" className="py-24 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-16" data-testid="text-projects-title">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
