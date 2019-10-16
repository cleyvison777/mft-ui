import { CadtipodeverificadorService } from './../cadtipodeverificador/cadtipodeverificador.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ErrorHandlerService } from '../core/error-handler.service';
import { VerificadorMService, CadverificadorFiltro } from './verificador-m.service';
import { Verificador_m } from '../core/model';
import { ActivatedRoute } from '@angular/router';
import { ToastyService } from 'ng2-toasty/src/toasty.service';





@Component({
  selector: 'app-verificador-m',
  templateUrl: './verificador-m.component.html',
  styleUrls: ['./verificador-m.component.css']
})
export class VerificadorMComponent implements OnInit {



  verificadorm = [];
  cadtipodeverificador = [];

  verificadorMSalvar = new Verificador_m;


  filtro = new CadverificadorFiltro;

  @ViewChild('tabela') grid;
  constructor(
    private verificadorMService: VerificadorMService,
    private toasty: ToastyService,
    private tipoDeVerificadores: CadtipodeverificadorService,
    private errorHandler: ErrorHandlerService,
    private route: ActivatedRoute


  ) { }

  ngOnInit() {

    this.carregarTipoDeVerificadores();

    // this.pesquisar();
    const codigoVerificadorM = this.route.snapshot.params['codigo'];

    //  se houver um id entra no metodo de carregar valores
    if (codigoVerificadorM) {
      this.carregarVerificadorM(codigoVerificadorM);
    }
  }

  get editando() {
    return Boolean(this.verificadorMSalvar.cdVerificador)
  }


  pesquisarMon() {
    this.verificadorMService.pesquisarMon()
      .then(verificadores => this.verificadorm = verificadores);
  }

  pesquisarImp() {

    this.verificadorMService.pesquisarImp()
      .then(verificadores => this.verificadorm = verificadores);
  }

  pesquisarPMFS() {
    this.verificadorMService.pesquisarPMFS()
      .then(verificadores => this.verificadorm = verificadores);
  }

  pesquisarCerti() {
    this.verificadorMService.pesquisarCerti()
      .then(verificadores => this.verificadorm = verificadores);
  }

  pesquisarSuste() {
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
  carregarVerificadorM(codigo: number) {
    this.verificadorMService.buscarPorCodigo(codigo)
      .then(verificador => {
        this.verificadorMSalvar = verificador;
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  salvar(form: FormControl) {
    this.verificadorMService.atualizar(this.verificadorMSalvar)
      .then(verificador => {
        this.verificadorMSalvar = verificador;

        this.toasty.success('Verificador alterado com sucesso!');

      })
      .catch(erro => this.errorHandler.handle(erro));
  }


}
