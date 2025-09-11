import React from 'react';
import { ExternalLink, Zap, Award, Shield } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Catalog: React.FC = () => {
  const titleAnimation = useScrollAnimation(0.2);
  const contentAnimation = useScrollAnimation(0.2);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" ref={titleAnimation.ref}>
          <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 ${titleAnimation.className}`}>
            Conheça todas as tecnologias que você pode 
            <span className="gradient-text"> locar com a Equipalaser</span>
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed ${titleAnimation.className}`} style={{ transitionDelay: '200ms' }}>
            Acesse nosso catálogo completo e descubra a solução ideal para sua clínica.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center" ref={contentAnimation.ref}>
          <div className={`space-y-8 ${contentAnimation.className}`}>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#1dd1a1]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-[#1dd1a1]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Equipamentos de Última Geração
                  </h3>
                  <p className="text-gray-600">
                    Acesso às tecnologias mais avançadas do mercado estético mundial
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#1dd1a1]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-[#1dd1a1]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Marcas Reconhecidas
                  </h3>
                  <p className="text-gray-600">
                    Alma Lasers, Classys e outras líderes mundiais
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#1dd1a1]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-[#1dd1a1]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Suporte Completo
                  </h3>
                  <p className="text-gray-600">
                    Manutenção, treinamento e suporte técnico inclusos
                  </p>
                </div>
              </div>
            </div>

            <a 
              href="https://drive.google.com/file/d/1r1HxcVaG9iK1JVCjq9aAFXulBQoby_Tr/view"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[#1dd1a1] hover:bg-[#48e6bd] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Ver Catálogo Completo
              <ExternalLink className="w-5 h-5 ml-2" />
            </a>
          </div>

          <div className={`relative ${contentAnimation.className}`} style={{ transitionDelay: '400ms' }}>
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-xl border border-gray-100">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-md text-center">
                  <div className="text-2xl font-bold gradient-text mb-2">30+</div>
                  <div className="text-sm text-gray-600">Equipamentos Disponíveis</div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md text-center">
                  <div className="text-2xl font-bold gradient-text mb-2">12+</div>
                  <div className="text-sm text-gray-600">Tecnologias Diferentes</div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md text-center">
                  <div className="text-2xl font-bold gradient-text mb-2">100%</div>
                  <div className="text-sm text-gray-600">Aprovados ANVISA</div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md text-center">
                  <div className="text-2xl font-bold gradient-text mb-2">24/7</div>
                  <div className="text-sm text-gray-600">Suporte Técnico</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catalog;