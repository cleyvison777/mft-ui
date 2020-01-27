import { ArvoreService } from './arvore.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-arvore',
  templateUrl: './cadastro-arvore.component.html',
  styleUrls: ['./cadastro-arvore.component.css']
})
export class CadastroArvoreComponent implements OnInit {

  cidades = [];

  constructor(private arvoreService: ArvoreService) {}

  ngOnInit() {
    this.consultar();
  }

  consultar() {
    this.arvoreService.consultar()
    .then(dadosCidades => {
      this.cidades = dadosCidades;
    });
  }

  adicionar(nome: string) {
    this.arvoreService.adicionar({nome})
    .then(cidade => {
      alert( `Cidade "${cidade.nome}" adicionado com sucesso!`);
      this.consultar();
    });
  }

  excluir(id: number) {
   this.arvoreService.excluir(id)
   .then(() =>{
     alert('Cidade excluido com sucesso!');
     this.consultar();
   })
  }

  atualizar(cidade: any) {
    this.arvoreService.atualizar(cidade)
    .then(() =>{
      alert('Cidade atualizada com sucesso!')
    });
  }
}

