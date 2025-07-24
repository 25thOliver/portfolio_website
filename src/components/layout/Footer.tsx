import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { href: 'https://github.com/25thOliver', icon: Github, label: 'GitHub' },
    { href: 'https://linkedin.com/in/samwel-oliver', icon: Linkedin, label: 'LinkedIn' },
    { href: 'https://twitter.com/bug_alchemist', icon: Twitter, label: 'Twitter' },
    { href: 'mailto:oliversamwel8@gmail.com', icon: Mail, label: 'Email' },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-xl text-primary">Oliver Samwel</h3>
            <p className="text-muted-foreground">
              Software Developer & Aspiring Data Engineer from Kenya. 
              Turning data into impact through code and curiosity.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-foreground">Quick Links</h4>
            <div className="space-y-2">
              <a href="/about" className="block text-muted-foreground hover:text-primary transition-smooth">About</a>
              <a href="/projects" className="block text-muted-foreground hover:text-primary transition-smooth">Projects</a>
              <a href="/blog" className="block text-muted-foreground hover:text-primary transition-smooth">Blog</a>
              <a href="/resources" className="block text-muted-foreground hover:text-primary transition-smooth">Resources</a>
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-foreground">Connect With Me</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-secondary rounded-lg text-muted-foreground hover:text-primary hover:bg-accent transition-smooth"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Oliver Samwel. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;