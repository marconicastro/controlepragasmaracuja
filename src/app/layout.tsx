// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

// Importando o componente GTM e o Suspense
import GoogleTagManager from "@/components/GoogleTagManager"; // Corrigido: importação default
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
        {/* Scripts da UTMify foram removidos daqui. */}

        {/* SEUS SCRIPTS DE PROTEÇÃO FORAM MANTIDOS INTOCADOS */}
        <Script
          id="protection-script"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // ... seu código de proteção ...
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
                // ... seu código de proteção de imagem ...
              })();
            `,
          }}
          strategy="afterInteractive"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {/* Inserindo o componente do Google Tag Manager */}
        <Suspense fallback={null}>
          <GoogleTagManager gtmId="GTM-MZBKP24M" />
        </Suspense>

        {children}
        <Toaster />
      </body>
    </html>
  );
}
