import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Rocket, Users } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Code, label: 'Projects Completed', value: '150+' },
    { icon: Users, label: 'Happy Clients', value: '50+' },
    { icon: Rocket, label: 'Years Experience', value: '5+' },
    { icon: Palette, label: 'Creative Solutions', value: '∞' },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating digital experiences that make a difference
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
         
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-primary p-1 animate-glow">
                <div className="w-full h-full rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center">
                  <div className="w-72 h-72 rounded-full bg-gradient-secondary flex items-center justify-center text-6xl font-bold text-background">
                    <img src="/Zayanimg.png" alt="Zayan Mustafa Img" className='rounded-full w-72 h-72 object-cover' />
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-neon-cyan/20 rounded-full animate-float" />
              <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-neon-purple/20 rounded-full animate-float" style={{ animationDelay: '-2s' }} />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
          <h3 className="text-3xl font-bold text-foreground">
  Crafting Modern Frontend Experiences
</h3>

<p className="text-lg text-foreground/80 leading-relaxed">
  Hello! I'm Zayan Mustafa, a passionate <span className="font-semibold">frontend developer</span> 
  specializing in <span className="font-semibold">React</span> and <span className="font-semibold">WordPress</span>. 
  I love turning ideas into pixel-perfect, responsive, and high-performing websites that create a seamless 
  user experience.
</p>

<p className="text-lg text-foreground/80 leading-relaxed">
  With hands-on experience in building interactive UIs and custom WordPress solutions, I focus on writing 
  clean, scalable code and creating designs that are not only visually appealing but also user-friendly. 
  My goal is to bridge creativity with functionality and deliver digital experiences that truly stand out.
</p>

<div className="space-y-4">
  <h4 className="text-xl font-semibold text-gradient">What I Do</h4>
  <ul className="space-y-2">
    <li className="flex items-center text-foreground/80">
      <span className="w-2 h-2 bg-neon-cyan rounded-full mr-3" />
      React Frontend Development
    </li>
    <li className="flex items-center text-foreground/80">
      <span className="w-2 h-2 bg-neon-purple rounded-full mr-3" />
      WordPress Custom Websites
    </li>
    <li className="flex items-center text-foreground/80">
      <span className="w-2 h-2 bg-neon-pink rounded-full mr-3" />
      Responsive & SEO-Friendly Designs
    </li>
    <li className="flex items-center text-foreground/80">
      <span className="w-2 h-2 bg-neon-blue rounded-full mr-3" />
      Performance Optimization
    </li>
  </ul>
</div>

          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center group">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="glass-card p-6 rounded-xl transition-all duration-300 group-hover:shadow-glow-cyan"
                >
                  <IconComponent className="h-8 w-8 text-neon-cyan mx-auto mb-3 group-hover:animate-bounce" />
                  <div className="text-2xl font-bold text-gradient mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default About;