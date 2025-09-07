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
  if (typeof window.dataLayer !== 'undefined') {
    window.dataLayer.push({
      event: 'page_view',
      page: url,
    })
  }
}

export function GoogleTagManager({ gtmId }: { gtmId: string }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // useEffect para disparar o pageview na carga inicial e em cada mudança de rota
  useEffect(() => {
    if (gtmId) {
      const url = pathname + searchParams.toString()
      pageview(url)
    }
  }, [pathname, searchParams, gtmId])

  // Se não houver ID do GTM, não renderiza os scripts
  if (!gtmId) {
    return null
  }

  return (
    <>
      {/* O noscript deve vir logo após a abertura do body */}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        ></iframe>
      </noscript>
      {/* Script principal do GTM, carregado de forma não bloqueante */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
    (function(w,d,s,l,i ){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f );
    })(window,document,'script','dataLayer','${gtmId}');
  `,
        }}
      />
    </>
  )
}
