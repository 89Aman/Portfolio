import { motion, useSpring, useMotionValue } from 'framer-motion';
import { useEffect, useState } from 'react';

interface CursorFollowerProps {
  className?: string;
}

export default function CursorFollower({ className = '' }: CursorFollowerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 400 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      
      if (!isVisible) {
        setIsVisible(true);
      }
      
      // Check if hovering over interactive element
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('interactive');
      
      setIsHoveringInteractive(!!isInteractive);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cursorX, cursorY, isVisible]);

  // Hide on touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return null;
  }

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className={`fixed top-0 left-0 w-8 h-8 rounded-full border border-[#404040] pointer-events-none z-[9999] mix-blend-difference ${className}`}
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHoveringInteractive ? 1.5 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          scale: { type: 'spring', stiffness: 400, damping: 25 },
          opacity: { duration: 0.2 },
        }}
      />
      
      {/* Inner dot */}
      <motion.div
        className={`fixed top-0 left-0 w-1 h-1 rounded-full bg-white pointer-events-none z-[9999] mix-blend-difference ${className}`}
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHoveringInteractive ? 0 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          scale: { type: 'spring', stiffness: 400, damping: 25 },
          opacity: { duration: 0.2 },
        }}
      />
    </>
  );
}
