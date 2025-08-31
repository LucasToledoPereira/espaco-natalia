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
                &ldquo;Excelente profissional, cheguei com muitas dores no ciático, lombar e quadril. Após 3 sessões, já me senti melhor. Espero conseguir o sucesso desse tratamento com tantos exercícios criativos e certeiros para melhorar minha postura e dores. Muito profissional e com sua experiência ajuda muita gente. Obrigada!&rdquo;
              </p>
              <div className="text-right">
                <span className="text-gray-800 font-semibold">Silva Maria Salomão de Freitas</span>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="up" delay={400}>
            <div className="bg-gray-50 rounded-lg p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <p className="text-gray-600 mb-4 italic">
                &ldquo;Sempre vou te agradecer o que você fez por mim. Se hoje estou bem, agradeço a você. Fiz cirurgia de coluna com pinos e parafusos, cheguei na clínica de andador, pensando que não iria mais andar... Mas graças a você, que em dois meses fiquei liberta do andador. Sempre vou te falar que você, com sua sabedoria e dedicação do seu trabalho. Hoje só tenho a agradecer. Pra mim você é a melhor fisioterapeuta... Nunca vou esquecer o que você fez por mim... Muito obrigada. Você é a mais TOP. Deus abençõe sempre sua vida.&rdquo;
              </p>
              <div className="text-right">
                <span className="text-gray-800 font-semibold">Rose Leal</span>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="up" delay={600}>
            <div className="bg-gray-50 rounded-lg p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <p className="text-gray-600 mb-4 italic">
                &ldquo;Dedicada e procura sanar todas as dúvidas que porventura temos com o problema que estamos tratando. Fui muito bem atendida nas sessões, está sempre preocupada nos movimentos e exercícios que fazemos e corrige quando necessário!! Recomendo!! Excelente profissional!! Você é merecedora do melhor, porque tudo o que fazes é com profissionalismo!&rdquo;
              </p>
              <div className="text-right">
                <span className="text-gray-800 font-semibold">Iza Cezira T.Santos</span>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}