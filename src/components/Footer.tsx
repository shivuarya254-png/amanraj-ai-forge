import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, ArrowUp, Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" }
  ];

  const services = [
    "AI Development",
    "Full Stack Apps",
    "RAG Systems",
    "API Integration",
    "Consultation",
    "Code Review"
  ];

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "#", label: "Email" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent"></div>
      </div>
      
      <div className="relative">
        {/* Main Footer Content */}
        <div className="section-padding border-b border-background/20">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
              {/* Brand Section */}
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <div className="text-3xl font-bold mb-2">
                    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      Aman Raj
                    </span>
                  </div>
                  <Badge variant="secondary" className="mb-4">
                    Gen AI Developer
                  </Badge>
                  <p className="text-background/80 max-w-md leading-relaxed">
                    Transforming ideas into intelligent, AI-powered solutions. 
                    Building the future of web applications with cutting-edge technology 
                    and innovative design.
                  </p>
                </div>

                {/* Contact Info */}
                <div className="space-y-2 text-sm text-background/80">
                  <div>📧 aman.raj.dev@gmail.com</div>
                  <div>📱 +91 9876543210</div>
                  <div>📍 Bangalore, India</div>
                </div>

                {/* Social Links */}
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="icon"
                      className="border-background/20 text-background hover:bg-background hover:text-foreground"
                      asChild
                    >
                      <a href={social.href} aria-label={social.label}>
                        <social.icon size={18} />
                      </a>
                    </Button>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold">Quick Links</h3>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-background/80 hover:text-background transition-colors relative group"
                      >
                        {link.name}
                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold">Services</h3>
                <ul className="space-y-3">
                  {services.map((service, index) => (
                    <li key={index} className="text-background/80 text-sm">
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-background/80 text-sm">
                <p className="flex items-center gap-2">
                  © 2024 Aman Raj. Made with <Heart size={16} className="text-red-500 fill-current" /> 
                  and lots of ☕
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-background/60 text-xs">
                  All rights reserved
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-background/20 text-background hover:bg-background hover:text-foreground gap-2"
                  onClick={scrollToTop}
                >
                  <ArrowUp size={16} />
                  Back to Top
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;