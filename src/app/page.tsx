// src/app/page.tsx
'use client';

// ADIÇÃO 1 de 3: Importando o 'useEffect' se já não estiver
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, X, AlertTriangle, Clock, Shield, Star, Rocket, Phone, Mail, TrendingUp, Target, Zap, Award, Users, DollarSign, ArrowRight, PlayCircle, Download } from 'lucide-react';

// ADIÇÃO 2 de 3: Declarando a interface do dataLayer
declare global {
  interface Window {
    dataLayer: any[];
  }
}

function App() {
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

  // ADIÇÃO 3 de 3: Lógica para os eventos do Data Layer
  // Evento ViewContent (dispara após 15 segundos)
  useEffect(() => {
    const viewContentTimer = setTimeout(() => {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'view_content',
        ecommerce: {
          currency: 'BRL',
          value: 39.90,
          items: [{
            item_id: '6080425',
            item_name: 'Pragas no Maracujá',
            price: 39.90,
            quantity: 1
          }]
        }
      });
    }, 15000); // 15 segundos

    return () => clearTimeout(viewContentTimer);
  }, []);

  const scrollToCheckout = () => {
    // Evento InitiateCheckout (dispara no clique)
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'initiate_checkout',
      ecommerce: {
        currency: 'BRL',
        value: 39.90,
        items: [{
          item_id: '6080425',
          item_name: 'Pragas no Maracujá',
          price: 39.90,
          quantity: 1
        }]
      }
    });
    
    // Ação original da função é mantida
    document.getElementById('checkout').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    // O RESTANTE DO SEU CÓDIGO PERMANECE EXATAMENTE IGUAL
    <div className="min-h-screen bg-white">
      {/* Barra de Urgência - Otimizada para Mobile */}
      <div className="bg-red-600 text-white py-2 px-2 sm:px-4 text-center animate-pulse">
        {/* ... seu código ... */}
      </div>

      {/* Hero Section Ultra Otimizada para Mobile */}
      <div className="bg-gradient-to-br from-green-50 to-green-100 py-6 sm:py-8 md:py-12">
        {/* ... seu código ... */}
      </div>

      {/* ... e assim por diante para o resto da página ... */}
      {/* O código completo da sua página continua aqui, sem alterações */}
    </div>
  );
}

export default App;
