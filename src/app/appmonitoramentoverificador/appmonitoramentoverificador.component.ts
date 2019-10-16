import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/primeng';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-appmonitoramentoverificador',
  templateUrl: './appmonitoramentoverificador.component.html',
  styleUrls: ['./appmonitoramentoverificador.component.css']
})
export class AppmonitoramentoverificadorComponent {

  cities1: SelectItem[];
  selectedCity1: City;

  constructor() {
    this.cities1 = [
      {label:'Tipo de Verificador', value:null},
      {label:'Monitoramento Operacional', value:{id:1, name: 'New York', code: 'NY'}},
      {label:'Avaliação de Impactos', value:{id:2, name: 'Rome', code: 'RM'}},
      {label:'Vistoria de PMFS', value:{id:3, name: 'London', code: 'LDN'}},
      {label:'Certificação Florestal', value:{id:4, name: 'Istanbul', code: 'IST'}},
      {label:'Avaliação de Sustentabilidade ( Pesquisa )', value:{id:5, name: 'Paris', code: 'PRS'}}
  ];
}

}
