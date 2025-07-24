import { useState } from "react";
import { ExternalLink, Github, Code, Database, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Banks Beacon Finder",
      description:
        "A comprehensive Python/Django application designed to help users locate nearby banking services. Features include real-time location tracking, bank information database, and user-friendly interface for efficient bank discovery.",
      longDescription:
        "Banks Beacon Finder solves the common problem of finding nearby banking services in unfamiliar areas. Built with Django for robust backend functionality and PostgreSQL for efficient data management.",
      image: "/api/placeholder/600/400",
      technologies: [
        "Python",
        "Django",
        "PostgreSQL",
        "JavaScript",
        "Bootstrap",
        "HTML/CSS",
      ],
      githubUrl: "https://github.com/25thOliver/banks-beacon-finder",
      liveUrl: "https://banks-beacon-finder.vercel.app/",
      category: "Web Application",
      featured: true,
    },
    {
      id: 2,
      title: "CharityConnect",
      description:
        "A full-stack platform that connects donors with charitable organizations. Features secure donation processing, organization profiles, impact tracking, and community features to enhance charitable giving.",
      longDescription:
        "CharityConnect addresses the trust gap between donors and charitable organizations by providing transparency, impact tracking, and secure donation processing. Built with modern web technologies for scalability and user experience.",
      image: "/api/placeholder/600/400",
      technologies: [
        "Django",
        "React",
        "PostgreSQL",
        "Stripe API",
        "Redux",
        "Tailwind CSS",
      ],
      githubUrl: "https://github.com/25thOliver/charityconnect",
      liveUrl: "https://charityconnect-demo.com",
      category: "Full-Stack Application",
      featured: true,
    },
    {
      id: 3,
      title: "Saharan University Portal",
      description:
        "A comprehensive student management system built with modern architecture. Features include student registration, course management, grade tracking, and administrative tools for university operations.",
      longDescription:
        "This university portal system demonstrates enterprise-level application development with microservices architecture, providing scalable solutions for educational institutions.",
      image: "/api/placeholder/600/400",
      technologies: [
        "TypeScript",
        "React",
        "Java",
        "Spring Boot",
        "MySQL",
        "Docker",
      ],
      githubUrl: "https://github.com/25thOliver/saharan-university-portal",
      liveUrl: null,
      category: "Enterprise Application",
      featured: true,
    },
    {
      id: 4,
      title: "Data Pipeline Manager",
      description:
        "An Apache Airflow-based data pipeline management system for processing large datasets. Features include automated ETL processes, data quality checks, and monitoring dashboard.",
      longDescription:
        "This project showcases data engineering capabilities with robust pipeline management, error handling, and scalable architecture for big data processing.",
      image: "/api/placeholder/600/400",
      technologies: [
        "Python",
        "Apache Airflow",
        "PostgreSQL",
        "Docker",
        "Pandas",
        "NumPy",
      ],
      githubUrl: "https://github.com/25thOliver/data-pipeline-manager",
      liveUrl: null,
      category: "Data Engineering",
      featured: false,
    },
    {
      id: 5,
      title: "Portfolio Analytics Dashboard",
      description:
        "A React-based analytics dashboard for tracking project metrics and performance indicators. Features real-time data visualization and interactive charts.",
      longDescription:
        "Built to track and analyze various project metrics, this dashboard provides insights into development patterns and project success indicators.",
      image: "/api/placeholder/600/400",
      technologies: [
        "React",
        "TypeScript",
        "Chart.js",
        "Node.js",
        "Express",
        "MongoDB",
      ],
      githubUrl: "https://github.com/25thOliver/portfolio-analytics",
      liveUrl: "https://analytics-dashboard-demo.com",
      category: "Data Visualization",
      featured: false,
    },
    {
      id: 6,
      title: "API Gateway Service",
      description:
        "A microservices API gateway built with Spring Boot for managing and routing requests across multiple services. Features include authentication, rate limiting, and request logging.",
      longDescription:
        "This API gateway demonstrates microservices architecture patterns with robust security, monitoring, and scalability features.",
      image: "/api/placeholder/600/400",
      technologies: ["Java", "Spring Boot", "Redis", "Docker", "MySQL", "JWT"],
      githubUrl: "https://github.com/25thOliver/api-gateway-service",
      liveUrl: null,
      category: "Backend Service",
      featured: false,
    },
  ];

  const categories = [
    "All",
    "Web Application",
    "Full-Stack Application",
    "Enterprise Application",
    "Data Engineering",
    "Data Visualization",
    "Backend Service",
  ];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6 fade-in">
            <h1 className="font-heading text-4xl md:text-5xl font-bold">
              My Projects
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A collection of projects that showcase my skills in full-stack
              development, data engineering, and problem-solving. Each project
              represents a unique challenge and learning opportunity.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground">
              Projects I'm most proud of
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <Card key={project.id} className="project-card group">
                {/* Project Image */}
                <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg mb-6 flex items-center justify-center overflow-hidden">
                  <div className="flex items-center justify-center text-primary/60">
                    {project.category.includes("Data") ? (
                      <Database size={48} />
                    ) : (
                      <Code size={48} />
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="font-heading text-xl font-semibold group-hover:text-primary transition-smooth">
                      {project.title}
                    </h3>
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Project Links */}
                  <div className="flex space-x-3 pt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    {project.liveUrl && (
                      <Button
                        size="sm"
                        className="flex-1"
                        onClick={() => window.open(project.liveUrl, "_blank")}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-16 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold">
              All Projects
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore all my work by category
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="transition-smooth"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="project-card group">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Project Image */}
                  <div className="h-40 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center">
                    <div className="flex items-center justify-center text-primary/60">
                      {project.category.includes("Data") ? (
                        <Database size={32} />
                      ) : (
                        <Code size={32} />
                      )}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-heading text-lg font-semibold group-hover:text-primary transition-smooth">
                          {project.title}
                        </h3>
                        {project.featured && (
                          <Badge className="text-xs bg-primary text-primary-foreground">
                            Featured
                          </Badge>
                        )}
                      </div>
                      <Badge variant="outline" className="text-xs mb-3">
                        {project.category}
                      </Badge>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description.length > 120
                        ? `${project.description.substring(0, 120)}...`
                        : project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Project Links */}
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(project.githubUrl, "_blank")}
                      >
                        <Github className="w-4 h-4 mr-1" />
                        Code
                      </Button>
                      {project.liveUrl && (
                        <Button
                          size="sm"
                          onClick={() => window.open(project.liveUrl, "_blank")}
                        >
                          <Globe className="w-4 h-4 mr-1" />
                          Live
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* GitHub CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="accent-gradient rounded-2xl p-12 space-y-6">
            <Github className="w-16 h-16 mx-auto text-accent-foreground" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-accent-foreground">
              Explore More on GitHub
            </h2>
            <p className="text-lg text-accent-foreground/80">
              Check out my GitHub profile for more projects, contributions, and
              open-source work.
            </p>
            <Button
              size="lg"
              className="btn-hero"
              onClick={() =>
                window.open("https://github.com/25thOliver", "_blank")
              }
            >
              <Github className="mr-2 h-5 w-5" />
              Visit GitHub Profile
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
