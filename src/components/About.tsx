import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Server, Zap, Brain } from "lucide-react";

const About = () => {
  const experiences = [
    {
      year: "Apr 2025 – Sep 2025",
      role: "Software Development Intern",
      company: "Centre for Development of Advanced Computing (C-DAC)",
      description:
        "Worked onsite at C-DAC, Kolkata to build a Secure Validation System using QR decoding and OCR-based fallback pipelines for identity and document verification. Developed role-based dashboards with real-time logs, analytics, and visualizations, improving monitoring efficiency by 60%. Designed secure document upload and scanning pipelines and implemented automated exports (PDF, Excel, Word) for compliance-ready reporting.",
      skills: [
        "Django",
        "MySQL",
        "Tailwind CSS",
        "Tesseract OCR",
        "Pillow",
        "Pyzbar",
        "Chart.js",
        "JavaScript",
      ],
    },
    {
      year: "Dec 2024 – Apr 2025",
      role: "Web Development Intern",
      company: "Sure Trust",
      description:
        "Collaborated in a cross-functional team to develop a full-stack platform for a learning NGO, enabling course browsing, batch schedules, and real-time chatbot support. Built and integrated an AI-powered chatbot using Dialogflow and Python with the MERN stack, improving user engagement through automated responses. Also designed and deployed a responsive personal portfolio using React.js.",
      skills: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Dialogflow",
        "Python",
        "GitHub",
      ],
    },
    {
      year: "Dec 2023 – Jan 2024",
      role: "Salesforce Developer Virtual Intern",
      company: "Salesforce (SmartInternz)",
      description:
        "Configured Lightning Web Components, Visualforce pages, and Salesforce Flows to automate business processes and improve deployment speed by 30%. Optimized Apex triggers and SOQL queries, strengthened security with custom profiles and permission sets, and ensured high system reliability during UAT.",
      skills: ["Salesforce", "Apex", "LWC", "SOQL", "Git", "VS Code"],
    },
    {
      year: "May 2025",
      role: "B.Tech – Electrical & Electronics Engineering",
      company: "Darbhanga College of Engineering, India",
      description:
        "Graduated In EEE . As Well Focus to Built strong problem-solving skills and a solid foundation in engineering principles, programming, and applied computer science.",
      skills: ["C++", "Python", "Data Structures", "DBMS", "OOP"],
    },
  ];

  const domains = [
    {
      icon: Code,
      title: "Frontend Development",
      description:
        "React.js, Redux Toolkit, HTML5, CSS3, Tailwind CSS, responsive UI design",
      years: "2+ Years",
    },
    {
      icon: Server,
      title: "Backend Development",
      description:
        "Node.js, Express.js, Django, Django REST Framework, RESTful APIs",
      years: "2+ Years",
    },
    {
      icon: Brain,
      title: "AI & Automation",
      description:
        "OCR systems, AI chatbots, workflow automation, API integrations",
      years: "1.5+ Years",
    },
    {
      icon: Zap,
      title: "Databases & Systems",
      description:
        "PostgreSQL, MySQL, MongoDB, Firebase, scalable system design",
      years: "2+ Years",
    },
  ];

  return (
    <section id="about" className="section-padding bg-secondary/20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            About Me
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Building <span className="gradient-text">Scalable</span> Software
            Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I’m Aman Raj, a software developer with strong computer science
            fundamentals and hands-on experience in full-stack development,
            backend systems, and AI-powered automation. I enjoy solving
            real-world problems by building reliable, scalable, and user-centric
            applications.
          </p>
        </div>

        {/* Domains */}
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
                <p className="text-muted-foreground text-sm mb-3">
                  {domain.description}
                </p>
                <Badge variant="secondary">{domain.years}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Experience & Education</h3>
            <p className="text-muted-foreground">
              My journey across software development, internships, and projects
            </p>
          </div>

          {experiences.map((exp, index) => (
            <Card key={index} className="hover-lift">
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-4 gap-6">
                  <div className="lg:col-span-1">
                    <Badge variant="outline" className="mb-2">
                      {exp.year}
                    </Badge>
                    <h4 className="text-xl font-semibold">{exp.role}</h4>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <div className="lg:col-span-2">
                    <p className="text-muted-foreground">{exp.description}</p>
                  </div>
                  <div className="lg:col-span-1 flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
