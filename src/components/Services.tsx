import React from 'react';
import { FileText, CreditCard, MessageCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: 'Segunda Via de Fatura',
      description: 'Acesse facilmente a segunda via da sua conta de energia elétrica',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      icon: CreditCard,
      title: 'Negociação de Dívidas',
      description: 'Renegocie suas pendências com condições especiais e facilitadas',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      icon: MessageCircle,
      title: 'Atendimento ao Cliente',
      description: 'Suporte personalizado para todas as suas necessidades',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    }
  ];

  const handleServiceClick = (serviceName: string) => {
    window.open('https://w.app/ajafuo', '_blank');
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções completas para atender todas as suas necessidades relacionadas à energia elétrica
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                onClick={() => handleServiceClick(service.title)}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="p-8 text-center">
                  <div className={`${service.bgColor} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`h-10 w-10 ${service.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className={`bg-gradient-to-r ${service.color} text-white px-6 py-3 rounded-full font-semibold group-hover:shadow-lg transition-all duration-300 inline-flex items-center`}>
                    Acessar Serviço
                    <MessageCircle className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Precisa de ajuda? Entre em contato conosco pelo WhatsApp
          </p>
          <a
            href="https://w.app/ajafuo"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 inline-flex items-center group"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
