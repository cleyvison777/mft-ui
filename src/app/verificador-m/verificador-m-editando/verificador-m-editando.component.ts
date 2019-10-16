
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { ActivatedRoute } from '@angular/router';
import { ToastyService } from 'ng2-toasty/src/toasty.service';
import { Verificador_m } from 'src/app/core/model';
import { CadverificadorFiltro } from '../verificador-m.service';

import { CadtipodeverificadorService } from 'src/app/cadtipodeverificador/cadtipodeverificador.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { VerificadorMEditandoService } from './verificador-m-editando.service';





@Component({
  selector: 'app-verificador-m-editando',
  templateUrl: './verificador-m-editando.component.html',
  styleUrls: ['./verificador-m-editando.component.css']
})
export class VerificadorMEditandoComponent implements OnInit  {



  verificadorm = [];
  cadtipodeverificador = [
    {label: 'Monitoramento Operacional', value: 1},
    {label: 'Avaliação de impactos', value: 2},
    {label: 'Vistoria de PMFS', value: 3},
    {label: 'Certificação Florestal', value: 4},
    {label: 'Avaliação de sustentabilidade (pesquisa)', value: 5}

  ];

  verificadorMSalvar = new Verificador_m;


  filtro = new CadverificadorFiltro;

  @ViewChild('tabela') grid;
  constructor(
    private verificadorMService: VerificadorMEditandoService,
    private toasty: ToastyService,
    private tipoDeVerificadores: CadtipodeverificadorService,
    private errorHandler: ErrorHandlerService,
    private confirmation: ConfirmationService,
    private route: ActivatedRoute


  ) {}

  ngOnInit() {

   this.carregarTipoDeVerificadores();

     // this.pesquisar();
   const codigoVerificadorM = this.route.snapshot.params['codigo'];

  //  se houver um id entra no metodo de carregar valores

  if(codigoVerificadorM){
      this.carregarVerificadorM(codigoVerificadorM);
   }
  }



  get editando(){
    return Boolean(this.verificadorMSalvar.cdVerificador)
  }


  pesquisarMon(){
      this.verificadorMService.pesquisarMon()
      .then(verificadores => this.verificadorm = verificadores);
  }

  pesquisarImp(){

      this.verificadorMService.pesquisarImp()
      .then(verificadores => this.verificadorm = verificadores);
  }

  pesquisarPMFS(){
    this.verificadorMService.pesquisarPMFS()
    .then(verificadores => this.verificadorm = verificadores);
  }

  pesquisarCerti(){
    this.verificadorMService.pesquisarCerti()
    .then(verificadores => this.verificadorm = verificadores);
  }

  pesquisarSuste(){
    this.verificadorMService.pesquisarSuste()
  .then(verificadores => this.verificadorm = verificadores);
  }


  carregarTipoDeVerificadores() {
    return this.tipoDeVerificadores.listarTodas()
      .then(tipoDeVerificadores => {
        this.cadtipodeverificador = tipoDeVerificadores.map(c => ({ label: c.nmTipoDeVerificador, value: c.cdTipoDeVerificador }));
      })
      .catch(erro => this.errorHandler.handle(erro));
}

//Metodo para carregar valores
carregarVerificadorM(id: number){
  this.verificadorMService.buscarPorCodigo(id)
    .then(verificador => {
      this.verificadorMSalvar = verificador;
    })
    .catch(erro => this.errorHandler.handle(erro));
}

salvar(verificador: any) {
  this.confirmation.confirm( {
    message: 'Tem certeza que deseja alterar?',
    accept: () =>{
      this.alterarVerificador(verificador);
    }
  });
}

alterarVerificador(form: FormControl){
  this.verificadorMService.atualizar(this.verificadorMSalvar)
  .then(verificador => {
    this.verificadorMSalvar = verificador;

    this.toasty.success('Verificador alterado com sucesso!');

  })
.catch(erro => this.errorHandler.handle(erro));
}


}

