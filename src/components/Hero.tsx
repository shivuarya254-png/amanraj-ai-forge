import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download, Mail, Github, Linkedin } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  return (
    <section id="home" className="section-padding bg-gradient-to-br from-background via-secondary/30 to-background min-h-screen flex items-center">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-sm px-4 py-2">
                 Hello, I'm
              </Badge>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                <span className="gradient-text">CHANDRAGIRI Bhanuja</span>
              </h1>
              <div className="text-xl lg:text-2xl text-muted-foreground space-y-2">
                <p>AI & Full-Stack Developer</p>
                <p className="text-lg">
                  Turning ideas into <span className="gradient-text font-semibold">AI-powered</span> applications
                </p>
              </div>
            </div>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              I design and develop intelligent solutions that combine AI, full-stack development, 
              and modern cloud technologies. From chatbots and RAG systems to scalable web apps, 
              I build tools that make ideas a reality.
            </p>

            {/* Experience Badge */}
            <div className="flex flex-wrap gap-4">
              <Badge variant="outline" className="px-4 py-2 text-sm">
                🚀 1+ Years Experience
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm">
                🤖 AI Enthusiast
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm">
                💻 MERN Stack Developer
              </Badge>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="hero" size="lg" className="gap-2 group">
                View My Work
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="gap-2" asChild>
                <a href="/resume.pdf" download>
                  <Download size={20} />
                  Download Resume
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <span className="text-sm text-muted-foreground">Connect with me:</span>
              <div className="flex gap-3">
                <Button variant="ghost" size="icon" className="hover-lift" asChild>
                  <a href="https://github.com/BhanujaChandragiri" target="_blank" rel="noopener noreferrer">
                    <Github size={20} />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" className="hover-lift" asChild>
                  <a href="https://www.linkedin.com/in/bhanuja-chandragiri-063749308" target="_blank" rel="noopener noreferrer">
                    <Linkedin size={20} />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" className="hover-lift" asChild>
                  <a href="mailto:bhanuja.2002@gmail.com">
                    <Mail size={20} />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <div className="relative bg-gradient-to-r from-primary to-accent p-1 rounded-full">
                <img
                  src={profilePhoto}
                  alt="Bhanuja - AI & Full-Stack Developer"
                  className="w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover bg-background"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-background shadow-lg rounded-full px-4 py-2 border border-border">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Available for hire</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
