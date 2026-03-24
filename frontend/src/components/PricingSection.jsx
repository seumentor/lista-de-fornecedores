import React, { useState, useEffect } from 'react';
import { Zap, CheckCircle, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

const PricingSection = ({ data }) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 15,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handlePurchase = () => {
    window.open(data.purchaseLink, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 via-black to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-yellow-500 rounded-full filter blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-yellow-600 rounded-full filter blur-[150px] animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge className="bg-red-500 text-white text-xl px-6 py-3 mb-6 animate-pulse">
            OFERTA ESPECIAL
          </Badge>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            <span className="text-yellow-400">50% DE DESCONTO</span> NA NOSSA
            <br />
            SUPER LISTA DE FORNECEDORES
          </h2>
        </div>

        {/* Countdown Timer */}
        <div className="flex justify-center mb-12">
          <Card className="bg-gray-900/80 border-2 border-red-500">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <Clock className="w-8 h-8 text-red-500 animate-pulse" />
                <div>
                  <p className="text-gray-400 text-sm mb-1">Oferta expira em:</p>
                  <div className="flex gap-3">
                    <div className="text-center">
                      <div className="bg-yellow-500 text-black font-black text-2xl px-4 py-2 rounded-lg min-w-[60px]">
                        {String(timeLeft.hours).padStart(2, '0')}
                      </div>
                      <p className="text-gray-400 text-xs mt-1">HORAS</p>
                    </div>
                    <div className="text-white text-2xl font-black">:</div>
                    <div className="text-center">
                      <div className="bg-yellow-500 text-black font-black text-2xl px-4 py-2 rounded-lg min-w-[60px]">
                        {String(timeLeft.minutes).padStart(2, '0')}
                      </div>
                      <p className="text-gray-400 text-xs mt-1">MIN</p>
                    </div>
                    <div className="text-white text-2xl font-black">:</div>
                    <div className="text-center">
                      <div className="bg-yellow-500 text-black font-black text-2xl px-4 py-2 rounded-lg min-w-[60px]">
                        {String(timeLeft.seconds).padStart(2, '0')}
                      </div>
                      <p className="text-gray-400 text-xs mt-1">SEG</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Pricing Card */}
        <div className="max-w-2xl mx-auto">
          <Card className="bg-gradient-to-br from-gray-900 to-black border-4 border-yellow-500 shadow-2xl shadow-yellow-500/30 transform hover:scale-[1.02] transition-all duration-300">
            <CardContent className="p-12">
              {/* Price */}
              <div className="text-center mb-8">
                <p className="text-gray-400 text-xl mb-2">DE</p>
                <p className="text-gray-500 line-through text-3xl mb-4">R$ {data.originalPrice}</p>
                <p className="text-white text-xl mb-2">POR APENAS</p>
                <div className="mb-6">
                  <p className="text-yellow-400 font-black text-6xl md:text-7xl mb-2">
                    12x de R$ {data.installmentPrice}
                  </p>
                  <p className="text-white text-2xl">
                    Ou <span className="text-yellow-400 font-bold">R$ {data.totalPrice}</span> À VISTA
                  </p>
                  <p className="text-gray-400 text-sm mt-2">(valor único, sem mensalidade)</p>
                </div>
              </div>

              {/* Included Items */}
              <div className="space-y-3 mb-8">
                {data.includes.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                    <span className="text-white text-lg">{item}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button
                onClick={handlePurchase}
                size="lg"
                className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-black text-2xl py-8 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300 animate-pulse-slow"
              >
                <Zap className="w-8 h-8 mr-3" />
                COMPRAR AGORA
              </Button>

              {/* Guarantee */}
              <div className="mt-8 text-center">
                <p className="text-gray-400 text-sm">
                  ✅ Compra 100% segura | ✅ Acesso imediato | ✅ Garantia de 7 dias
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Social Proof */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-lg mb-4">Junte-se a milhares de empreendedores de sucesso!</p>
          <div className="flex items-center justify-center gap-2">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-600 border-2 border-black flex items-center justify-center text-black font-bold">
                  {i}
                </div>
              ))}
            </div>
            <span className="text-white font-semibold">+5.000 clientes satisfeitos</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
