import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Mail, Phone, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const quickActions = [
    {
      icon: Mail,
      label: 'Send Email',
      href: 'mailto:alex.morgan@email.com',
      color: 'bg-neon-cyan text-background'
    },
    {
      icon: Phone,
      label: 'Call Me',
      href: 'tel:+15551234567',
      color: 'bg-neon-purple text-background'
    },
    {
      icon: Calendar,
      label: 'Schedule Meeting',
      href: '#',
      color: 'bg-neon-pink text-background'
    }
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Quick Action Buttons */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-16 right-0 space-y-3"
          >
            {quickActions.map((action, index) => {
              const IconComponent = action.icon;
              return (
                <motion.a
                  key={index}
                  href={action.href}
                  initial={{ opacity: 0, scale: 0, x: 20 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1, 
                    x: 0,
                    transition: { delay: index * 0.1 }
                  }}
                  exit={{ 
                    opacity: 0, 
                    scale: 0, 
                    x: 20,
                    transition: { delay: (quickActions.length - 1 - index) * 0.05 }
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center space-x-3 p-3 rounded-full shadow-lg ${action.color} backdrop-blur-md group`}
                >
                  <IconComponent className="h-5 w-5" />
                  <span className="text-sm font-medium whitespace-nowrap pr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {action.label}
                  </span>
                </motion.a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main FAB */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{ rotate: isOpen ? 45 : 0 }}
        className="relative"
      >
        <Button
          onClick={toggleMenu}
          size="lg"
          className="w-14 h-14 rounded-full bg-gradient-primary hover:shadow-glow-cyan text-background shadow-lg"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-6 w-6" />
              </motion.div>
            ) : (
              <motion.div
                key="message"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.2 }}
              >
                <MessageCircle className="h-6 w-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </Button>

        {/* Pulse Animation */}
        {!isOpen && (
          <div className="absolute inset-0 rounded-full bg-gradient-primary animate-ping opacity-20" />
        )}
      </motion.div>
    </div>
  );
};

export default FloatingActionButton;