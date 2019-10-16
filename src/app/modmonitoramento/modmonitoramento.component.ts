import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/primeng';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-modmonitoramento',
  templateUrl: './modmonitoramento.component.html',
  styleUrls: ['./modmonitoramento.component.css']
})
export class ModmonitoramentoComponent  {

  cities1: SelectItem[];
  selectedCity1: City;

  constructor() {
    this.cities1 = [
      {label:'Tipo de Verificador', value:null},
      {label:'Monitoramento Operaciol', value:{id:1, name: 'New York', code: 'NY'}},
      {label:'Avaliação de Impactos', value:{id:2, name: 'Rome', code: 'RM'}},
      {label:'Vistoria de PMFS', value:{id:3, name: 'London', code: 'LDN'}},
      {label:'Certificação Florestal', value:{id:4, name: 'Istanbul', code: 'IST'}},
      {label:'Avaliação de Sustentabilidade ( Pesquisa )', value:{id:5, name: 'Paris', code: 'PRS'}}
  ];
}



}
