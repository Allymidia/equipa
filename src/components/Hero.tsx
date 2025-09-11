import React from 'react';
import { ArrowRight, Award, Shield, Zap } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Hero: React.FC = () => {
  const titleAnimation = useScrollAnimation(0.2);
  const contentAnimation = useScrollAnimation(0.2);
  const imageAnimation = useScrollAnimation(0.2);

  return (
    <section id="hero" className="min-h-screen hero-gradient flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Coluna Esquerda */}
          <div className="space-y-8" ref={contentAnimation.ref}>
            <div className={`space-y-4 ${contentAnimation.className}`}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Soprano Platinum
                <span className="block gradient-text">A Revolução</span>
                <span className="block text-gray-900">em Depilação</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed">
                Descontos imperdíveis na locação do equipamento mais avançado do mercado. 
                <span className="font-medium text-gray-900"> Sem investimento inicial, máximo retorno.</span>
              </p>
            </div>

            {/* CTA */}
            <div className={`space-y-4 ${contentAnimation.className}`} style={{ transitionDelay: '400ms' }}>
              <a 
                href="https://wa.me/5511996433211?text=Ol%C3%A1%2C%20Gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20loca%C3%A7%C3%A3o%20do%20Soprano%20Ice%20Platinum"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#1dd1a1] hover:bg-[#48e6bd] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center inline-flex"
              >
                Solicitar Proposta de Locação
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <p className="text-sm text-gray-500">
                Resposta em até 30 minutos • Sem compromisso • Consultoria gratuita
              </p>
            </div>
          </div>

          {/* Coluna Direita - Showcase */}
          <div className="relative" ref={imageAnimation.ref}>
            <div className={`relative bg-gradient-to-br from-white to-gray-50 p-12 rounded-3xl shadow-2xl border border-gray-100 ${imageAnimation.className}`}>
              <div className="relative">
                <img 
                  src="/Design sem nome (4).png" 
                  alt="Soprano Platinum - Tecnologia Premium em Depilação" 
                  className="w-full h-auto max-h-[500px] object-contain mx-auto"
                />
                
                {/* Badge */}
                <div className="absolute -top-6 -right-6 bg-gradient-to-r from-[#1dd1a1] to-[#48e6bd] text-white px-8 py-4 rounded-2xl font-bold shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="text-sm font-medium">EQUIPALASER</div>
                  <div className="text-lg font-bold">SOPRANO PLATINUM</div>
                </div>
                
                {/* Destaque tecnologia */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-xl shadow-lg">
                  <div className="text-xs text-gray-500 uppercase tracking-wide">Tecnologia</div>
                  <div className="text-sm font-bold text-gray-900">Alma Trio</div>
                </div>
              </div>
              
            <div className={`absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-2xl border border-gray-100 ${imageAnimation.className}`} style={{ transitionDelay: '600ms' }}>
              <div className="text-3xl font-bold gradient-text">10 Anos</div>
              <div className="text-xs text-gray-600 font-medium">Melhor Equipamento FDA</div>
            </div>
            
            {/* Fototipos */}
            <div className={`absolute top-1/3 -right-10 bg-white p-6 rounded-2xl shadow-2xl border border-gray-100 text-left ${imageAnimation.className}`} style={{ transitionDelay: '800ms' }}>
              <div className="text-lg font-bold gradient-text">Todos os</div>
              <div className="text-sm text-gray-600 font-medium mb-2">Fototipos de Pele</div>
              <div className="flex space-x-1">
                <div className="w-3 h-3 rounded-full border border-gray-300" style={{ backgroundColor: "#ffe0cc" }}></div> {/* Fototipo I */}
                <div className="w-3 h-3 rounded-full border border-gray-400" style={{ backgroundColor: "#ffcc99" }}></div> {/* Fototipo II */}
                <div className="w-3 h-3 rounded-full border border-gray-500" style={{ backgroundColor: "#e6b07c" }}></div> {/* Fototipo III */}
                <div className="w-3 h-3 rounded-full border border-gray-600" style={{ backgroundColor: "#c68642" }}></div> {/* Fototipo IV */}
                <div className="w-3 h-3 rounded-full border border-gray-700" style={{ backgroundColor: "#8d5524" }}></div> {/* Fototipo V */}
                <div className="w-3 h-3 rounded-full border border-gray-800" style={{ backgroundColor: "#5a381e" }}></div> {/* Fototipo VI */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
  )
}