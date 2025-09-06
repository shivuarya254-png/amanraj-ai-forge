import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Award, Calendar, Building } from "lucide-react";

const Certificates = () => {
  const certificates = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2024",
      credentialId: "AWS-CCP-2024-001",
      skills: ["Cloud Computing", "AWS Services", "Cloud Security", "Architecture"],
      description: "Foundational knowledge of AWS cloud services, security, and architectural best practices.",
      verified: true,
      link: "#"
    },
    {
      title: "OpenAI API Certification",
      issuer: "OpenAI",
      date: "2023",
      credentialId: "OPENAI-API-2023-042",
      skills: ["GPT Models", "API Integration", "Prompt Engineering", "AI Ethics"],
      description: "Advanced proficiency in OpenAI API usage, model fine-tuning, and responsible AI development.",
      verified: true,
      link: "#"
    },
    {
      title: "MongoDB Certified Developer",
      issuer: "MongoDB University",
      date: "2023",
      credentialId: "MONGO-DEV-2023-087",
      skills: ["MongoDB", "NoSQL", "Database Design", "Aggregation"],
      description: "Expertise in MongoDB database design, querying, indexing, and application development.",
      verified: true,
      link: "#"
    },
    {
      title: "React Advanced Certification",
      issuer: "Meta",
      date: "2022",
      credentialId: "META-REACT-2022-156",
      skills: ["React.js", "Hooks", "State Management", "Performance"],
      description: "Advanced React concepts including hooks, context, performance optimization, and testing.",
      verified: true,
      link: "#"
    },
    {
      title: "LangChain Fundamentals",
      issuer: "LangChain Academy",
      date: "2024",
      credentialId: "LC-FUND-2024-023",
      skills: ["LangChain", "RAG", "Vector Stores", "AI Agents"],
      description: "Comprehensive understanding of LangChain framework for building AI applications.",
      verified: true,
      link: "#"
    },
    {
      title: "Node.js Application Development",
      issuer: "OpenJS Foundation",
      date: "2022",
      credentialId: "NODEJS-DEV-2022-134",
      skills: ["Node.js", "Express", "API Development", "Microservices"],
      description: "Professional-level Node.js development, including Express.js, APIs, and microservices architecture.",
      verified: true,
      link: "#"
    }
  ];

  const certificationStats = [
    { number: "6+", label: "Certifications Earned" },
    { number: "4", label: "Major Platforms" },
    { number: "100%", label: "Verified Credentials" },
    { number: "2024", label: "Latest Certification" }
  ];

  return (
    <section id="certificates" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Professional Certifications</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Validated <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Industry-recognized certifications that validate my technical skills and commitment to continuous learning
          </p>
        </div>

        {/* Certification Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {certificationStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <Card key={index} className="hover-lift group">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-gradient-to-r from-primary to-accent rounded-lg group-hover:scale-110 transition-transform">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  {cert.verified && (
                    <Badge variant="default" className="bg-green-500 hover:bg-green-600">
                      Verified
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {cert.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Issuer & Date */}
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Building size={16} />
                    {cert.issuer}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar size={16} />
                    {cert.date}
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold">Skills Covered:</h4>
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Credential ID */}
                <div className="text-xs text-muted-foreground">
                  <span className="font-medium">Credential ID:</span> {cert.credentialId}
                </div>

                {/* View Certificate Button */}
                <Button variant="outline" size="sm" className="w-full gap-2 mt-4">
                  <ExternalLink size={16} />
                  View Certificate
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Continuous Learning</h3>
              <p className="text-muted-foreground mb-6">
                I'm constantly updating my skills and pursuing new certifications to stay at the forefront of technology. 
                Currently working on Advanced AI certifications and cloud architecture specializations.
              </p>
              <Button variant="hero" className="gap-2">
                View All Credentials
                <ExternalLink size={20} />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Certificates;