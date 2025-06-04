import React from 'react';
import { FileText, CreditCard, MessageSquare } from 'lucide-react';
import ServiceCard from './ServiceCard';

const Services: React.FC = () => {
  const whatsappLink = "https://w.app/mvbapv";
  
  const services = [
    {
      title: "Segunda via de boleto",
      description: "Obtenha a segunda via do seu boleto rapidamente e de forma segura",
      icon: FileText,
      link: whatsappLink
    },
    {
      title: "Quitações de dívidas",
      description: "Regularize seus débitos com condições especiais",
      icon: CreditCard,
      link: whatsappLink
    },
    {
      title: "Negociações",
      description: "Negocie seus pagamentos com condições facilitadas",
      icon: MessageSquare,
      link: whatsappLink
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Nossos Serviços</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Facilitamos sua vida com serviços rápidos e eficientes para você gerenciar sua conta de energia
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
