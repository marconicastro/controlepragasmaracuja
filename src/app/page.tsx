'use client'; // <-- A LINHA QUE FALTAVA, AGORA NO LUGAR CERTO.

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, X, AlertTriangle, Clock, Shield, Star, Rocket, Phone, Mail, TrendingUp, Target, Zap, Award, Users, DollarSign, ArrowRight, PlayCircle, Download } from 'lucide-react';

// Declaração de tipos para dataLayer
declare global {
  interface Window {
    dataLayer: any[];
  }
}

// Função de rastreamento segura
const pushToDataLayer = (data: object) => {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(data);
  }
};

function App() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 47,
    seconds: 0
  });

  // Seu useEffect do timer
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

  // Lógica de rastreamento corrigida
  useEffect(() => {
    const viewContentTimer = setTimeout(() => {
      pushToDataLayer({
        event: 'view_content',
        ecommerce: {
          currency: 'BRL',
          value: 39.90,
          items: [{
            item_id: '6080425',
            item_name: 'Sistema de Controle de Trips',
            price: 39.90,
            quantity: 1
          }]
        }
      });
    }, 15000);

    return () => clearTimeout(viewContentTimer);
  }, []);

  const scrollToCheckout = () => {
    pushToDataLayer({
      event: 'initiate_checkout',
      ecommerce: {
        currency: 'BRL',
        value: 39.90,
        items: [{
          item_id: '6080425',
          item_name: 'Sistema de Controle de Trips',
          price: 39.90,
          quantity: 1
        }]
      }
    });
    
    document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    // SEU CÓDIGO JSX COMPLETO E INTOCADO VAI AQUI
    <div className="min-h-screen bg-white">
      {/* ... (toda a sua página, exatamente como era antes) ... */}
    </div>
  );
}

export default App;
