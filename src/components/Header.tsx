import React, { useState, useEffect } from 'react';
import { Phone, Mail } from 'lucide-react';

const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroSection = document.getElementById('hero');
      const heroHeight = heroSection?.offsetHeight || 800;
      
      // Start hiding when approaching second section
      const hideThreshold = heroHeight * 0.7;
      
      if (currentScrollY > hideThreshold) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 transition-all duration-500 ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900">
              Soprano<span className="gradient-text">Platinum</span>
            </h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <a href="#beneficios" className="text-gray-700 hover:text-[#1dd1a1] transition-colors">
              Benefícios
            </a>
            <a href="#faq" className="text-gray-700 hover:text-[#1dd1a1] transition-colors">
              FAQ
            </a>
            <a href="#depoimentos" className="text-gray-700 hover:text-[#1dd1a1] transition-colors">
              Depoimentos
            </a>
          </div>
          
          <div className="flex items-center space-x-4">
            <a href="tel:+5511999999999" className="hidden sm:flex items-center text-gray-700 hover:text-[#1dd1a1] transition-colors">
              <Phone className="w-4 h-4 mr-2" />
              (11) 99643-3211
            </a>
            <a 
              href="https://wa.me/5511996433211?text=Ol%C3%A1%2C%20Gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20loca%C3%A7%C3%A3o%20do%20Soprano%20Ice%20Platinum"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1dd1a1] hover:bg-[#48e6bd] text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 inline-block"
            >
              <a 
                href="https://wa.me/5511996433211?text=Ol%C3%A1%2C%20Gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20loca%C3%A7%C3%A3o%20do%20Soprano%20Ice%20Platinum"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                Solicitar Proposta
              </a>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;