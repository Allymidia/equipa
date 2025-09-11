import React from 'react';
import { CheckCircle, ArrowLeft, Phone } from 'lucide-react';

const ThankYou: React.FC = () => {
  return (
    <div className="min-h-screen hero-gradient flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-white rounded-3xl p-12 shadow-2xl">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Obrigado pelo seu Interesse!
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Recebemos sua solicitação e nossa equipe especializada entrará em contato 
            em até <span className="font-semibold text-[#1dd1a1]">30 minutos</span> para 
            apresentar uma proposta personalizada para sua clínica.
          </p>
          
          <div className="bg-gray-50 rounded-2xl p-6 mb-8">
            <h3 className="font-semibold text-gray-900 mb-4">Próximos Passos:</h3>
            <div className="space-y-3 text-left">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-[#1dd1a1] text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</div>
                <span className="text-gray-700">Análise do perfil da sua clínica</span>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-[#1dd1a1] text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</div>
                <span className="text-gray-700">Proposta personalizada de locação</span>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-[#1dd1a1] text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</div>
                <span className="text-gray-700">Agendamento da instalação</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <a 
              href="https://wa.me/5511996433211?text=Ol%C3%A1%2C%20Gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20loca%C3%A7%C3%A3o%20do%20Soprano%20Ice%20Platinum"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[#1dd1a1] hover:bg-[#48e6bd] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <Phone className="w-5 h-5 mr-2" />
              Falar Agora no WhatsApp
            </a>
            
            <div>
              <button 
                onClick={() => window.history.back()}
                className="inline-flex items-center text-gray-600 hover:text-[#1dd1a1] transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar à página inicial
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;