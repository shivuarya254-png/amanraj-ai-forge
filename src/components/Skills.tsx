import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      title: "Generative AI & ML",
      skills: [
        { name: "OpenAI GPT Models", level: 90, experience: "2+ years" },
        { name: "LangChain Framework", level: 85, experience: "1.5+ years" },
        { name: "Vector Databases (Pinecone)", level: 80, experience: "1+ year" },
        { name: "RAG Implementation", level: 85, experience: "1.5+ years" },
        { name: "Prompt Engineering", level: 95, experience: "2+ years" },
        { name: "Fine-tuning LLMs", level: 75, experience: "1+ year" }
      ]
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", level: 95, experience: "3+ years" },
        { name: "Next.js", level: 85, experience: "2+ years" },
        { name: "TypeScript", level: 90, experience: "2.5+ years" },
        { name: "Tailwind CSS", level: 95, experience: "2+ years" },
        { name: "Redux/Zustand", level: 80, experience: "2+ years" },
        { name: "Responsive Design", level: 95, experience: "3+ years" }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 90, experience: "3+ years" },
        { name: "Express.js", level: 90, experience: "3+ years" },
        { name: "MongoDB", level: 85, experience: "2.5+ years" },
        { name: "PostgreSQL", level: 80, experience: "2+ years" },
        { name: "REST APIs", level: 95, experience: "3+ years" },
        { name: "Socket.IO", level: 85, experience: "2+ years" }
      ]
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS Services", level: 80, experience: "2+ years" },
        { name: "Docker", level: 75, experience: "1.5+ years" },
        { name: "Vercel/Netlify", level: 90, experience: "2+ years" },
        { name: "GitHub Actions", level: 80, experience: "1.5+ years" },
        { name: "Firebase", level: 85, experience: "2+ years" },
        { name: "Serverless Functions", level: 80, experience: "1.5+ years" }
      ]
    }
  ];

  const tools = [
    "VS Code", "Postman", "GitHub", "Figma", "Jupyter Notebook", 
    "OpenAI Playground", "Hugging Face", "MongoDB Compass", "AWS Console", 
    "Docker Desktop", "Vercel CLI", "Stripe Dashboard"
  ];

  const achievements = [
    { number: "15+", label: "AI Projects Completed" },
    { number: "3+", label: "Years Experience" },
    { number: "50K+", label: "Lines of Code" },
    { number: "10+", label: "Happy Clients" }
  ];

  return (
    <section id="skills" className="section-padding bg-secondary/20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Skills & Expertise</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Proficiency</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical skills, tools, and technologies I work with
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">
                {achievement.number}
              </div>
              <div className="text-muted-foreground">{achievement.label}</div>
            </div>
          ))}
        </div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="hover-lift">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 gradient-text">
                  {category.title}
                </h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs">
                            {skill.experience}
                          </Badge>
                          <span className="text-sm text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tools & Technologies */}
        <Card className="hover-lift">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-6 gradient-text text-center">
              Tools & Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {tools.map((tool, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="px-4 py-2 text-sm hover:bg-primary hover:text-white transition-colors cursor-default"
                >
                  {tool}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;