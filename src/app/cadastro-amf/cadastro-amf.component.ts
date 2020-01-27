import { AmfService } from './amf.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-amf',
  templateUrl: './cadastro-amf.component.html',
  styleUrls: ['./cadastro-amf.component.css']
})
export class CadastroAmfComponent implements OnInit {

amf = [];

  constructor(private amfService: AmfService) { }

  ngOnInit() {
    this.consultar();
  }
  consultar() {
    this.amfService.consultar()
    .then(dadosAmf => this.amf = dadosAmf);
  }

}
