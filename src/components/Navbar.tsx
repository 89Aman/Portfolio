import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

// Animation variants
const menuVariants = {
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.3,
      when: 'afterChildren',
    },
  },
  open: {
    opacity: 1,
    height: 'auto',
    transition: {
      duration: 0.3,
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
};

const menuItemVariants = {
  closed: { opacity: 0, x: -20 },
  open: { opacity: 1, x: 0 },
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detect active section
      const sections = navLinks.map(link => link.href.replace('#', ''));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#171717]/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-4">
        <div className="flex items-center justify-between">
          <motion.a
            href="#home"
            className="text-2xl font-bold text-white relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
            AS
            </motion.span>
            <motion.span
              className="absolute -top-1 -right-2"
              animate={{ 
                rotate: [0, 15, -15, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <Sparkles size={12} className="text-white/50" />
            </motion.span>
          </motion.a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.a
                  href={link.href}
                  className={`relative text-sm font-medium transition-colors duration-300 ${
                    activeSection === link.href.replace('#', '')
                      ? 'text-white'
                      : 'text-[#a3a3a3] hover:text-white'
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.name}
                  {/* Active indicator */}
                  <motion.span
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-white rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ 
                      scaleX: activeSection === link.href.replace('#', '') ? 1 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.a>
              </motion.li>
            ))}
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <motion.a
                href="mailto:Sharmaaman42@proton.me"
                className="px-5 py-2 bg-white text-[#171717] rounded-full text-sm font-semibold relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-[#d4d4d4] to-transparent opacity-0 group-hover:opacity-100"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                />
                <span className="relative z-10">Get in Touch</span>
              </motion.a>
            </motion.li>
          </ul>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-white p-2 relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="md:hidden mt-4 pb-4 overflow-hidden"
            >
              <ul className="flex flex-col gap-4">
                {navLinks.map((link, index) => (
                  <motion.li 
                    key={link.name}
                    variants={menuItemVariants}
                    custom={index}
                  >
                    <motion.a
                      href={link.href}
                      className={`block text-sm font-medium transition-colors duration-300 ${
                        activeSection === link.href.replace('#', '')
                          ? 'text-white'
                          : 'text-[#a3a3a3]'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      whileHover={{ x: 10 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {link.name}
                    </motion.a>
                  </motion.li>
                ))}
                <motion.li variants={menuItemVariants}>
                  <motion.a
                    href="mailto:Sharmaaman42@proton.me"
                    className="inline-block px-5 py-2 bg-white text-[#171717] rounded-full text-sm font-semibold"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get in Touch
                  </motion.a>
                </motion.li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
