import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Web Apps', 'Mobile Apps', 'UI/UX Design', 'E-commerce'];

  const projects = [
    {
      id: 1,
      title: 'Movie App',
      category: 'Web Apps',
      description: 'A comprehensive sustainability tracking platform with real-time analytics and AI-powered insights.',
      longDescription: 'EcoTrack is a modern web application built with React and Node.js that helps companies monitor their environmental impact. Features include real-time data visualization, predictive analytics, and automated reporting.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      tags: ['React', 'Node.js', 'D3.js', 'PostgreSQL'],
      liveUrl: 'https://movie-app-gsyd.vercel.app/',
      githubUrl: 'https://github.com/ZayanMustafa95/Movie-App',
    },
    {
      id: 2,
      title: 'MindfulMoments App',
      category: 'Mobile Apps',
      description: 'A meditation and mindfulness mobile app with guided sessions and progress tracking.',
      longDescription: 'MindfulMoments is a React Native application that provides users with guided meditation sessions, breathing exercises, and mood tracking capabilities. Built with a focus on accessibility and user engagement.',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop',
      tags: ['React Native', 'Firebase', 'Redux', 'Expo'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 3,
      title: 'Luxury Hotel Brand',
      category: 'UI/UX Design',
      description: 'Complete brand identity and website redesign for a luxury hotel chain.',
      longDescription: 'A comprehensive design system for a luxury hotel brand including logo design, brand guidelines, and a responsive website that increased bookings by 40%.',
      image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&h=400&fit=crop',
      tags: ['Figma', 'Adobe Suite', 'Webflow', 'Prototyping'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 4,
      title: 'Artisan Marketplace',
      category: 'E-commerce',
      description: 'A modern marketplace connecting local artisans with customers worldwide.',
      longDescription: 'A full-featured e-commerce platform built with Next.js and Stripe, featuring seller dashboards, inventory management, and integrated shipping solutions.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      tags: ['Next.js', 'Stripe', 'Prisma', 'Tailwind'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 5,
      title: 'FinTech Dashboard',
      category: 'Web Apps',
      description: 'A sophisticated financial analytics dashboard with real-time market data.',
      longDescription: 'A comprehensive financial dashboard featuring real-time stock prices, portfolio management, and advanced charting capabilities built with React and WebSockets.',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop',
      tags: ['React', 'WebSockets', 'Chart.js', 'Express'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 6,
      title: 'Fitness Tracker App',
      category: 'Mobile Apps',
      description: 'A comprehensive fitness tracking app with workout plans and nutrition guidance.',
      longDescription: 'A feature-rich fitness application that helps users track workouts, monitor nutrition, and achieve their fitness goals with personalized recommendations.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
      tags: ['React Native', 'SQLite', 'Charts', 'Health APIs'],
      liveUrl: '#',
      githubUrl: '#',
    },
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Work</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my skills and passion for creating exceptional digital experiences
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? 'default' : 'outline'}
              className={`glass border-glass-border transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-primary text-background shadow-glow-cyan'
                  : 'hover:bg-glass text-foreground/80'
              }`}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-card rounded-xl overflow-hidden group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-2">
                    <Button size="sm" variant="outline" className="glass">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 text-xs bg-neon-cyan/10 text-neon-cyan rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-gradient transition-all duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/50">
                    <span className="text-xs text-neon-purple font-medium">
                      {project.category}
                    </span>
                   <div className="flex space-x-2">
  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
    <ExternalLink className="h-4 w-4 text-muted-foreground hover:text-neon-cyan transition-colors cursor-pointer" />
  </a>
  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
    <Github className="h-4 w-4 text-muted-foreground hover:text-neon-cyan transition-colors cursor-pointer" />
  </a>
</div>

                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-md z-50 flex items-center justify-center p-6"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="glass-card rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover"
                />
                
                <div className="p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedProject.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-sm bg-neon-cyan/10 text-neon-cyan rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-gradient">
                    {selectedProject.title}
                  </h3>
                  
                  <p className="text-foreground/80 leading-relaxed mb-6">
                    {selectedProject.longDescription}
                  </p>
                  
                  <div className="flex space-x-4">
  <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
    <Button className="bg-gradient-primary text-background">
      <ExternalLink className="mr-2 h-4 w-4" />
      View Live
    </Button>
  </a>
  <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
    <Button variant="outline" className="glass border-glass-border">
      <Github className="mr-2 h-4 w-4" />
      Source Code
    </Button>
  </a>
</div>

                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;