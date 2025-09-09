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

  useEffect(() => {
    const viewContentTimer = setTimeout(() => {
      if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({
          event: 'view_content',
          ecommerce: {
            currency: 'BRL',
            value: 39.90,
            items: [{
              item_id: '6080425',
              item_name: 'Sistema de Controle de Trips - Maracujá',
              category: 'Agricultura',
              quantity: 1,
              price: 39.90
            }]
          }
        });
      }
    }, 15000);

    return () => clearTimeout(viewContentTimer);
  }, []);

  const scrollToCheckout = () => {
    document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleHotmartCheckout = () => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'initiate_checkout',
        ecommerce: {
          currency: 'BRL',
          value: 39.90,
          items: [{
            item_id: '6080425',
            item_name: 'Sistema de Controle de Trips - Maracujá',
            category: 'Agricultura',
            quantity: 1,
            price: 39.90
          }]
        }
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Barra de Urgência - Otimizada para Mobile */}
      <div className="bg-red-600 text-white py-2 px-2 sm:px-4 text-center animate-pulse">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm font-bold">
          <div className="flex items-center gap-1">
            <AlertTriangle className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="text-center">ATENÇÃO: Apenas 47 minutos restantes para garantir o desconto de 87%!</span>
          </div>
          <div className="bg-red-800 px-2 py-1 rounded font-mono text-xs sm:text-sm">
            {String(timeLeft.hours).padStart(2, '0')}:
            {String(timeLeft.minutes).padStart(2, '0')}:
            {String(timeLeft.seconds).padStart(2, '0')}
          </div>
        </div>
      </div>

      {/* Hero Section Ultra Otimizada para Mobile */}
      <div className="bg-gradient-to-br from-green-50 to-green-100 py-6 sm:py-8 md:py-12">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="max-w-4xl mx-auto text-center">
            
            <div className="inline-flex items-center gap-1 sm:gap-2 bg-green-600 text-white px-3 sm:px-4 py-2 rounded-full font-bold text-xs sm:text-sm mb-4 sm:mb-6">
              <Award className="w-3 h-3 sm:w-4 sm:h-4" />
              MÉTODO VALIDADO PELA EMBRAPA
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-6xl font-black mb-3 sm:mb-4 leading-tight">
              <span className="text-red-600">PARE DE JOGAR</span>  

              <span className="text-gray-800">DINHEIRO FORA</span>  

              <span className="text-green-600">COM O TRIPS!</span>
            </h1>

            <div className="mb-4 sm:mb-6">
              <img 
                src="/ebook-logo.webp" 
                alt="E-book Sistema de Controle de Trips" 
                className="mx-auto max-w-full h-auto rounded-lg shadow-lg"
                style={{ maxWidth: '200px' }}
                draggable="false"
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
                onCopy={(e) => e.preventDefault()}
                onCut={(e) => e.preventDefault()}
                onPaste={(e) => e.preventDefault()}
              />
            </div>

            <p className="text-base sm:text-xl md:text-2xl text-gray-700 mb-4 sm:mb-6 font-semibold px-2">
              Descubra o <span className="text-green-600 font-black">Sistema de 4 Fases</span> que elimina 
              o trips de vez e <span className="text-green-600 font-black">economiza até R$ 5.000 por hectare</span> 
              em defensivos ineficazes
            </p>

            <div className="bg-white p-3 sm:p-4 rounded-lg shadow-lg mb-4 sm:mb-6 inline-block">
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-xs sm:text-sm">
                <div className="flex items-center gap-1">
                  <Users className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                  <span className="font-bold">+1.247 produtores</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500 fill-current" />
                  <span className="font-bold">4.9/5 estrelas</span>
                </div>
                <div className="flex items-center gap-1">
                  <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                  <span className="font-bold">94% de sucesso</span>
                </div>
              </div>
            </div>

            <Button 
              onClick={scrollToCheckout}
              className="bg-orange-500 hover:bg-orange-600 text-white font-black py-4 sm:py-6 px-6 sm:px-12 rounded-full text-base sm:text-xl md:text-2xl mb-4 sm:mb-6 transform hover:scale-105 transition-all duration-200 shadow-2xl animate-bounce w-full sm:w-auto"
            >
              <Rocket className="w-4 h-4 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
              QUERO ECONOMIZAR R$ 5.000 AGORA!
            </Button>

            <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-4 sm:p-6 rounded-lg shadow-xl">
              <div className="text-xs sm:text-sm font-bold mb-2">🔥 OFERTA RELÂMPAGO - APENAS HOJE!</div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
                <div className="text-2xl sm:text-3xl font-black">
                  R$ 39,90
                </div>
                <div className="text-base sm:text-lg line-through opacity-75">
                  R$ 297,00
                </div>
                <div className="bg-yellow-400 text-red-600 px-2 sm:px-3 py-1 rounded-full font-black text-xs sm:text-sm">
                  87% OFF
                </div>
              </div>
              <div className="text-xs sm:text-sm mt-2">💳 Ou 12x de R$ 3,99 sem juros</div>
            </div>
          </div>
        </div>
      </div>

      {/* Seção de Agitação da Dor - Otimizada para Mobile */}
      <div className="bg-red-50 py-8 sm:py-12 md:py-16 border-t-4 border-red-500">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="max-w-4xl mx-auto">
            
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-red-600 mb-3 sm:mb-4 px-2">
                ⚠️ VOCÊ ESTÁ COMETENDO ESTES ERROS CAROS?
              </h2>
              <p className="text-base sm:text-xl text-gray-700 px-2">
                <strong>Cada dia que passa sem o controle correto = R$ 200 a R$ 800 de prejuízo!</strong>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              
              <div className="bg-white border-l-4 border-red-500 p-4 sm:p-6 rounded-lg shadow-lg">
                <div className="flex items-start gap-2 sm:gap-3">
                  <X className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2 text-sm sm:text-base">❌ Só ataca quando vê o adulto</h3>
                    <p className="text-gray-600 mb-3 text-xs sm:text-sm">
                      Aplica Delegate, Decarzol, Esperto... mas 48h depois a praga volta PIOR que antes!
                    </p>
                    <div className="bg-red-100 p-2 sm:p-3 rounded text-red-800 font-semibold text-xs sm:text-sm">
                      💸 Prejuízo: R$ 300-600/hectare por aplicação inútil
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border-l-4 border-red-500 p-4 sm:p-6 rounded-lg shadow-lg">
                <div className="flex items-start gap-2 sm:gap-3">
                  <X className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2 text-sm sm:text-base">❌ Ignora ovos, ninfas e pupas</h3>
                    <p className="text-gray-600 mb-3 text-xs sm:text-sm">
                      Não quebra o ciclo! A cada 15 dias uma nova geração explode na lavoura.
                    </p>
                    <div className="bg-red-100 p-2 sm:p-3 rounded text-red-800 font-semibold text-xs sm:text-sm">
                      💸 Prejuízo: R$ 2.000-5.000/hectare por safra perdida
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border-l-4 border-red-500 p-4 sm:p-6 rounded-lg shadow-lg">
                <div className="flex items-start gap-2 sm:gap-3">
                  <X className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2 text-sm sm:text-base">❌ Copia receita do vizinho</h3>
                    <p className="text-gray-600 mb-3 text-xs sm:text-sm">
                      Cada lavoura é única! O que funciona lá pode ser desastre aqui.
                    </p>
                    <div className="bg-red-100 p-2 sm:p-3 rounded text-red-800 font-semibold text-xs sm:text-sm">
                      💸 Prejuízo: R$ 1.500-3.000/hectare em produtos errados
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border-l-4 border-red-500 p-4 sm:p-6 rounded-lg shadow-lg">
                <div className="flex items-start gap-2 sm:gap-3">
                  <X className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2 text-sm sm:text-base">❌ Compra o mais caro na revenda</h3>
                    <p className="text-gray-600 mb-3 text-xs sm:text-sm">
                      Vendedor empurra produto caro sem orientação técnica adequada.
                    </p>
                    <div className="bg-red-100 p-2 sm:p-3 rounded text-red-800 font-semibold text-xs sm:text-sm">
                      💸 Prejuízo: R$ 800-2.000/hectare em produtos superdimensionados
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-red-600 text-white p-6 sm:p-8 rounded-lg mt-6 sm:mt-8 text-center">
              <h3 className="text-xl sm:text-2xl font-black mb-3 sm:mb-4">🚨 RESULTADO FINAL:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 text-sm sm:text-lg font-semibold">
                <div>
                  <div>😰 Travamento das ponteiras</div>
                  <img 
                    src="/travamento-ponteiras.jpg" 
                    alt="Travamento das ponteiras causado por trips" 
                    className="mt-2 sm:mt-3 mx-auto max-w-full h-auto rounded-lg shadow-md"
                    style={{ maxWidth: '200px' }}
                    draggable="false"
                    onContextMenu={(e) => e.preventDefault()}
                    onDragStart={(e) => e.preventDefault()}
                    onCopy={(e) => e.preventDefault()}
                    onCut={(e) => e.preventDefault()}
                    onPaste={(e) => e.preventDefault()}
                  />
                </div>
                <div>
                  <div>🤢 Frutos deformados e manchados</div>
                  <img 
                    src="/frutos-manchados.jpg" 
                    alt="Frutos deformados e manchados por trips" 
                    className="mt-2 sm:mt-3 mx-auto max-w-full h-auto rounded-lg shadow-md"
                    style={{ maxWidth: '200px' }}
                    draggable="false"
                    onContextMenu={(e) => e.preventDefault()}
                    onDragStart={(e) => e.preventDefault()}
                    onCopy={(e) => e.preventDefault()}
                    onCut={(e) => e.preventDefault()}
                    onPaste={(e) => e.preventDefault()}
                  />
                </div>
                <div>
                  <div>💀 Viroses que matam a plantação</div>
                  <img 
                    src="/viroses-plantas.jpg" 
                    alt="Viroses que matam as plantas causadas por trips" 
                    className="mt-2 sm:mt-3 mx-auto max-w-full h-auto rounded-lg shadow-md"
                    style={{ maxWidth: '200px' }}
                    draggable="false"
                    onContextMenu={(e) => e.preventDefault()}
                    onDragStart={(e) => e.preventDefault()}
                    onCopy={(e) => e.preventDefault()}
                    onCut={(e) => e.preventDefault()}
                    onPaste={(e) => e.preventDefault()}
                  />
                </div>
              </div>
              <div className="mt-4 sm:mt-6 text-lg sm:text-xl font-black bg-red-800 p-3 sm:p-4 rounded">
                💸 PREJUÍZO TOTAL: R$ 5.000 a R$ 12.000 POR HECTARE!
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Seção da Solução Revolucionária - Otimizada para Mobile */}
      <div className="bg-gradient-to-br from-green-500 to-green-700 py-8 sm:py-12 md:py-16 text-white">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="max-w-4xl mx-auto text-center">
            
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6 px-2">
              🎯 A SOLUÇÃO QUE VAI SALVAR  
