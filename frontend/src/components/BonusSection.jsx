import React from 'react';
import { Gift, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const BonusSection = ({ data }) => {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 left-1/4 w-[600px] h-[600px] bg-yellow-500 rounded-full filter blur-[200px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Gift className="w-12 h-12 text-yellow-500 animate-bounce" />
            <Badge className="bg-yellow-500 text-black text-xl px-6 py-3 font-black">
              BÔNUS INCRÍVEIS
            </Badge>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
            Comprando ainda <span className="text-yellow-400">HOJE</span>
          </h2>
          <p className="text-2xl md:text-3xl text-white">
            Você receberá <span className="text-yellow-400 font-bold">+ 6 BÔNUS GRÁTIS</span>
          </p>
        </div>

        {/* Bonus Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {data.bonusItems.map((bonus, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-yellow-500/30 hover:border-yellow-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/30 overflow-hidden group"
            >
              <CardHeader className="relative">
                {/* Bonus Number Badge */}
                <div className="absolute top-4 right-4 bg-yellow-500 text-black w-12 h-12 rounded-full flex items-center justify-center font-black text-xl group-hover:scale-110 transition-transform duration-300">
                  {index + 1}
                </div>

                {/* Original Price */}
                <div className="mb-2">
                  <span className="text-gray-500 line-through text-lg">R$ {bonus.originalPrice}</span>
                  <span className="text-yellow-500 font-black text-2xl ml-3">POR R$ 0</span>
                </div>

                <CardTitle className="text-2xl font-bold text-white leading-tight">
                  {bonus.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4">{bonus.description}</p>
                <div className="flex items-center gap-2 text-yellow-500">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-semibold">Incluso na compra</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Total Value */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 border-2 border-yellow-500 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <p className="text-gray-300 text-lg mb-2">Valor total dos bônus:</p>
              <p className="text-white font-black text-4xl md:text-5xl mb-2">
                <span className="line-through text-gray-500">R$ 285,00</span>
              </p>
              <p className="text-yellow-400 font-black text-5xl md:text-6xl">
                GRÁTIS HOJE!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
