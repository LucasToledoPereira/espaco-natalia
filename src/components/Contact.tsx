import WhatsApp from './WhatsApp';
import { ScrollAnimation } from './ScrollAnimations';

export default function Contact() {
  return (
    <section id="contato" className="bg-gray-100 py-8 overflow-hidden">
      <div className="container max-w-5xl mx-auto px-4 md:px-8 py-8">
        <ScrollAnimation direction="fade">
          <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            Contato
          </h2>
          <div className="w-full mb-12">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
        </ScrollAnimation>

        <div className="flex flex-wrap flex-col md:flex-row">
          <ScrollAnimation direction="left" delay={200} className='flex-1'>
            <div className="w-full p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Entre em Contato</h3>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-2"><i className="fas fa-map-marker-alt mr-2"></i>Endereço</h4>
                <p className="text-gray-600">
                  <a 
                    href="https://www.google.com/maps?ll=-27.439877,-48.402277&z=15&t=m&hl=pt-BR&gl=BR&mapclient=embed&cid=11953043371776892984"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-app-primary hover:underline transition-all duration-300"
                  >
                    Open Shopping - Rod. João Gualberto Soares, 56 - Sala 105<br />
                    Ingleses do Rio Vermelho, Florianópolis - SC, 88058-500
                  </a>
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-2"><i className="fas fa-phone mr-2"></i>Telefone</h4>
                <p className="text-gray-600">
                  <a href="tel:+5548996018109" className="hover:text-app-primary">
                    (48) 99601-8109
                  </a>
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-2"><i className="fas fa-share-alt mr-2"></i>Redes Sociais</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.facebook.com/NataliaToledoFisioterapia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-3xl text-blue-600 hover:text-blue-800 transition-colors duration-300"
                    title="Facebook"
                  >
                    <i className="fab fa-facebook-square"></i>
                  </a>
                  <a 
                    href="https://www.instagram.com/natifisio/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-3xl text-pink-500 hover:text-pink-700 transition-colors duration-300"
                    title="Instagram @natifisio"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a 
                    href="https://www.instagram.com/espaco.nataliatoledo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-3xl text-pink-500 hover:text-pink-700 transition-colors duration-300"
                    title="Instagram @espaco.nataliatoledo"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
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
                <iframe 
                  className="rounded-lg" 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3540.9434896660764!2d-48.404465284332694!3d-27.439871822005895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9527698fb8ada4c9%3A0xa5e1bd9ddf996038!2sEspa%C3%A7o%20Natalia%20Toledo%20Fisioterapia%20e%20Pilates!5e0!3m2!1spt-BR!2sbr!4v1607107951132!5m2!1spt-BR!2sbr" 
                  width="100%" 
                  height="400px" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}