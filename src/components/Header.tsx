import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Logo className="h-12 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-green-600 font-medium">
              Residencial
            </a>
            <a href="#" className="text-gray-700 hover:text-green-600 font-medium">
              Empresarial
            </a>
            <a href="#" className="text-gray-700 hover:text-green-600 font-medium">
              Institucional
            </a>
            <a href="#" className="text-gray-700 hover:text-green-600 font-medium">
              Sustentabilidade
            </a>
            <a href="#" className="text-gray-700 hover:text-green-600 font-medium">
              Atendimento
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-inner">
          <nav className="flex flex-col space-y-4">
            <a href="#" className="text-gray-700 hover:text-green-600 font-medium">
              Residencial
            </a>
            <a href="#" className="text-gray-700 hover:text-green-600 font-medium">
              Empresarial
            </a>
            <a href="#" className="text-gray-700 hover:text-green-600 font-medium">
              Institucional
            </a>
            <a href="#" className="text-gray-700 hover:text-green-600 font-medium">
              Sustentabilidade
            </a>
            <a href="#" className="text-gray-700 hover:text-green-600 font-medium">
              Atendimento
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;