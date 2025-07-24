import { Calendar, Clock, Tag, ArrowRight, BookOpen, PenTool } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable Data Pipelines with Apache Airflow",
      excerpt: "Learn how to design and implement robust data pipelines using Apache Airflow for automated ETL processes.",
      content: "In this comprehensive guide, we'll explore the fundamentals of Apache Airflow...",
      date: "2024-01-15",
      readTime: "8 min read",
      tags: ["Data Engineering", "Apache Airflow", "Python"],
      featured: true,
      published: true
    },
    {
      id: 2,
      title: "From Django to React: Building Full-Stack Applications",
      excerpt: "A complete guide to integrating Django REST API with React frontend for modern web applications.",
      content: "Building full-stack applications requires careful consideration of both backend and frontend architectures...",
      date: "2024-01-08",
      readTime: "12 min read",
      tags: ["Django", "React", "Full-Stack"],
      featured: true,
      published: true
    },
    {
      id: 3,
      title: "My Journey into Data Engineering",
      excerpt: "Sharing my transition from web development to data engineering and the lessons learned along the way.",
      content: "My journey into data engineering started with curiosity about how data flows through systems...",
      date: "2024-01-01",
      readTime: "6 min read",
      tags: ["Career", "Data Engineering", "Personal"],
      featured: false,
      published: true
    },
    {
      id: 4,
      title: "Database Design Best Practices for Django Applications",
      excerpt: "Essential database design principles and optimization techniques for Django developers.",
      content: "Effective database design is crucial for building scalable Django applications...",
      date: "2023-12-20",
      readTime: "10 min read",
      tags: ["Django", "Database", "PostgreSQL"],
      featured: false,
      published: true
    },
    {
      id: 5,
      title: "Understanding Modern JavaScript: ES6 and Beyond",
      excerpt: "A comprehensive overview of modern JavaScript features and their practical applications.",
      content: "JavaScript has evolved significantly over the years, introducing powerful features...",
      date: "2023-12-15",
      readTime: "15 min read",
      tags: ["JavaScript", "ES6", "Frontend"],
      featured: false,
      published: true
    }
  ];

  const categories = ["All", "Data Engineering", "Web Development", "Career", "Tutorials"];
  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.filter(post => !post.featured).slice(0, 6);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6 fade-in">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-primary/10 rounded-full">
                <PenTool className="w-12 h-12 text-primary" />
              </div>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold">Blog & Articles</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Sharing my journey in software development, data engineering, and the lessons 
              I've learned along the way. Join me as I explore new technologies and solve 
              interesting problems.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold">Featured Articles</h2>
            <p className="text-lg text-muted-foreground">
              In-depth articles on topics I'm passionate about
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="project-card group cursor-pointer">
                <div className="space-y-4">
                  {/* Post Header */}
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Post Content */}
                  <div className="space-y-3">
                    <h3 className="font-heading text-xl font-semibold group-hover:text-primary transition-smooth">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Read More */}
                  <div className="pt-4">
                    <Button variant="outline" className="group">
                      Read Article
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-16 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold">Recent Posts</h2>
            <p className="text-lg text-muted-foreground">
              Latest thoughts and technical insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <Card key={post.id} className="project-card group cursor-pointer">
                <div className="space-y-4">
                  {/* Post Image Placeholder */}
                  <div className="h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-8 h-8 text-primary/60" />
                  </div>

                  {/* Post Content */}
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                      <span>{formatDate(post.date)}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="font-heading text-lg font-semibold group-hover:text-primary transition-smooth line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {post.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {post.tags.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{post.tags.length - 2}
                      </Badge>
                    )}
                  </div>

                  {/* Read More */}
                  <Button variant="ghost" size="sm" className="group p-0 h-auto">
                    Read more
                    <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter/Subscribe Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="accent-gradient rounded-2xl p-12 space-y-6">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-white/20 rounded-full">
                <PenTool className="w-8 h-8 text-accent-foreground" />
              </div>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-accent-foreground">
              Stay Updated
            </h2>
            <p className="text-lg text-accent-foreground/80">
              Get notified when I publish new articles about development, data engineering, and tech insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-accent-foreground placeholder-accent-foreground/60 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <Button className="btn-hero whitespace-nowrap">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-accent-foreground/60">
              No spam, unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Writing Philosophy */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="project-card">
            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <div className="p-4 bg-primary/10 rounded-full">
                  <BookOpen className="w-12 h-12 text-primary" />
                </div>
              </div>
              <h2 className="font-heading text-2xl font-bold">My Writing Philosophy</h2>
              <p className="text-muted-foreground leading-relaxed">
                I believe in sharing knowledge through clear, practical content. My articles 
                focus on real-world solutions, lessons learned from experience, and insights 
                that can help fellow developers grow. Whether you're just starting your journey 
                or looking to level up your skills, I hope you find value in these posts.
              </p>
              <Button 
                variant="outline" 
                onClick={() => window.location.href = '/contact'}
              >
                Suggest a Topic
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Blog;