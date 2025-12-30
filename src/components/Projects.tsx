import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  Github,
  GraduationCap,
  Database,
  ShieldCheck,
} from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "PMSSS Scholarship Portal (SIH 2024)",
      description:
        "A national-level scholarship management portal developed for AICTE under Smart India Hackathon 2024. Enables secure identity verification, real-time application tracking, and automated communication throughout the scholarship lifecycle.",
      icon: GraduationCap,
      tech: [
        "JavaScript",
        "CSS3",
        "Stripe",
        "Aadhaar e-KYC",
        "SMS & Gmail APIs",
      ],
      features: [
        "Secure Aadhaar Verification",
        "Real-time Application Tracking",
        "Automated Notifications",
        "Payment Gateway Integration",
      ],
      github: "https://github.com/amanraj6221",
      live: "#",
      category: "Government / Full Stack",
    },
    {
      title: "Inter-state Student Verification System",
      description:
        "Automated multi-tier student verification platform integrating government APIs to reduce manual paperwork and improve transparency in scholarship processing.",
      icon: ShieldCheck,
      tech: ["React.js", "PHP", "JavaScript", "MySQL", "Government APIs"],
      features: [
        "Multi-level Verification Workflow",
        "Role-based Access Control",
        "SMS & Email Notifications",
        "Live Status Tracking",
      ],
      github: "https://github.com/amanraj6221",
      live: "#",
      category: "Full Stack",
    },
    {
      title: "Secure Validation System (C-DAC)",
      description:
        "Enterprise-grade document validation system built during internship at C-DAC. Combines QR decoding with OCR-based fallback pipelines to achieve high accuracy even on poor-quality documents.",
      icon: Database,
      tech: [
        "Django",
        "MySQL",
        "Tailwind CSS",
        "Tesseract OCR",
        "Pillow",
        "Pyzbar",
      ],
      features: [
        "QR + OCR Hybrid Validation",
        "Admin & User Dashboards",
        "Analytics & Reporting",
        "PDF / Excel / Word Export",
      ],
      github: "#",
      live: "#",
      category: "Backend / Automation",
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Projects
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Real-World <span className="gradient-text">Impact</span> Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of hackathon, internship, and academic projects focused
            on secure systems, government platforms, and scalable full-stack
            development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover-lift group">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-gradient-to-r from-primary to-accent rounded-lg">
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>

                <div>
                  <h4 className="text-sm font-semibold mb-1">Key Features</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {project.features.map((f, i) => (
                      <li key={i}>• {f}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1">
                  {project.tech.map((tech, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <Github size={16} /> Code
                    </a>
                  </Button>
                  {project.live !== "#" && (
                    <Button
                      variant="gradient"
                      size="sm"
                      className="flex-1"
                      asChild
                    >
                      <a href={project.live} target="_blank" rel="noreferrer">
                        <ExternalLink size={16} /> Live
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a
              href="https://github.com/amanraj6221"
              target="_blank"
              rel="noopener noreferrer"
            >
              View All Projects on GitHub
              <ExternalLink size={18} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
