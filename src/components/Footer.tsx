import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white">
      <div className="container mx-auto px-8">
        <div className="w-full flex flex-col md:flex-row py-6">
          <div className="flex-1 mb-10 mx-6">
            <a href="#">
              <Image 
                className="w-56 object-contain mx-auto" 
                src="/assets/logos/espaco-nat.png" 
                alt="Espaço Natália Toledo"
                width={224}
                height={100}
              />
            </a>
          </div>
          
          <div className="flex-1">
            <p className="uppercase text-gray-500 md:mb-6">Redes Sociais</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 mr-2 md:block md:mr-0">
                <a 
                  className="no-underline hover:underline text-gray-800 hover:text-app-primary" 
                  href="https://www.facebook.com/NataliaToledoFisioterapia" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li className="mt-2 mr-2 md:block md:mr-0">
                <a 
                  className="no-underline hover:underline text-gray-800 hover:text-app-primary" 
                  href="https://www.instagram.com/natifisio" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram Natália
                </a>
              </li>
              <li className="mt-2 mr-2 md:block md:mr-0">
                <a 
                  className="no-underline hover:underline text-gray-800 hover:text-app-primary" 
                  href="https://www.instagram.com/espaco.nataliatoledo" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram do Espaço
                </a>
              </li>
            </ul>
          </div>
          
          <div className="flex-1">
            <p className="uppercase text-gray-500 md:mb-6">Espaço Natália Toledo</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 mr-2 md:block md:mr-0">
                <a 
                  href="#" 
                  className="no-underline hover:underline text-gray-800 hover:text-app-primary cursor-pointer"
                >
                  Quem somos
                </a>
              </li>
              <li className="mt-2 mr-2 md:block md:mr-0">
                <a 
                  href="#servicos"
                  className="no-underline hover:underline text-gray-800 hover:text-app-primary cursor-pointer"
                >
                  Serviços
                </a>
              </li>
              <li className="mt-2 mr-2 md:block md:mr-0">
                <a 
                  href="#contato"
                  className="no-underline hover:underline text-gray-800 hover:text-app-primary cursor-pointer"
                >
                  Contatos
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="text-center p-4 text-gray-500 font-extralight">
          <p>&copy; {currentYear} | Espaço Natália Toledo Pereira | Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
}