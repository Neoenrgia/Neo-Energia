import React from 'react';
import { 
  Factory, 
  Wind, 
  Sun, 
  Zap, 
  MapPin, 
  Users, 
  Globe, 
  Award,
  TrendingUp,
  Shield
} from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: Factory,
      number: '5',
      label: 'Usinas Hidrelétricas',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Wind,
      number: '44',
      label: 'Parques Eólicos',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: Sun,
      number: '2',
      label: 'Parques Solares',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: Zap,
      number: '3.9 GW',
      label: 'Capacidade Instalada',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: MapPin,
      number: '18',
      label: 'Transmissoras em Operação',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: TrendingUp,
      number: '+8 mil',
      label: 'Quilômetros de Linhas',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50'
    },
    {
      icon: Users,
      number: '40 milhões',
      label: 'Brasileiros Atendidos',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: Globe,
      number: '5.5 TWH',
      label: 'Energia Vendida',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: '25+ Anos de Experiência',
      description: 'No Brasil desde 1997, construindo um futuro energético sustentável'
    },
    {
      icon: Globe,
      title: 'Grupo Iberdrola',
      description: 'Parte de uma das maiores empresas de energia do mundo'
    },
    {
      icon: Shield,
      title: 'Liderança no Setor',
      description: 'Uma das principais empresas do setor elétrico brasileiro'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Quem Somos
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Parte do grupo espanhol Iberdrola, estamos no Brasil desde 1997, sendo uma das líderes do setor elétrico. 
            Presente em 18 estados e no Distrito Federal, atuamos nas áreas de geração, transmissão, distribuição e comercialização.
          </p>
        </div>

        {/* Achievements */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={index}
                className="text-center bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-2xl"
              >
                <div className="bg-gradient-to-r from-blue-600 to-green-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-600">
                  {achievement.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Nossa Presença no Brasil
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:-translate-y-1"
                >
                  <div className={`${stat.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <Icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                  <div className={`text-2xl font-bold mb-2 ${stat.color}`}>
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Detailed Info */}
        <div className="bg-gradient-to-r from-blue-600 to-green-500 rounded-3xl p-8 md:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Compromisso com o Futuro Energético
              </h3>
              <p className="text-xl opacity-90 leading-relaxed mb-6">
                Com 17 milhões de clientes e 5 distribuidoras, estamos comprometidos em fornecer energia 
                limpa e sustentável para o desenvolvimento do Brasil.
              </p>
              <p className="text-lg opacity-80 leading-relaxed">
                Nossa infraestrutura robusta inclui mais de 8 mil quilômetros de linhas de transmissão 
                em 15 estados, garantindo confiabilidade e qualidade no fornecimento de energia elétrica.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="text-center space-y-6">
                <div>
                  <div className="text-4xl font-bold">17 milhões</div>
                  <div className="text-lg opacity-80">de clientes</div>
                </div>
                <div>
                  <div className="text-4xl font-bold">5</div>
                  <div className="text-lg opacity-80">distribuidoras</div>
                </div>
                <div>
                  <div className="text-4xl font-bold">15</div>
                  <div className="text-lg opacity-80">estados com linhas</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Faça Parte da Nossa História
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Entre em contato conosco e descubra como podemos atendê-lo melhor
          </p>
          <a
            href="https://w.app/m3ykyl"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-green-600 transition-all duration-300 inline-flex items-center group"
          >
            Falar Conosco
            <Zap className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;