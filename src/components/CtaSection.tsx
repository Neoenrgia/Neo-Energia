import React from 'react';
import { ArrowRight } from 'lucide-react';

const CtaSection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-8 flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Precisa de ajuda com sua conta?
            </h2>
            <p className="text-gray-600 max-w-2xl mb-8">
              Fale diretamente com um de nossos atendentes e solucione suas questões com rapidez e facilidade.
              Estamos disponíveis para ajudar você com qualquer dúvida relacionada à sua conta de energia.
            </p>
            <a 
              href="https://w.app/m3ykyl" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center bg-green-600 text-white font-medium py-3 px-6 rounded-md hover:bg-green-700 transition duration-300"
            >
              Falar com atendente
              <ArrowRight size={18} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
