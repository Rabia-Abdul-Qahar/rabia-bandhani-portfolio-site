
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Bachelor's in Computer Science",
      company: "University",
      location: "Pakistan",
      period: "2021 - Present",
      type: "Education",
      description: "Currently pursuing Bachelor's degree with focus on software engineering, algorithms, and data structures. Maintaining excellent academic performance while working on various programming projects.",
      highlights: [
        "Strong foundation in programming fundamentals",
        "Active participation in coding competitions",
        "Leadership role in university tech club"
      ]
    },
    {
      title: "Software Development Intern",
      company: "Tech Startup",
      location: "Remote",
      period: "Summer 2023",
      type: "Experience",
      description: "Worked on developing web applications using modern technologies. Collaborated with senior developers to deliver high-quality software solutions.",
      highlights: [
        "Developed responsive web applications",
        "Collaborated in an agile development environment",
        "Gained experience with version control and deployment"
      ]
    },
    {
      title: "Data Science Bootcamp",
      company: "Online Learning Platform",
      location: "Online",
      period: "2023",
      type: "Certification",
      description: "Completed intensive data science program covering machine learning, statistics, and data visualization. Worked on real-world projects with industry datasets.",
      highlights: [
        "Mastered Python libraries for data science",
        "Completed 5 end-to-end ML projects",
        "Learned advanced statistical analysis techniques"
      ]
    },
    {
      title: "Freelance Web Developer",
      company: "Self-Employed",
      location: "Remote",
      period: "2022 - 2023",
      type: "Experience",
      description: "Built custom websites for small businesses and startups. Managed client relationships and delivered projects on time and within budget.",
      highlights: [
        "Successfully completed 10+ client projects",
        "Improved client online presence by 40% on average",
        "Developed strong project management skills"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Experience & Education</h2>
            <p className="text-xl text-muted-foreground">
              My journey in software development and data science
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10"></div>

                  {/* Content Card */}
                  <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        {/* Type Badge */}
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${
                          exp.type === 'Education' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' :
                          exp.type === 'Experience' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' :
                          'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300'
                        }`}>
                          {exp.type}
                        </span>

                        {/* Title and Company */}
                        <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                        <p className="text-primary font-medium mb-3">{exp.company}</p>

                        {/* Meta Information */}
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {exp.location}
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-muted-foreground mb-4">{exp.description}</p>

                        {/* Highlights */}
                        <ul className="space-y-1">
                          {exp.highlights.map((highlight, highlightIndex) => (
                            <li key={highlightIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-primary mt-1.5">•</span>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
