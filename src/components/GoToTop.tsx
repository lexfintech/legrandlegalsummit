import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when scrolled down more than 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-8 right-8 
        bg-primary-main hover:bg-primary-main/95
        text-white 
        p-3 rounded-full 
        shadow-lg hover:shadow-xl 
        transition-all duration-300 
        z-50
        group
      `}
      aria-label="Go to top"
    >
      <ArrowUp className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
    </button>
  );
};

export default GoToTop;
