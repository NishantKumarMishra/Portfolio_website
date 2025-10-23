import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-16" data-testid="text-education-title">
          Education
        </h2>

        <Card className="p-8 max-w-3xl mx-auto" data-testid="card-education">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-md bg-primary/10 flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
            </div>

            <div className="flex-1 space-y-3">
              <div>
                <h3 className="text-2xl font-semibold" data-testid="text-degree">
                  B.E. in Computer Science and Engineering
                </h3>
                <p className="text-lg text-foreground" data-testid="text-institution">
                  Sathyabama Institute of Science and Technology
                </p>
                <p className="text-sm text-muted-foreground" data-testid="text-duration">
                  Aug 2020 – Jun 2024
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-primary/10 px-4 py-2 rounded-md">
                  <p className="text-sm text-muted-foreground">CGPA</p>
                  <p className="text-xl font-semibold text-primary" data-testid="text-cgpa">
                    7.96/10
                  </p>
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-muted-foreground mb-2">Relevant Coursework:</p>
                <p className="text-foreground" data-testid="text-coursework">
                  OOP, Databases, Data Structures & Algorithms, Operating Systems
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
