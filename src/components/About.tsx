import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
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

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 bg-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#262626] text-[#a3a3a3] text-sm rounded-full mb-4">
            Get to know me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">About Me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-[#d4d4d4] mb-6 leading-relaxed">
              I'm a passionate <span className="text-white font-medium">Machine Learning Engineer</span> with a deep love for 
              building intelligent systems and solving complex problems through data-driven solutions.
            </p>
            <p className="text-[#a3a3a3] mb-6 leading-relaxed">
              Currently focused on self-development and exploring the fascinating world of AI/ML.
              I'm actively looking to collaborate on Machine Learning projects and contribute to 
              meaningful open source initiatives.
            </p>
            <p className="text-[#a3a3a3] mb-8 leading-relaxed">
              When I'm not coding, you can find me contributing to <span className="text-white">Mozilla Common Voice</span>,
              expanding my knowledge in cloud technologies, and experimenting with new frameworks
              and tools.
            </p>

            <div className="space-y-3">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-[#262626] rounded-lg border-l-2 border-white"
                >
                  <item.icon size={20} className="text-white" />
                  <span className="text-[#a3a3a3]">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">Tech Stack</h3>
            <div className="space-y-6">
              {Object.entries(skills).map(([category, items], categoryIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + categoryIndex * 0.1 }}
                >
                  <h4 className="text-sm font-semibold text-[#525252] uppercase tracking-wider mb-3">
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-[#262626] text-[#a3a3a3] text-sm rounded-lg border border-[#333333] hover:border-[#525252] hover:text-white transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
