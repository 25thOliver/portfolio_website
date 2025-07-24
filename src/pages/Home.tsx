import { ArrowRight, Download, Code, Database, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Home = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Building scalable web applications with Django, React, and Spring Boot"
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Transforming raw data into valuable insights using Airflow and Python"
    },
    {
      icon: Sparkles,
      title: "Innovation",
      description: "Always exploring new technologies and solving complex problems"
    }
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 fade-in">
              <div className="space-y-4">
                <h1 className="font-heading text-4xl md:text-6xl font-bold leading-tight">
                  Hi, I'm <span className="text-primary-light">Oliver Samwel</span>
                </h1>
                <p className="text-xl md:text-2xl font-medium opacity-90">
                  Software Developer & Aspiring Data Engineer
                </p>
                <p className="text-lg md:text-xl opacity-80 max-w-2xl">
                  Turning data into impact. Building with code and curiosity.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="btn-hero group"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="btn-outline-hero"
                  onClick={() => window.open('/my_resume.pdf', '_blank')}
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
              </div>
            </div>

            {/* Profile Photo Placeholder */}
            <div className="flex justify-center lg:justify-end bounce-in">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-glow">
                  <div className="w-72 h-72 rounded-full bg-gradient-to-br from-primary-light to-white/20 flex items-center justify-center">
                    <span className="text-6xl font-heading font-bold text-primary">OS</span>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-accent rounded-full flex items-center justify-center shadow-large">
                  <Code className="w-10 h-10 text-accent-foreground" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16 slide-up">
            <h2 className="font-heading text-3xl md:text-4xl font-bold">What I Do</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate about creating digital solutions that make a difference
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <Card 
                key={index} 
                className="project-card text-center group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-smooth">
                  <highlight.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">{highlight.title}</h3>
                <p className="text-muted-foreground">{highlight.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section id="projects" className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold">Featured Projects</h2>
            <p className="text-lg text-muted-foreground">
              Some of my recent work that I'm proud of
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Banks Beacon Finder",
                description: "Python/Django application for locating nearby banking services",
                tech: ["Python", "Django", "PostgreSQL"]
              },
              {
                title: "CharityConnect",
                description: "Full-stack platform connecting donors with charitable organizations",
                tech: ["Django", "React", "PostgreSQL"]
              },
              {
                title: "Saharan University Portal",
                description: "Student management system with modern architecture",
                tech: ["TypeScript", "React", "Java", "Spring Boot"]
              }
            ].map((project, index) => (
              <Card key={index} className="project-card">
                <div className="h-40 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg mb-4 flex items-center justify-center">
                  <Code className="w-12 h-12 text-primary/60" />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              className="btn-hero group"
              onClick={() => window.location.href = '/projects'}
            >
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="accent-gradient rounded-2xl p-12 space-y-6">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-accent-foreground">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-lg text-accent-foreground/80">
              I'm always excited to work on new projects and collaborate with talented individuals.
            </p>
            <Button 
              size="lg" 
              className="btn-hero"
              onClick={() => window.location.href = '/contact'}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;