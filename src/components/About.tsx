import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Code, Server, Zap } from "lucide-react";

const About = () => {
  const experiences = [
    {
      year: "2024 - Present",
      role: "Senior Gen AI Developer",
      company: "Tech Innovations Corp",
      description: "Leading AI development projects, implementing RAG systems and LLM integrations",
      skills: ["OpenAI", "LangChain", "Vector Databases", "Python"]
    },
    {
      year: "2022 - 2024",
      role: "Full Stack Developer",
      company: "Digital Solutions Ltd",
      description: "Built scalable MERN stack applications serving 10K+ users",
      skills: ["React", "Node.js", "MongoDB", "Express"]
    },
    {
      year: "2021 - 2022",
      role: "Frontend Developer",
      company: "StartupXYZ",
      description: "Developed responsive web applications and improved user experience",
      skills: ["React", "TypeScript", "Tailwind CSS", "Redux"]
    }
  ];

  const domains = [
    {
      icon: Brain,
      title: "Generative AI",
      description: "RAG systems, LLM fine-tuning, ChatGPT integrations, AI assistants",
      years: "2+ Years"
    },
    {
      icon: Code,
      title: "Frontend Development",
      description: "React, Next.js, TypeScript, Tailwind CSS, responsive design",
      years: "3+ Years"
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Node.js, Express, MongoDB, PostgreSQL, REST APIs",
      years: "3+ Years"
    },
    {
      icon: Zap,
      title: "Cloud & DevOps",
      description: "AWS, Docker, Vercel, CI/CD, serverless functions",
      years: "2+ Years"
    }
  ];

  return (
    <section id="about" className="section-padding bg-secondary/20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">About Me</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Transforming Ideas into <span className="gradient-text">AI-Powered</span> Reality
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            With 3+ years of experience in full-stack development and 2+ years specializing in 
            Generative AI, I bridge the gap between traditional web development and cutting-edge AI technologies.
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
            <h3 className="text-3xl font-bold mb-4">Professional Experience</h3>
            <p className="text-muted-foreground">My journey in the tech industry</p>
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