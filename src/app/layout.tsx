// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

// Importações para o GTM
import GoogleTagManager from "@/components/GoogleTagManager";
import { Suspense } from 'react';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sistema de Controle de Trips - Economize até R$ 5.000 por Hectare",
  description: "Método validado pela EMBRAPA que elimina o trips de vez em 28 dias. Sistema de 4 fases com 94% de sucesso e economia de até R$ 5.000 por Hectare.",
  keywords: ["trips", "controle de trips", "maracujá", "agricultura", "EMBRAPA", "defensivos", "pragas", "sistema 4 fases"],
  openGraph: {
    title: "Sistema de Controle de Trips - Economize até R$ 5.000 por Hectare",
    description: "Elimine o trips de vez com método científico validado pela EMBRAPA. Economize milhares em defensivos ineficazes.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // CRIANDO UMA CONSTANTE PARA O ID DO GTM PARA RESOLVER O ERRO DE BUILD
  const GTM_ID = "GTM-MZBKP24M";

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        {/* SEUS SCRIPTS DE PROTEÇÃO CONTINUAM AQUI, 100% INTOCADOS */}
        <Script
          id="protection-script"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // Bloquear seleção de texto
                function disableSelection(e) {
                  if (typeof e.onselectstart !== "undefined") {
                    e.onselectstart = function() { return false; };
                  } else if (typeof e.style.MozUserSelect !== "undefined") {
                    e.style.MozUserSelect = "none";
                  } else {
                    e.onmousedown = function() { return false; };
                  }
                  e.style.cursor = "default";
                }
                disableSelection(document.body);
                document.addEventListener('keydown', function(e) {
                  if (e.ctrlKey || e.metaKey) {
                    switch (e.keyCode) {
                      case 67: case 88: case 65: case 83: case 85:
                        e.preventDefault(); e.stopPropagation(); return false;
                    }
                  }
                  if (e.keyCode === 123) { e.preventDefault(); e.stopPropagation(); return false; }
                  if (e.ctrlKey && e.shiftKey && e.keyCode === 73) { e.preventDefault(); e.stopPropagation(); return false; }
                  if (e.ctrlKey && e.shiftKey && e.keyCode === 74) { e.preventDefault(); e.stopPropagation(); return false; }
                });
                document.addEventListener('contextmenu', function(e) { e.preventDefault(); e.stopPropagation(); return false; });
                document.addEventListener('dragstart', function(e) { e.preventDefault(); e.stopPropagation(); return false; });
                document.addEventListener('keyup', function(e) { if (e.keyCode === 44) { e.preventDefault(); e.stopPropagation(); return false; } });
                document.addEventListener('copy', function(e) { e.preventDefault(); e.stopPropagation(); return false; });
                document.addEventListener('cut', function(e) { e.preventDefault(); e.stopPropagation(); return false; });
                document.addEventListener('selectstart', function(e) { e.preventDefault(); e.stopPropagation(); return false; });
                var style = document.createElement('style');
                style.innerHTML = \`* {-webkit-user-select: none !important; -moz-user-select: none !important; -ms-user-select: none !important; user-select: none !important; -webkit-touch-callout: none !important; -webkit-tap-highlight-color: transparent !important;} *:focus {outline: none !important;} input, textarea, select {-webkit-user-select: auto !important; -moz-user-select: auto !important; -ms-user-select: auto !important; user-select: auto !important;}\`;
                document.head.appendChild(style);
                console.clear();
                console.log('%c⚠️ AVISO: Este conteúdo está protegido por direitos autorais. A cópia, reprodução ou distribuição não autorizada é proibida.', 'color: red; font-size: 16px; font-weight: bold;');
              })();
            `,
          }}
          strategy="afterInteractive"
        />
        <Script
          id="image-protection-script"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                document.addEventListener('DOMContentLoaded', function() {
                  var images = document.querySelectorAll('img');
                  images.forEach(function(img) {
                    img.setAttribute('draggable', 'false');
                    img.setAttribute('ondragstart', 'return false');
                    img.setAttribute('oncontextmenu', 'return false');
                    img.setAttribute('onselectstart', 'return false');
                    img.setAttribute('oncopy', 'return false');
                    img.setAttribute('oncut', 'return false');
                    img.setAttribute('onpaste', 'return false');
                    img.style.pointerEvents = 'none';
                    img.style.userSelect = 'none';
                    img.style.webkitUserSelect = 'none';
                    img.style.mozUserSelect = 'none';
                    img.style.msUserSelect = 'none';
                    img.style.khtmlUserSelect = 'none';
                    img.style.webkitTouchCallout = 'none';
                    img.style.webkitTapHighlightColor = 'transparent';
                    img.addEventListener('contextmenu', function(e) { e.preventDefault(); e.stopPropagation(); return false; });
                    img.addEventListener('dragstart', function(e) { e.preventDefault(); e.stopPropagation(); return false; });
                    img.addEventListener('mousedown', function(e) { if (e.button === 2) { e.preventDefault(); e.stopPropagation(); return false; } });
                    img.addEventListener('selectstart', function(e) { e.preventDefault(); e.stopPropagation(); return false; });
                    img.addEventListener('copy', function(e) { e.preventDefault(); e.stopPropagation(); return false; });
                    img.addEventListener('cut', function(e) { e.preventDefault(); e.stopPropagation(); return false; });
                    img.addEventListener('paste', function(e) { e.preventDefault(); e.stopPropagation(); return false; });
                    img.addEventListener('touchstart', function(e) { e.preventDefault(); }, { passive: false });
                    img.addEventListener('touchend', function(e) { e.preventDefault(); }, { passive: false });
                    img.addEventListener('touchmove', function(e) { e.preventDefault(); }, { passive: false });
                  });
                  function addWatermark() {
                    images.forEach(function(img) {
                      var overlay = document.createElement('div');
                      overlay.style.position = 'absolute';
                      overlay.style.top = '0';
                      overlay.style.left = '0';
                      overlay.style.width = '100%';
                      overlay.style.height = '100%';
                      overlay.style.backgroundColor = 'rgba(0,0,0,0.01)';
                      overlay.style.pointerEvents = 'none';
                      overlay.style.zIndex = '9999';
                      overlay.style.backgroundImage = 'url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'100\\' height=\\'100\\' viewBox=\\'0 0 100 100\\'%3E%3Ctext x=\\'50\\' y=\\'50\\' font-family=\\'Arial\\' font-size=\\'8\\' fill=\\'rgba(255,255,255,0.1 )\\' text-anchor=\\'middle\\'%3E© Protegido%3C/text%3E%3C/svg%3E")';
                      overlay.style.backgroundRepeat = 'repeat';
                      var wrapper = document.createElement('div');
                      wrapper.style.position = 'relative';
                      wrapper.style.display = 'inline-block';
                      img.parentNode.insertBefore(wrapper, img);
                      wrapper.appendChild(img);
                      wrapper.appendChild(overlay);
                    });
                  }
                  setTimeout(addWatermark, 1000);
                  var observer = new MutationObserver(function(mutations) {
                    mutations.forEach(function(mutation) {
                      mutation.addedNodes.forEach(function(node) {
                        if (node.nodeName === 'IMG') { addWatermark(); }
                        else if (node.getElementsByTagName) { var newImages = node.getElementsByTagName('img'); if (newImages.length > 0) { addWatermark(); } }
                      });
                    });
                  });
                  observer.observe(document.body, { childList: true, subtree: true });
                });
                document.addEventListener('keyup', function(e) {
                  if (e.keyCode === 44) {
                    e.preventDefault(); e.stopPropagation();
                    var overlay = document.createElement('div');
                    overlay.style.position = 'fixed';
                    overlay.style.top = '0';
                    overlay.style.left = '0';
                    overlay.style.width = '100%';
                    overlay.style.height = '100%';
                    overlay.style.backgroundColor = 'white';
                    overlay.style.zIndex = '999999';
                    overlay.style.pointerEvents = 'none';
                    document.body.appendChild(overlay);
                    setTimeout(function() { document.body.removeChild(overlay); }, 100);
                    return false;
                  }
                });
                window.addEventListener('beforeprint', function() { document.body.style.visibility = 'hidden'; setTimeout(function() { document.body.style.visibility = 'visible'; }, 1000); });
                console.log('%c🛡️ Todas as imagens estão protegidas contra cópia e download não autorizado.', 'color: orange; font-size: 14px; font-weight: bold;');
              })();
            `,
          }}
          strategy="afterInteractive"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {/* O Suspense aqui garante que o GTM seja carregado corretamente em todos os contextos */}
        <Suspense>
          <GoogleTagManager gtmId={GTM_ID} />
        </Suspense>

        {children}
        <Toaster />
      </body>
    </html>
  );
}
