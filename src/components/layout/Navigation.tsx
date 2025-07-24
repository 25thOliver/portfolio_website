import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/blog', label: 'Blog' },
    { href: '/resources', label: 'Resources' },
    { href: '/contact', label: 'Contact' },
  ];

  const socialLinks = [
    { href: 'https://github.com/25thOliver', icon: Github, label: 'GitHub' },
    { href: 'https://linkedin.com/in/samwel-oliver', icon: Linkedin, label: 'LinkedIn' },
    { href: 'https://twitter.com/bug_alchemist', icon: Twitter, label: 'Twitter' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="font-heading font-bold text-xl text-primary hover-glow transition-smooth">
            Oliver Samwel
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`nav-link ${location.pathname === link.href ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social Links & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Social Links - Desktop */}
            <div className="hidden md:flex items-center space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border py-4 space-y-4 fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`block py-2 text-lg ${
                  location.pathname === link.href ? 'text-primary font-medium' : 'text-foreground'
                } hover:text-primary transition-smooth`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Social Links - Mobile */}
            <div className="flex items-center space-x-4 pt-4 border-t border-border">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;