import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google'
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
    "open shopping",
    "fisioterapeuta",
    "pilates clínico",
    "dor nas costas",
    "reabilitação",
    "natália toledo",
    "fisioterapia neurológica",
    "tratamento postural",
    "RPG",
    "santa catarina"
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
    description: 'Fisioterapia especializada, pilates clínico, liberação miofascial e reabilitação vestibular em Florianópolis. Localizado no Open Shopping, Ingleses. Agende sua consulta!',
    images: [
      {
        url: 'https://espaconatalia.com.br/assets/logos/espaco-nat-quadrado-colorido.png',
        width: 512,
        height: 512,
        alt: 'Logo Espaço Natália Toledo - Fisioterapia e Pilates',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Espaço Natália Toledo - Fisioterapia e Pilates em Florianópolis',
    description: 'Fisioterapia especializada, pilates clínico, liberação miofascial e reabilitação vestibular. Open Shopping, Ingleses.',
    images: ['https://espaconatalia.com.br/assets/logos/espaco-nat-quadrado-colorido.png'],
    creator: '@natifisio',
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
                "name": "Serviços de Fisioterapia e Pilates",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "MedicalTherapy",
                      "name": "Fisioterapia Pré e Pós Operatório",
                      "description": "Tratamento especializado para preparo e recuperação de cirurgias ortopédicas e estéticas"
                    }
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "ExerciseTherapy",
                      "name": "Pilates Solo e Aparelhos",
                      "description": "Pilates clínico e condicionamento físico com aparelhos e solo"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "MedicalTherapy", 
                      "name": "Fisioterapia Pélvica",
                      "description": "Tratamento especializado para disfunções do assoalho pélvico"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "MedicalTherapy",
                      "name": "Liberação Miofascial",
                      "description": "Técnica de liberação de tensões musculares e fasciais"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "ExerciseTherapy",
                      "name": "Low Pressure Fitness (LPF)",
                      "description": "Técnica de exercícios hipopressivos para fortalecimento do core"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "MedicalTherapy",
                      "name": "Fisioterapia Domiciliar",
                      "description": "Atendimento fisioterapêutico no conforto da sua casa"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "MedicalTherapy",
                      "name": "Reabilitação Vestibular",
                      "description": "Tratamento para vertigem, labirintite e distúrbios do equilíbrio"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "MedicalTherapy",
                      "name": "Quiropraxia",
                      "description": "Tratamento de disfunções da coluna vertebral e articulações"
                    }
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "38",
                "bestRating": "5"
              },
              "priceRange": "$",
              "paymentAccepted": "Dinheiro, Cartão, PIX",
              "currenciesAccepted": "BRL"
            })
          }}
        />
      </head>
      <body className="antialiased">
        {children}
        <GoogleAnalytics gaId="G-D6J6L2PLPS" />
      </body>
    </html>
  );
}
