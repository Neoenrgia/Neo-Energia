import React from 'react';

const PromoCard: React.FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="bg-green-600 rounded-xl overflow-hidden shadow-xl">
          <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Energia elétrica confiável</h2>
              <p className="text-lg mb-6">NeoEnergia: fornecendo energia de qualidade para todo o Brasil</p>
              <a 
                href="https://w.app/ieiv5u" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-white text-green-600 font-medium py-2 px-6 rounded-md hover:bg-green-100 transition duration-300"
              >
                Saiba mais
              </a>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/9800002/pexels-photo-9800002.jpeg" 
                alt="Torre de alta tensão" 
                className="rounded-lg shadow-md w-full h-auto"
              />
              <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs p-2 rounded">
                Rede de distribuição - NeoEnergia
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoCard;