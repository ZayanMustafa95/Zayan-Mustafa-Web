import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'iamzayan10@gmail.com',
      href: 'mailto:iamzayan10@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+92309163885',
      href: 'tel:+92309163885'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Pakistan Lahore',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/ZayanMustafa95',
      color: 'hover:text-neon-cyan'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/zayan-mustafa-801205372/',
      color: 'hover:text-neon-blue'
    },
    // {
    //   icon: Twitter,
    //   label: 'Twitter',
    //   href: 'https://twitter.com/alexmorgan',
    //   color: 'hover:text-neon-purple'
    // }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your next project to life? Let's discuss how we can work together to create something amazing.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gradient">Get in Touch</h3>
              <p className="text-foreground/80 leading-relaxed mb-8">
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                I'd love to hear from you. Let's create something extraordinary together.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <motion.a
                    key={index}
                    href={info.href}
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-4 p-4 glass-card rounded-lg hover:shadow-glow-cyan transition-all duration-300 group"
                  >
                    <div className="p-3 bg-neon-cyan/10 rounded-lg group-hover:animate-bounce">
                      <IconComponent className="h-5 w-5 text-neon-cyan" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{info.label}</div>
                      <div className="font-medium text-foreground">{info.value}</div>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-border/50">
              <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
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
                      className={`p-3 glass-card rounded-lg text-muted-foreground transition-all duration-300 ${social.color}`}
                    >
                      <IconComponent className="h-5 w-5" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="glass-card p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">Send Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground/80 mb-2 block">
                      Name
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="glass border-glass-border bg-transparent"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground/80 mb-2 block">
                      Email
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="glass border-glass-border bg-transparent"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground/80 mb-2 block">
                    Subject
                  </label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="glass border-glass-border bg-transparent"
                    placeholder="What's this about?"
                    required
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground/80 mb-2 block">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="glass border-glass-border bg-transparent resize-none"
                    placeholder="Tell me about your project or just say hello..."
                    required
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-primary hover:shadow-glow-cyan text-background font-semibold py-6 text-lg group"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-background mr-2" />
                      Sending...
                    </div>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;