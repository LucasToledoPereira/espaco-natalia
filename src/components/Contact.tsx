import WhatsApp from './WhatsApp';
import { ScrollAnimation } from './ScrollAnimations';

export default function Contact() {
  return (
    <section id="contato" className="bg-gray-100 py-8">
      <div className="container max-w-5xl mx-auto m-8">
        <ScrollAnimation direction="fade">
          <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            Contato
          </h1>
          <div className="w-full mb-12">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
        </ScrollAnimation>

        <div className="flex flex-wrap flex-col md:flex-row">
          <ScrollAnimation direction="left" delay={200} className='flex-1'>
            <div className="w-full p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Entre em Contato</h3>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">📍 Endereço</h4>
                <p className="text-gray-600">
                  Rua dos Ingleses, Bairro Ingleses<br />
                  Florianópolis - SC
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">📞 Telefone</h4>
                <p className="text-gray-600">
                  <a href="tel:+5548996018109" className="hover:text-app-primary">
                    (48) 99601-8109
                  </a>
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">🕒 Horário de Funcionamento</h4>
                <p className="text-gray-600">
                  Segunda à Sexta: 8h às 18h<br />
                  Sábado: 8h às 12h
                </p>
              </div>

              <div className="mt-8">
                <WhatsApp />
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="right" delay={400} className='flex-1'>
            <div className="w-full p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Localização</h3>
              <div className="bg-gray-300 rounded-lg h-64 flex items-center justify-center hover:bg-gray-400 transition-colors duration-300">
                <p className="text-gray-600">Mapa em breve</p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}