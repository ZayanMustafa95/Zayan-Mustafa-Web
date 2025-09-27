import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, GraduationCap, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      type: 'work',
      title: 'Frontend Developer Intern',
      company: 'Tech Firm (Internship)',
      location: 'Lahore, Pakistan',
      period: '2025',
      description:
        'Completed a 2-month internship focusing on React, modern frontend workflows, and UI/UX best practices.',
      achievements: [
        'Built responsive React components',
        'Improved UI performance & accessibility',
        'Collaborated on real-world client projects'
      ],
      icon: Briefcase,
      color: 'neon-cyan',
    },
    {
      type: 'work',
      title: 'Founder & Digital Marketer',
      company: 'Webwise Marketing',
      location: 'Remote',
      period: '2024 - Present',
      description:
        'Started my own digital marketing agency, helping small businesses grow online through social media, SEO, and WordPress solutions.',
      achievements: [
        'Delivered social media marketing campaigns',
        'Built SEO-optimized WordPress websites',
        'Helped brands increase online visibility'
      ],
      icon: Briefcase,
      color: 'neon-purple',
    },
    {
      type: 'education',
      title: 'BS in Entrepreneurship',
      company: 'Government College University (GCU)',
      location: 'Lahore, Pakistan',
      period: '2024 - Present',
      description:
        'Pursuing a degree focused on entrepreneurship, innovation, and business management while applying skills in real-world projects.',
      achievements: [
        'Learning startup creation & business growth',
        'Actively applying knowledge in agency & e-commerce',
        'Building foundation for future ventures'
      ],
      icon: GraduationCap,
      color: 'neon-pink',
    },
    {
      type: 'work',
      title: 'Frontend Developer',
      company: 'Yodo',
      location: 'on-Site',
      period: '2025 - Present',
      description:
  'Developed modern React websites and custom dashboard builders with reusable components, API integrations, and responsive UI/UX.',
      achievements: [
        'Modern React websites',
        'Developed interactive React apps',
        'Custom dashboard builders',
        'Reusable components + API integrations',
        'Responsive UI/UX'
      ],
      icon: Briefcase,
      color: 'neon-blue',
    },
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A timeline of my growth as a frontend developer, marketer, and entrepreneur.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-primary opacity-30" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((experience, index) => {
              const IconComponent = experience.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-row`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-gradient-primary z-10" />

                  {/* Content Card */}
                  <div
                    className={`glass-card p-6 rounded-xl flex-1 ml-12 md:ml-0 ${
                      isLeft ? 'md:mr-8' : 'md:ml-8'
                    } group hover:shadow-glow-cyan transition-all duration-300`}
                  >
                    <div className="flex items-start space-x-4">
                      <div
                        className={`p-3 rounded-lg bg-${experience.color}/10 group-hover:animate-bounce`}
                      >
                        <IconComponent className={`h-6 w-6 text-${experience.color}`} />
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                          <h3 className="text-xl font-semibold text-gradient">
                            {experience.title}
                          </h3>
                          <span className="text-sm text-muted-foreground flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {experience.period}
                          </span>
                        </div>

                        <div className="flex items-center text-foreground/80 mb-2">
                          <span className="font-medium">{experience.company}</span>
                          <span className="mx-2">•</span>
                          <span className="flex items-center text-sm">
                            <MapPin className="h-3 w-3 mr-1" />
                            {experience.location}
                          </span>
                        </div>

                        <p className="text-foreground/70 mb-4 leading-relaxed">
                          {experience.description}
                        </p>

                        {/* Achievements */}
                        <div className="space-y-2">
                          <h4 className="text-sm font-semibold text-neon-cyan flex items-center">
                            <Award className="h-4 w-4 mr-1" />
                            Key Achievements
                          </h4>
                          <ul className="space-y-1">
                            {experience.achievements.map((achievement, achIndex) => (
                              <li
                                key={achIndex}
                                className="text-sm text-foreground/70 flex items-center"
                              >
                                <span
                                  className={`w-2 h-2 bg-${experience.color} rounded-full mr-3 flex-shrink-0`}
                                />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Spacer for desktop layout */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-card p-8 rounded-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gradient mb-4">
              Ready for the Next Chapter
            </h3>
            <p className="text-foreground/80 leading-relaxed">
              I’m passionate about combining frontend development and entrepreneurship 
              to build impactful solutions. Let’s collaborate and create something great.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
