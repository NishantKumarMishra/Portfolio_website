import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import profileImage from "@assets/generated_images/Professional_headshot_portrait_dad792ef.png";

export default function About() {
  const focuses = [
    "Distributed Systems",
    "Full-Stack Development",
    "Cloud Architecture",
    "AI Integration",
  ];

  return (
    <section id="about" className="py-24 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-16" data-testid="text-about-title">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <img
              src={profileImage}
              alt="Nishant Kumar Mishra"
              className="rounded-2xl w-full max-w-md aspect-square object-cover"
              data-testid="img-profile"
            />
          </div>

          <div className="space-y-6">
            <p className="text-lg text-foreground" data-testid="text-about-description">
              Software Engineer experienced in building scalable distributed systems and full-stack applications
              using Java, React, and AWS/GCP. Strong foundation in Data Structures, Algorithms, and Cloud DevOps.
            </p>
            <p className="text-lg text-foreground">
              Passionate about delivering high-impact, customer-focused solutions that solve real-world problems.
              I thrive in collaborative environments and enjoy tackling complex technical challenges.
            </p>

            <div>
              <h3 className="text-xl font-semibold mb-4" data-testid="text-focus-areas">
                Technical Focus Areas
              </h3>
              <div className="flex flex-wrap gap-3">
                {focuses.map((focus, index) => (
                  <Badge key={index} variant="secondary" className="text-sm" data-testid={`badge-focus-${index}`}>
                    {focus}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
