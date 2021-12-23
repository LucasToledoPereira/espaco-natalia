import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {

  public team = [
    {
      name: 'Natália Toledo Pereira',
      profession: 'Fisioterapeuta',
      number: 'Crefito 157697-F',
      description: 'Graduada pela Universidade Estadual do Centro Oeste.<br /> Pós-graduada em Terapia Manual e Postural (CESUMAR).<br /> Possui especialização em joelho, Pilates (solo e aparelhos) e Liberação Miofascial Instrumental.<br />',
      photo: 'assets/images/team/nati.png'
    },
    {
      name: 'Lisiane da Silva Clemente da Luz',
      profession: 'Fisioterapeuta',
      number: 'Crefito 127812-F',
      description: 'Bacharel em Fisioterapia pela Universidade do Sul de Santa Catarina (2008).<br /> Formação em Pilates Clássico, Solo e Estúdio e Grupos Especiais (2012).<br /> Assistência Domiciliar nas áreas de Neurologia, Neuropediatria e Ortopedia.<br />',
      photo: 'assets/images/graphics/person-icon.svg'
    },
    {
      name: 'Priscila Agliardi',
      profession: 'Fisioterapeuta',
      number: '',
      description: 'Bacharel em Fisioterapia pelo Centro Universitário Metodista IPA (2012).<br /> Pós-operatório, estética facial e corporal, e liberação miofascial.',
      photo: 'assets/images/team/priscila.png'
    }
  ]

}
