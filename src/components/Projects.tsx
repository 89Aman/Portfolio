import { motion, useInView } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useRef, useState } from 'react';
import { Github, ExternalLink, Headphones, Film, Brain, BookOpen, Plug, Gamepad2, Code2 } from 'lucide-react';

const projects = [
  {
    title: 'AI Helpdesk Ticketing System',
    description: 'An intelligent helpdesk ticketing system powered by AI for automated ticket classification and routing.',
    tech: ['JavaScript', 'AI', 'Node.js'],
    github: 'https://github.com/89Aman/AI-helpdesk-Ticketing-system',
    icon: Headphones,
    featured: true,
  },
  {
    title: 'Movie Recommendation System',
    description: 'A fullstack Flutter app with TensorFlow-powered movie recommendations based on user preferences.',
    tech: ['Flutter', 'TensorFlow', 'Python'],
    github: 'https://github.com/89Aman/Fullstack-movie-recommendation-system',
    icon: Film,
  },
  {
    title: 'Text Classification Model',
    description: 'SVM-based ML model for text classification, predicting IAB categories for articles based on content.',
    tech: ['Python', 'Scikit-learn', 'Pandas'],
    github: 'https://github.com/89Aman/text-classification-model',
    icon: Brain,
  },
  {
    title: 'Library Management System',
    description: 'A web-based application for efficiently managing books, users, and borrowing records using Flask and MongoDB.',
    tech: ['Flask', 'MongoDB', 'Python'],
    github: 'https://github.com/89Aman/library-mangement-system',
    icon: BookOpen,
  },
  {
    title: 'API Projects Collection',
    description: 'A collection of API projects demonstrating RESTful API development and integration patterns.',
    tech: ['Python', 'REST API', 'FastAPI'],
    github: 'https://github.com/89Aman/API-projects',
    icon: Plug,
  },
  {
    title: 'Snake Game',
    description: 'Classic snake game built with PyGame module, featuring smooth gameplay and intuitive controls.',
    tech: ['Python', 'PyGame'],
    github: 'https://github.com/89Aman/Snake-game',
    icon: Gamepad2,
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
  hidden: { opacity: 0, y: 50, rotateX: -15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 12,
    },
  },
};

const iconVariants: Variants = {
  rest: { scale: 1, rotate: 0 },
  hover: { 
    scale: 1.2, 
    rotate: [0, -10, 10, 0],
    transition: {
      rotate: {
        duration: 0.5,
        repeat: Infinity,
        repeatType: 'reverse' as const,
      },
    },
  },
};

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 bg-[#171717] min-h-screen flex items-center">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
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
              <Code2 size={14} />
              What I've built
            </motion.span>
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            Featured Projects
          </motion.h2>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              variants={cardVariants}
              custom={index}
              className="group relative bg-[#1f1f1f] border border-[#333333] rounded-2xl overflow-hidden"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ 
                y: -10,
                borderColor: '#525252',
                boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
              }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {/* Project Image/Icon Header */}
              <motion.div 
                className="h-40 bg-gradient-to-br from-[#262626] to-[#1a1a1a] flex items-center justify-center relative overflow-hidden"
                animate={{
                  background: hoveredIndex === index 
                    ? 'linear-gradient(135deg, #333333 0%, #252525 100%)' 
                    : 'linear-gradient(135deg, #262626 0%, #1a1a1a 100%)',
                }}
              >
                <motion.div
                  variants={iconVariants}
                  initial="rest"
                  animate={hoveredIndex === index ? "hover" : "rest"}
                >
                  <project.icon 
                    size={48} 
                    className={`transition-colors duration-300 ${
                      hoveredIndex === index ? 'text-white' : 'text-[#525252]'
                    }`} 
                  />
                </motion.div>
                
                {/* Animated background pattern */}
                <motion.div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                    backgroundSize: '20px 20px',
                  }}
                  animate={{
                    backgroundPosition: hoveredIndex === index ? ['0px 0px', '20px 20px'] : '0px 0px',
                  }}
                  transition={{ duration: 1, repeat: Infinity, repeatType: 'loop' }}
                />
                
                {/* Overlay on hover */}
                <motion.div 
                  className="absolute inset-0 bg-[#171717]/80 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-[#171717] shadow-lg"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ 
                      scale: hoveredIndex === index ? 1 : 0,
                      rotate: hoveredIndex === index ? 0 : -180,
                    }}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                  >
                    <Github size={20} />
                  </motion.a>
                </motion.div>
              </motion.div>

              {/* Content */}
              <div className="p-6">
                <motion.h3 
                  className="text-lg font-bold text-white mb-3 transition-colors"
                  animate={{ 
                    color: hoveredIndex === index ? '#d4d4d4' : '#ffffff',
                  }}
                >
                  {project.title}
                </motion.h3>
                <p className="text-sm text-[#a3a3a3] mb-4 leading-relaxed">
                  {project.description}
                </p>
                <motion.div 
                  className="flex flex-wrap gap-2"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: { staggerChildren: 0.05 },
                    },
                  }}
                >
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 bg-[#262626] text-[#a3a3a3] text-xs rounded-full font-mono"
                      variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: { opacity: 1, scale: 1 },
                      }}
                      whileHover={{ 
                        scale: 1.1,
                        backgroundColor: '#333333',
                        color: '#ffffff',
                      }}
                      transition={{ delay: techIndex * 0.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </div>

              {/* Hover gradient border effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)',
                  backgroundSize: '200% 200%',
                }}
                animate={{
                  backgroundPosition: hoveredIndex === index 
                    ? ['0% 0%', '100% 100%'] 
                    : '0% 0%',
                }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
              />
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/89Aman?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3 border border-[#404040] text-white rounded-full font-semibold transition-all duration-300 group"
            whileHover={{ 
              scale: 1.05,
              borderColor: '#525252',
              backgroundColor: 'rgba(38, 38, 38, 0.5)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              style={{ display: 'inline-block' }}
            >
              <Github size={20} />
            </motion.span>
            View All Projects on GitHub
            <motion.span
              className="inline-block"
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <ExternalLink size={16} />
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
