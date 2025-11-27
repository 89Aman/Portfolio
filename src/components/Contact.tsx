import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'Sharmaaman42@proton.me',
    href: 'mailto:Sharmaaman42@proton.me',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'sharmaaman012',
    href: 'https://linkedin.com/in/sharmaaman012',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: '89Aman',
    href: 'https://github.com/89Aman',
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="py-24 bg-[#1a1a1a]">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#262626] text-[#a3a3a3] text-sm rounded-full mb-4">
            Let's connect
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Get In Touch</h2>
          <p className="text-lg text-[#a3a3a3] max-w-2xl mx-auto leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities 
            to be part of your vision. Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.label}
              href={method.href}
              target={method.label !== 'Email' ? '_blank' : undefined}
              rel={method.label !== 'Email' ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col items-center p-8 bg-[#262626] border border-[#333333] rounded-2xl hover:border-[#525252] hover:bg-[#2a2a2a] transition-all duration-300"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-[#333333] group-hover:bg-[#404040] transition-colors duration-300 mb-4">
                <method.icon size={28} className="text-white" />
              </div>
              <span className="text-sm text-[#525252] mb-2">{method.label}</span>
              <span className="text-white font-medium group-hover:text-[#d4d4d4] transition-colors flex items-center gap-2">
                {method.value}
                <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </span>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a
            href="mailto:Sharmaaman42@proton.me"
            className="inline-flex items-center gap-3 px-10 py-4 bg-white text-[#171717] rounded-full font-semibold text-lg hover:bg-[#d4d4d4] transition-all duration-300 hover:scale-105"
          >
            <Mail size={20} />
            Send me an email
          </a>
        </motion.div>
      </div>
    </section>
  );
}
