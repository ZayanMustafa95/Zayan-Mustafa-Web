import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Github, href: 'https://github.com/ZayanMustafa95', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/zayan-mustafa-801205372/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:iamzayan10@gmail.com', label: 'Email' },
  ];

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#portfolio' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative py-12 mt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-background-secondary to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="text-3xl font-bold text-gradient">
              Zayan Mustafa
            </div>
            <p className="text-foreground/70 leading-relaxed">
              Frontend Developer specializing in React & WordPress. 
              I create modern, user-friendly, and high-performing websites 
              that deliver great user experiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 glass-card rounded-lg text-muted-foreground hover:text-neon-cyan transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <IconComponent className="h-5 w-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-gradient">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link, index) => (
                <motion.button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  whileHover={{ x: 5 }}
                  className="text-left text-foreground/70 hover:text-neon-cyan transition-colors duration-300"
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-gradient">Let's Connect</h4>
            <div className="space-y-2 text-foreground/70">
              <p>Lahore, Pakistan</p>
              <p>zayanmustafa.dev@gmail.com</p>
              <p>+92 (300) 123-4567</p>
            </div>
            <motion.div whileHover={{ scale: 1.02 }}>
              <Button
                onClick={() => scrollToSection('#contact')}
                className="bg-gradient-primary text-background hover:shadow-glow-cyan"
              >
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/50 my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex items-center text-sm text-foreground/60"
          >
            <span>© {currentYear} Zayan Mustafa. Made with</span>
            <Heart className="h-4 w-4 text-neon-pink mx-1 animate-pulse" />
            <span>and lots of ☕</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex items-center space-x-4 text-sm text-foreground/60"
          >
            <span>Built with React & Tailwind CSS</span>
            <Button
              onClick={scrollToTop}
              size="sm"
              variant="outline"
              className="glass border-glass-border hover:bg-glass p-2"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </motion.div>
        </div>

        {/* Easter Egg */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
          className="absolute bottom-4 right-4 w-2 h-2 bg-neon-cyan/30 rounded-full animate-ping"
        />
      </div>
    </footer>
  );
};

export default Footer;
