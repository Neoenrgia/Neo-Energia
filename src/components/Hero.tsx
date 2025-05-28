import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-green-600 overflow-hidden">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-white z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Energia elétrica para transformar sua vida
            </h1>
            <p className="text-xl mb-8">
              Fornecimento confiável de energia para seu dia a dia
            </p>
            <a 
              href="https://w.app/37vsjw" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-green-600 font-medium py-3 px-6 rounded-md hover:bg-green-100 transition duration-300"
            >
              Fale Conosco
            </a>
          </div>
          <div className="hidden lg:block">
            <img 
              src="https://images.pexels.com/photos/8486972/pexels-photo-8486972.jpeg" 
              alt="Manutenção de rede elétrica" 
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-full h-16 bg-wave-pattern bg-repeat-x"></div>
    </section>
  );
};

export default Hero
