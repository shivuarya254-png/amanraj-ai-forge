import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  Github,
  Bot,
  Brain,
  Database,
  MessageSquare,
  GraduationCap,
  ShoppingCart,
} from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI Resume Builder",
      description:
        "Intelligent resume generation using OpenAI GPT-4, with personalized suggestions and ATS optimization. Features real-time preview, multiple templates, and export options.",
      icon: Brain,
      tech: ["React", "OpenAI", "Node.js", "MongoDB", "Tailwind CSS"],
      features: [
        "AI Content Generation",
        "ATS Optimization",
        "Real-time Preview",
        "Multiple Templates",
      ],
      github: "https://github.com/bhanuja/ai-resume-builder",
      live: "https://ai-resume-bhanuja.vercel.app",
      category: "AI Application",
    },
    {
      title: "Smart Student Hub",
      description:
        "Comprehensive MERN stack platform for student management with AI-powered features like automatic assignment grading and intelligent study recommendations.",
      icon: GraduationCap,
      tech: ["React", "Express", "MongoDB", "JWT", "Socket.IO", "OpenAI"],
      features: [
        "Student Management",
        "AI Grading",
        "Real-time Chat",
        "Progress Analytics",
      ],
      github: "https://github.com/bhanuja/smart-student-hub",
      live: "https://student-hub-bhanuja.vercel.app",
      category: "Full Stack",
    },
    {
      title: "AI Knowledge Assistant",
      description:
        "RAG-powered knowledge base system using LangChain and vector databases. Enables intelligent document search and contextual Q&A for enterprise knowledge management.",
      icon: Database,
      tech: ["LangChain", "Pinecone", "FastAPI", "React", "OpenAI Embeddings"],
      features: [
        "RAG Implementation",
        "Vector Search",
        "Document Upload",
        "Contextual Answers",
      ],
      github: "https://github.com/bhanuja/ai-knowledge-assistant",
      live: "https://ai-knowledge-bhanuja.vercel.app",
      category: "AI/ML",
    },
    {
      title: "Real-time Chat Application",
      description:
        "Modern chat application with real-time messaging, file sharing, group chats, and message encryption. Built with MERN stack and Socket.IO.",
      icon: MessageSquare,
      tech: ["React", "Node.js", "Socket.IO", "MongoDB", "JWT", "Cloudinary"],
      features: [
        "Real-time Messaging",
        "File Sharing",
        "Group Chats",
        "Message Encryption",
      ],
      github: "https://github.com/bhanuja/realtime-chat-app",
      live: "https://chat-bhanuja.vercel.app",
      category: "Full Stack",
    },
    {
      title: "AI-Powered E-commerce",
      description:
        "E-commerce platform with AI product recommendations, intelligent search, and chatbot customer support. Features personalized shopping experience.",
      icon: ShoppingCart,
      tech: ["Next.js", "Stripe", "PostgreSQL", "OpenAI", "Redis", "TensorFlow"],
      features: [
        "AI Recommendations",
        "Smart Search",
        "Chatbot Support",
        "Payment Integration",
      ],
      github: "https://github.com/bhanuja/ai-ecommerce",
      live: "https://ecommerce-bhanuja.vercel.app",
      category: "AI Application",
    },
    {
      title: "Conversational AI Chatbot",
      description:
        "Custom chatbot solution with natural language processing, context awareness, and integration capabilities. Built for customer service automation.",
      icon: Bot,
      tech: ["Python", "FastAPI", "OpenAI", "React", "WebSocket", "PostgreSQL"],
      features: [
        "NLP Processing",
        "Context Awareness",
        "Multi-platform",
        "Analytics Dashboard",
      ],
      github: "https://github.com/bhanuja/ai-chatbot",
      live: "https://chatbot-bhanuja.vercel.app",
      category: "AI/ML",
    },
  ];

  const categories = ["All", "AI Application", "AI/ML", "Full Stack"];

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Featured Projects
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Building <span className="gradient-text">Intelligent</span> Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my work in AI development, full-stack applications, and
            innovative web solutions
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover-lift group overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-gradient-to-r from-primary to-accent rounded-lg group-hover:scale-110 transition-transform">
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
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-1 text-xs text-muted-foreground">
                    {project.features.map((feature, featIndex) => (
                      <div key={featIndex} className="flex items-center gap-1">
                        <div className="w-1 h-1 bg-primary rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 gap-2"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} />
                      Code
                    </a>
                  </Button>
                  <Button
                    variant="gradient"
                    size="sm"
                    className="flex-1 gap-2"
                    asChild
                  >
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="gap-2" asChild>
            <a href="https://github.com/bhanuja" target="_blank" rel="noopener noreferrer">
              View All Projects on GitHub
              <ExternalLink size={20} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
