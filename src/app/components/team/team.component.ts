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
      description: '<p class="mb-4">Graduada pela Universidade Estadual do Centro Oeste.</p><p class="mb-4">Pós-graduada em Terapia Manual e Postural (CESUMAR).</p><p class="mb-4"> Possui especialização em joelho, Pilates (solo e aparelhos) e Liberação Miofascial Instrumental.</p>',
      photo: 'assets/images/team/nati.png'
    },
    {
      name: 'Luana Foljarini',
      profession: 'Fisioterapeuta',
      number: 'Crefito 337142 - F',
      description: '<p class="mb-4">Formada em Fisioterapia pela Universidade Luterana do Brasil.</p><p class="mb-4">Formação em Pilates Clássico pelo Instituto Golden e Licenciada em Low Pressure Fitness (LPF).</p><p class="mb-4">Atua nas áreas de Traumato-Ortopedia, Neuro Funcional e Geriatria.</p>',
      photo: 'assets/images/team/luana.jpeg'
    },
    {
      name: 'Isabela Petry',
      profession: 'Fisioterapeuta',
      number: 'Crefito 227429-F',
      description: '<p class="mb-4">Doutora em Saúde e Comportamento.</p><p class="mb-4">Pós-graduada em Fisioterapia Pélvica.</p><p class="mb-4">Pós-graduada em Obstetrícia.</p>',
      photo: 'assets/images/team/isabela.jpeg'
    }
  ]

}
