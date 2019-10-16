import { Component, OnInit,ViewChild } from '@angular/core';
import { CadtipodeverificadorFiltro, CadtipodeverificadorService } from './cadtipodeverificador.service';
import { Cadtipodeverificador } from "../core/model";
import { LazyLoadEvent } from 'src/primeng/api';
import { ToastyService } from 'ng2-toasty/src/toasty.service';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { FormControl } from '@angular/forms';
import { ErrorHandlerService } from '../core/error-handler.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-cadtipodeverificador',
  templateUrl: './cadtipodeverificador.component.html',
  styleUrls: ['./cadtipodeverificador.component.css']
})
export class CadtipodeverificadorComponent {


  tatalRegistros = 0;
  filtro = new CadtipodeverificadorFiltro();
  nmTipoDeVerificador: string;

  tipodeverificadoraSalvar = new Cadtipodeverificador();

  @ViewChild('tabela') grid;

  cadtipodeverificador=[]

  constructor(
    private cadtipodeverificadorService: CadtipodeverificadorService,
    private toasty: ToastyService,
    private confirmation: ConfirmationService,
    private errorHandler: ErrorHandlerService,
    private route: ActivatedRoute
  ){}

  ngOnInit() {
    const cdTipoDeVerificador = this.route.snapshot.params['codigo'];

    if(cdTipoDeVerificador){
      this.carregarTipoVerificador(cdTipoDeVerificador);
   }
  }


  get editando(){
    return Boolean(this.tipodeverificadoraSalvar.cdTipoDeVerificador)
  }

  carregarTipoVerificador(codigo: number){
    this.cadtipodeverificadorService.buscarPorCodigo(codigo)
      .then(tipodeverificador => {
        this.tipodeverificadoraSalvar = tipodeverificador ;
      })

      .catch(erro => this.errorHandler.handle(erro));
  }


  pesquisar(page = 0){

    this.filtro.page = page;

    this.cadtipodeverificadorService.pesquisar(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.cadtipodeverificador = resultado.cadtipodeverificador;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }
  aoMudarPagina(event: LazyLoadEvent){
    const page = event.first / event.rows;
    this.pesquisar(page);
  }

  confirmarExclusao(cadtipodeverificador: any) {
    this.confirmation.confirm( {
      message: 'Tem certeza que deseja excluir?',
      accept: () =>{
        this.excluir(cadtipodeverificador);
      }
    });
  }


  excluir(cadtipodeverificador: any){

    this.cadtipodeverificadorService.excluir(cadtipodeverificador.codigo)
      .then(() => {
        if (this.grid.first === 0) {
          this.pesquisar();
        } else {
          this.grid.first = 0;
          this.pesquisar();
        }
        this.toasty.success('Tipo de Verificador excluído com sucesso!');
      })
      .catch(erro => this.errorHandler.handle(erro));

  }
  salvar(form: FormControl){

    if(this.editando){
      this.confirmarAlteracao(form);
    } else {
      this.adicionarTipodeverificador(form);
    }

  }

  adicionarTipodeverificador(form: FormControl){
    this.cadtipodeverificadorService.adicionar(this.tipodeverificadoraSalvar)
      .then(() => {
        this.toasty.success("Tipo de verificador cadastrado com sucesso!");
        form.reset();
        this.tipodeverificadoraSalvar = new Cadtipodeverificador();
        this.pesquisar();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  confirmarAlteracao(cadtipodeverificador: any) {
    this.confirmation.confirm( {
      message: 'Tem certeza que deseja alterar?',
      accept: () =>{
        this.atualizarTipodeverificador(cadtipodeverificador);
      }
    });
  }

  atualizarTipodeverificador(form: FormControl){
    this.cadtipodeverificadorService.atualizar(this.tipodeverificadoraSalvar)
    .then(tipodeverificador => {
      this.tipodeverificadoraSalvar = tipodeverificador;

      this.toasty.success('Tipo de verificador alterado com sucesso!');

    })
  .catch(erro => this.errorHandler.handle(erro));
  }






  }

