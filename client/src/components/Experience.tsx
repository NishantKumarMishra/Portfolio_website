import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
  techStack: string[];
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      title: "Software Engineer",
      company: "Pysellers Services",
      location: "Chennai",
      period: "Apr 2025 - Aug 2025",
      achievements: [
        "Built AI-powered Automation Testing Tool enabling users to upload code, detect errors, and generate fixes using OpenAI, reducing debugging time by 70%",
        "Developed secure authentication (JWT), RAG-based chatbot for instant support, and admin panel for monitoring logs & performance trends",
        "Designed and deployed CI/CD pipelines with Docker + Jenkins on GCP, ensuring high-availability deployments",
      ],
      techStack: ["Java", "ReactJS", "Flask", "MongoDB", "Docker", "Jenkins", "GCP", "REST API"],
    },
    {
      title: "Data Analyst – Associate",
      company: "Piquant Consultancy Services Pvt. Ltd",
      location: "Chennai",
      period: "Sept 2024 - Mar 2025",
      achievements: [
        "Automated data extraction with Selenium (Java), reducing manual effort in large-scale web data collection",
        "Designed SQL queries and optimized MySQL databases to ensure reliable ETL workflows",
        "Built interactive dashboards in Power BI and Tableau for visualizing business-critical metrics",
      ],
      techStack: ["Java", "SQL", "Selenium", "Power BI", "Tableau", "Data Mining"],
    },
    {
      title: "Software Developer",
      company: "HCL Technologies",
      location: "Chennai",
      period: "Jul 2022 – Sept 2022",
      achievements: [
        "Developed a full-stack Vehicle Booking System using Spring Boot (Java) + ReactJS, enabling real-time booking and admin control",
        "Built REST APIs for user registration, login, booking management with a secure backend",
        "Integrated React frontend with backend APIs for smooth end-to-end user experience",
      ],
      techStack: ["Java", "Spring Boot", "ReactJS", "MySQL", "REST API"],
    },
  ];

  return (
    <section id="experience" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-16" data-testid="text-experience-title">
          Work Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-6 hover-elevate" data-testid={`card-experience-${index}`}>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                </div>

                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold" data-testid={`text-job-title-${index}`}>
                      {exp.title}
                    </h3>
                    <p className="text-base text-foreground" data-testid={`text-company-${index}`}>
                      {exp.company} • {exp.location}
                    </p>
                    <p className="text-sm text-muted-foreground" data-testid={`text-period-${index}`}>
                      {exp.period}
                    </p>
                  </div>

                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li
                        key={achIndex}
                        className="text-foreground flex gap-2"
                        data-testid={`text-achievement-${index}-${achIndex}`}
                      >
                        <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" data-testid={`badge-tech-${index}-${techIndex}`}>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
