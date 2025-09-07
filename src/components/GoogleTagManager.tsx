// src/components/GoogleTagManager.tsx
'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import Script from 'next/script'
import { useEffect } from 'react'

// Define a interface global do Window para incluir o dataLayer
declare global {
  interface Window {
    dataLayer: any[]
  }
}

// Função que envia o evento page_view para a camada de dados
const pageview = (url: string) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'page_view',
    page: url,
  })
}

const GoogleTagManager = ({ gtmId }: { gtmId: string }) => {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // Dispara o evento page_view na carga inicial e em cada mudança de rota
  useEffect(() => {
    if (gtmId) {
      const url = pathname + (searchParams.toString() ? '?' + searchParams.toString() : '');
      pageview(url)
    }
  }, [pathname, searchParams, gtmId])

  if (!gtmId) {
    return null
  }

  return (
    <>
      {/* Script principal do GTM */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f );
    })(window,document,'script','dataLayer','${gtmId}');
  `,
        }}
      />
      {/* Fallback noscript para o GTM (com o ID correto) */}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        ></iframe>
      </noscript>
    </>
   )
}

export default GoogleTagManager;
