import React from 'react';
import { ShoppingCart, TrendingUp, Package, Users } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const BenefitsSection = ({ data }) => {
  const icons = {
    ShoppingCart,
    TrendingUp,
    Package,
    Users
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500 rounded-full filter blur-[150px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            <span className="text-yellow-400">POR QUE ESCOLHER</span> NOSSA LISTA?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Apenas 10% das pessoas têm acesso a fornecedores com os preços mais baixos e os produtos de alta qualidade do mercado!
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {data.items.map((benefit, index) => {
            const Icon = icons[benefit.icon];
            return (
              <Card
                key={index}
                className="bg-gray-900/50 border-yellow-500/20 hover:border-yellow-500 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-500/20 backdrop-blur-sm"
              >
                <CardContent className="p-8 text-center">
                  <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 transform hover:rotate-12 transition-transform duration-300">
                    <Icon className="w-10 h-10 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Key Message */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border-2 border-yellow-500/50 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <p className="text-xl md:text-2xl text-white leading-relaxed text-center">
                São os mesmos fornecedores usados pelas <span className="text-yellow-400 font-bold">grandes lojas</span> que compram produtos a preço de fábrica e vendem para todo o Brasil!
              </p>
              <p className="text-lg text-gray-300 mt-6 text-center">
                Pensando nisso, nós do <span className="text-yellow-400 font-bold">FORNECEDORES VIP</span> criamos uma lista exclusiva com mais de <span className="text-yellow-400 font-bold">1000 fornecedores</span> de TODOS os NICHOS do mercado exclusivamente para VOCÊ!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
