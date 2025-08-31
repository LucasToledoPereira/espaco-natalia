import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Página não encontrada - 404',
  description: 'A página que você está procurando não foi encontrada. Volte para a página inicial do Espaço Natália Toledo.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <Image
            src="/assets/logos/espaco-nat-quadrado-branco.png"
            alt="Espaço Natália Toledo"
            width={120}
            height={120}
            className="mx-auto mb-6"
          />
          <h1 className="text-6xl font-bold text-white mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Página não encontrada
          </h2>
          <p className="text-gray-200 mb-8">
            Ops! A página que você está procurando não existe ou foi movida.
          </p>
        </div>

        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block w-full bg-white text-gray-800 font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition-colors duration-300"
          >
            Voltar para a página inicial
          </Link>
          
          <Link
            href="#contato"
            className="inline-block w-full border-2 border-white text-white font-bold py-3 px-6 rounded-full hover:bg-white hover:text-gray-800 transition-colors duration-300"
          >
            Entre em contato
          </Link>
        </div>

        <div className="mt-8 text-gray-200">
          <p className="text-sm">
            Precisa de ajuda? Entre em contato pelo WhatsApp:
          </p>
          <a 
            href="http://api.whatsapp.com/send?1=pt_BR&phone=5548996018109&text=Olá, preciso de ajuda para navegar no site."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center mt-2 text-white hover:text-green-300 transition-colors"
          >
            <i className="fab fa-whatsapp mr-2"></i>
            (48) 99601-8109
          </a>
        </div>
      </div>
    </div>
  );
}