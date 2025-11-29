import { motion, useInView } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useRef } from 'react';
import { Github, Linkedin, Mail, Heart, Coffee } from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: Github, href: 'https://github.com/89Aman', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/sharmaaman012', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:Sharmaaman42@proton.me', label: 'Email' },
];

const heartVariants: Variants = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.3, 1, 1.2, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatDelay: 0.5,
    },
  },
};

const coffeeVariants: Variants = {
  initial: { rotate: 0, y: 0 },
  animate: {
    rotate: [0, -15, 15, -10, 10, 0],
    y: [0, -3, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatDelay: 1,
    },
  },
};

const steamVariants: Variants = {
  initial: { opacity: 0, y: 0 },
  animate: {
    opacity: [0, 0.7, 0],
    y: [0, -15, -30],
    x: [0, 3, -3, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatDelay: 0.5,
    },
  },
};

const steamVariants2: Variants = {
  initial: { opacity: 0, y: 0 },
  animate: {
    opacity: [0, 0.7, 0],
    y: [0, -15, -30],
    x: [0, 3, -3, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatDelay: 0.5,
      delay: 0.3,
    },
  },
};

export default function Footer() {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, margin: '-50px' });

  const madeWithText = "Made with";
  const coffeeText = "and lots of";

  return (
    <footer className="bg-[#171717] border-t border-[#262626]">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.a 
              href="#home" 
              className="inline-block text-3xl font-bold text-white mb-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              AS
            </motion.a>
            <p className="text-[#a3a3a3] text-sm leading-relaxed max-w-xs">
              Building intelligent solutions through Machine Learning and crafting 
              beautiful digital experiences.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                >
                  <motion.a
                    href={link.href}
                    className="text-[#a3a3a3] hover:text-white transition-colors duration-300 inline-block"
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {link.name}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
              Connect
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.label !== 'Email' ? '_blank' : undefined}
                  rel={social.label !== 'Email' ? 'noopener noreferrer' : undefined}
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#262626] text-[#a3a3a3] hover:bg-[#404040] hover:text-white transition-all duration-300"
                  aria-label={social.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ 
                    duration: 0.4, 
                    delay: 0.3 + index * 0.1,
                    type: 'spring',
                    stiffness: 200,
                  }}
                  whileHover={{ 
                    scale: 1.15, 
                    rotate: 5,
                    backgroundColor: '#404040',
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <div ref={footerRef} className="pt-8 border-t border-[#262626] flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.p 
            className="text-sm text-[#525252]"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            © {new Date().getFullYear()} Aman Sharma. All rights reserved.
          </motion.p>
          
          {/* Animated "Made with ❤️ and lots of ☕" */}
          <motion.div 
            className="text-sm text-[#525252] flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {/* "Made with" text - simple text without letter animation */}
            <span>{madeWithText}</span>
            
            {/* Animated Heart */}
            <motion.span
              variants={heartVariants}
              initial="initial"
              animate="animate"
              className="inline-flex text-red-400"
            >
              <Heart size={14} fill="currentColor" />
            </motion.span>
            
            {/* "and lots of" text - simple text without letter animation */}
            <span>{coffeeText}</span>
            
            {/* Animated Coffee with Steam */}
            <motion.span
              className="relative inline-flex items-center"
              variants={coffeeVariants}
              initial="initial"
              animate="animate"
            >
              {/* Steam particles */}
              <motion.span
                variants={steamVariants}
                initial="initial"
                animate="animate"
                className="absolute -top-2 left-1/2 transform -translate-x-1/2 text-[10px] text-[#a3a3a3]"
              >
                ~
              </motion.span>
              <motion.span
                variants={steamVariants2}
                initial="initial"
                animate="animate"
                className="absolute -top-1 left-1/4 transform -translate-x-1/2 text-[8px] text-[#a3a3a3]"
              >
                ~
              </motion.span>
              <Coffee size={16} className="text-amber-600" />
            </motion.span>
          </motion.div>
        </div>
      </div>

      {/* Back to Top - Enhanced */}
      <motion.a
        href="#home"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200 }}
        whileHover={{ 
          scale: 1.15,
          boxShadow: '0 10px 40px rgba(255, 255, 255, 0.2)',
        }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-12 h-12 flex items-center justify-center rounded-full bg-white text-[#171717] shadow-lg transition-all duration-300"
        aria-label="Back to top"
      >
        <motion.span
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          ↑
        </motion.span>
      </motion.a>
    </footer>
  );
}
