import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://espaconatalia.com.br'),
  title: {
    default: "Espaço Natália Toledo - Fisioterapia e Pilates em Florianópolis",
    template: "%s | Espaço Natália Toledo"
  },
  description: "Espaço Natália Toledo oferece fisioterapia pré e pós-operatório, pilates, liberação miofascial, fisioterapia pélvica, reabilitação vestibular e quiropraxia em Florianópolis. Localizado no Open Shopping, Ingleses.",
  keywords: [
    "fisioterapia",
    "pilates", 
    "fisioterapia pélvica",
    "liberação miofascial",
    "reabilitação vestibular",
    "quiropraxia",
    "florianópolis",
    "ingleses",
    "fisioterapia domiciliar",
    "low pressure fitness",
    "LPF",
    "pré-operatório",
    "pós-operatório",
    "vertigem",
    "labirintite",
    "tonturas",
    "open shopping"
  ],
  authors: [{ name: "Natália Toledo" }],
  creator: "Espaço Natália Toledo",
  publisher: "Espaço Natália Toledo",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://espaconatalia.com.br',
    siteName: 'Espaço Natália Toledo',
    title: 'Espaço Natália Toledo - Fisioterapia e Pilates em Florianópolis',
    description: 'Espaço especializado em fisioterapia, pilates e bem-estar em Florianópolis. Atendimento profissional com Natália Toledo.',
    images: [
      {
        url: '/assets/logos/espaco-nat-quadrado-colorido.png',
        width: 400,
        height: 400,
        alt: 'Logo Espaço Natália Toledo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Espaço Natália Toledo - Fisioterapia e Pilates',
    description: 'Fisioterapia especializada e pilates em Florianópolis',
    images: ['/assets/logos/espaco-nat-quadrado-colorido.png'],
  },
  verification: {
    google: 'your-google-site-verification-code', // Replace with actual verification code
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: 'https://espaconatalia.com.br',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HealthAndBeautyBusiness",
              "name": "Espaço Natália Toledo",
              "description": "Espaço especializado em fisioterapia, pilates e bem-estar em Florianópolis",
              "url": "https://espaconatalia.com.br",
              "telephone": "+55-48-99601-8109",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Open Shopping - Rod. João Gualberto Soares, 56 - Sala 105",
                "addressLocality": "Ingleses do Rio Vermelho, Florianópolis",
                "addressRegion": "SC",
                "addressCountry": "BR",
                "postalCode": "88058-500"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "-27.439877",
                "longitude": "-48.402277"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "08:00",
                  "closes": "18:00"
                },
                {
                  "@type": "OpeningHoursSpecification", 
                  "dayOfWeek": "Saturday",
                  "opens": "08:00",
                  "closes": "12:00"
                }
              ],
              "sameAs": [
                "https://www.facebook.com/NataliaToledoFisioterapia",
                "https://www.instagram.com/natifisio",
                "https://www.instagram.com/espaco.nataliatoledo"
              ],
              "founder": {
                "@type": "Person",
                "name": "Natália Toledo"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Serviços de Fisioterapia",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Fisioterapia Pré e Pós Operatório"
                    }
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Pilates Solo e Aparelhos"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service", 
                      "name": "Fisioterapia Pélvica"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Liberação Miofascial"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Low Pressure Fitness (LPF)"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Fisioterapia Domiciliar"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Reabilitação Vestibular"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Quiropraxia"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
