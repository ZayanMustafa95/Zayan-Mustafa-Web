import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Palette, 
  Globe,
  Layers,
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code2,
      color: 'neon-cyan',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'JavaScript (ES6+)', level: 85 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Bootstrap', level: 88 },
        { name: 'HTML5 / CSS3', level: 95 },
      ]
    },
    {
      title: 'WordPress Development',
      icon: Globe,
      color: 'neon-purple',
      skills: [
        { name: 'Custom WordPress Sites', level: 90 },
        { name: 'Elementor & Page Builders', level: 92 },
        { name: 'Webflow Basics', level: 80 },
        { name: 'SEO-Friendly Setup', level: 85 },
      ]
    },
    {
      title: 'Design & UI',
      icon: Palette,
      color: 'neon-pink',
      skills: [
        { name: 'Responsive UI Design', level: 88 },
        { name: 'Clean & Modern Layouts', level: 85 },
        { name: 'Cross-Browser Compatibility', level: 87 },
      ]
    },
    {
      title: 'Other Skills',
      icon: Layers,
      color: 'neon-blue',
      skills: [
        { name: 'Version Control (Git/GitHub)', level: 80 },
        { name: 'Basic SEO Optimization', level: 82 },
        { name: 'Performance Optimization', level: 84 },
      ]
    },
  ];

  const techStack = [
    { name: 'React.js', icon: '⚛️' },
    { name: 'JavaScript', icon: '📜' },
    { name: 'Tailwind CSS', icon: '💨' },
    { name: 'Bootstrap', icon: '🟪' },
    { name: 'HTML5', icon: '📄' },
    { name: 'CSS3', icon: '🎨' },
    { name: 'WordPress', icon: '🌐' },
    { name: 'Elementor', icon: '📐' },
    { name: 'Webflow', icon: '🌀' },
    { name: 'Git/GitHub', icon: '🐙' },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Specializing in modern frontend development and WordPress, I focus on creating 
            responsive, user-friendly, and performance-optimized websites.
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6 rounded-xl group hover:shadow-glow-cyan transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg bg-${category.color}/10 mr-4 group-hover:animate-bounce`}>
                    <IconComponent className={`h-6 w-6 text-${category.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted/20 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.5, delay: 0.5 + skillIndex * 0.1 }}
                          viewport={{ once: true }}
                          className={`h-2 rounded-full bg-gradient-primary`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-8 text-gradient">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card px-6 py-4 rounded-xl cursor-pointer group"
              >
                <div className="text-2xl mb-2 group-hover:animate-bounce">{tech.icon}</div>
                <div className="text-sm font-medium text-center">{tech.name}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
