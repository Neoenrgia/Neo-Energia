import React from 'react';
import { FileText, HandHeart, MessageCircle, Zap, Phone, Mail, MapPin } from 'lucide-react';

function App() {
  const whatsappUrl = "https://wa.me/557135999056?text=Ol%C3%A1%2C%20desejo%20atendimento%20";

  const handleButtonClick = () => {
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-teal-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-emerald-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <img 
                src="/public/channels4_profile.jpg" 
                alt="Soluções de Energia Logo" 
                className="w-10 h-10 rounded-lg object-cover"
              />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Soluções de Energia
              </h1>
            </div>
            <div className="hidden md:flex items-center space-x-6 text-gray-600">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span className="text-sm">Atendimento 24h</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Atendimento Neo{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              especializado
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Fornecemos soluções completas em energia elétrica com excelência e atendimento personalizado. 
            Sua satisfação é nossa prioridade.
          </p>
        </div>

        {/* Main Action Buttons */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {/* 2ª Via Fatura */}
          <div className="group">
            <button
              onClick={handleButtonClick}
              className="w-full bg-white hover:bg-emerald-50 border-2 border-emerald-100 hover:border-emerald-300 rounded-2xl p-8 transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg"
            >
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center group-hover:from-emerald-600 group-hover:to-emerald-700 transition-all duration-300">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">2ª Via Fatura</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Solicite a segunda via da sua fatura de forma rápida e prática
                </p>
              </div>
            </button>
          </div>

          {/* Negociação de Dívidas */}
          <div className="group">
            <button
              onClick={handleButtonClick}
              className="w-full bg-white hover:bg-blue-50 border-2 border-blue-100 hover:border-blue-300 rounded-2xl p-8 transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg"
            >
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300">
                  <HandHeart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Negociação de Dívidas</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Encontre a melhor solução para quitar seus débitos em aberto
                </p>
              </div>
            </button>
          </div>

          {/* Falar com Atendente */}
          <div className="group">
            <button
              onClick={handleButtonClick}
              className="w-full bg-white hover:bg-teal-50 border-2 border-teal-100 hover:border-teal-300 rounded-2xl p-8 transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg"
            >
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full flex items-center justify-center group-hover:from-teal-600 group-hover:to-teal-700 transition-all duration-300">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Falar com Atendente</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Converse diretamente com nossa equipe especializada
                </p>
              </div>
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/50">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Por que escolher a Soluções de Energia?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Atendimento Rápido</h4>
              <p className="text-gray-600">Resolução ágil e eficiente de todas as suas necessidades</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Suporte 24h</h4>
              <p className="text-gray-600">Estamos disponíveis quando você mais precisa</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <HandHeart className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Soluções Personalizadas</h4>
              <p className="text-gray-600">Cada cliente recebe um atendimento único e especializado</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src="/public/channels4_profile.jpg" 
                  alt="Soluções de Energia Logo" 
                  className="w-10 h-10 rounded-lg object-cover"
                />
                <h3 className="text-2xl font-bold">Soluções de Energia</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Comprometidos em fornecer energia de qualidade e soluções inovadoras 
                para residências e empresas.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Fale Conosco</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-400">
                  <Phone className="w-5 h-5" />
                  <span>Atendimento via WhatsApp</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Mail className="w-5 h-5" />
                  <span>Suporte 24 horas por dia</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <MapPin className="w-5 h-5" />
                  <span>Atendimento em todo território nacional</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Soluções de Energia. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
