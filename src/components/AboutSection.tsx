
import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Brain, Zap } from "lucide-react";

const AboutSection = () => {
  const skills = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Software Development",
      description: "Proficient in modern programming languages and frameworks"
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Data Analysis",
      description: "Experience with data manipulation and visualization tools"
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Machine Learning",
      description: "Exploring ML algorithms and AI applications"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Problem Solving",
      description: "Strong analytical and critical thinking skills"
    }
  ];

  const technologies = [
    "Python", "JavaScript", "React", "Node.js", "SQL", "MongoDB",
    "Pandas", "NumPy", "Scikit-learn", "Git", "AWS", "Docker"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A passionate learner combining software development skills with data science aspirations
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Personal Story */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Completed a Bachelor's degree with a focus on software engineering, algorithms, and data structures. 
                  Maintained excellent academic performance while working on various programming projects, where I've discovered 
                  my passion for both software development and data science. My journey began with a 
                  curiosity about how technology can solve real-world problems.
                </p>
                <p>
                  Through various projects and coursework, I've developed strong programming skills and 
                  a keen interest in data analysis. I love the challenge of turning complex data into 
                  actionable insights and building applications that make a difference.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing to 
                  open-source projects, or learning about the latest developments in AI and machine learning.
                </p>
              </div>
            </div>

            {/* Skills Grid */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">What I Do</h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <Card key={index} className="p-4 hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <div className="text-primary mb-3">
                        {skill.icon}
                      </div>
                      <h4 className="font-semibold mb-2">{skill.title}</h4>
                      <p className="text-sm text-muted-foreground">{skill.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Technologies */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-8">Technologies I Work With</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
