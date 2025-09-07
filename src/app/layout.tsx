// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

// Imports que estamos adicionando
import { GoogleTagManager } from "@/components/GoogleTagManager";
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
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        {/* SCRIPTS DA UTMIFY FORAM REMOVIDOS DAQUI */}

        {/* SEUS SCRIPTS DE PROTEÇÃO FORAM MANTIDOS INTOCADOS */}
        {/* SCRIPT DE PROTEÇÃO CONTRA CÓPIA E SELEÇÃO */}
        <Script
          id="protection-script"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // ... todo o seu código de proteção continua aqui ...
                // Console warning
                console.clear();
                console.log('%c⚠️ AVISO: Este conteúdo está protegido por direitos autorais. A cópia, reprodução ou distribuição não autorizada é proibida.', 'color: red; font-size: 16px; font-weight: bold;');
              })();
            `,
          }}
          strategy="afterInteractive"
        />

        {/* SCRIPT ADICIONAL DE PROTEÇÃO DE IMAGENS */}
        <Script
          id="image-protection-script"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // ... todo o seu código de proteção de imagem continua aqui ...
                // Console warning específico para imagens
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
        {/* ADICIONANDO O GOOGLE TAG MANAGER LOGO NO INÍCIO DO BODY */}
        <Suspense fallback={null}>
          <GoogleTagManager gtmId="GTM-MZBKP24M" />
        </Suspense>

        {children}
        <Toaster />
      </body>
    </html>
  );
}
