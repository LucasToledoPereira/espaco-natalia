import { ScrollAnimation } from './ScrollAnimations';

export default function Testimonies() {
  return (
    <section id="depoimentos" className="bg-white py-8">
      <div className="container max-w-5xl mx-auto m-8">
        <ScrollAnimation direction="fade">
          <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            Depoimentos
          </h1>
          <div className="w-full mb-12">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ScrollAnimation direction="up" delay={200}>
            <div className="bg-gray-50 rounded-lg p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <p className="text-gray-600 mb-4 italic">
                &ldquo;Excelente profissional, muito atenciosa e dedicada. Recomendo a todos!&rdquo;
              </p>
              <div className="text-right">
                <span className="text-gray-800 font-semibold">- Paciente</span>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="up" delay={400}>
            <div className="bg-gray-50 rounded-lg p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <p className="text-gray-600 mb-4 italic">
                &ldquo;O tratamento foi muito eficaz, senti melhoras desde a primeira sessão.&rdquo;
              </p>
              <div className="text-right">
                <span className="text-gray-800 font-semibold">- Paciente</span>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="up" delay={600}>
            <div className="bg-gray-50 rounded-lg p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <p className="text-gray-600 mb-4 italic">
                &ldquo;Ambiente acolhedor e profissional competente. Muito satisfeita com os resultados.&rdquo;
              </p>
              <div className="text-right">
                <span className="text-gray-800 font-semibold">- Paciente</span>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}