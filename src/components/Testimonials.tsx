import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO",
      company: "TechFlow Solutions",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      content: "Aman delivered an exceptional AI-powered customer service chatbot that reduced our response time by 80%. His expertise in LangChain and OpenAI integration is outstanding. The solution he built handles complex queries with remarkable accuracy.",
      rating: 5,
      project: "AI Customer Service Bot"
    },
    {
      name: "Michael Chen",
      role: "Product Manager",
      company: "InnovateLab",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: "Working with Aman on our MERN stack application was fantastic. He not only delivered a robust, scalable solution but also integrated AI features that our users love. His attention to detail and problem-solving skills are top-notch.",
      rating: 5,
      project: "Smart Learning Platform"
    },
    {
      name: "Emily Rodriguez",
      role: "Founder",
      company: "StartupVenture",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: "Aman transformed our manual resume screening process with an intelligent AI system. The RAG implementation he built helps us find the perfect candidates quickly. His knowledge of vector databases and embeddings is impressive.",
      rating: 5,
      project: "AI Resume Screening System"
    },
    {
      name: "David Kim",
      role: "Tech Lead",
      company: "Digital Dynamics",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: "The e-commerce platform Aman built for us includes sophisticated AI recommendations that increased our sales by 35%. His full-stack skills combined with AI expertise make him a valuable developer for any project.",
      rating: 5,
      project: "AI-Powered E-commerce"
    },
    {
      name: "Lisa Thompson",
      role: "Operations Director",
      company: "CloudFirst Corp",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
      content: "Aman's knowledge base system using LangChain revolutionized how our team accesses information. The search accuracy and contextual responses are phenomenal. He delivered beyond our expectations and on time.",
      rating: 5,
      project: "Enterprise Knowledge Base"
    },
    {
      name: "James Wilson",
      role: "CEO",
      company: "NextGen Solutions",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
      content: "Aman is a rare find - a developer who truly understands both traditional web development and cutting-edge AI. His communication is excellent, and he always goes the extra mile to ensure project success.",
      rating: 5,
      project: "AI Analytics Dashboard"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={`${
          index < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="section-padding bg-secondary/20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Client Testimonials</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            What Clients <span className="gradient-text">Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trusted by startups and enterprises alike for delivering exceptional AI-powered solutions
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover-lift group relative overflow-hidden">
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote size={48} className="text-primary" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Content */}
                <blockquote className="text-muted-foreground italic leading-relaxed mb-6">
                  "{testimonial.content}"
                </blockquote>

                {/* Project Badge */}
                <Badge variant="outline" className="mb-4 text-xs">
                  {testimonial.project}
                </Badge>

                {/* Client Info */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Client Logos or Summary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold gradient-text mb-2">50+</div>
            <div className="text-muted-foreground">Happy Clients</div>
          </div>
          <div>
            <div className="text-3xl font-bold gradient-text mb-2">95%</div>
            <div className="text-muted-foreground">Client Satisfaction</div>
          </div>
          <div>
            <div className="text-3xl font-bold gradient-text mb-2">100%</div>
            <div className="text-muted-foreground">Project Completion</div>
          </div>
          <div>
            <div className="text-3xl font-bold gradient-text mb-2">24h</div>
            <div className="text-muted-foreground">Average Response</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;