import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { ArrowUp } from 'lucide-react';

import { cn } from '@/lib/utils';

function GoTopButton({ className }: { 
  className?: string
 }) {
  const [showButton, setShowButton] = useState(false);
  const [lastScrollPos, setLastScrollPos] = useState(0);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    // Show button if scrolling up and not at the top of the page
    if (currentScrollPos < lastScrollPos && currentScrollPos > 50) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }

    // Update last scroll position
    setLastScrollPos(currentScrollPos);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollPos]);

  return (
    <AnimatePresence>
      {showButton && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className={cn("fixed bottom-4 right-[50%] secondaryBG text-white p-2 rounded-full shadow-lg z-20", className)}
        >
          <ArrowUp/>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default GoTopButton;