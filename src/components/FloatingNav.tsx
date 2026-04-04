// Add this component to Content.tsx or create a separate FloatingNav.tsx

import { useState, useEffect } from "react";


function FloatingNav() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show nav after scrolling past hero (100vh)
      setIsVisible(window.scrollY >= window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-opacity duration-300 ${
      isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
    }`}>
      <nav className="bg-white/90 backdrop-blur-md rounded-full px-6 py-3 shadow-lg border">
        <div className="flex space-x-6 text-sm">
          <button onClick={() => scrollToSection('photos')} className="hover:text-olive-600">
            Photos
          </button>
          <button onClick={() => scrollToSection('music')} className="hover:text-olive-600">
            Setlist
          </button>
        </div>
      </nav>
    </div>
  );
}

export default FloatingNav;