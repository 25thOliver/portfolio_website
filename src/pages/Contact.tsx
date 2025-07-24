import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "oliversamwel8@gmail.com",
      href: "mailto:oliversamwel8@gmail.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Nairobi, Kenya",
      href: null
    },
    {
      icon: Phone,
      label: "Available for",
      value: "Remote opportunities",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      username: "@25thOliver",
      href: "https://github.com/25thOliver",
      description: "Check out my code and projects"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      username: "samwel-oliver",
      href: "https://linkedin.com/in/samwel-oliver",
      description: "Let's connect professionally"
    },
    {
      icon: Twitter,
      label: "Twitter",
      username: "@bug_alchemist",
      href: "https://twitter.com/bug_alchemist",
      description: "Follow for tech insights"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      // In a real application, you would send this data to your backend
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
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
                <MessageCircle className="w-12 h-12 text-primary" />
              </div>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold">Get In Touch</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I'm always interested in hearing about new opportunities, collaborating on 
              interesting projects, or just having a chat about technology. Don't hesitate 
              to reach out!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="font-heading text-3xl font-bold">Send Me a Message</h2>
                <p className="text-muted-foreground">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>
              </div>

              <Card className="project-card">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project, idea, or just say hello..."
                      className="min-h-[120px]"
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="btn-hero w-full group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="font-heading text-3xl font-bold">Contact Information</h2>
                <p className="text-muted-foreground">
                  Here's how you can reach me directly or connect with me on social media.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="project-card">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{info.label}</p>
                        {info.href ? (
                          <a 
                            href={info.href}
                            className="text-muted-foreground hover:text-primary transition-smooth"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h3 className="font-heading text-xl font-semibold">Connect With Me</h3>
                <div className="space-y-3">
                  {socialLinks.map((social, index) => (
                    <Card key={index} className="project-card group cursor-pointer">
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-4"
                      >
                        <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-smooth">
                          <social.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <p className="font-medium text-foreground group-hover:text-primary transition-smooth">
                              {social.label}
                            </p>
                            <span className="text-muted-foreground text-sm">
                              {social.username}
                            </span>
                          </div>
                          <p className="text-muted-foreground text-sm">
                            {social.description}
                          </p>
                        </div>
                      </a>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Availability Section */}
      <section className="py-16 bg-secondary/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="project-card">
            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <div className="p-4 bg-green-500/10 rounded-full">
                  <MessageCircle className="w-12 h-12 text-green-600" />
                </div>
              </div>
              <h2 className="font-heading text-2xl font-bold">Currently Available</h2>
              <p className="text-muted-foreground leading-relaxed">
                I'm currently open to new opportunities in software development and data 
                engineering roles. Whether you're looking for a full-time developer, 
                freelance consultant, or someone to collaborate on an interesting project, 
                I'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="btn-hero"
                  onClick={() => window.open('/my_resume.pdf', '_blank')}
                >
                  View My Resume
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => window.location.href = '/projects'}
                >
                  See My Work
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Response Time */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="accent-gradient rounded-2xl p-12 space-y-6">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-accent-foreground">
              Quick Response Time
            </h2>
            <p className="text-lg text-accent-foreground/80">
              I typically respond to messages within 24 hours. For urgent inquiries, 
              feel free to reach out directly via email.
            </p>
            <Button 
              size="lg" 
              className="btn-hero"
              onClick={() => window.location.href = 'mailto:oliversamwel8@gmail.com'}
            >
              <Mail className="mr-2 h-5 w-5" />
              Send Direct Email
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;