import { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from 'lucide-react';

const PORTFOLIO_OWNER = 'Aman Sharma';

const roles = [
  'ML Engineer',
  'Python Developer',
  'Backend Developer',
  'Open Source Contributor',
];

// Safe window dimensions for SSR
const getWindowDimensions = () => {
  if (typeof window === 'undefined') {
    return { width: 1200, height: 800 };
  }
  return { width: window.innerWidth, height: window.innerHeight };
};

// Floating particles for background
const FloatingParticle = ({ delay }: { delay: number }) => {
  const dims = getWindowDimensions();
  return (
    <motion.div
      className="absolute w-1 h-1 bg-white/20 rounded-full"
      initial={{ 
        x: Math.random() * dims.width, 
        y: Math.random() * dims.height,
        scale: 0 
      }}
      animate={{
        y: [null, -100],
        x: [null, Math.random() * 50 - 25],
        scale: [0, 1, 0],
        opacity: [0, 0.6, 0],
      }}
      transition={{
        duration: 4 + Math.random() * 2,
        delay: delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
};

// Interactive hover effect for social links
const socialLinks = [
  { icon: Github, href: 'https://github.com/89Aman', label: 'GitHub', color: '#6e5494' },
  { icon: Linkedin, href: 'https://linkedin.com/in/sharmaaman012', label: 'LinkedIn', color: '#0077b5' },
  { icon: Mail, href: 'mailto:Sharmaaman42@proton.me', label: 'Email', color: '#ea4335' },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse tracking for parallax effect
  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({
      x: (e.clientX / window.innerWidth - 0.5) * 20,
      y: (e.clientY / window.innerHeight - 0.5) * 20,
    });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    
    if (isTyping) {
      if (displayText.length < currentRole.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setIsTyping(false), 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }
  }, [displayText, isTyping, roleIndex]);

  return (
    <section id="home" className="h-screen w-screen flex flex-col justify-center relative overflow-hidden">
      {/* Animated Background gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-[#171717] via-[#1f1f1f] to-[#171717]"
        animate={{
          background: [
            'linear-gradient(180deg, #171717 0%, #1f1f1f 50%, #171717 100%)',
            'linear-gradient(180deg, #171717 0%, #252525 50%, #171717 100%)',
            'linear-gradient(180deg, #171717 0%, #1f1f1f 50%, #171717 100%)',
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <FloatingParticle key={i} delay={i * 0.3} />
        ))}
      </div>
      
      {/* Subtle grid pattern with parallax */}
      <motion.div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
        animate={{
          x: mousePosition.x * 0.5,
          y: mousePosition.y * 0.5,
        }}
        transition={{ type: 'spring', stiffness: 50, damping: 20 }}
      />

      {/* Glowing orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05],
          x: mousePosition.x * 2,
          y: mousePosition.y * 2,
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.08, 0.03, 0.08],
          x: mousePosition.x * -1.5,
          y: mousePosition.y * -1.5,
        }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3 mb-6"
            >
              <motion.span 
                className="text-3xl"
                animate={{ rotate: [0, 20, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
              >
                👋
              </motion.span>
              <motion.span 
                className="text-[#a3a3a3] text-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                Hello, I'm
              </motion.span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            >
              {PORTFOLIO_OWNER.split('').map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: 0.3 + index * 0.05,
                    type: 'spring',
                    stiffness: 100,
                  }}
                  className="inline-block"
                  style={{ whiteSpace: letter === ' ' ? 'pre' : 'normal' }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-[#a3a3a3] mb-6 h-8 flex items-center"
            >
              <span className="text-[#d4d4d4]">A Passionate </span>
              <span className="text-white font-medium ml-1">{displayText}</span>
              <motion.span 
                className="text-white ml-0.5"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              >
                |
              </motion.span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-[#a3a3a3] text-lg mb-8 max-w-lg leading-relaxed"
            >
              Building intelligent solutions through Machine Learning and crafting 
              beautiful web experiences. Contributing to open source and always 
              learning something new.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <motion.a
                href="#projects"
                className="group px-8 py-3 bg-white text-[#171717] rounded-full font-semibold transition-all duration-300 flex items-center gap-2 overflow-hidden relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                />
                <Sparkles size={18} className="group-hover:animate-spin" />
                View My Work
              </motion.a>
              <motion.a
                href="#contact"
                className="px-8 py-3 border border-[#404040] text-white rounded-full font-semibold hover:bg-[#262626] transition-all duration-300"
                whileHover={{ scale: 1.05, borderColor: '#525252' }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.label !== 'Email' ? '_blank' : undefined}
                  rel={social.label !== 'Email' ? 'noopener noreferrer' : undefined}
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-[#262626] text-[#a3a3a3] transition-all duration-300"
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ 
                    delay: 0.8 + index * 0.1,
                    type: 'spring',
                    stiffness: 200,
                  }}
                  whileHover={{ 
                    scale: 1.2, 
                    backgroundColor: social.color,
                    color: '#ffffff',
                    rotate: 360,
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center"
            style={{
              transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`,
            }}
          >
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {/* Animated glow background */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-[#404040] to-[#262626] rounded-3xl blur-2xl opacity-50 scale-110"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1.1, 1.15, 1.1],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div 
                className="relative bg-[#1f1f1f] border border-[#333333] rounded-3xl p-8 shadow-2xl backdrop-blur-sm"
                whileHover={{ borderColor: '#525252' }}
              >
                <div className="relative mb-6">
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <motion.img
                      src="https://avatars.githubusercontent.com/u/94701256?v=4"
                      alt={PORTFOLIO_OWNER}
                      className="w-48 h-48 rounded-2xl object-cover mx-auto border-2 border-[#333333]"
                      initial={{ filter: 'grayscale(100%)' }}
                      animate={{ filter: 'grayscale(0%)' }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                      whileHover={{ borderColor: '#525252' }}
                    />
                    {/* Image glow on hover */}
                    <motion.div
                      className="absolute inset-0 bg-white/10 rounded-2xl"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                  <motion.div 
                    className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-[#262626] px-4 py-2 rounded-full border border-[#333333]"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <motion.span 
                      className="w-2 h-2 bg-green-500 rounded-full"
                      animate={{ 
                        scale: [1, 1.3, 1],
                        opacity: [1, 0.7, 1],
                      }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    <span className="text-xs text-[#a3a3a3] whitespace-nowrap">Available for work</span>
                  </motion.div>
                </div>

                <div className="flex justify-around mt-8">
                  {[
                    { value: '10+', label: 'Projects' },
                    { value: '5+', label: 'Languages' },
                    { value: '1', label: 'Year Exp' },
                  ].map((stat, index) => (
                    <motion.div 
                      key={stat.label}
                      className="text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 + index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <motion.span 
                        className="block text-3xl font-bold text-white"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1.1 + index * 0.1, type: 'spring' }}
                      >
                        {stat.value}
                      </motion.span>
                      <span className="text-xs text-[#a3a3a3] uppercase tracking-wider">{stat.label}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.a 
          href="#about" 
          className="flex flex-col items-center text-[#525252] hover:text-[#a3a3a3] transition-colors"
          whileHover={{ scale: 1.1 }}
        >
          <motion.span 
            className="text-sm mb-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Scroll Down
          </motion.span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown size={20} />
          </motion.div>
        </motion.a>
      </motion.div>
    </section>
  );
}
