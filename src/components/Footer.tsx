import React from 'react';
import Logo from './Logo';
import { Facebook, Twitter, Instagram, Youtube, Globe2, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <Logo className="h-10 w-auto mb-4 text-white" />
            <p className="text-gray-400 mb-4">
              A NeoEnergia atua nos segmentos de distribuição e fornecimento de energia elétrica.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li><a href="https://w.app/m3ykyl" className="text-gray-400 hover:text-white transition-colors">Segunda via de boleto</a></li>
              <li><a href="https://w.app/m3ykyl" className="text-gray-400 hover:text-white transition-colors">Quitações de dívidas</a></li>
              <li><a href="https://w.app/m3ykyl" className="text-gray-400 hover:text-white transition-colors">Negociações</a></li>
              <li><a href="https://w.app/m3ykyl" className="text-gray-400 hover:text-white transition-colors">Ligação nova</a></li>
              <li><a href="https://w.app/m3ykyl" className="text-gray-400 hover:text-white transition-colors">Religação</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Informações</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sobre nós</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sustentabilidade</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Investidores</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Trabalhe conosco</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Fornecedores</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Globe2 size={20} className="mr-2 text-green-500 flex-shrink-0 mt-1" />
                <span className="text-gray-400">Atendimento Online 24h</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-green-500 flex-shrink-0" />
                <a href="tel:83987919026" className="text-gray-400 hover:text-white transition-colors">(83) 98791-9026</a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-green-500 flex-shrink-0" />
                <a href="mailto:contato@neoenergia.com" className="text-gray-400 hover:text-white transition-colors">contato@neoenergia.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} NeoEnergia. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Política de Privacidade</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Termos de Uso</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Mapa do Site</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
