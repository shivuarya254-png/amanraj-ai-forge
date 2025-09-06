import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download, Mail, Github, Linkedin, Twitter } from "lucide-react";
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
                👋 Hello, I'm
              </Badge>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                <span className="gradient-text">Aman Raj</span>
              </h1>
              <div className="text-xl lg:text-2xl text-muted-foreground space-y-2">
                <p>Gen AI Developer & MERN Stack Expert</p>
                <p className="text-lg">
                  Building the future with <span className="gradient-text font-semibold">AI-powered</span> web applications
                </p>
              </div>
            </div>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              I craft intelligent applications using cutting-edge technologies like MERN Stack, 
              Generative AI, and modern cloud solutions. From RAG systems to full-stack apps, 
              I turn complex ideas into beautiful, functional products.
            </p>

            {/* Experience Badge */}
            <div className="flex flex-wrap gap-4">
              <Badge variant="outline" className="px-4 py-2 text-sm">
                🚀 3+ Years Experience
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm">
                🤖 AI Specialist
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm">
                💻 Full Stack Developer
              </Badge>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="hero" size="lg" className="gap-2 group">
                View My Work
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                <Download size={20} />
                Download Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <span className="text-sm text-muted-foreground">Connect with me:</span>
              <div className="flex gap-3">
                <Button variant="ghost" size="icon" className="hover-lift">
                  <Github size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="hover-lift">
                  <Linkedin size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="hover-lift">
                  <Twitter size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="hover-lift">
                  <Mail size={20} />
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
                  alt="Aman Raj - Gen AI Developer"
                  className="w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover bg-background"
                />
              </div>
              {/* Floating badges */}
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