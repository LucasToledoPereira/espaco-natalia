import { Metadata } from 'next';
import Header from '@/components/Header';
import About from '@/components/About';
import Services from '@/components/Services';
import Team from '@/components/Team';
import Gallery from '@/components/Gallery';
import Covenants from '@/components/Covenants';
import Testimonies from '@/components/Testimonies';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';

export const metadata: Metadata = {
  title: 'Espaço Natália Toledo - Fisioterapia e Pilates em Florianópolis',
  description: 'Fisioterapia especializada, pilates clínico, liberação miofascial, fisioterapia pélvica, reabilitação vestibular e quiropraxia em Florianópolis. Atendimento profissional no Open Shopping, Ingleses. Agende sua consulta com Natália Toledo!',
  alternates: {
    canonical: 'https://espaconatalia.com.br',
  },
};

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      <Header />
      <main>
        <About />
        <Services />
        <Team />
        <Gallery />
        <Covenants />
        <Testimonies />
        <Contact />
      </main>

      {/* Wave SVG */}
      <svg className="wave-top" viewBox="0 0 1439 147" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g transform="translate(-1.000000, -14.000000)" fillRule="nonzero">
            <g className="wave" fill="var(--color-gray-100)">
              <path
                d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z"
              ></path>
            </g>
            <g transform="translate(1.000000, 15.000000)" fill="#FFFFFF">
              <g transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) ">
                <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
                <path
                  d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                  opacity="0.100000001"
                ></path>
                <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" opacity="0.200000003"></path>
              </g>
            </g>
          </g>
        </g>
      </svg>

      <section className="container mx-auto text-center py-6 mb-12 bg-app-primary">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-white">
          Pronto para nos conhecer?
        </h1>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <h3 className="mt-4 mb-16 text-3xl leading-tight text-white">
          Você pode agendar uma visita pelo WhatsApp!
        </h3>
        <div className="flex justify-center">
          <WhatsApp />
        </div>
      </section>

      <Footer />

      {/* Fixed WhatsApp Button */}
      <a 
        className="fixed rounded-full w-20 h-20 bg-whats bottom-4 right-4 flex items-center justify-center text-white cursor-pointer animate-bounce z-50" 
        href="http://api.whatsapp.com/send?1=pt_BR&phone=5548996018109&text=Gostaria de marcar uma consulta." 
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-whatsapp text-5xl"></i>
      </a>
    </div>
  );
}
