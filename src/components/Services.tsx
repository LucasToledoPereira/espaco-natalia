import Image from 'next/image';
import { ScrollAnimation } from './ScrollAnimations';

export default function Services() {
  return (
    <section id="servicos" className="bg-white py-8">
      <div className="container max-w-5xl mx-auto m-8">
        <ScrollAnimation direction="fade">
          <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            Serviços
          </h1>
          <div className="w-full mb-12">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
        </ScrollAnimation>

        {/* Pilates Solo e Aparelhos */}
        <ScrollAnimation direction="up" delay={200}>
          <div className="flex flex-wrap flex-col-reverse sm:flex-row">
            <div className="w-full sm:w-1/2 p-6 mt-6">
              <Image 
                className="w-full sm:h-64 mx-auto rounded-lg object-cover hover:scale-105 transition-transform duration-300" 
                src="/assets/images/services/pilates.jpg" 
                alt="Pilates"
                width={400}
                height={256}
              />
            </div>
            <div className="flex justify-center items-center w-full sm:w-1/2 p-6 mt-6">
              <div className="align-middle">
                <h3 className="text-3xl text-gray-800 font-bold leading-none mb-6">
                  Pilates Solo e Aparelhos
                </h3>
                <p className="text-gray-600 mb-8">
                  O pilates busca o controle do músculos do corpo, fortalecendo a musculatura e melhorando o tônus. Entre seus benefícios, destacamos a melhora da postura, flexibilidade, mobilidade articular e o alívio de tensões.
                </p>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Liberação Miofascial */}
        <ScrollAnimation direction="up" delay={400}>
          <div className="flex flex-wrap">
            <div className="flex justify-center items-center w-full sm:w-1/2 p-6 mt-6">
              <div className="align-middle">
                <h3 className="text-3xl text-gray-800 font-bold leading-none mb-6">
                  Liberação Miofascial
                </h3>
                <p className="text-gray-600 mb-8">
                  A liberação miofascial é um procedimento que visa amenizar as dores musculares causadas por tensão. Por meio de pressão sobre o local da dor, realizada manualmente ou com o aporte de rolos, a terapia previne lesões e contribui para o tratamento de graves patologias musculoesqueléticas.
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 p-6">
              <Image 
                className="w-full sm:h-64 mx-auto rounded-lg object-cover hover:scale-105 transition-transform duration-300" 
                src="/assets/images/services/miofascial.jpg" 
                alt="Liberação Miofascial"
                width={400}
                height={256}
              />
            </div>
          </div>
        </ScrollAnimation>

        {/* Fisioterapia Pré e Pós Operatório */}
        <ScrollAnimation direction="up" delay={600}>
          <div className="flex flex-wrap flex-col-reverse sm:flex-row">
            <div className="w-full sm:w-1/2 p-6 mt-6">
              <Image 
                className="w-full sm:h-64 mx-auto rounded-lg object-cover hover:scale-105 transition-transform duration-300" 
                src="/assets/images/services/fisio.jpg" 
                alt="Fisioterapia Pré e Pós Operatório"
                width={400}
                height={256}
              />
            </div>
            <div className="flex justify-center items-center w-full sm:w-1/2 p-6 mt-6">
              <div className="align-middle">
                <h3 className="text-3xl text-gray-800 font-bold leading-none mb-6">
                  Fisioterapia Pré e Pós Operatório
                </h3>
                <p className="text-gray-600 mb-8">
                  Por meio da fisioterapia pré e pós-cirúrgica, podemos minimizar as queixas e aperfeiçoar os resultados da cirurgia, diminuindo o desconforto e os traumas ao paciente.
                </p>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Fisioterapia domiciliar */}
        <ScrollAnimation direction="up" delay={800}>
          <div className="flex flex-wrap">
            <div className="flex justify-center items-center w-full sm:w-1/2 p-6 mt-6">
              <div className="align-middle">
                <h3 className="text-3xl text-gray-800 font-bold leading-none mb-6">
                  Fisioterapia domiciliar
                </h3>
                <p className="text-gray-600 mb-8">
                  A fisioterapia domiciliar permite ao profissional atender, tratar e reabilitar o paciente em sua própria residência, respeitando suas necessidades e condições patológicas. Esse um ótimo recurso para quem tem algum tipo de dificuldade de deslocamento.
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 p-6">
              <Image 
                className="w-full sm:h-64 mx-auto rounded-lg object-cover hover:scale-105 transition-transform duration-300" 
                src="/assets/images/services/home.webp" 
                alt="Fisioterapia domiciliar"
                width={400}
                height={256}
              />
            </div>
          </div>
        </ScrollAnimation>

        {/* Fisioterapia Pélvica */}
        <ScrollAnimation direction="up" delay={1000}>
          <div className="flex flex-wrap flex-col-reverse sm:flex-row">
            <div className="w-full sm:w-1/2 p-6 mt-6">
              <Image 
                className="w-full sm:h-64 mx-auto rounded-lg object-cover hover:scale-105 transition-transform duration-300" 
                src="/assets/images/services/quiropraxia.jpg" 
                alt="Quiropraxia"
                width={400}
                height={256}
              />
            </div>
            <div className="flex justify-center items-center w-full sm:w-1/2 p-6 mt-6">
              <div className="align-middle">
                <h3 className="text-3xl text-gray-800 font-bold leading-none mb-6">
                  Quiropraxia
                </h3>
                <p className="text-gray-600 mb-8">
                 No tratamento quiroprático, podem ser utilizadas técnicas manuais específicas, incluindo pequenos estalos quando necessário, com o objetivo de equilibrar o sistema neuro-músculo-esquelético e reduzir o risco de lesões. A prática combina evidências científicas e experiência clínica para prevenir, identificar e tratar disfunções que afetam o movimento do corpo, promovendo melhora na performance, qualidade de vida e alívio da dor.
                </p>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Low Pressure Fitness (LPF) */}
        <ScrollAnimation direction="up" delay={1200}>
          <div className="flex flex-wrap">
            <div className="flex justify-center items-center w-full sm:w-1/2 p-6 mt-6">
              <div className="align-middle">
                <h3 className="text-3xl text-gray-800 font-bold leading-none mb-6">
                  Low Pressure Fitness (LPF)
                </h3>
                <div className="text-gray-600 mb-8">
                  <p>Também conhecido como a técnica da barriga negativa, consiste em um sistema de treinamento postural e respiratório. Além disso, o método compreende a mobilização neuro miofascial, exercícios neurodinâmicos, reeducação postural e o conceito hipopressivo.</p>
                  <p className="mt-4">Benefícios do método:</p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li>Redução da circunferência abdominal;</li>
                    <li>Fortalecimento do assoalho pélvico e prevenção/tratamento para a Incontinência urinária;</li>
                    <li>Melhora o desempenho sexual;</li>
                    <li>Auxilia na gestação e na recuperação do parto;</li>
                    <li>Aumento da capacidade respiratória;</li>
                    <li>Reduz o estresse;</li>
                    <li>Melhora o funcionamento do intestino.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 p-6">
              <Image 
                className="w-full sm:h-64 mx-auto rounded-lg object-cover hover:scale-105 transition-transform duration-300" 
                src="/assets/images/services/lpf.webp" 
                alt="Low Pressure Fitness"
                width={400}
                height={256}
              />
            </div>
          </div>
        </ScrollAnimation>

        {/* Reabilitação Vestibular */}
        <ScrollAnimation direction="up" delay={1400}>
          <div className="flex flex-wrap flex-col-reverse sm:flex-row">
            <div className="w-full sm:w-1/2 p-6 mt-6">
              <Image 
                className="w-full sm:h-64 mx-auto rounded-lg object-cover hover:scale-105 transition-transform duration-300" 
                src="/assets/images/services/reabilitacao-vestibular.jpg" 
                alt="Reabilitação Vestibular"
                width={400}
                height={256}
              />
            </div>
            <div className="flex justify-center items-center w-full sm:w-1/2 p-6 mt-6">
              <div className="align-middle">
                <h3 className="text-3xl text-gray-800 font-bold leading-none mb-6">
                  Reabilitação Vestibular
                </h3>
                <div className="text-gray-600 mb-8">
                  <p>A Fisioterapia Vestibular é uma área de atuação da Fisioterapia focada no tratamento de distúrbios do sistema vestibular (vertigem, desequilíbrio e tonturas persistentes).</p>
                  <p className="mt-4">Distúrbios vestibulares:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Neurite vestibular;</li>
                    <li>Labirintite;</li>
                    <li>VPPB (Vertigem Posicional Paroxística Benigna);</li>
                    <li>Doença de Meniére;</li>
                    <li>Pós-trauma na cabeça e no ouvido.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}