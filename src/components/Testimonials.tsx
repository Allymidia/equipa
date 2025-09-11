import React from 'react';
import { Star, MapPin } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Testimonials: React.FC = () => {
  const titleAnimation = useScrollAnimation(0.2);
  const cardsAnimation = useScrollAnimation(0.1);
  const statsAnimation = useScrollAnimation(0.2);

  const testimonials = [
    {
      name: "Dra. Marina Santos",
      clinic: "Clínica Estética Premium",
      location: "São Paulo, SP",
      text: "O Soprano Platinum revolucionou nossa clínica. Triplicamos nosso faturamento em depilação e a satisfação dos pacientes é incomparável.",
      rating: 5,
      image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Dr. Carlos Mendes",
      clinic: "Instituto de Dermatologia",
      location: "Rio de Janeiro, RJ",
      text: "A locação foi a melhor decisão. Sem investimento inicial alto, pudemos oferecer a melhor tecnologia do mercado aos nossos pacientes.",
      rating: 5,
      image: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Dra. Ana Costa",
      clinic: "Laser Center Paulista",
      location: "Rio de Janeiro, RJ",
      text: "Equipamento incrível! Tratamentos mais rápidos, resultados superiores e pacientes muito mais satisfeitos. O suporte técnico é excepcional.",
      rating: 5,
      image: "https://images.pexels.com/photos/5207262/pexels-photo-5207262.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="depoimentos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" ref={titleAnimation.ref}>
          <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 ${titleAnimation.className}`}>
            O que Dizem Nossos <span className="gradient-text">Parceiros</span>
          </h2>
          <p className={`text-xl text-gray-600 leading-relaxed ${titleAnimation.className}`} style={{ transitionDelay: '200ms' }}>
            Clínicas que já transformaram seus resultados com o Soprano Platinum
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" ref={cardsAnimation.ref}>
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${cardsAnimation.className}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.clinic}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#1dd1a1] to-[#48e6bd] rounded-3xl p-8 md:p-12 text-center text-white" ref={statsAnimation.ref}>
          <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${statsAnimation.className}`}>
            + de 500 Clínicas Confiam na Nossa Solução
          </h3>
          <p className={`text-lg mb-8 opacity-90 ${statsAnimation.className}`} style={{ transitionDelay: '200ms' }}>
            Junte-se aos profissionais que já descobriram a vantagem da locação inteligente
          </p>
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 text-center ${statsAnimation.className}`} style={{ transitionDelay: '400ms' }}>
            <div>
              <div className="text-3xl font-bold">500+</div>
              <div className="text-sm opacity-75">Clínicas Parceiras</div>
            </div>
            <div>
              <div className="text-3xl font-bold">2M+</div>
              <div className="text-sm opacity-75">Sessões Realizadas</div>
            </div>
            <div>
              <div className="text-3xl font-bold">99%</div>
              <div className="text-sm opacity-75">Satisfação</div>
            </div>
            <div>
              <div className="text-3xl font-bold">+10 Anos</div>
              <div className="text-sm opacity-75">No Mercado</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;