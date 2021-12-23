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
      description: '<p class="mb-3">Graduada pela Universidade Estadual do Centro Oeste.</p><p class="mb-3">Pós-graduada em Terapia Manual e Postural (CESUMAR).</p><p class="mb-3"> Possui especialização em joelho, Pilates (solo e aparelhos) e Liberação Miofascial Instrumental.</p>',
      photo: 'assets/images/team/nati.png'
    },
    {
      name: 'Lisiane da Silva Clemente da Luz',
      profession: 'Fisioterapeuta',
      number: 'Crefito 127812-F',
      description: '<p class="mb-3">Bacharel em Fisioterapia pela Universidade do Sul de Santa Catarina (2008).</p><p class="mb-3"> Formação em Pilates Clássico, Solo e Estúdio e Grupos Especiais (2012).</p><p class="mb-3"> Assistência Domiciliar nas áreas de Neurologia, Neuropediatria e Ortopedia.</p>',
      photo: 'assets/images/graphics/person-icon.svg'
    },
    {
      name: 'Priscila Agliardi',
      profession: 'Fisioterapeuta',
      number: '',
      description: '<p class="mb-3">Bacharel em Fisioterapia pelo Centro Universitário Metodista IPA (2012).</p><p class="mb-3"> Pós-operatório, estética facial e corporal, e liberação miofascial.</p>',
      photo: 'assets/images/team/priscila.png'
    }
  ]

}
