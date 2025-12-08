import { motion } from 'framer-motion';
import { useState } from 'react';

interface WaveTransitionProps {
  onComplete: () => void;
}

export default function WaveTransition({ onComplete }: WaveTransitionProps) {
  // Generate random bubble configurations - use useState initializer to avoid re-renders
  const [bubbles] = useState(() => 
    Array.from({ length: 30 }, (_, i) => {
      const random1 = Math.random();
      const random2 = Math.random();
      const random3 = Math.random();
      const random4 = Math.random();
      return {
        id: i,
        x: random1 * 100, // percentage
        delay: random2 * 1,
        duration: 2 + random3 * 2,
        size: 10 + random4 * 40, // px
        xMove1: random1 * 100 - 50,
        xMove2: random2 * 100 - 50,
      };
    })
  );

  // Generate sparkle configurations - use useState initializer to avoid re-renders
  const [sparkles] = useState(() =>
    Array.from({ length: 20 }, (_, i) => {
      const random1 = Math.random();
      const random2 = Math.random();
      const random3 = Math.random();
      return {
        id: i,
        left: random1 * 100,
        duration: 1.5 + random2 * 1.5,
        delay: random3 * 1.2,
      };
    })
  );

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      {/* Multiple wave layers for depth */}
      {[0, 1, 2].map((waveIndex) => (
        <motion.div
          key={`wave-${waveIndex}`}
          className="absolute inset-x-0 bottom-0"
          style={{
            background: waveIndex === 2 
              ? 'linear-gradient(to top, #171717 0%, #171717 100%)'
              : waveIndex === 1
              ? 'linear-gradient(to top, rgba(23, 23, 23, 0.8) 0%, rgba(23, 23, 23, 0) 100%)'
              : 'linear-gradient(to top, rgba(23, 23, 23, 0.4) 0%, rgba(23, 23, 23, 0) 100%)',
            zIndex: 50 + waveIndex,
          }}
          initial={{ 
            height: '0%',
            opacity: 0,
          }}
          animate={{ 
            height: '100%',
            opacity: 1,
          }}
          transition={{
            duration: 1.5,
            delay: waveIndex * 0.15,
            ease: [0.43, 0.13, 0.23, 0.96], // Custom ease for smooth wave
          }}
          onAnimationComplete={() => {
            if (waveIndex === 2) {
              // Call onComplete after the final wave completes
              setTimeout(onComplete, 300);
            }
          }}
        >
          {/* Wave shape at the top of the fill */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-32"
            style={{
              background: 'transparent',
            }}
            initial={{ y: 0 }}
            animate={{ y: [-20, 0, -20] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <svg
              className="absolute top-0 w-full h-full"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                d="M0,0 C300,60 600,60 900,0 C1050,30 1125,30 1200,0 L1200,120 L0,120 Z"
                fill={waveIndex === 2 ? '#171717' : `rgba(23, 23, 23, ${0.3 + waveIndex * 0.2})`}
                initial={{ d: "M0,60 C300,0 600,0 900,60 C1050,90 1125,90 1200,60 L1200,120 L0,120 Z" }}
                animate={{ 
                  d: [
                    "M0,60 C300,0 600,0 900,60 C1050,90 1125,90 1200,60 L1200,120 L0,120 Z",
                    "M0,0 C300,60 600,60 900,0 C1050,30 1125,30 1200,0 L1200,120 L0,120 Z",
                    "M0,60 C300,0 600,0 900,60 C1050,90 1125,90 1200,60 L1200,120 L0,120 Z",
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </svg>
          </motion.div>
        </motion.div>
      ))}

      {/* Floating bubbles */}
      <div className="absolute inset-0" style={{ zIndex: 52 }}>
        {bubbles.map((bubble) => (
          <motion.div
            key={bubble.id}
            className="absolute rounded-full"
            style={{
              left: `${bubble.x}%`,
              bottom: 0,
              width: bubble.size,
              height: bubble.size,
              background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.05))',
              boxShadow: 'inset 0 0 20px rgba(255, 255, 255, 0.2)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
            initial={{ 
              y: 0, 
              opacity: 0,
              scale: 0,
            }}
            animate={{ 
              y: -(window.innerHeight + bubble.size + 100),
              opacity: [0, 0.8, 0.8, 0],
              scale: [0, 1, 1, 0.8],
              x: [0, bubble.xMove1, bubble.xMove2],
            }}
            transition={{
              duration: bubble.duration,
              delay: bubble.delay,
              ease: 'easeOut',
            }}
          />
        ))}
      </div>

      {/* Additional sparkles/particles for extra effect */}
      <div className="absolute inset-0" style={{ zIndex: 53 }}>
        {sparkles.map((sparkle) => (
          <motion.div
            key={`sparkle-${sparkle.id}`}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${sparkle.left}%`,
              bottom: 0,
            }}
            initial={{ 
              y: 0, 
              opacity: 0,
            }}
            animate={{ 
              y: -(window.innerHeight + 50),
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: sparkle.duration,
              delay: sparkle.delay,
              ease: 'easeOut',
            }}
          />
        ))}
      </div>
    </div>
  );
}
