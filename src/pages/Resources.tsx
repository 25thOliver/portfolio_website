import { ExternalLink, Book, Video, Code, Database, Globe, Star, Bookmark } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Resources = () => {
  const resourceCategories = [
    {
      title: "Data Engineering",
      icon: Database,
      description: "Tools and resources for building data pipelines and managing big data",
      resources: [
        {
          name: "Apache Airflow Documentation",
          description: "Comprehensive guide to workflow orchestration",
          url: "https://airflow.apache.org/docs/",
          type: "Documentation",
          free: true
        },
        {
          name: "Data Engineering Cookbook",
          description: "Practical recipes for data engineering challenges",
          url: "https://github.com/andkret/Cookbook",
          type: "GitHub",
          free: true
        },
        {
          name: "The Data Engineering Podcast",
          description: "Weekly podcast about data engineering practices",
          url: "https://www.dataengineeringpodcast.com/",
          type: "Podcast",
          free: true
        },
        {
          name: "Designing Data-Intensive Applications",
          description: "Essential book for understanding distributed systems",
          url: "https://dataintensive.net/",
          type: "Book",
          free: false
        }
      ]
    },
    {
      title: "Full-Stack Development",
      icon: Code,
      description: "Resources for modern web development with React, Django, and more",
      resources: [
        {
          name: "Django Documentation",
          description: "Official Django framework documentation",
          url: "https://docs.djangoproject.com/",
          type: "Documentation",
          free: true
        },
        {
          name: "React Documentation",
          description: "Learn React from the official docs",
          url: "https://react.dev/",
          type: "Documentation",
          free: true
        },
        {
          name: "Full Stack Open",
          description: "Free course on modern web development",
          url: "https://fullstackopen.com/",
          type: "Course",
          free: true
        },
        {
          name: "The Pragmatic Programmer",
          description: "Classic book on software development practices",
          url: "https://pragprog.com/titles/tpp20/",
          type: "Book",
          free: false
        }
      ]
    },
    {
      title: "Python & Programming",
      icon: Code,
      description: "Python resources for data science, web development, and automation",
      resources: [
        {
          name: "Python.org Documentation",
          description: "Official Python documentation and tutorials",
          url: "https://docs.python.org/",
          type: "Documentation",
          free: true
        },
        {
          name: "Real Python",
          description: "High-quality Python tutorials and articles",
          url: "https://realpython.com/",
          type: "Website",
          free: false
        },
        {
          name: "Automate the Boring Stuff",
          description: "Learn Python through practical automation projects",
          url: "https://automatetheboringstuff.com/",
          type: "Book",
          free: true
        },
        {
          name: "Python Weekly",
          description: "Weekly newsletter with Python news and articles",
          url: "https://www.pythonweekly.com/",
          type: "Newsletter",
          free: true
        }
      ]
    },
    {
      title: "Career & Learning",
      icon: Book,
      description: "Resources for professional development and continuous learning",
      resources: [
        {
          name: "Leetcode",
          description: "Practice coding problems and interview preparation",
          url: "https://leetcode.com/",
          type: "Platform",
          free: false
        },
        {
          name: "GitHub",
          description: "Version control and open source collaboration",
          url: "https://github.com/",
          type: "Platform",
          free: true
        },
        {
          name: "Stack Overflow",
          description: "Programming Q&A community",
          url: "https://stackoverflow.com/",
          type: "Community",
          free: true
        },
        {
          name: "Clean Code",
          description: "Essential book on writing maintainable code",
          url: "https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882",
          type: "Book",
          free: false
        }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: Globe,
      description: "Development tools, platforms, and services I recommend",
      resources: [
        {
          name: "VS Code",
          description: "Free, powerful code editor with great extensions",
          url: "https://code.visualstudio.com/",
          type: "Tool",
          free: true
        },
        {
          name: "Docker Documentation",
          description: "Learn containerization with Docker",
          url: "https://docs.docker.com/",
          type: "Documentation",
          free: true
        },
        {
          name: "AWS Free Tier",
          description: "Learn cloud computing with AWS free tier",
          url: "https://aws.amazon.com/free/",
          type: "Platform",
          free: true
        },
        {
          name: "Postman",
          description: "API development and testing tool",
          url: "https://www.postman.com/",
          type: "Tool",
          free: false
        }
      ]
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Book':
        return <Book className="w-4 h-4" />;
      case 'Video':
      case 'Course':
        return <Video className="w-4 h-4" />;
      case 'GitHub':
      case 'Documentation':
        return <Code className="w-4 h-4" />;
      default:
        return <Globe className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Book':
        return 'bg-blue-500/10 text-blue-600';
      case 'Video':
      case 'Course':
        return 'bg-red-500/10 text-red-600';
      case 'GitHub':
        return 'bg-gray-500/10 text-gray-600';
      case 'Documentation':
        return 'bg-green-500/10 text-green-600';
      default:
        return 'bg-purple-500/10 text-purple-600';
    }
  };

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6 fade-in">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-primary/10 rounded-full">
                <Bookmark className="w-12 h-12 text-primary" />
              </div>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold">Developer Resources</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A curated collection of books, courses, tools, and websites that have helped me 
              in my journey as a software developer and data engineer. These resources are 
              handpicked based on quality and practical value.
            </p>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {resourceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-8">
              {/* Category Header */}
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <category.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h2 className="font-heading text-3xl font-bold">{category.title}</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  {category.description}
                </p>
              </div>

              {/* Resources Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.resources.map((resource, resourceIndex) => (
                  <Card 
                    key={resourceIndex} 
                    className="project-card group cursor-pointer"
                    onClick={() => window.open(resource.url, '_blank')}
                  >
                    <div className="space-y-4">
                      {/* Resource Header */}
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <div className={`p-2 rounded-lg ${getTypeColor(resource.type)}`}>
                            {getTypeIcon(resource.type)}
                          </div>
                          <div>
                            <h3 className="font-heading font-semibold group-hover:text-primary transition-smooth">
                              {resource.name}
                            </h3>
                            <div className="flex items-center space-x-2 mt-1">
                              <Badge variant="outline" className="text-xs">
                                {resource.type}
                              </Badge>
                              {resource.free ? (
                                <Badge className="text-xs bg-green-500/10 text-green-600 border-green-200">
                                  Free
                                </Badge>
                              ) : (
                                <Badge variant="secondary" className="text-xs">
                                  Paid
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>
                        <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-smooth" />
                      </div>

                      {/* Resource Description */}
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {resource.description}
                      </p>

                      {/* Action */}
                      <Button variant="ghost" size="sm" className="p-0 h-auto group">
                        <span className="group-hover:text-primary transition-smooth">
                          Visit Resource
                        </span>
                        <ExternalLink className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recommendation Section */}
      <section className="py-16 bg-secondary/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="project-card">
            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Star className="w-12 h-12 text-primary" />
                </div>
              </div>
              <h2 className="font-heading text-2xl font-bold">My Learning Philosophy</h2>
              <p className="text-muted-foreground leading-relaxed">
                I believe in continuous learning and staying updated with the latest technologies. 
                These resources have been instrumental in my growth as a developer. I regularly 
                update this list with new discoveries and remove outdated content to ensure 
                you get the most current and valuable information.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="outline"
                  onClick={() => window.location.href = '/contact'}
                >
                  Suggest a Resource
                </Button>
                <Button 
                  onClick={() => window.location.href = '/blog'}
                >
                  Read My Articles
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="accent-gradient rounded-2xl p-12 space-y-6">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-white/20 rounded-full">
                <Bookmark className="w-8 h-8 text-accent-foreground" />
              </div>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-accent-foreground">
              Stay Updated
            </h2>
            <p className="text-lg text-accent-foreground/80">
              Get notified when I add new resources or update existing ones. 
              I regularly discover new tools and learning materials worth sharing.
            </p>
            <Button 
              size="lg" 
              className="btn-hero"
              onClick={() => window.location.href = '/contact'}
            >
              Get Notifications
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;