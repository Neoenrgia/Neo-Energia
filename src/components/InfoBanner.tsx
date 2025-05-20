import React from 'react';

const InfoBanner: React.FC = () => {
  return (
    <section className="bg-green-600 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-white mb-6 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Energia elétrica de qualidade</h2>
            <p className="text-white/90">Fornecimento seguro e confiável para todo o Brasil</p>
          </div>
          <a 
            href="https://w.app/ieiv5u" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-white text-green-600 font-medium py-2 px-6 rounded-md hover:bg-green-100 transition duration-300"
          >
            Saiba mais
          </a>
        </div>
      </div>
    </section>
  );
};

export default InfoBanner;