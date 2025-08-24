import Image from 'next/image';
import { ScrollAnimation } from './ScrollAnimations';

export default function Gallery() {
  return (
    <section id="espaco" className="bg-white py-8 px-6">
      <div className="container max-w-5xl mx-auto m-8">
        <ScrollAnimation direction="fade">
          <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            Nosso Espaço
          </h1>
          <div className="w-full mb-12">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ScrollAnimation direction="up" delay={200}>
            <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <Image 
                className="w-full h-64 object-cover" 
                src="/assets/images/photos/espaco-1.webp" 
                alt="Espaço Natália Toledo"
                width={400}
                height={256}
              />
            </div>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={400}>
            <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <Image 
                className="w-full h-64 object-cover" 
                src="/assets/images/photos/espaco-2.webp" 
                alt="Espaço Natália Toledo"
                width={400}
                height={256}
              />
            </div>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={600}>
            <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <Image 
                className="w-full h-64 object-cover" 
                src="/assets/images/photos/espaco-3.webp" 
                alt="Espaço Natália Toledo"
                width={400}
                height={256}
              />
            </div>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={800}>
            <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <Image 
                className="w-full h-64 object-cover" 
                src="/assets/images/photos/espaco-4.webp" 
                alt="Espaço Natália Toledo"
                width={400}
                height={256}
              />
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}