import React from 'react';
import { TrendingUp, Shield, Users, Calculator, Clock, Award } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Benefits: React.FC = () => {
  const titleAnimation = useScrollAnimation(0.2);
  const cardsAnimation = useScrollAnimation(0.1);
  const ctaAnimation = useScrollAnimation(0.2);

  const benefits = [
    {
      icon: Calculator,
      title: "Sem Investimento Inicial",
      description: "Comece a operar com o melhor equipamento do mercado sem desembolsar centenas de milhares de reais.",
      highlight: "Economia de R$ 800.000+"
    },
    {
      icon: TrendingUp,
      title: "ROI Imediato",
      description: "Retorno do investimento já no primeiro mês com aumento significativo no volume de atendimentos.",
      highlight: "ROI em 30 dias"
    },
    {
      icon: Shield,
      title: "Manutenção Incluída",
      description: "Suporte técnico 24/7, manutenção preventiva e corretiva sem custos adicionais.",
      highlight: "Suporte Total"
    },
    {
      icon: Users,
      title: "Treinamento Completo",
      description: "Capacitação da sua equipe e protocolos de tratamento para maximizar os resultados.",
      highlight: "Equipe Especializada"
    },
    {
      icon: Clock,
      title: "Flexibilidade Total",
      description: "Contratos flexíveis que se adaptam ao crescimento da sua clínica.",
      highlight: "Sem Amarras"
    },
    {
      icon: Award,
      title: "Tecnologia Premium",
      description: "Acesso à tecnologia mais avançada sem se preocupar com obsolescência.",
      highlight: "Sempre Atualizado"
    }
  ];

  return (
    <section className="py-20 dark-gradient" id="beneficios">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" ref={titleAnimation.ref}>
          <h2 className={`text-4xl md:text-5xl font-bold text-white mb-6 ${titleAnimation.className}`}>
            Vantagens da <span className="gradient-text">Locação Inteligente</span>
          </h2>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed ${titleAnimation.className}`} style={{ transitionDelay: '200ms' }}>
            Transforme sua clínica sem riscos financeiros. Acesse a tecnologia mais avançada 
            do mercado com total flexibilidade e suporte completo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" ref={cardsAnimation.ref}>
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className={`bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2 group ${cardsAnimation.className}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-[#1dd1a1]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#1dd1a1]/30 transition-colors">
                <benefit.icon className="w-8 h-8 text-[#1dd1a1]" />
              </div>
              
              <div className="mb-4">
                <div className="text-sm font-medium text-[#1dd1a1] mb-2">
                  {benefit.highlight}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {benefit.title}
                </h3>
              </div>
              
              <p className="text-gray-300 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#1dd1a1] to-[#48e6bd] rounded-3xl p-8 md:p-12 text-center" ref={ctaAnimation.ref}>
          <h3 className={`text-2xl md:text-3xl font-bold text-white mb-6 ${ctaAnimation.className}`}>
            Comece Hoje Mesmo
          </h3>
          <p className={`text-lg text-white/90 mb-8 max-w-2xl mx-auto ${ctaAnimation.className}`} style={{ transitionDelay: '200ms' }}>
            Não deixe sua concorrência sair na frente. O Soprano Platinum pode estar 
            funcionando na sua clínica em menos de 7 dias.
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center ${ctaAnimation.className}`} style={{ transitionDelay: '400ms' }}>
            <a 
              href="https://wa.me/5511996433211?text=Ol%C3%A1%2C%20Gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20loca%C3%A7%C3%A3o%20do%20Soprano%20Ice%20Platinum"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#1dd1a1] hover:bg-gray-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl inline-block"
            >
              Solicitar Proposta Agora
            </a>
            <span className="text-white/80 text-sm">
              Resposta em até 30 minutos
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;