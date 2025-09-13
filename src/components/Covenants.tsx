import Image from 'next/image';
import { ScrollAnimation } from './ScrollAnimations';

export default function Covenants() {
  return (
    <section id="convenios" className="bg-gray-100 py-8">
      <div className="container max-w-5xl mx-auto m-8">
        <ScrollAnimation direction="fade">
          <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            Convênios
          </h2>
          <div className="w-full mb-12">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
        </ScrollAnimation>

        <div className="flex flex-wrap justify-center items-center">
          <ScrollAnimation direction="up" delay={200}>
            <div className="w-full p-6">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <Image 
                  className="h-24 mx-auto object-contain" 
                  src="/assets/images/convenios/logo-cassi.png" 
                  alt="Cassi"
                  width={200}
                  height={96}
                />
              </div>
            </div>
          </ScrollAnimation>
        </div>

        <ScrollAnimation direction="fade" delay={600}>
          <div className="text-center mt-8">
            <p className="text-gray-600 text-lg">
              Também atendemos particular com valores especiais.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}