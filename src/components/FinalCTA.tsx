import React from "react";
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function FinalCTA() {
  const animation = useScrollAnimation(0.2);

  return (
    <section id="final-cta" className="py-20 bg-white font-['Space_Grotesk']" ref={animation.ref}>
      <div className={`container mx-auto px-6 text-center max-w-3xl ${animation.className}`}>
        <h2 className={`text-3xl font-bold mb-6 text-gray-900 leading-tight ${animation.className}`}>
          Transforme a forma de atender seus clientes
        </h2>
        <p className={`text-lg text-gray-600 mb-10 ${animation.className}`} style={{ transitionDelay: '200ms' }}>
          Tenha acesso aos melhores equipamentos estéticos sem o peso da compra.
          Alugue com a Equipalaser e leve tecnologia de ponta para sua clínica.
        </p>
        <a 
          href="https://wa.me/5511996433211?text=Ol%C3%A1%2C%20Gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20loca%C3%A7%C3%A3o%20do%20Soprano%20Ice%20Platinum"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 text-lg font-semibold text-white rounded-2xl shadow-md transition-all duration-300 transform hover:scale-105"
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#48e6bd")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#1dd1a1")
          }
        >
          Falar com nossa equipe
        </a>
      </div>
    </section>
  );
}