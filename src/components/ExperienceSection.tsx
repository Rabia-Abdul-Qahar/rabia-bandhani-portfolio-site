
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Trainee Engineer",
      company: "Hamdard University",
      location: "Karachi, Pakistan",
      period: "April 2024 - Oct 2024",
      type: "Experience",
      description: "Worked as a trainee engineer supporting academic operations and leading departmental initiatives while providing hands-on instruction in data analytics.",
      highlights: [
        "Assisted senior faculty in developing and updating undergraduate course and lab outlines in line with HEC guidelines",
        "Led a team to manage departmental marketing across all social media platforms during tenure",
        "Conducted lab sessions and provided hands-on instruction in Data Analytics",
        "Contributed to the creation of advanced lab manuals to enhance student learning and engagement"
      ]
    },
    {
      title: "Bachelor of Engineering in Software Engineering",
      company: "Mehran University of Engineering and Technology",
      location: "Jamshoro, Pakistan",
      period: "Oct 2018 - Dec 2022",
      type: "Education",
      description: "Completed Bachelor's degree with focus on software engineering, algorithms, and data structures. Maintained excellent academic performance while working on various programming projects.",
      highlights: [
        "Strong foundation in programming fundamentals",
        "Active participation in coding competitions",
        "Leadership role in university tech club"
      ]
    },
    {
      title: "Intern",
      company: "Interns Pakistan",
      location: "Remote",
      period: "Oct 2022 - Nov 2022",
      type: "Experience",
      description: "Completed comprehensive web development training and successfully delivered a functional WordPress website, gaining hands-on experience in modern web technologies.",
      highlights: [
        "Completed self-paced training in HTML, CSS, JavaScript, PHP, and WordPress",
        "Applied skills to successfully develop and deliver a functional WordPress website as part of internship work"
      ]
    },
    {
      title: "Intern",
      company: "The Sparks Foundation",
      location: "Remote",
      period: "Dec 2021 - Jan 2022",
      type: "Experience",
      description: "Led comprehensive data science projects focusing on data analysis and visualization using Python programming and Jupyter notebooks.",
      highlights: [
        "Led various data science projects using Python and Jupyter, delivering insights through effective data analysis and visualization"
      ]
    },
    {
      title: "Intern",
      company: "LetsGrowMore",
      location: "Remote",
      period: "Dec 2021 - Jan 2022",
      type: "Experience",
      description: "Executed end-to-end data science projects, demonstrating proficiency in Python programming and delivering actionable business insights.",
      highlights: [
        "Led and executed data science projects using Python and Jupyter, delivering impactful insights and solutions"
      ]
    },
    {
      title: "Intern",
      company: "Gexton",
      location: "Hyderabad, Pakistan",
      period: "Dec 2019 - Feb 2020",
      type: "Experience",
      description: "Gained extensive experience in Java development through hands-on projects and contributed to innovative software solutions.",
      highlights: [
        "Worked on a variety of Java projects ranging from beginner to advanced levels",
        "Contributed to the design and development of innovative software solutions using Java"
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
