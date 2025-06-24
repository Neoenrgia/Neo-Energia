import React from 'react';
import { 
  Zap, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  MessageCircle
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  const quickLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Serviços', href: '#services' },
    { name: 'Quem Somos', href: '#about' },
    { name: 'Depoimentos', href: '#testimonials' }
  ];

  const services = [
    { name: 'Segunda Via de Fatura', href: 'https://w.app/ajafuo' },
    { name: 'Negociação de Dívidas', href: 'https://w.app/ajafuo' },
    { name: 'Atendimento ao Cliente', href: 'https://w.app/ajafuo' },
    { name: 'Suporte Técnico', href: 'https://w.app/ajafuo' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-green-500 p-2 rounded-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Neo Energia</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Parte do grupo Iberdrola, fornecendo energia limpa e confiável 
              para mais de 40 milhões de brasileiros desde 1997.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="bg-gray-800 p-3 rounded-lg hover:bg-gradient-to-r hover:from-blue-600 hover:to-green-500 transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-blue-400">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-green-400">Serviços</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-purple-400">Contato</h3>
            <div className="space-y-4">
              <a
                href="https://w.app/ajafuo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300 group"
              >
                <MessageCircle className="h-5 w-5 text-green-500 group-hover:scale-110 transition-transform duration-300" />
                <span>WhatsApp</span>
              </a>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="h-5 w-5 text-blue-500" />
                <span>Central de Atendimento</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="h-5 w-5 text-purple-500" />
                <span>atendimento@neoenergia.com</span>
              </div>
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="h-5 w-5 text-red-500 mt-1" />
                <span>18 Estados + Distrito Federal</span>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="mt-6">
              <a
                href="https://w.app/ajafuo"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center group w-full justify-center"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Neo Energia - Grupo Iberdrola. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors duration-300">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Termos de Uso
              </a>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
