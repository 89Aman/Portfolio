import { motion, useInView } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useRef, useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Send, MessageCircle } from 'lucide-react';

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'Sharmaaman42@proton.me',
    href: 'mailto:Sharmaaman42@proton.me',
    color: '#ea4335',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'sharmaaman012',
    href: 'https://linkedin.com/in/sharmaaman012',
    color: '#0077b5',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: '89Aman',
    href: 'https://github.com/89Aman',
    color: '#6e5494',
  },
];

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 12,
    },
  },
};

const pulseVariants: Variants = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut' as const,
    },
  },
};

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="contact" className="py-24 bg-[#1a1a1a] min-h-screen flex items-center">
      <div className="w-full max-w-5xl mx-auto px-6 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span 
            className="inline-block px-4 py-2 bg-[#262626] text-[#a3a3a3] text-sm rounded-full mb-4"
            whileHover={{ scale: 1.05, backgroundColor: '#333333' }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <motion.span className="inline-flex items-center gap-2">
              <MessageCircle size={14} />
              Let's connect
            </motion.span>
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            Get In Touch
          </motion.h2>
          <motion.p 
            className="text-lg text-[#a3a3a3] max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            I'm always open to discussing new projects, creative ideas, or opportunities 
            to be part of your vision. Feel free to reach out!
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.label}
              href={method.href}
              target={method.label !== 'Email' ? '_blank' : undefined}
              rel={method.label !== 'Email' ? 'noopener noreferrer' : undefined}
              variants={cardVariants}
              custom={index}
              className="group flex flex-col items-center p-8 bg-[#262626] border border-[#333333] rounded-2xl relative overflow-hidden"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ 
                y: -10,
                borderColor: method.color,
                boxShadow: `0 20px 40px ${method.color}20`,
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {/* Animated background glow */}
              <motion.div
                className="absolute inset-0 opacity-0"
                style={{ 
                  background: `radial-gradient(circle at center, ${method.color}15 0%, transparent 70%)`,
                }}
                animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />

              {/* Icon container */}
              <motion.div 
                className="w-16 h-16 flex items-center justify-center rounded-xl bg-[#333333] mb-4 relative z-10"
                animate={{ 
                  backgroundColor: hoveredIndex === index ? method.color : '#333333',
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  animate={{ 
                    rotate: hoveredIndex === index ? [0, -10, 10, 0] : 0,
                    scale: hoveredIndex === index ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <method.icon size={28} className="text-white" />
                </motion.div>
              </motion.div>

              <span className="text-sm text-[#525252] mb-2 relative z-10">{method.label}</span>
              <motion.span 
                className="text-white font-medium flex items-center gap-2 relative z-10"
                animate={{ 
                  color: hoveredIndex === index ? '#d4d4d4' : '#ffffff',
                }}
              >
                {method.value}
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ 
                    opacity: hoveredIndex === index ? 1 : 0,
                    x: hoveredIndex === index ? 0 : -10,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <ExternalLink size={14} />
                </motion.span>
              </motion.span>

              {/* Corner decoration */}
              <motion.div
                className="absolute top-0 right-0 w-20 h-20"
                style={{
                  background: `linear-gradient(135deg, transparent 50%, ${method.color}10 50%)`,
                }}
                animate={{
                  opacity: hoveredIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <motion.a
            href="mailto:Sharmaaman42@proton.me"
            className="inline-flex items-center gap-3 px-10 py-4 bg-white text-[#171717] rounded-full font-semibold text-lg relative overflow-hidden group"
            variants={pulseVariants}
            initial="initial"
            animate="animate"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 20px 40px rgba(255,255,255,0.2)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Shimmer effect */}
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.5 }}
            />
            
            <motion.span
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="relative z-10"
            >
              <Send size={20} />
            </motion.span>
            <span className="relative z-10">Send me an email</span>
          </motion.a>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          className="absolute left-1/4 top-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.03, 0.06, 0.03],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
    </section>
  );
}
