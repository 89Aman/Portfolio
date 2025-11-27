import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, ExternalLink, Headphones, Film, Brain, BookOpen, Plug, Gamepad2 } from 'lucide-react';
import GlowCard from './ui/GlowCard';

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

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-24 bg-[#171717]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#262626] text-[#a3a3a3] text-sm rounded-full mb-4">
            What I've built
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Featured Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlowCard className="h-full bg-[#1f1f1f] border border-[#333333]">
                <article className="group h-full">
                  {/* Project Image/Icon Header */}
                  <div className="h-40 bg-gradient-to-br from-[#262626] to-[#1a1a1a] flex items-center justify-center relative overflow-hidden rounded-t-2xl">
                    <project.icon size={48} className="text-[#525252] group-hover:text-[#a3a3a3] transition-colors duration-300" />
                    
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-[#171717]/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-[#171717] hover:scale-110 transition-transform duration-300"
                      >
                        <Github size={20} />
                      </a>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#d4d4d4] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-[#a3a3a3] mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-[#262626] text-[#a3a3a3] text-xs rounded-full font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </GlowCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/89Aman?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3 border border-[#404040] text-white rounded-full font-semibold hover:bg-[#262626] transition-all duration-300"
          >
            <Github size={20} />
            View All Projects on GitHub
            <ExternalLink size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
