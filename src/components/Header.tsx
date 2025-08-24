'use client';

import { useState } from 'react';
import Image from 'next/image';
import WhatsApp from './WhatsApp';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100; // Account for fixed header
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full z-30 top-0 text-white gradient">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div className="pl-4 flex items-center">
          <a 
            className="toggleColour text-white no-underline hover:no-underline font-bold text-xl cursor-pointer" 
            onClick={scrollTop}
          >
            <Image 
              src="/assets/logos/espaco-nat-quadrado-branco.png" 
              width={50} 
              height={50} 
              alt="Logo do Espaço Natália Toledo"
            />
          </a>
        </div>
        
        <div className="block lg:hidden pr-4">
          <button 
            className="flex items-center p-1 text-white hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out" 
            onClick={toggleMenu}
          >
            <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        
        <div className={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${isMenuOpen ? '' : 'hidden'} mt-2 lg:mt-0 text-black p-4 lg:p-0 z-20`}>
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            <li className="mr-3">
              <a 
                className="inline-block text-white hover:underline hover:underline-offset-8 py-2 px-4 cursor-pointer" 
                onClick={() => { scrollTop(); setIsMenuOpen(false); }}
              >
                Início
              </a>
            </li>
            <li className="mr-3">
              <a 
                className="inline-block text-white hover:underline hover:underline-offset-8 py-2 px-4 cursor-pointer" 
                onClick={() => scrollToSection('servicos')}
              >
                Serviços
              </a>
            </li>
            <li className="mr-3">
              <a 
                className="inline-block text-white hover:underline hover:underline-offset-8 py-2 px-4 cursor-pointer" 
                onClick={() => scrollToSection('equipe')}
              >
                Equipe
              </a>
            </li>
            <li className="mr-3">
              <a 
                className="inline-block text-white hover:underline hover:underline-offset-8 py-2 px-4 cursor-pointer" 
                onClick={() => scrollToSection('espaco')}
              >
                Espaço
              </a>
            </li>
            <li className="mr-3">
              <a 
                className="inline-block text-white hover:underline hover:underline-offset-8 py-2 px-4 cursor-pointer" 
                onClick={() => scrollToSection('convenios')}
              >
                Convênios
              </a>
            </li>
            <li className="mr-3">
              <a 
                className="inline-block text-white hover:underline hover:underline-offset-8 py-2 px-4 cursor-pointer" 
                onClick={() => scrollToSection('depoimentos')}
              >
                Depoimentos
              </a>
            </li>
            <li className="mr-3">
              <a 
                className="inline-block text-white hover:underline hover:underline-offset-8 py-2 px-4 cursor-pointer" 
                onClick={() => scrollToSection('contato')}
              >
                Contatos
              </a>
            </li>
          </ul>
          <WhatsApp />
        </div>
      </div>
    </nav>
  );
}