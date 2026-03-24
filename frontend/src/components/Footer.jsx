import React from 'react';
import { TrendingUp, Instagram, Mail } from 'lucide-react';

const Footer = ({ data }) => {
  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="w-8 h-8 text-yellow-500" />
            <span className="text-white font-bold text-2xl">FORNECEDORES VIP</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 mb-6">
            <a
              href="https://instagram.com/proffernandoaugusto"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-yellow-500 transition-colors duration-300"
            >
              <Instagram className="w-6 h-6" />
              <span>@proffernandoaugusto</span>
            </a>
            <a
              href="mailto:atendimento@fernando-augusto.com"
              className="flex items-center gap-2 text-gray-400 hover:text-yellow-500 transition-colors duration-300"
            >
              <Mail className="w-6 h-6" />
              <span>Contato</span>
            </a>
          </div>

          {/* Links */}
          <div className="flex gap-6 mb-6">
            <a href="#terms" className="text-gray-400 hover:text-yellow-500 transition-colors duration-300">
              Termos de Uso
            </a>
            <a href="#privacy" className="text-gray-400 hover:text-yellow-500 transition-colors duration-300">
              Política de Privacidade
            </a>
            <a href="#support" className="text-gray-400 hover:text-yellow-500 transition-colors duration-300">
              Suporte
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} FORNECEDORES VIP. Todos os direitos reservados.
            </p>
            <p className="text-gray-600 text-xs mt-2">
              Este site não faz parte do Facebook ou do Facebook Inc. Além disso, este site NÃO é endossado pelo Facebook de nenhuma maneira.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
