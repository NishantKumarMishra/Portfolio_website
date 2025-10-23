import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Wrench, Database, Cloud, TestTube } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      title: "Languages",
      icon: <Code2 className="w-6 h-6" />,
      skills: ["Java", "SQL", "Python", "C/C++"],
    },
    {
      title: "Frameworks & Tools",
      icon: <Wrench className="w-6 h-6" />,
      skills: [
        "Spring Boot",
        "J2EE",
        "Servlet",
        "Angular",
        "Vue",
        "ReactJS",
        "Prime NG",
        "AG Grid",
        "ORM",
        "Flask",
        "Django",
        "Jenkins",
        "Docker",
      ],
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6" />,
      skills: ["MySQL", "MongoDB", "DynamoDB", "Athena"],
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-6 h-6" />,
      skills: ["GCP", "CI/CD", "S3", "SQS", "Lambda"],
    },
    {
      title: "Testing & Methodologies",
      icon: <TestTube className="w-6 h-6" />,
      skills: ["Unit/Integration Testing", "Selenium", "Agile", "DevOps", "REST APIs"],
    },
  ];

  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-16" data-testid="text-skills-title">
          Technical Skills
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 space-y-4" data-testid={`card-skill-category-${index}`}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center text-primary">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold" data-testid={`text-category-title-${index}`}>
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className="text-sm"
                    data-testid={`badge-skill-${index}-${skillIndex}`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
