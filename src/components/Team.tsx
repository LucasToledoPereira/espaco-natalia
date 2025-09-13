import Image from 'next/image';
import { ScrollAnimation } from './ScrollAnimations';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  alt: string;
  code: string;
  description?: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Natália Toledo",
    role: "Fisioterapeuta",
    image: "/assets/images/team/nati.png",
    alt: "Natália Toledo",
    code: 'Crefito 157697-F',
    description: 'Fisioterapeuta fundadora, pós-graduada em Ortopedia, Traumatologia e Terapia Manual e Postural (CESUMAR). Com mais de 13 anos de experiência clínica, possui formações em Mulligan Concept, Biomecânica aplicada à reabilitação e Fisioterapia Ortopédica e Desportiva baseada em PNF. Especialista em reabilitação funcional de joelho e ombro, combinando ciência e prática avançada para promover recuperação, performance e qualidade de vida.'
  },
  {
    id: 3,
    name: "Luana Foljarini",
    role: "Fisioterapeuta",
    image: "/assets/images/team/luana.jpeg",
    alt: "Luana Foljarini",
    code: 'Crefito 337142 - F',
    description: 'Fisioterapeuta formada pela Universidade Luterana do Brasil, com especialização em Pilates Clássico pelo Instituto Golden e certificação em Low Pressure Fitness (LPF). Atua nas áreas de Traumato-Ortopedia, Neurofuncional e Geriatria, promovendo saúde, movimento e qualidade de vida em diferentes fases da vida.'
  },
  {
    id: 4,
    name: "João Paulo Termehr",
    role: "Fisioterapeuta",
    image: "/assets/images/team/joao.jpeg",
    alt: "João Paulo Termehr",
    code: 'Crefito-10/372488-F',
    description: 'Fisioterapeuta graduado pela Faculdade Guilherme Guimbala (ACE/FGG). Atua em Ortopedia e Traumatologia, com foco em Terapia Manual e Liberação Miofascial. Instrutor de Pilates, unindo movimento e reabilitação para melhorar performance e qualidade de vida.'
  },
  {
    id: 5,
    name: "Leonardo Luis dos Santos",
    role: "Quiropraxista",
    image: "/assets/images/team/leonardo.jpeg",
    alt: "Leonardo Luis dos Santos",
    code: '',
    description: 'Quiropraxista com mais de 13 anos de experiência, formado pela Universidade Feevale e com Master em Quiropraxia pela AECC University College, na Inglaterra. Atua com foco em saúde neuro-músculo-esquelética, sempre em constante atualização no Brasil e no exterior.'
  },
  {
    id: 6,
    name: "Tales Wienke",
    role: "Personal Trainer",
    image: "/assets/images/team/tales.jpeg",
    alt: "Tales Wienke",
    code: '',
    description: 'Licenciado e Bacharel em Educação Física pela Universidade do Contestado (UnC), em Concórdia-SC. Atua em Florianópolis, na região do Norte da Ilha, há 10 anos, promovendo saúde e bem-estar e ajudando seus alunos a alcançar seus objetivos desde 2015.'
  }
];

export default function Team() {
  return (
    <section id="equipe" className="bg-gray-100 py-8">
      <div className="container max-w-5xl mx-auto m-8">
        <ScrollAnimation direction="fade">
          <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            Nossa Equipe
          </h2>
          <div className="w-full mb-12">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
        </ScrollAnimation>

        <div className="flex flex-wrap justify-center">
          {teamMembers.map((member, index) => (
            <ScrollAnimation 
              key={member.id} 
              direction="up" 
              delay={200 + (index * 200)}
              className='sm:w-1/2 lg:w-1/3'
            >
              <div className="w-full p-6 h-full">
                <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-2xl hover:scale-105 transition-all duration-300 h-full min-h-[280px] flex flex-col">
                  <Image 
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover object-top" 
                    src={member.image}
                    alt={member.alt}
                    width={128}
                    height={128}
                  />
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                  <div className="text-sm text-gray-400 mb-3">
                    <div>{member.role}</div>
                    <div>{member.code}</div>
                  </div>
                  <p className="text-sm text-gray-500 mb-1 text-left">{member.description}</p>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}