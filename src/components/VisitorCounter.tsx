import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Eye, Users } from 'lucide-react';

interface VisitorCounterProps {
  className?: string;
}

export default function VisitorCounter({ className = '' }: VisitorCounterProps) {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [sessionViews, setSessionViews] = useState(1);

  useEffect(() => {
    // Generate a pseudo-random visitor count based on current date and local storage
    // This creates a realistic-looking visitor counter for demo purposes
    const initVisitorCount = () => {
      try {
        const storageKey = 'portfolio_visitor_data';
        const storedData = localStorage.getItem(storageKey);
        const now = new Date();
        const todayKey = now.toISOString().split('T')[0];
        
        // Initial base count represents a reasonable starting visitor number for a portfolio
        // The random component ensures each new visitor gets a unique starting point
        const INITIAL_BASE_COUNT = 2000;
        const INITIAL_VARIANCE = 500;
        
        const data = storedData ? JSON.parse(storedData) : {
          baseCount: INITIAL_BASE_COUNT + Math.floor(Math.random() * INITIAL_VARIANCE),
          lastDate: todayKey,
          dailyViews: 1,
          totalViews: 1
        };
        
        // If it's a new day, increment base count with yesterday's views plus organic growth
        const DAILY_ORGANIC_MIN = 5;
        const DAILY_ORGANIC_MAX = 20;
        if (data.lastDate !== todayKey) {
          data.baseCount += data.dailyViews + Math.floor(Math.random() * (DAILY_ORGANIC_MAX - DAILY_ORGANIC_MIN)) + DAILY_ORGANIC_MIN;
          data.dailyViews = 1;
          data.lastDate = todayKey;
        } else {
          // Same day, increment daily views
          data.dailyViews += 1;
        }
        
        data.totalViews += 1;
        
        localStorage.setItem(storageKey, JSON.stringify(data));
        
        // Simulate network delay for loading effect
        setTimeout(() => {
          setVisitorCount(data.baseCount + data.dailyViews);
          setSessionViews(data.dailyViews);
          setIsLoading(false);
        }, 800);
      } catch {
        // Fallback if localStorage is not available
        setTimeout(() => {
          setVisitorCount(2347);
          setIsLoading(false);
        }, 800);
      }
    };
    
    initVisitorCount();
  }, []);

  const formatNumber = (num: number) => {
    return num.toLocaleString('en-US');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className={`flex items-center justify-center gap-8 ${className}`}
    >
      <div className="flex items-center gap-3 px-5 py-3 bg-[#1f1f1f] border border-[#333333] rounded-full">
        <Users size={16} className="text-[#525252]" />
        <div className="flex flex-col">
          <span className="text-xs text-[#525252] uppercase tracking-wider">Total Visitors</span>
          {isLoading ? (
            <div className="flex items-center gap-1">
              <motion.span
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ repeat: Infinity, duration: 1.2 }}
                className="w-16 h-4 bg-[#333333] rounded"
              />
            </div>
          ) : (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-lg font-bold text-white font-mono"
            >
              {formatNumber(visitorCount || 0)}
            </motion.span>
          )}
        </div>
      </div>
      
      <div className="flex items-center gap-3 px-5 py-3 bg-[#1f1f1f] border border-[#333333] rounded-full">
        <Eye size={16} className="text-[#525252]" />
        <div className="flex flex-col">
          <span className="text-xs text-[#525252] uppercase tracking-wider">Today</span>
          {isLoading ? (
            <motion.span
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ repeat: Infinity, duration: 1.2 }}
              className="w-8 h-4 bg-[#333333] rounded"
            />
          ) : (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-lg font-bold text-white font-mono"
            >
              {sessionViews}
            </motion.span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
