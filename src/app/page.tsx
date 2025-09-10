
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
              item_id: '6080425',
              item_name: 'Sistema de Controle de Trips - Maracujá',
              category: 'Agricultura',
              quantity: 1,
              price: 39.90
            }]
          }
        });
      }
    }, 15000); // 15 segundos

    return () => clearTimeout(viewContentTimer);
  }, []);

  const scrollToCheckout = () => {
    document.getElementById('checkout').scrollIntoView({ behavior: 'smooth' });
  };

  function getCookie(name) {
    if (typeof document === 'undefined') return null; // Garante que só roda no navegador
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? match[2] : null;
  }

  const handleHotmartCheckout = () => {
    // 1. Enviar evento initiate_checkout para o dataLayer (mantém o que já existe)
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

    // 2. Capturar cookies _fbp e _fbc
    const fbp = getCookie('_fbp');
    const fbc = getCookie('_fbc');

    let sckValue = '';
    if (fbp) {
      sckValue += '_fbp=' + fbp;
    }
    if (fbc) {
      sckValue += (sckValue ? '&' : '') + '_fbc=' + fbc;
    }

    // 3. Obter o link original da Hotmart do botão
    const hotmartButton = document.getElementById('botao-compra-hotmart');
    if (hotmartButton && hotmartButton.href) {
      let hotmartLink = new URL(hotmartButton.href);

      // 4. Adicionar o parâmetro sck ao link
      if (sckValue) {
        hotmartLink.searchParams.set('sck', sckValue);
      }

      // 5. Redirecionar o usuário para o link modificado
      window.location.href = hotmartLink.toString();
    } else {
      console.error('Botão da Hotmart não encontrado ou sem href.');
      // Fallback: se o botão não for encontrado, redireciona para o link padrão
      window.location.href = 'https://pay.hotmart.com/I101398692S'; // Coloque o link padrão aqui
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
            
            {/* Badge de Autoridade - Responsivo */}
            <div className="inline-flex items-center gap-1 sm:gap-2 bg-green-600 text-white px-3 sm:px-4 py-2 rounded-full font-bold text-xs sm:text-sm mb-4 sm:mb-6">
              <Award className="w-3 h-3 sm:w-4 sm:h-4" />
              MÉTODO VALIDADO PELA EMBRAPA
            </div>

            {/* Headline Ultra Persuasiva - Responsiva */}
            <h1 className="text-2xl sm:text-4xl md:text-6xl font-black mb-3 sm:mb-4 leading-tight">
              <span className="text-red-600">PARE DE JOGAR</span><br />
              <span className="text-gray-800">DINHEIRO FORA</span><br />
              <span className="text-green-600">COM O TRIPS!</span>
            </h1>

            {/* Logo do E-book */}
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

            {/* Sub-headline com Benefício Específico - Responsiva */}
            <p className="text-base sm:text-xl md:text-2xl text-gray-700 mb-4 sm:mb-6 font-semibold px-2">
              Descubra o <span className="text-green-600 font-black">Sistema de 4 Fases</span> que elimina 
              o trips de vez e <span className="text-green-600 font-black">economiza até R$ 5.000 por hectare</span> 
              em defensivos ineficazes
            </p>

            {/* Prova Social Imediata - Responsiva */}
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

            {/* CTA Principal Mega Otimizado - Responsivo */}
            <Button 
              onClick={scrollToCheckout}
              className="bg-orange-500 hover:bg-orange-600 text-white font-black py-4 sm:py-6 px-6 sm:px-12 rounded-full text-base sm:text-xl md:text-2xl mb-4 sm:mb-6 transform hover:scale-105 transition-all duration-200 shadow-2xl animate-bounce w-full sm:w-auto"
            >
              <Rocket className="w-4 h-4 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
              QUERO ECONOMIZAR R$ 5.000 AGORA!
            </Button>

            {/* Oferta com Desconto Agressivo - Responsiva */}
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
              
              {/* Erro 1 */}
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

              {/* Erro 2 */}
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

              {/* Erro 3 */}
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

              {/* Erro 4 */}
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

            {/* Consequência Final - Responsiva */}
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
              🎯 A SOLUÇÃO QUE VAI SALVAR<br />SUA LAVOURA E SEU DINHEIRO!
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
                
                {/* Fase 1 */}
                <div className="bg-green-50 p-3 sm:p-4 rounded-lg border-l-4 border-green-500">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2">
                    <div className="bg-green-500 text-white rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center font-black text-sm sm:text-base">1</div>
                    <h4 className="font-black text-gray-800 text-sm sm:text-base">CHOQUE INICIAL (Dia 1-7)</h4>
                  </div>
                  <p className="text-gray-600 text-xs sm:text-sm">Elimina 80% dos adultos e ninfas com produtos de contato e ingestão.</p>
                </div>

                {/* Fase 2 */}
                <div className="bg-green-50 p-3 sm:p-4 rounded-lg border-l-4 border-green-500">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2">
                    <div className="bg-green-500 text-white rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center font-black text-sm sm:text-base">2</div>
                    <h4 className="font-black text-gray-800 text-sm sm:text-base">QUEBRA DO CICLO (Dia 8-14)</h4>
                  </div>
                  <p className="text-gray-600 text-xs sm:text-sm">Ataca ovos e pupas no solo com produtos específicos, impedindo a nova geração.</p>
                </div>

                {/* Fase 3 */}
                <div className="bg-green-50 p-3 sm:p-4 rounded-lg border-l-4 border-green-500">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2">
                    <div className="bg-green-500 text-white rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center font-black text-sm sm:text-base">3</div>
                    <h4 className="font-black text-gray-800 text-sm sm:text-base">ROTAÇÃO INTELIGENTE (Dia 15-21)</h4>
                  </div>
                  <p className="text-gray-600 text-xs sm:text-sm">Alterna 3 grupos químicos diferentes para evitar a resistência do trips.</p>
                </div>

                {/* Fase 4 */}
                <div className="bg-green-50 p-3 sm:p-4 rounded-lg border-l-4 border-green-500">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2">
                    <div className="bg-green-500 text-white rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center font-black text-sm sm:text-base">4</div>
                    <h4 className="font-black text-gray-800 text-sm sm:text-base">BLINDAGEM FINAL (Dia 22-28)</h4>
                  </div>
                  <p className="text-gray-600 text-xs sm:text-sm">Cria uma barreira protetora com produtos sistêmicos e biológicos.</p>
                </div>
              </div>
            </div>

            {/* CTA Secundário */}
            <Button 
              onClick={scrollToCheckout}
              className="bg-orange-500 hover:bg-orange-600 text-white font-black py-4 sm:py-6 px-6 sm:px-12 rounded-full text-base sm:text-xl md:text-2xl transform hover:scale-105 transition-all duration-200 shadow-2xl w-full sm:w-auto"
            >
              <Shield className="w-4 h-4 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
              QUERO BLINDAR MINHA LAVOURA HOJE!
            </Button>
          </div>
        </div>
      </div>

      {/* Seção de Conteúdo do E-book - Otimizada para Mobile */}
      <div className="bg-gray-50 py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="max-w-4xl mx-auto">
            
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-800 mb-3 sm:mb-4 px-2">
                O que você vai receber <span className="text-green-600">imediatamente</span>:
              </h2>
              <p className="text-base sm:text-xl text-gray-600 px-2">
                Um guia completo, passo a passo, para nunca mais sofrer com o trips.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              
              {/* Item 1 */}
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg flex items-start gap-3 sm:gap-4">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-800 mb-2 text-sm sm:text-base">✅ Protocolo 4 Fases Detalhado</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">O passo a passo exato de cada uma das 4 fases, com os dias de aplicação e o que fazer em cada etapa.</p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg flex items-start gap-3 sm:gap-4">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-800 mb-2 text-sm sm:text-base">✅ Lista de Produtos Eficazes (e baratos!)</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">Nomes comerciais e princípios ativos que funcionam de verdade, para você parar de gastar com o que não funciona.</p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg flex items-start gap-3 sm:gap-4">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-800 mb-2 text-sm sm:text-base">✅ Guia de Identificação do Trips</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">Aprenda a identificar o trips em todas as suas fases (ovo, ninfa, pupa, adulto) para atacar no momento certo.</p>
                </div>
              </div>

              {/* Item 4 */}
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg flex items-start gap-3 sm:gap-4">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-800 mb-2 text-sm sm:text-base">✅ Calendário de Aplicação Pronto</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">Um calendário de 28 dias para você imprimir e seguir, sem ter que pensar no que fazer a cada dia.</p>
                </div>
              </div>
            </div>

            {/* Imagem do E-book */}
            <div className="mt-8 sm:mt-12 text-center">
              <img 
                src="/ebook-conteudo.webp" 
                alt="Conteúdo do E-book Sistema de Controle de Trips" 
                className="mx-auto max-w-full h-auto rounded-lg shadow-2xl"
                style={{ maxWidth: '500px' }}
                draggable="false"
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
                onCopy={(e) => e.preventDefault()}
                onCut={(e) => e.preventDefault()}
                onPaste={(e) => e.preventDefault()}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Seção de Bônus - Otimizada para Mobile */}
      <div className="bg-yellow-50 py-8 sm:py-12 md:py-16 border-t-4 border-yellow-400">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="max-w-4xl mx-auto text-center">
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-800 mb-3 sm:mb-4 px-2">
              E ainda tem mais... <span className="text-yellow-500">3 BÔNUS ESPECIAIS</span> (só hoje!)
            </h2>
            <p className="text-base sm:text-xl text-gray-600 mb-8 sm:mb-12 px-2">
              Comprando agora, você leva de graça estes materiais que valem mais que o próprio guia!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              
              {/* Bônus 1 */}
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg text-left">
                <div className="bg-yellow-400 text-gray-800 px-3 py-1 rounded-full font-bold text-xs inline-block mb-3">BÔNUS 1</div>
                <h3 className="font-bold text-gray-800 mb-2 text-sm sm:text-base">Planilha de Custos Automática</h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-3">Saiba exatamente quanto está gastando e quanto está economizando com o sistema. (Valor: R$ 47,00)</p>
                <div className="font-black text-green-600 text-sm sm:text-base">HOJE: GRÁTIS!</div>
              </div>

              {/* Bônus 2 */}
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg text-left">
                <div className="bg-yellow-400 text-gray-800 px-3 py-1 rounded-full font-bold text-xs inline-block mb-3">BÔNUS 2</div>
                <h3 className="font-bold text-gray-800 mb-2 text-sm sm:text-base">Guia de Pulverização Perfeita</h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-3">Aprenda a regular bicos, pressão e volume de calda para acertar o alvo em cheio. (Valor: R$ 37,00)</p>
                <div className="font-black text-green-600 text-sm sm:text-base">HOJE: GRÁTIS!</div>
              </div>

              {/* Bônus 3 */}
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg text-left">
                <div className="bg-yellow-400 text-gray-800 px-3 py-1 rounded-full font-bold text-xs inline-block mb-3">BÔNUS 3</div>
                <h3 className="font-bold text-gray-800 mb-2 text-sm sm:text-base">Acesso ao Grupo VIP de Produtores</h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-3">Troque experiências e tire dúvidas com outros produtores que estão usando o sistema. (Valor: R$ 97,00/ano)</p>
                <div className="font-black text-green-600 text-sm sm:text-base">HOJE: GRÁTIS!</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Seção de Checkout Final - Otimizada para Mobile */}
      <div id="checkout" className="bg-gradient-to-br from-gray-800 to-gray-900 py-8 sm:py-12 md:py-16 text-white">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="max-w-2xl mx-auto bg-white text-gray-800 rounded-2xl shadow-2xl p-6 sm:p-8">
            
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-green-600 mb-2 sm:mb-3">GARANTA SEU ACESSO IMEDIATO</h2>
              <p className="text-base sm:text-lg text-gray-600">Última chance para economizar 87% e salvar sua lavoura!</p>
            </div>

            <div className="bg-green-50 border-2 border-green-200 p-4 sm:p-6 rounded-lg mb-6 sm:mb-8">
              <h3 className="font-bold text-gray-800 mb-4 text-center text-sm sm:text-base">RESUMO DO PEDIDO:</h3>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li className="flex justify-between items-center">
                  <span>E-book Sistema 4 Fases</span>
                  <span className="font-bold text-green-600">R$ 297,00</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Bônus 1: Planilha de Custos</span>
                  <span className="font-bold text-green-600">R$ 47,00</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Bônus 2: Guia de Pulverização</span>
                  <span className="font-bold text-green-600">R$ 37,00</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Bônus 3: Grupo VIP</span>
                  <span className="font-bold text-green-600">R$ 97,00</span>
                </li>
                <li className="flex justify-between items-center text-red-600 font-bold">
                  <span>Desconto de Hoje (87%)</span>
                  <span>- R$ 441,10</span>
                </li>
              </ul>
              <hr className="my-3 sm:my-4" />
              <div className="flex justify-between items-center text-lg sm:text-xl font-black">
                <span>TOTAL:</span>
                <span>R$ 39,90</span>
              </div>
            </div>

            {/* Botão de Compra Final */}
            <a 
              id="botao-compra-hotmart"
              href="https://pay.hotmart.com/I101398692S"
              onClick={(e) => {
                e.preventDefault(); // Previne a navegação imediata
                handleHotmartCheckout();
              }}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-black py-4 sm:py-6 px-6 sm:px-12 rounded-full text-base sm:text-xl md:text-2xl transform hover:scale-105 transition-all duration-200 shadow-2xl animate-bounce flex items-center justify-center text-center"
            >
              <Rocket className="w-4 h-4 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
              GARANTIR ACESSO POR R$ 39,90
            </a>

            <div className="text-center mt-4 sm:mt-6 text-xs sm:text-sm text-gray-500">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Compra 100% Segura</span>
              </div>
              <img src="/selos-seguranca.png" alt="Selos de Segurança" className="mx-auto h-8 sm:h-10" />
            </div>
          </div>
        </div>
      </div>

      {/* Seção de Garantia Incondicional - Otimizada para Mobile */}
      <div className="bg-gray-100 py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-6 sm:gap-8">
            <img 
              src="/selo-garantia.png" 
              alt="Selo de Garantia de 7 Dias" 
              className="w-32 sm:w-48 md:w-56 flex-shrink-0"
              draggable="false"
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
              onCopy={(e) => e.preventDefault()}
              onCut={(e) => e.preventDefault()}
              onPaste={(e) => e.preventDefault()}
            />
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-gray-800 mb-3 sm:mb-4">RISCO ZERO PARA VOCÊ!</h2>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">
                Ou você tem o resultado que espera ou seu dinheiro de volta. Simples assim. Você tem <strong>7 dias de garantia incondicional</strong>. Se por qualquer motivo não gostar do conteúdo ou não ver resultados, basta enviar um único e-mail para <a href="mailto:suporte@agrointeligente.com" className="text-green-600 font-bold">suporte@agrointeligente.com</a> e nós devolvemos 100% do seu dinheiro na hora, sem perguntas.
              </p>
              <div className="bg-green-100 border-l-4 border-green-500 p-3 sm:p-4 rounded-r-lg text-sm sm:text-base">
                <strong>O risco é todo nosso.</strong> Você não tem nada a perder.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ - Otimizada para Mobile */}
      <div className="bg-white py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-center text-gray-800 mb-8 sm:mb-12">Perguntas Frequentes</h2>
            {/* Adicionar componente de Accordion/FAQ aqui */}
          </div>
        </div>
      </div>

      {/* Footer - Otimizado para Mobile */}
      <footer className="bg-gray-800 text-white py-6 sm:py-8">
        <div className="container mx-auto px-3 sm:px-4 text-center text-xs sm:text-sm">
          <p className="mb-2">Copyright © 2024 - Agro Inteligente - Todos os direitos reservados.</p>
          <p className="text-gray-400">Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site.</p>
        </div>
      </footer>
    </div>
  );
}


