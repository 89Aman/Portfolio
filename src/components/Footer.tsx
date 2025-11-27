import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

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

export default function Footer() {
  return (
    <footer className="bg-[#171717] border-t border-[#262626]">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="#home" className="inline-block text-3xl font-bold text-white mb-4">
              AS
            </a>
            <p className="text-[#a3a3a3] text-sm leading-relaxed max-w-xs">
              Building intelligent solutions through Machine Learning and crafting 
              beautiful digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#a3a3a3] hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
              Connect
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.label !== 'Email' ? '_blank' : undefined}
                  rel={social.label !== 'Email' ? 'noopener noreferrer' : undefined}
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#262626] text-[#a3a3a3] hover:bg-[#404040] hover:text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-[#262626] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#525252]">
            © {new Date().getFullYear()} Aman Sharma. All rights reserved.
          </p>
          <p className="text-sm text-[#525252] flex items-center gap-2">
            Made with <Heart size={14} className="text-[#a3a3a3]" /> and lots of ☕
          </p>
        </div>
      </div>

      {/* Back to Top */}
      <motion.a
        href="#home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed bottom-8 right-8 w-12 h-12 flex items-center justify-center rounded-full bg-white text-[#171717] shadow-lg hover:scale-110 transition-transform duration-300"
        aria-label="Back to top"
      >
        ↑
      </motion.a>
    </footer>
  );
}
