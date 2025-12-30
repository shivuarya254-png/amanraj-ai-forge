import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  Calendar,
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "amanraj6221@gmail.com",
      link: "mailto:amanraj6221@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8521562762",
      link: "tel:+918521562762",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India",
      link: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      link: "https://github.com/your-github-username",
      username: "GitHub Profile",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/your-linkedin-username",
      username: "LinkedIn Profile",
    },
  ];

  const availabilityStatus = {
    status: "Open to Opportunities",
    message:
      "Actively seeking Software Development, Full‑Stack, and Backend Engineering roles",
    responseTime: "Usually responds within 24 hours",
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Get In Touch
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Let’s Build Something{" "}
            <span className="gradient-text">Impactful</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I’m Aman Raj, a full‑stack developer with strong CS fundamentals and
            hands‑on experience in building scalable web and AI‑assisted
            systems. Let’s collaborate and turn ideas into production‑ready
            solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            {/* Availability Status */}
            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-semibold text-green-800">
                    {availabilityStatus.status}
                  </span>
                </div>
                <p className="text-green-700 text-sm mb-2">
                  {availabilityStatus.message}
                </p>
                <p className="text-green-600 text-xs">
                  {availabilityStatus.responseTime}
                </p>
              </CardContent>
            </Card>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors group"
                >
                  <div className="p-3 bg-gradient-to-r from-primary to-accent rounded-lg group-hover:scale-110 transition-transform">
                    <info.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">
                      {info.label}
                    </div>
                    <div className="font-medium group-hover:text-primary transition-colors">
                      {info.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="font-semibold">Connect Online</h3>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors group"
                >
                  <div className="p-3 bg-gradient-to-r from-primary to-accent rounded-lg group-hover:scale-110 transition-transform">
                    <social.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">
                      {social.label}
                    </div>
                    <div className="font-medium group-hover:text-primary transition-colors">
                      {social.username}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="space-y-3">
              <Button variant="outline" className="w-full gap-2">
                <Calendar size={16} />
                Schedule a Call
              </Button>
              <Button variant="hero" className="w-full gap-2">
                <Mail size={16} />
                Send Email
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="text-2xl">Send a Message</CardTitle>
                <p className="text-muted-foreground">
                  Have an opportunity, project idea, or collaboration in mind?
                  Drop a message and I’ll get back to you.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">First Name</label>
                    <Input placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Last Name</label>
                    <Input placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="john.doe@example.com" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Subject</label>
                  <Input placeholder="Job Opportunity / Project Collaboration" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Project Type</label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Full‑Stack Development",
                      "Backend APIs",
                      "AI Integration",
                      "Internship / Job",
                      "Consultation",
                      "Other",
                    ].map((type) => (
                      <Badge
                        key={type}
                        variant="outline"
                        className="cursor-pointer hover:bg-primary hover:text-white transition-colors"
                      >
                        {type}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea
                    placeholder="Tell me about your requirements, timeline, or role details..."
                    rows={6}
                  />
                </div>

                <div className="space-y-4">
                  <div className="text-xs text-muted-foreground">
                    Your information is safe and will only be used to respond to
                    your inquiry.
                  </div>
                  <Button variant="hero" size="lg" className="w-full gap-2">
                    <Send size={20} />
                    Send Message
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
