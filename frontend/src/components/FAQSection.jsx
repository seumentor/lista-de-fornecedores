import React from 'react';
import { HelpCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { Badge } from './ui/badge';

const FAQSection = () => {
  const faqs = [
    {
      question: "Como funciona a Super Lista de Fornecedores?",
      answer: "Após a compra, você receberá acesso imediato a uma planilha completa com mais de 1000 fornecedores de diversos nichos. Cada fornecedor vem com informações de contato, especialidades e condições de trabalho."
    },
    {
      question: "Os fornecedores trabalham com dropshipping?",
      answer: "Sim! Muitos dos fornecedores da lista trabalham com dropshipping, permitindo que você venda sem precisar manter estoque. Você só compra depois que vender!"
    },
    {
      question: "Quanto tempo tenho acesso à lista?",
      answer: "Seu acesso é VITALÍCIO! É um pagamento único de R$ 67,00 e você terá acesso para sempre, incluindo todas as atualizações futuras da lista."
    },
    {
      question: "Como recebo os bônus?",
      answer: "Todos os 6 bônus são enviados automaticamente junto com a lista de fornecedores assim que você concluir sua compra. O acesso é imediato!"
    },
    {
      question: "A lista é atualizada?",
      answer: "Sim! Estamos constantemente adicionando novos fornecedores e atualizando informações. Como cliente, você recebe todas as atualizações gratuitamente."
    },
    {
      question: "Tem garantia?",
      answer: "Sim! Oferecemos garantia incondicional de 7 dias. Se você não gostar da lista por qualquer motivo, devolvemos 100% do seu dinheiro."
    },
    {
      question: "Posso usar os fornecedores para loja física?",
      answer: "Com certeza! Os fornecedores da lista são perfeitos tanto para lojas físicas quanto para lojas online, marketplaces e dropshipping."
    },
    {
      question: "Preciso de CNPJ para comprar dos fornecedores?",
      answer: "Alguns fornecedores trabalham apenas com CNPJ, mas temos também diversos fornecedores que vendem para pessoas físicas (CPF). A lista indica claramente quais são."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500 rounded-full filter blur-[200px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <HelpCircle className="w-12 h-12 text-yellow-500" />
            <Badge className="bg-yellow-500 text-black text-xl px-6 py-3 font-black">
              DÚVIDAS FREQUENTES
            </Badge>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
            Perguntas <span className="text-yellow-400">Frequentes</span>
          </h2>
          <p className="text-xl text-gray-300">
            Tire suas dúvidas sobre a Super Lista de Fornecedores
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gray-900/50 border border-yellow-500/20 hover:border-yellow-500 rounded-xl px-6 backdrop-blur-sm transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-white hover:text-yellow-400 text-lg font-semibold py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 text-base leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
