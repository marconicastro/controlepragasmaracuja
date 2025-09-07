// src/app/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, X, AlertTriangle, Clock, Shield, Star, Rocket, Phone, Mail, TrendingUp, Target, Zap, Award, Users, DollarSign, ArrowRight, PlayCircle, Download } from 'lucide-react';

function App() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 47,
    seconds: 0
  });

  // --- INÍCIO DO CÓDIGO DE RASTREAMENTO ---

  useEffect(() => {
    // Dispara o evento ViewContent após 15 segundos na página.
    // Isso indica um engajamento maior do que um simples PageView.
    const viewContentTimer = setTimeout(() => {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'view_content',
        ecommerce: {
          currency: 'BRL',
          value: 39.90,
          items: [{
            item_id: '6080425', // ID do seu produto
            item_name: 'E-book Sistema de Controle de Trips',
            item_category: 'E-book',
            price: 39.90,
            quantity: 1
          }]
        }
      });
    }, 15000); // 15 segundos

    // Limpa o timer se o componente for desmontado
    return () => clearTimeout(viewContentTimer);
  }, []); // O array vazio [] garante que este useEffect rode apenas uma vez

  // --- FIM DO CÓDIGO DE RASTREAMENTO ---


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

  const scrollToCheckout = () => {
    // --- INÍCIO DO CÓDIGO DE RASTREAMENTO ---

    // Dispara o evento InitiateCheckout quando o usuário clica em um CTA.
    // Isso mede a intenção de compra.
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'initiate_checkout',
      ecommerce: {
        currency: 'BRL',
        value: 39.90,
        items: [{
          item_id: '6080425', // ID do seu produto
          item_name: 'E-book Sistema de Controle de Trips',
          item_category: 'E-book',
          price: 39.90,
          quantity: 1
        }]
      }
    });

    // --- FIM DO CÓDIGO DE RASTREAMENTO ---

    document.getElementById('checkout').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Restante do seu código da página (JSX) permanece exatamente o mesmo */}
      {/* ... */}
      {/* Hero Section Ultra Otimizada para Mobile */}
      <div className="bg-gradient-to-br from-green-50 to-green-100 py-6 sm:py-8 md:py-12">
        {/* ... */}
        <Button 
          onClick={scrollToCheckout} // Esta função agora dispara o evento
          className="bg-orange-500 hover:bg-orange-600 text-white font-black py-4 sm:py-6 px-6 sm:px-12 rounded-full text-base sm:text-xl md:text-2xl mb-4 sm:mb-6 transform hover:scale-105 transition-all duration-200 shadow-2xl animate-bounce w-full sm:w-auto"
        >
          <Rocket className="w-4 h-4 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
          QUERO ECONOMIZAR R$ 5.000 AGORA!
        </Button>
        {/* ... */}
      </div>
      {/* ... */}
      {/* Seção da Solução Revolucionária */}
      <div className="bg-gradient-to-br from-green-500 to-green-700 py-8 sm:py-12 md:py-16 text-white">
        {/* ... */}
        <Button 
          onClick={scrollToCheckout} // Esta função agora dispara o evento
          className="bg-yellow-400 hover:bg-yellow-500 text-green-800 font-black py-4 sm:py-6 px-6 sm:px-12 rounded-full text-base sm:text-xl transform hover:scale-105 transition-all duration-200 shadow-2xl w-full sm:w-auto"
        >
          <Target className="w-4 h-4 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
          QUERO O SISTEMA 4 FASES AGORA!
        </Button>
        {/* ... */}
      </div>
      {/* ... */}
      {/* Seção de Urgência e Escassez */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 py-8 sm:py-12 md:py-16 text-white">
        {/* ... */}
        <Button 
          onClick={scrollToCheckout} // Esta função agora dispara o evento
          className="bg-yellow-400 hover:bg-yellow-500 text-red-600 font-black py-4 sm:py-6 px-6 sm:px-12 rounded-full text-base sm:text-xl transform hover:scale-105 transition-all duration-200 shadow-2xl animate-pulse w-full sm:w-auto"
        >
          <Zap className="w-4 h-4 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
          GARANTIR MINHA VAGA AGORA!
        </Button>
        {/* ... */}
      </div>
      {/* ... */}
      {/* Seção de Checkout */}
      <div id="checkout" className="bg-gray-50 py-8 sm:py-12 md:py-16">
        {/* ... */}
        <a 
          href="https://pay.hotmart.com/I101398692S" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-black py-4 sm:py-6 px-4 sm:px-6 rounded-lg text-base sm:text-xl transform hover:scale-105 transition-all duration-200 shadow-2xl inline-flex items-center justify-center gap-2 sm:gap-3"
        >
          <DollarSign className="w-4 h-4 sm:w-6 sm:h-6" />
          GARANTIR ACESSO POR R$ 39,90
        </a>
        {/* ... */}
      </div>
      {/* ... */}
      {/* Footer */}
      <div className="bg-green-800 text-white py-6 sm:py-8">
        {/* ... */}
        <Button 
          onClick={scrollToCheckout} // Esta função agora dispara o evento
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-sm sm:text-lg w-full sm:w-auto"
        >
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
          GARANTIR AGORA
        </Button>
        {/* ... */}
      </div>
    </div>
   );
}

export default App;
