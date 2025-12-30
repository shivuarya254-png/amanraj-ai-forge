import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Award, Calendar, Building } from "lucide-react";

const Certificates = () => {
  const certificates = [
    {
      title: "Overview of Global Navigation Satellite System",
      issuer: "IIRS, Dehradun",
      date: "2023",
      credentialId: "IIRS-GNSS-2023-001",
      skills: ["Satellite Systems", "Navigation", "Remote Sensing"],
      description:
        "Comprehensive overview of GNSS technology and its applications in navigation and geospatial studies.",
      verified: true,
      link: "#"
    },
    {
      title: "The Joy of Computing Using Python",
      issuer: "NPTEL",
      date: "2022",
      credentialId: "NPTEL-PYTHON-2022-002",
      skills: ["Python", "Problem Solving", "Algorithms"],
      description:
        "Learned Python programming concepts, problem-solving, and real-world applications through NPTEL course.",
      verified: true,
      link: "#"
    },
    {
      title: "Introduction to Cybersecurity",
      issuer: "Cisco / Networking Academy",
      date: "2022",
      credentialId: "CYBERSEC-INTRO-2022-003",
      skills: ["Cybersecurity Basics", "Network Security", "Threat Analysis"],
      description:
        "Fundamentals of cybersecurity, including network safety, online threats, and defense mechanisms.",
      verified: true,
      link: "#"
    },
    {
      title: "NCC Cadet Certification",
      issuer: "National Cadet Corps (NCC)",
      date: "2020",
      credentialId: "NCC-CADET-2020-004",
      skills: ["Leadership", "Discipline", "Teamwork"],
      description:
        "Certification recognizing successful completion of NCC training, focusing on discipline, leadership, and service.",
      verified: true,
      link: "#"
    }
  ];

  const certificationStats = [
    { number: "4+", label: "Certifications Earned" },
    { number: "3", label: "Major Platforms" },
    { number: "100%", label: "Verified Credentials" },
    { number: "2023", label: "Latest Certification" }
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
            Certifications and achievements that highlight my technical skills, continuous learning, 
            and commitment to excellence in AI, ML, and software development.
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
                I'm constantly upgrading my skills and pursuing certifications to stay ahead in AI, ML, 
                and software development. Always exploring new tools and technologies to deliver 
                impactful solutions.
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
