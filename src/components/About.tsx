import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Code, Server, Zap } from "lucide-react";

const About = () => {
  const experiences = [
    {
      year: "March 2024 – Present",
      role: "AI & ML Development Intern",
      company: "Centre for Development of Advanced Computing (CDAC)",
      description:
        "Developed a real-time Smart Traffic Monitoring & ANPR system using YOLO and OCR pipelines. Built scalable multi-camera architecture with dashboards, optimized models for accuracy, and engineered robust storage solutions.",
      skills: ["Python", "YOLO", "PaddleOCR", "Tesseract", "OpenCV", "MySQL", "SQLite", "Django", "WebSockets"]
    },
    {
      year: "2022 – 2025",
      role: "Master of Computer Science",
      company: "Pondicherry University",
      description:
        "CGPA – 7.30/10. Focused on AI, ML, and full-stack development with projects in NLP, computer vision, and scalable system architectures.",
      skills: ["NLP", "Transformers", "Deep Learning", "React.js", "Django", "PostgreSQL"]
    },
    {
      year: "2019 – 2022",
      role: "Bachelor of Computer Science",
      company: "Andhra University",
      description:
        "CGPA – 8.10/10. Built strong foundations in computer science, programming, and database systems.",
      skills: ["Python", "DBMS", "C++", "Java", "MySQL"]
    }
  ];

  const domains = [
    {
      icon: Brain,
      title: "AI & ML Development",
      description: "YOLO-based detection, OCR pipelines, speech-to-text (Whisper), NLP integrations",
      years: "2+ Years"
    },
    {
      icon: Code,
      title: "Frontend Development",
      description: "React.js, HTML5, CSS3, Tailwind CSS, responsive design, state management",
      years: "2+ Years"
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Django, Node.js, Express.js, REST APIs, PostgreSQL, MySQL, MongoDB, SQLite",
      years: "2+ Years"
    },
    {
      icon: Zap,
      title: "Full-Stack & Systems",
      description: "Scalable architectures, API integrations, real-time dashboards, secure workflows",
      years: "2+ Years"
    }
  ];

  return (
    <section id="about" className="section-padding bg-secondary/20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">About Me</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Transforming Ideas into <span className="gradient-text">AI-Powered</span> Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Results-driven AI & ML Developer with expertise in real-time computer vision, speech-to-text,
            and full-stack application development. Skilled at designing scalable architectures, integrating APIs,
            and optimizing models for challenging environments.
          </p>
        </div>

        {/* Domains Worked */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {domains.map((domain, index) => (
            <Card key={index} className="hover-lift group cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-gradient-to-r from-primary to-accent rounded-lg group-hover:scale-110 transition-transform">
                    <domain.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{domain.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">{domain.description}</p>
                <Badge variant="secondary">{domain.years}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Professional Experience & Education</h3>
            <p className="text-muted-foreground">My journey in AI, ML, and software development</p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-4 gap-6">
                    <div className="lg:col-span-1">
                      <Badge variant="outline" className="mb-2">{exp.year}</Badge>
                      <h4 className="text-xl font-semibold">{exp.role}</h4>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="lg:col-span-2">
                      <p className="text-muted-foreground mb-4">{exp.description}</p>
                    </div>
                    <div className="lg:col-span-1">
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
