import React from 'react';
import { TrendingUp, Zap } from 'lucide-react';
import { Button } from './ui/button';

const HeroSection = ({ data }) => {
  const handleCTAClick = () => {
    window.open(data.ctaLink, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-yellow-500 rounded-full filter blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-600 rounded-full filter blur-[120px] animate-pulse delay-1000"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Logo */}
        <div className="flex items-center justify-center mb-12 animate-fade-in">
          <div className="flex items-center gap-3 bg-gradient-to-r from-yellow-500 to-yellow-600 p-1 rounded-lg">
            <div className="bg-black px-6 py-3 rounded-lg flex items-center gap-3">
              <TrendingUp className="w-8 h-8 text-yellow-500" />
              <span className="text-white font-bold text-2xl tracking-tight">MENTEDOSUCESSO5</span>
            </div>
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center max-w-5xl mx-auto mb-12">
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            <span className="text-white">RECEBA AGORA </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 animate-gradient">
              A LISTA EXCLUSIVA
            </span>
            <span className="text-white"> COM O CONTATO DOS </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 animate-gradient">
              FORNECEDORES SECRETOS
            </span>
          </h1>
        </div>

        {/* Hero Image */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
            <img
              src="https://images.pexels.com/photos/5198239/pexels-photo-5198239.jpeg"
              alt="Sucesso nos negócios"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute bottom-6 left-6 right-6 z-20">
              <div className="bg-yellow-500 text-black font-black text-xl md:text-3xl px-6 py-3 rounded-xl inline-block animate-bounce-slow">
                SAIA NA FRENTE DA CONCORRÊNCIA
              </div>
            </div>
          </div>
        </div>

        {/* Subheading */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            <span className="text-white">COMECE </span>
            <span className="text-yellow-400">HOJE MESMO</span>
            <span className="text-white"> A VENDER </span>
            <span className="text-yellow-400">PRODUTOS</span>
            <span className="text-white"> COM OS </span>
            <span className="text-yellow-400">MELHORES FORNECEDORES</span>
            <span className="text-white"> DO BRASIL!</span>
          </h2>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Button
            onClick={handleCTAClick}
            size="lg"
            className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-black text-xl px-12 py-8 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300 animate-pulse-slow"
          >
            <Zap className="w-6 h-6 mr-3" />
            QUERO TER ACESSO AOS MELHORES FORNECEDORES
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
