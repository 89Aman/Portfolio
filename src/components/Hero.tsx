import { useEffect, useState, useCallback, Suspense } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import ParticleBackground from './ui/ParticleBackground';
import MagneticButton from './ui/MagneticButton';

const roles = [
  'ML Engineer',
  'Python Developer',
  'Backend Developer',
  'Open Source Contributor',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({
      x: (e.clientX / window.innerWidth) * 2 - 1,
      y: -(e.clientY / window.innerHeight) * 2 + 1,
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
        // Use setTimeout to avoid synchronous setState in effect
        const timeout = setTimeout(() => {
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setIsTyping(true);
        }, 0);
        return () => clearTimeout(timeout);
      }
    }
  }, [displayText, isTyping, roleIndex]);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#171717] via-[#1f1f1f] to-[#171717]" />
      
      {/* 3D Particle Background */}
      <Suspense fallback={null}>
        <ParticleBackground mouse={mousePosition} />
      </Suspense>
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
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
              <span className="text-3xl">👋</span>
              <span className="text-[#a3a3a3] text-lg">Hello, I'm</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            >
              Aman Sharma
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-[#a3a3a3] mb-6 h-8"
            >
              <span className="text-[#d4d4d4]">A Passionate </span>
              <span className="text-white font-medium">{displayText}</span>
              <span className="animate-pulse">|</span>
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
              <MagneticButton href="#projects">
                <span className="px-8 py-3 bg-white text-[#171717] rounded-full font-semibold hover:bg-[#d4d4d4] transition-all duration-300 inline-block">
                  View My Work
                </span>
              </MagneticButton>
              <MagneticButton href="#contact">
                <span className="px-8 py-3 border border-[#404040] text-white rounded-full font-semibold hover:bg-[#262626] transition-all duration-300 inline-block">
                  Get In Touch
                </span>
              </MagneticButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-4"
            >
              <MagneticButton href="https://github.com/89Aman">
                <span className="w-12 h-12 flex items-center justify-center rounded-full bg-[#262626] text-[#a3a3a3] hover:bg-[#404040] hover:text-white transition-all duration-300">
                  <Github size={20} />
                </span>
              </MagneticButton>
              <MagneticButton href="https://linkedin.com/in/sharmaaman012">
                <span className="w-12 h-12 flex items-center justify-center rounded-full bg-[#262626] text-[#a3a3a3] hover:bg-[#404040] hover:text-white transition-all duration-300">
                  <Linkedin size={20} />
                </span>
              </MagneticButton>
              <MagneticButton href="mailto:Sharmaaman42@proton.me">
                <span className="w-12 h-12 flex items-center justify-center rounded-full bg-[#262626] text-[#a3a3a3] hover:bg-[#404040] hover:text-white transition-all duration-300">
                  <Mail size={20} />
                </span>
              </MagneticButton>
            </motion.div>
          </motion.div>

          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#404040] to-[#262626] rounded-3xl blur-2xl opacity-50 scale-110" />
              <div className="relative bg-[#1f1f1f] border border-[#333333] rounded-3xl p-8 shadow-2xl">
                <div className="relative mb-6">
                  <img
                    src="https://avatars.githubusercontent.com/u/94701256?v=4"
                    alt="Aman Sharma"
                    className="w-48 h-48 rounded-2xl object-cover mx-auto border-2 border-[#333333]"
                  />
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-[#262626] px-4 py-2 rounded-full border border-[#333333]">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-xs text-[#a3a3a3] whitespace-nowrap">Available for work</span>
                  </div>
                </div>

                <div className="flex justify-around mt-8">
                  <div className="text-center">
                    <span className="block text-3xl font-bold text-white">10+</span>
                    <span className="text-xs text-[#a3a3a3] uppercase tracking-wider">Projects</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-3xl font-bold text-white">5+</span>
                    <span className="text-xs text-[#a3a3a3] uppercase tracking-wider">Languages</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-3xl font-bold text-white">1</span>
                    <span className="text-xs text-[#a3a3a3] uppercase tracking-wider">Year Exp</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="flex flex-col items-center text-[#525252] hover:text-[#a3a3a3] transition-colors">
          <span className="text-sm mb-2">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown size={20} />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
