import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-[#171717] z-50 flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-[#171717] via-[#1f1f1f] to-[#171717]"
        animate={{
          background: [
            'linear-gradient(135deg, #171717 0%, #1f1f1f 50%, #171717 100%)',
            'linear-gradient(135deg, #171717 0%, #262626 50%, #171717 100%)',
            'linear-gradient(135deg, #171717 0%, #1f1f1f 50%, #171717 100%)',
          ],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Glowing orbs in background */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl"
        animate={{
          scale: [1.3, 1, 1.3],
          opacity: [0.08, 0.03, 0.08],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Logo with pulse animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            type: 'spring',
            stiffness: 200,
            damping: 15,
            duration: 0.8,
          }}
        >
          <motion.div
            className="relative"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            <Code2 size={64} className="text-white" strokeWidth={1.5} />
            
            {/* Orbiting dots */}
            {[0, 120, 240].map((angle, i) => (
              <motion.div
                key={i}
                className="absolute top-1/2 left-1/2 w-3 h-3 bg-white rounded-full"
                style={{
                  x: '-50%',
                  y: '-50%',
                }}
                animate={{
                  x: [
                    Math.cos((angle * Math.PI) / 180) * 40 - 6,
                    Math.cos(((angle + 360) * Math.PI) / 180) * 40 - 6,
                  ],
                  y: [
                    Math.sin((angle * Math.PI) / 180) * 40 - 6,
                    Math.sin(((angle + 360) * Math.PI) / 180) * 40 - 6,
                  ],
                  scale: [1, 0.8, 1],
                  opacity: [0.8, 0.4, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Loading text with typing effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center"
        >
          <motion.h2 
            className="text-2xl md:text-3xl font-semibold text-white mb-3"
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            Loading Portfolio
          </motion.h2>
          
          {/* Animated dots */}
          <div className="flex items-center justify-center gap-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-white/60 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Progress bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="w-64 h-1 bg-[#262626] rounded-full overflow-hidden"
        >
          <motion.div
            className="h-full bg-gradient-to-r from-white/60 via-white to-white/60 rounded-full"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}