SUA LAVOURA E SEU DINHEIRO!
            </h2>

            <p className="text-base sm:text-xl md:text-2xl mb-6 sm:mb-8 font-semibold px-2">
              O <span className="bg-yellow-400 text-green-800 px-2 sm:px-3 py-1 rounded font-black">SISTEMA 4 FASES</span> 
              que elimina o trips de vez em apenas 28 dias!
            </p>

            <div className="bg-white text-gray-800 p-4 sm:p-8 rounded-lg shadow-2xl mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-black text-green-600 mb-4 sm:mb-6">
                🔬 PROTOCOLO CIENTÍFICO EMBRAPA
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                
                <div className="bg-green-50 p-3 sm:p-4 rounded-lg border-l-4 border-green-500">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="bg-green-500 text-white w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold text-sm sm:text-base">1</div>
                    <h4 className="font-bold text-green-700 text-sm sm:text-base">FASE OVOS (Dias 1-7)</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-700">Produto específico que penetra nos tecidos e elimina ovos antes da eclosão</p>
                </div>

                <div className="bg-blue-50 p-3 sm:p-4 rounded-lg border-l-4 border-blue-500">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="bg-blue-500 text-white w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold text-sm sm:text-base">2</div>
                    <h4 className="font-bold text-blue-700 text-sm sm:text-base">FASE NINFAS (Dias 8-14)</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-700">Ataque direcionado às larvas em desenvolvimento com produto sistêmico</p>
                </div>

                <div className="bg-purple-50 p-3 sm:p-4 rounded-lg border-l-4 border-purple-500">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="bg-purple-500 text-white w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold text-sm sm:text-base">3</div>
                    <h4 className="font-bold text-purple-700 text-sm sm:text-base">FASE PUPAS (Dias 15-21)</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-700">Controle no solo com produto específico para pupas em transformação</p>
                </div>

                <div className="bg-orange-50 p-3 sm:p-4 rounded-lg border-l-4 border-orange-500">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="bg-orange-500 text-white w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold text-sm sm:text-base">4</div>
                    <h4 className="font-bold text-orange-700 text-sm sm:text-base">FASE ADULTOS (Dias 22-28)</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-700">Eliminação final dos adultos remanescentes e proteção residual</p>
                </div>
              </div>

              <div className="bg-yellow-100 p-3 sm:p-4 rounded-lg mt-4 sm:mt-6">
                <p className="text-yellow-800 font-bold text-base sm:text-lg">
                  ⚡ RESULTADO: Ciclo do trips QUEBRADO para sempre!
                </p>
              </div>
            </div>

            <Button 
              onClick={scrollToCheckout}
              className="bg-yellow-400 hover:bg-yellow-500 text-green-800 font-black py-4 sm:py-6 px-6 sm:px-12 rounded-full text-base sm:text-xl transform hover:scale-105 transition-all duration-200 shadow-2xl w-full sm:w-auto"
            >
              <Target className="w-4 h-4 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
              QUERO O SISTEMA 4 FASES AGORA!
            </Button>
          </div>
        </div>
      </div>

      {/* Seção de Resultados Comprovados - Otimizada para Mobile */}
      <div className="bg-white py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="max-w-6xl mx-auto">
            
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-800 mb-3 sm:mb-4 px-2">
                📊 RESULTADOS QUE FALAM POR SI SÓ
              </h2>
              <p className="text-base sm:text-xl text-gray-600 px-2">
                Mais de <strong>1.247 produtores</strong> já transformaram suas lavouras com este método
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 mb-8 sm:mb-12">
              
              <div className="text-center bg-green-50 p-3 sm:p-6 rounded-lg border-2 border-green-200">
                <div className="text-2xl sm:text-4xl font-black text-green-600 mb-1 sm:mb-2">94%</div>
                <p className="text-gray-700 font-semibold text-xs sm:text-base">Taxa de Sucesso</p>
              </div>

              <div className="text-center bg-blue-50 p-3 sm:p-6 rounded-lg border-2 border-blue-200">
                <div className="text-2xl sm:text-4xl font-black text-blue-600 mb-1 sm:mb-2">R$ 5k</div>
                <p className="text-gray-700 font-semibold text-xs sm:text-base">Economia Média/Hectare</p>
              </div>

              <div className="text-center bg-purple-50 p-3 sm:p-6 rounded-lg border-2 border-purple-200">
                <div className="text-2xl sm:text-4xl font-black text-purple-600 mb-1 sm:mb-2">28</div>
                <p className="text-gray-700 font-semibold text-xs sm:text-base">Dias para Resultado</p>
              </div>

              <div className="text-center bg-orange-50 p-3 sm:p-6 rounded-lg border-2 border-orange-200">
                <div className="text-2xl sm:text-4xl font-black text-orange-600 mb-1 sm:mb-2">+67%</div>
                <p className="text-gray-700 font-semibold text-xs sm:text-base">Aumento na Produção</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg border-2 border-green-200">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base">
                    JM
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-sm sm:text-base">João Mendes</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">15 hectares - Bahia</p>
                  </div>
                  <div className="flex text-yellow-400 ml-auto">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 italic mb-3 sm:mb-4 text-xs sm:text-sm">
                  "Em 28 dias eliminei o trips que me atormentava há 3 anos. Economizei R$ 8.000 
                  só na primeira safra e minha produção aumentou 73%!"
                </p>
                <div className="bg-green-100 p-2 sm:p-3 rounded text-green-800 font-semibold text-xs sm:text-sm">
                  💰 Economia: R$ 8.000 | 📈 Aumento: 73%
                </div>
              </div>

              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg border-2 border-blue-200">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base">
                    AS
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-sm sm:text-base">Ana Santos</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">8 hectares - São Paulo</p>
                  </div>
                  <div className="flex text-yellow-400 ml-auto">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 italic mb-3 sm:mb-4 text-xs sm:text-sm">
                  "Estava gastando R$ 1.500/mês em defensivos sem resultado. Com o sistema, 
                  gasto R$ 300 e tenho controle total. Frutos perfeitos!"
                </p>
                <div className="bg-blue-100 p-2 sm:p-3 rounded text-blue-800 font-semibold text-xs sm:text-sm">
                  💰 Economia: R$ 14.400/ano | 🎯 Controle: 100%
                </div>
              </div>

              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg border-2 border-purple-200">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base">
                    CR
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-sm sm:text-base">Carlos Ribeiro</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">25 hectares - Minas Gerais</p>
                  </div>
                  <div className="flex text-yellow-400 ml-auto">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 italic mb-3 sm:mb-4 text-xs sm:text-sm">
                  "Ia cortar a plantação por causa das viroses. O sistema salvou meu negócio! 
                  Hoje tenho a melhor lavoura da região."
                </p>
                <div className="bg-purple-100 p-2 sm:p-3 rounded text-purple-800 font-semibold text-xs sm:text-sm">
                  🏆 Melhor lavoura da
