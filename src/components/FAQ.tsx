import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const titleAnimation = useScrollAnimation(0.2);
  const faqAnimation = useScrollAnimation(0.1);
  const ctaAnimation = useScrollAnimation(0.2);

  const faqs = [
    {
      question: "Qual o valor da locação mensal do Soprano Platinum?",
      answer: "O valor varia conforme o plano escolhido e volume de uso. Nossa equipe comercial prepara uma proposta personalizada baseada no perfil da sua clínica. Entre em contato para receber um orçamento sem compromisso."
    },
    {
      question: "A manutenção está incluída na locação?",
      answer: "Sim! A locação inclui manutenção preventiva e corretiva, suporte técnico 24/7, treinamento da equipe e atualizações de software. Você só precisa focar em atender seus pacientes."
    },
    {
      question: "Qual o prazo mínimo de contrato?",
      answer: "Oferecemos contratos flexíveis a partir de 12 meses, com opções de renovação e upgrade. Nosso objetivo é acompanhar o crescimento da sua clínica."
    },
    {
      question: "O equipamento funciona em todos os tipos de pele?",
      answer: "Sim! O Soprano Platinum com tecnologia Alma Trio é eficaz e seguro para todos os fototipos de pele (I a VI), incluindo peles bronzeadas e morenas."
    },
    {
      question: "Quanto tempo demora a instalação?",
      answer: "A instalação é realizada em 1-2 dias úteis. Incluímos treinamento completo da equipe e acompanhamento nos primeiros atendimentos para garantir total segurança."
    },
    {
      question: "Há garantia de resultados?",
      answer: "O Soprano Platinum tem eficácia clinicamente comprovada com redução de até 95% dos pelos. Oferecemos suporte contínuo para otimizar os protocolos de tratamento na sua clínica."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" ref={titleAnimation.ref}>
          <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 ${titleAnimation.className}`}>
            Perguntas <span className="gradient-text">Frequentes</span>
          </h2>
          <p className={`text-xl text-gray-600 leading-relaxed ${titleAnimation.className}`} style={{ transitionDelay: '200ms' }}>
            Esclarecemos as principais dúvidas sobre a locação do Soprano Platinum
          </p>
        </div>

        <div className="space-y-4" ref={faqAnimation.ref}>
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 ${faqAnimation.className}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <button
                className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-[#1dd1a1] focus:ring-opacity-50"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-[#1dd1a1] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  )}
                </div>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center" ref={ctaAnimation.ref}>
          <p className={`text-gray-600 mb-4 ${ctaAnimation.className}`}>Ainda tem dúvidas?</p>
          <a
            className={ctaAnimation.className}
            style={{ transitionDelay: '200ms' }}
            href="https://wa.me/5511996433211?text=Ol%C3%A1%2C%20Gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20loca%C3%A7%C3%A3o%20do%20Soprano%20Ice%20Platinum"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1dd1a1] hover:bg-[#48e6bd] text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 inline-block"
          >
            Falar com Especialista
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;