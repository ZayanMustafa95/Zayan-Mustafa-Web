import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-bg.jpg';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = '🧑‍💻 Frontend Developer | React.js | JavaScript/TypeScript | WordPress';

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setTypedText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${heroBackground})` }}
        />
        <div className="absolute inset-0 hero-bg" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/50" />
      </div>

      <div className="absolute top-20 left-10 w-2 h-2 bg-neon-cyan rounded-full animate-float" />
      <div className="absolute top-40 right-20 w-3 h-3 bg-neon-purple rounded-full animate-float" style={{ animationDelay: '-2s' }} />
      <div className="absolute bottom-20 left-20 w-2 h-2 bg-neon-pink rounded-full animate-float" style={{ animationDelay: '-4s' }} />
      <div className="absolute bottom-40 right-10 w-4 h-4 bg-neon-cyan/50 rounded-full animate-float" style={{ animationDelay: '-1s' }} />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold  my-6 leading-tight"
        >
          Zayan{' '}
          <span className="text-gradient">Mustafa</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 min-h-[40px]"
        >
          <span className="font-mono">
            {typedText}
            <span className="animate-blink border-r-2 border-neon-cyan ml-1" />
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg text-foreground/70 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          I craft exceptional digital experiences through innovative design and cutting-edge technology. 
          Specializing in modern web applications that push the boundaries of what's possible.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-gradient-primary hover:shadow-glow-cyan text-background font-semibold px-8 py-6 text-lg group"
          >
            <Mail className="mr-2 h-5 w-5 group-hover:animate-bounce" />
            Hire Me
          </Button>
          
        <Button
  onClick={() => {
    const link = document.createElement("a");
    link.href = "/cv.pdf"; 
    link.download = "Zayan_Mustafa_CV.pdf"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }}
  size="lg"
  variant="outline"
  className="glass border-glass-border hover:bg-glass text-foreground font-semibold px-8 py-6 text-lg group"
>
  <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
  Download CV
</Button>

        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="animate-bounce cursor-pointer"
          onClick={scrollToAbout}
        >
          <ArrowDown className="mx-auto h-6 w-6 text-neon-cyan" />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-sm text-muted-foreground"
        >
          Scroll to explore
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;