import { Download, MapPin, Calendar, Award, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const About = () => {
  const skills = [
    {
      category: "Backend Development",
      items: ["Django", "Spring Boot", "Node.js", "Python", "Java", "RESTful APIs"]
    },
    {
      category: "Frontend Development", 
      items: ["React", "TypeScript", "HTML/CSS", "Tailwind CSS", "JavaScript", "Vue.js"]
    },
    {
      category: "Data Engineering",
      items: ["Apache Airflow", "PostgreSQL", "MySQL", "Data Pipelines", "ETL", "Python"]
    },
    {
      category: "Tools & Technologies",
      items: ["Git", "Docker", "AWS", "Linux", "CI/CD", "Agile"]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Software Development",
      institution: "KCA University",
      period: "2020 - 2024",
      location: "Nairobi, Kenya"
    }
  ];

  const certifications = [
    "AWS Fundamentals",
    "Python for Data Science",
    "React Development",
    "Database Design and Management"
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 fade-in">
              <h1 className="font-heading text-4xl md:text-5xl font-bold">About Me</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate software developer and aspiring data engineer from Kenya, 
                driven by the desire to create meaningful digital solutions. With a strong 
                foundation in full-stack development and a growing expertise in data engineering, 
                I enjoy tackling complex problems and building scalable applications.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey in tech started with curiosity about how things work, and it has 
                evolved into a commitment to continuous learning and innovation. I believe 
                in the power of technology to transform lives and communities.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="btn-hero"
                  onClick={() => window.open('/my_resume.pdf', '_blank')}
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => window.location.href = '/contact'}
                >
                  Let's Connect
                </Button>
              </div>
            </div>

            {/* Profile Image Placeholder */}
            <div className="flex justify-center bounce-in">
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 shadow-large flex items-center justify-center">
                  <div className="w-72 h-72 rounded-xl bg-white/50 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-4xl font-heading font-bold text-primary">Profile Photo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="project-card text-center">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-heading font-semibold mb-2">Location</h3>
              <p className="text-muted-foreground">Nairobi, Kenya</p>
            </Card>
            
            <Card className="project-card text-center">
              <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-heading font-semibold mb-2">Experience</h3>
              <p className="text-muted-foreground">3+ Years Coding</p>
            </Card>
            
            <Card className="project-card text-center">
              <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-heading font-semibold mb-2">Education</h3>
              <p className="text-muted-foreground">BSc. Software Development</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold">Technical Skills</h2>
            <p className="text-lg text-muted-foreground">
              Technologies and tools I work with
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <Card key={index} className="project-card">
                <h3 className="font-heading text-xl font-semibold mb-4 text-primary">
                  {skill.category}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {skill.items.map((item) => (
                    <div
                      key={item}
                      className="bg-secondary/60 text-center py-2 px-3 rounded-lg text-sm font-medium"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Education */}
            <div className="space-y-6">
              <h2 className="font-heading text-3xl font-bold">Education</h2>
              {education.map((edu, index) => (
                <Card key={index} className="project-card">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading font-semibold text-lg">{edu.degree}</h3>
                      <p className="text-primary font-medium">{edu.institution}</p>
                      <div className="flex items-center text-muted-foreground text-sm mt-2 space-x-4">
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {edu.period}
                        </span>
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {edu.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Certifications */}
            <div className="space-y-6">
              <h2 className="font-heading text-3xl font-bold">Certifications</h2>
              <Card className="project-card">
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="font-medium">{cert}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="accent-gradient rounded-2xl p-12 space-y-6">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-accent-foreground">
              Interested in Working Together?
            </h2>
            <p className="text-lg text-accent-foreground/80">
              I'm always open to discussing new opportunities and interesting projects.
            </p>
            <Button 
              size="lg" 
              className="btn-hero"
              onClick={() => window.location.href = '/contact'}
            >
              Let's Talk
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;