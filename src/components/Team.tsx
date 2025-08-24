import Image from 'next/image';
import { ScrollAnimation } from './ScrollAnimations';

export default function Team() {
  return (
    <section id="equipe" className="bg-gray-100 py-8">
      <div className="container max-w-5xl mx-auto m-8">
        <ScrollAnimation direction="fade">
          <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            Nossa Equipe
          </h1>
          <div className="w-full mb-12">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
        </ScrollAnimation>

        <div className="flex flex-wrap justify-center">
          <ScrollAnimation direction="up" delay={200}>
            <div className="w-full p-6">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <Image 
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" 
                  src="/assets/images/team/nati.png" 
                  alt="Natália Toledo"
                  width={128}
                  height={128}
                />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Natália Toledo</h3>
                <p className="text-gray-600">Fisioterapeuta</p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}