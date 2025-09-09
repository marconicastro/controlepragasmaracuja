'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, X, AlertTriangle, Clock, Shield, Star, Rocket, Phone, Mail, TrendingUp, Target, Zap, Award, Users, DollarSign, ArrowRight, PlayCircle, Download } from 'lucide-react';

export default function App() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 47,
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

  // Enviar evento view_content após 15 segundos
  useEffect(() => {
    const viewContentTimer = setTimeout(() => {
      if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({
          event: 'view_content',
          ecommerce: {
            currency: 'BRL',
            value: 39.90,
            items: [{
              item_name: 'Sistema 4 Fases para Maracujá Lucrativo',
              item_id: 'SISTEMA_4_FASES',
              price: 39.90,
              item_category: 'Ebook',
              item_brand: 'Hotmart',
            }]
          }
        });
      }
    }, 15000);

    return () => clearTimeout(viewContentTimer);
  }, []);

  const scrollToCheckout = () => {
    const checkoutSection = document.getElementById('checkout');
    if (checkoutSection) {
      checkoutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHotmartCheckout = (e: React.MouseEvent) => {
    e.preventDefault(); // Impedir o redirecionamento imediato para disparar o GTM

    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'initiate_checkout',
        ecommerce: {
          currency: 'BRL',
          value: 39.90,
          items: [{
            item_name: 'Sistema 4 Fases para Maracujá Lucrativo',
            item_id: 'SISTEMA_4_FASES',
            price: 39.90,
            item_category: 'Ebook',
            item_brand: 'Hotmart',
          }]
        }
      });
    }

    // Redireciona para a URL de pagamento da Hotmart após o evento
    window.location.href = 'https://pay.hotmart.com/L93826042G?_gl=1*14g2x1k*_ga*MTA2Mjk2NzM4LjE3MTY0NzYwNzE.*_ga_S0H3305Y5M*MTcxNjQ3NjA3MS4xLjEuMTcxNjQ3NjA3MS4wLjAuMA..*_ga_HC755G6G0G*MTcxNjQ3NjA3MS4xLjEuMTcxNjQ3NjA3MS4wLjAuMA..*_fplc*WTVzQWpYZEVNN0ZqR3NQUW9RJTJGQXNnZmglMkZZJTJCWG51aGtBJTJGc2x1Z2U1R2NCSWVWZTd0TEpldV91T0pOTW9WajZ1Z3h4a2hHTEl4N1V6d1JtZGRuYnB2c2tLdG5vJTJGNXpYd3BTRDZsTkVwckF0Z3p6S1R4T1h0dEElM0QlM0Q.&sck=HOTMART_OFERTA_PADRAO&off=s5q126s3';
  };

  return (
    <div className="bg-black text-white font-sans overflow-x-hidden">
      
      {/* Seção Principal */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tighter mb-4 sm:mb-6 animate-pulse">
          Seu guia para lucrar com a venda de polpa de maracujá
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
          Descubra o método completo e validado para transformar maracujá em uma fonte de renda estável e lucrativa.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Button onClick={scrollToCheckout} className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition-transform transform hover:scale-105">
            <TrendingUp className="w-5 h-5 mr-2" />
            QUERO ECONOMIZAR R$ 5.000 AGORA!
          </Button>
        </div>
      </section>

      {/* Seção Sobre */}
      <section className="py-16 bg-gray-900 text-white p-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6">O que você vai aprender?</h2>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-10">
            O Sistema 4 Fases para Maracujá Lucrativo te dá acesso a um passo a passo detalhado para você dominar a arte da venda de polpa de maracujá.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-green-800">
              <Star className="w-10 h-10 text-yellow-400 mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">Fase 1: Preparação</h3>
              <p className="text-gray-300">Aprenda a escolher o maracujá perfeito e os equipamentos necessários para começar sem gastar muito.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-green-800">
              <Zap className="w-10 h-10 text-purple-400 mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">Fase 2: Produção</h3>
              <p className="text-gray-300">Descubra os segredos da produção em escala, garantindo qualidade e eficiência em cada passo.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-green-800">
              <TrendingUp className="w-10 h-10 text-blue-400 mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">Fase 3: Vendas e Marketing</h3>
              <p className="text-gray-300">Domine as estratégias para vender sua polpa e construir uma base de clientes fiéis rapidamente.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-green-800">
              <DollarSign className="w-10 h-10 text-green-400 mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">Fase 4: Escala e Lucro</h3>
              <p className="text-gray-300">Transforme seu negócio caseiro em uma operação lucrativa, aumentando sua margem e seus ganhos.</p>
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <Button onClick={scrollToCheckout} className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition-transform transform hover:scale-105">
              <PlayCircle className="w-5 h-5 mr-2" />
              QUERO O SISTEMA 4 FASES AGORA!
            </Button>
          </div>
        </div>
      </section>

      {/* Seção de depoimentos */}
      <section className="py-16 bg-gray-800 text-white p-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6">Resultados Reais</h2>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-10">
            Veja o que nossos alunos estão dizendo sobre o Sistema 4 Fases:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-700 p-6 rounded-xl shadow-lg">
              <Users className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <p className="italic text-gray-200 mb-4">"Eu estava desempregada e agora consigo vender 500 litros de polpa por mês. Minha vida mudou!"</p>
              <p className="font-bold">- Maria A.</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-xl shadow-lg">
              <Users className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <p className="italic text-gray-200 mb-4">"Aprender a escalar o negócio foi o diferencial. Meu lucro triplicou em 3 meses!"</p>
              <p className="font-bold">- João R.</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-xl shadow-lg">
              <Users className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <p className="italic text-gray-200 mb-4">"O método é simples de seguir e os resultados são imediatos. Recomendo para todos!"</p>
              <p className="font-bold">- Ana B.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Garantia */}
      <section className="py-16 bg-gray-950 text-white p-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6">Garantia de Satisfação</h2>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-10">
            Se você não estiver 100% satisfeito com o Sistema 4 Fases em até 7 dias, nós devolvemos o seu dinheiro. Sem perguntas.
          </p>
          <Shield className="w-24 h-24 text-green-500 mx-auto mb-8 animate-bounce" />
          <Button onClick={scrollToCheckout} className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition-transform transform hover:scale-105">
            <Award className="w-5 h-5 mr-2" />
            GARANTIR MINHA VAGA AGORA!
          </Button>
        </div>
      </section>

      {/* Seção de Checkout */}
      <section id="checkout" className="py-16 bg-gradient-to-r from-green-700 to-green-900 text-white p-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6">Oferta Exclusiva</h2>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Acesso vitalício ao Sistema 4 Fases, materiais bônus e suporte para transformar sua vida financeira.
          </p>
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-2xl max-w-lg mx-auto text-gray-800">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Seu Investimento Hoje:</h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="bg-green-700 px-4 sm:px-6 py-2 sm:py-3 rounded-lg">
                <div className="text-xl sm:text-2xl font-bold text-white">R$ 39,90</div>
                <div className="text-xs sm:text-sm text-green-200">87% de desconto</div>
              </div>
              
              <a 
                id="botao-compra-hotmart"
                onClick={handleHotmartCheckout}
                href="https://pay.hotmart.com/L93826042G?_gl=1*14g2x1k*_ga*MTA2Mjk2NzM4LjE3MTY0NzYwNzE.*_ga_S0H3305Y5M*MTcxNjQ3NjA3MS4xLjEuMTcxNjQ3NjA3MS4wLjAuMA..*_ga_HC755G6G0G*MTcxNjQ3NjA3MS4xLjEuMTcxNjQ3NjA3MS4wLjAuMA..*_fplc*WTVzQWpYZEVNN0ZqR3NQUW9RJTJGQXNnZmglMkZZJTJCWG51aGtBJTJGc2x1Z2U1R2NCSWVWZTd0TEpldV91T0pOTW9WajZ1Z3h4a2hHTEl4N1V6d1JtZGRuYnB2c2tLdG5vJTJGNXpYd3BTRDZsTkVwckF0Z3p6S1R4T1h0dEElM0QlM0Q.&sck=HOTMART_OFERTA_PADRAO&off=s5q126s3"
                className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-sm sm:text-lg w-full sm:w-auto transition-transform transform hover:scale-105"
              >
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                GARANTIR ACESSO POR R$ 39,90
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 text-xs sm:text-sm">
              <div>
                <h4 className="font-bold mb-1 sm:mb-2">📞 Contato</h4>
                <p className="text-green-200">maracujalucrativo@gmail.com</p>
              </div>
              <div>
                <h4 className="font-bold mb-1 sm:mb-2">🔒 Segurança</h4>
                <p className="text-green-200">Compra protegida e segura</p>
              </div>
              <div>
                <h4 className="font-bold mb-1 sm:mb-2">⏰ Acesso</h4>
                <p className="text-green-200">Acesso vitalício ao conteúdo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de rodapé */}
      <footer className="py-8 bg-gray-900 text-white p-4 text-center">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
            <div className="text-sm text-gray-400">
              © 2024 Maracujá Lucrativo. Todos os direitos reservados.
            </div>
            <Button 
                onClick={scrollToCheckout}
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-sm sm:text-lg w-full sm:w-auto"
              >
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                GARANTIR AGORA
            </Button>
            <div className="text-sm text-gray-400">
              <a href="#" className="hover:underline">Termos de Uso</a> | <a href="#" className="hover:underline">Política de Privacidade</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
