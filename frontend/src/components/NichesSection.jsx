import React from 'react';
import { Check } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const NichesSection = ({ data }) => {
  const handleCTAClick = () => {
    window.open(data.ctaLink, '_blank');
  };

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-yellow-500 rounded-full filter blur-[150px]"></div>
        <div className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-yellow-600 rounded-full filter blur-[150px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-yellow-500 text-black text-lg px-6 py-2 mb-6 hover:bg-yellow-600">
            MAIS DE 1000 FORNECEDORES
          </Badge>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            <span className="text-yellow-400">SUPER LISTA</span> DE FORNECEDORES SECRETOS
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Acesso completo a fornecedores de TODOS os nichos do mercado
          </p>
        </div>

        {/* Niches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {data.categories.map((niche, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-900 to-gray-800 border border-yellow-500/20 hover:border-yellow-500 rounded-xl p-6 transform hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20"
            >
              <div className="flex items-center gap-3">
                <div className="bg-yellow-500 rounded-lg p-2 group-hover:scale-110 transition-transform duration-300">
                  <Check className="w-5 h-5 text-black" />
                </div>
                <span className="text-white font-semibold text-lg">{niche}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 border-2 border-yellow-500/50 rounded-2xl p-8 max-w-4xl mx-auto backdrop-blur-sm">
            <p className="text-2xl md:text-3xl font-bold text-white mb-4">
              NOSSOS FORNECEDORES TAMBÉM SÃO ÓTIMOS PARA LOJAS FÍSICAS
            </p>
            <p className="text-lg text-gray-300">
              Já que possuem preços muito baixos e produtos de alta qualidade!!
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Button
            onClick={handleCTAClick}
            size="lg"
            className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-black text-xl px-12 py-8 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            COMPRAR AGORA
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NichesSection;
