import { useState, useEffect } from 'react';
import { FileDown, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function FloatingResumeButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const resumeUrl = '/resume.pdf';

  useEffect(() => {
    const handleScroll = () => {
      // Show FAB after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-40"
        >
          {isExpanded ? (
            <motion.div
              initial={{ width: 64 }}
              animate={{ width: 'auto' }}
              className="bg-accent text-white rounded-full shadow-2xl flex items-center gap-3 px-6 py-4"
            >
              <a href={resumeUrl} download className="flex items-center gap-2">
                <FileDown className="w-5 h-5" />
                <span className="font-medium whitespace-nowrap">Download Resume</span>
              </a>
              <button
                onClick={() => setIsExpanded(false)}
                className="p-1 hover:bg-white/20 rounded-full transition-colors"
                aria-label="Collapse"
              >
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          ) : (
            <button
              onClick={() => setIsExpanded(true)}
              onMouseEnter={() => setIsExpanded(true)}
              className="w-16 h-16 bg-accent text-white rounded-full shadow-2xl hover:bg-accent/90 transition-all duration-300 hover:scale-110 flex items-center justify-center"
              aria-label="Download Resume"
            >
              <FileDown className="w-6 h-6" />
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
