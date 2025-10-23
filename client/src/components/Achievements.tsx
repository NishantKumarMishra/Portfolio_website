import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Code } from "lucide-react";

interface Achievement {
  icon: React.ReactNode;
  title: string;
  description: string;
  highlight: string;
}

export default function Achievements() {
  const achievements: Achievement[] = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Problem Solving Excellence",
      description: "Solved 500+ problems on LeetCode & GeeksforGeeks",
      highlight: "Ranked #1 on GeeksforGeeks",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "NPTEL Certification",
      description: "Certified in Data Structures & Algorithms using Java",
      highlight: "NPTEL",
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Hackathon Winner",
      description: "Winner – Dev Wizards Hackathon",
      highlight: "Sathyabama University",
    },
  ];

  return (
    <section id="achievements" className="py-24 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-16" data-testid="text-achievements-title">
          Awards & Certifications
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="p-6 text-center space-y-4 hover-elevate"
              data-testid={`card-achievement-${index}`}
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary">
                {achievement.icon}
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2" data-testid={`text-achievement-title-${index}`}>
                  {achievement.title}
                </h3>
                <p className="text-foreground mb-3" data-testid={`text-achievement-description-${index}`}>
                  {achievement.description}
                </p>
                <Badge variant="secondary" data-testid={`badge-achievement-highlight-${index}`}>
                  {achievement.highlight}
                </Badge>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
