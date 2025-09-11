import React from 'react';
import { Waves, Target, Clock, Heart } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Features: React.FC = () => {
  const titleAnimation = useScrollAnimation(0.2);
  const cardsAnimation = useScrollAnimation(0.1);
  const bottomSectionAnimation = useScrollAnimation(0.2);

  const features = [
    {
      icon: Waves,
      title: "Tecnologia Alma Trio",
      description: "Três comprimentos de onda simultaneamente (755nm, 810nm, 1064nm) para máxima eficácia em todos os tipos de pele."
    },
    {
      icon: Target,
      title: "Precisão Incomparável",
      description: "Sistema de resfriamento avançado e distribuição homogênea de energia para resultados superiores."
    },
    {
      icon: Clock,
      title: "Tratamentos Mais Rápidos",
      description: "Reduz o tempo de sessão em até 70%, permitindo atender mais pacientes com conforto total."
    },
    {
      icon: Heart,
      title: "Conforto do Paciente",
      description: "Tecnologia SHR (Super Hair Removal) confortável e segura, pois atende a todos os fototipos de pele, garantindo resultados eficazes para diferentes tipos de clientes."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" ref={titleAnimation.ref}>
          <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 ${titleAnimation.className}`}>
            Por que o Soprano Platinum é 
            <span className="gradient-text"> Diferente?</span>
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed ${titleAnimation.className}`} style={{ transitionDelay: '200ms' }}>
            A tecnologia mais avançada do mundo em depilação a laser, agora disponível 
            através de locação inteligente para sua clínica.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" ref={cardsAnimation.ref}>
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group ${cardsAnimation.className}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-[#1dd1a1]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#1dd1a1]/20 transition-colors">
                <feature.icon className="w-8 h-8 text-[#1dd1a1]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-3xl p-8 md:p-12 shadow-xl" ref={bottomSectionAnimation.ref}>
          <div className={`grid lg:grid-cols-2 gap-12 items-center ${bottomSectionAnimation.className}`}>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Resultados Clinicamente Comprovados
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-[#1dd1a1] rounded-full mr-4"></div>
                  <span className="text-gray-700">Redução de pelos de até 95% em 6-8 sessões</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-[#1dd1a1] rounded-full mr-4"></div>
                  <span className="text-gray-700">Eficaz em todos os fototipos de pele</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-[#1dd1a1] rounded-full mr-4"></div>
                  <span className="text-gray-700">Tratamento seguro e confortável</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-[#1dd1a1] rounded-full mr-4"></div>
                  <span className="text-gray-700">Aprovado por dermatologistas mundialmente</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/Soprano plat.png" 
                alt="Equipamento Soprano Platinum - Resultados Comprovados" 
                className="w-full h-80 object-contain rounded-2xl bg-white p-4"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;