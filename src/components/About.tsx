import { motion, useInView } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useRef, useState } from 'react';
import { Rocket, Users, Heart } from 'lucide-react';

const skills = {
  'Languages': ['Python', 'Java', 'C++', 'C'],
  'ML/AI': ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV', 'Pandas', 'NumPy'],
  'Web Frameworks': ['Django', 'Flask', 'FastAPI', 'Streamlit'],
  'Databases': ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'SQLite'],
  'Cloud & DevOps': ['AWS', 'Azure', 'GCP', 'Docker', 'Terraform'],
  'Tools': ['Git', 'GitHub Actions', 'Postman', 'Nginx'],
};

const highlights = [
  { icon: Rocket, text: 'Working on Self-Development' },
  { icon: Users, text: 'Open to ML Collaborations' },
  { icon: Heart, text: 'Mozilla Common Voice Contributor' },
];

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 12,
    },
  },
};

const skillTagVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 200,
      damping: 15,
    },
  },
};

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="about" className="py-24 bg-[#1a1a1a] min-h-screen flex items-center">
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
            Get to know me
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            About Me
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.p 
              className="text-lg text-[#d4d4d4] mb-6 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
            >
              I'm a passionate <motion.span 
                className="text-white font-medium relative inline-block"
                whileHover={{ scale: 1.05 }}
              >
                Machine Learning Engineer
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-white/30"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ delay: 0.5, duration: 0.5 }}
                />
              </motion.span> with a deep love for 
              building intelligent systems and solving complex problems through data-driven solutions.
            </motion.p>
            <motion.p 
              className="text-[#a3a3a3] mb-6 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
            >
              Currently focused on self-development and exploring the fascinating world of AI/ML.
              I'm actively looking to collaborate on Machine Learning projects and contribute to 
              meaningful open source initiatives.
            </motion.p>
            <motion.p 
              className="text-[#a3a3a3] mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
            >
              When I'm not coding, you can find me contributing to <motion.span 
                className="text-white cursor-pointer"
                whileHover={{ 
                  scale: 1.05,
                  textShadow: '0 0 8px rgba(255,255,255,0.5)',
                }}
              >
                Mozilla Common Voice
              </motion.span>,
              expanding my knowledge in cloud technologies, and experimenting with new frameworks
              and tools.
            </motion.p>

            <motion.div 
              className="space-y-3"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center gap-4 p-4 bg-[#262626] rounded-lg border-l-2 border-white cursor-pointer group"
                  whileHover={{ 
                    x: 10, 
                    backgroundColor: '#2a2a2a',
                    borderColor: '#a3a3a3',
                  }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <item.icon size={20} className="text-white group-hover:text-[#d4d4d4] transition-colors" />
                  </motion.div>
                  <span className="text-[#a3a3a3] group-hover:text-white transition-colors">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.h3 
              className="text-2xl font-bold text-white mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              Tech Stack
            </motion.h3>
            <motion.div 
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {Object.entries(skills).map(([category, items], categoryIndex) => (
                <motion.div
                  key={category}
                  variants={itemVariants}
                  custom={categoryIndex}
                >
                  <h4 className="text-sm font-semibold text-[#525252] uppercase tracking-wider mb-3">
                    {category}
                  </h4>
                  <motion.div 
                    className="flex flex-wrap gap-2"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                  >
                    {items.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        variants={skillTagVariants}
                        custom={skillIndex}
                        className={`px-4 py-2 bg-[#262626] text-[#a3a3a3] text-sm rounded-lg border border-[#333333] cursor-pointer transition-all duration-300 ${
                          hoveredSkill === skill ? 'bg-[#333333] text-white border-[#525252]' : ''
                        }`}
                        onMouseEnter={() => setHoveredSkill(skill)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        whileHover={{ 
                          scale: 1.1, 
                          y: -5,
                          boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
