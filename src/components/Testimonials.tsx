import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Maria Silva',
      location: 'São Paulo, SP',
      rating: 5,
      comment: 'Excelente atendimento! Resolveram meu problema com a segunda via da fatura muito rapidamente. A equipe é muito atenciosa e profissional.',
      avatar: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'João Santos',
      location: 'Pernambuco, PE',
      rating: 5,
      comment: 'Consegui renegociar minha dívida com condições muito boas. O atendimento via WhatsApp é muito prático e eficiente. Recomendo!',
      avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Ana Costa',
      location: 'Rio Grande do Norte, RN',
      rating: 5,
      comment: 'Empresa séria e confiável. Nunca tive problemas com o fornecimento de energia. Quando preciso de suporte, sempre sou bem atendida.',
      avatar: 'https://images.pexels.com/photos/3812944/pexels-photo-3812944.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Carlos Oliveira',
      location: 'Brasília, DF',
      rating: 5,
      comment: 'Atendimento nota 10! Esclareceram todas as minhas dúvidas sobre a conta de energia. Equipe muito preparada e educada.',
      avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Fernanda Lima',
      location: 'Salvador, BA',
      rating: 5,
      comment: 'Serviço de qualidade! A negociação da minha dívida foi feita de forma transparente e justa. Muito satisfeita com o resultado.',
      avatar: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Roberto Ferreira',
      location: 'Pernambuco, PE',
      rating: 5,
      comment: 'Processo muito simples e rápido. Consegui a segunda via da minha fatura em poucos minutos. Parabéns pela eficiência!',
      avatar: 'https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mais de 17 milhões de clientes confiam na Neo Energia. Veja alguns depoimentos reais
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 p-6 transform hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <div className="relative">
                <Quote className="absolute -top-2 -left-1 h-8 w-8 text-blue-200" />
                <p className="text-gray-700 leading-relaxed pl-6 italic">
                  "{testimonial.comment}"
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Junte-se aos milhões de brasileiros que confiam na Neo Energia
          </p>
          <a
            href="https://w.app/ajafuo"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-green-600 transition-all duration-300 inline-flex items-center group"
          >
            Fale Conosco Agora
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
