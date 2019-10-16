import { CadempresaService } from './../cadempresa/cadempresa.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ModNivel1 } from '../core/model';
import { Modnivel1Service, ModNivel1Filtro } from './modnivel1.service';
import { ToastyService } from 'ng2-toasty';
import { ConfirmationService, LazyLoadEvent } from 'primeng/api';
import { ErrorHandlerService } from '../core/error-handler.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-modnivel1',
  templateUrl: './modnivel1.component.html',
  styleUrls: ['./modnivel1.component.css']
})
export class Modnivel1Component implements OnInit {

  tatalRegistros = 0;
  filtro = new ModNivel1Filtro();

  modNivel1Salvar = new ModNivel1();

  modnivel1 = [];
  empresas = [];

  @ViewChild('tabela') grid;



  constructor(
    private modNivel1Service: Modnivel1Service,
    private cadEmpresaService: CadempresaService,
    private toasty: ToastyService,
    private confirmation: ConfirmationService,
    private errorHandler: ErrorHandlerService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    //console.log(this.route.snapshot.params['codigo']);

    this.carregarEmpresas();
    const codigoModnivel1 = this.route.snapshot.params['codigo'];

    //se houver um id entra no metodo de carregar valores
    if (codigoModnivel1) {
      this.carregarModNivel1(codigoModnivel1);
    }
  }

  get editando() {
    return Boolean(this.modNivel1Salvar.cdNivel1)
  }

  //Metodo para carregar valores
  carregarModNivel1(codigo: number) {
    this.modNivel1Service.buscarPorCodigo(codigo)
      .then(modnivel1 => {
        this.modNivel1Salvar = modnivel1;
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisar(page = 0) {

    this.filtro.page = page;

    this.modNivel1Service.pesquisar(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modnivel1 = resultado.modnivel1;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }
  aoMudarPagina(event: LazyLoadEvent) {
    const page = event.first / event.rows;
    this.pesquisar(page);
  }

  confirmarExclusao(modnivel1: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(modnivel1);
      }
    });
  }

  excluir(modnivel1: any) {

    this.modNivel1Service.excluir(modnivel1.cdNivel1)
      .then(() => {
        if (this.grid.first === 0) {
          this.pesquisar();
        } else {
          this.grid.first = 0;
          this.pesquisar();
        }
        this.toasty.success('Unidade de Avaliação excluída com sucesso!');
      })
      .catch(erro => this.errorHandler.handle(erro));

  }
  salvar(form: FormControl) {

    if (this.editando) {
      this.confirmarAlterar(form);
    } else {
      this.confirmarSalvar(form);
    }

  }


  confirmarSalvar(modnivel1: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja salvar?',
      accept: () => {
        this.adicionarModNivel1(modnivel1);
      }
    });
  }

  confirmarAlterar(modnivel1: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja alterar?',
      accept: () => {
        this.atualizarModNivel1(modnivel1);
      }
    });
  }

  adicionarModNivel1(form: FormControl) {
    this.modNivel1Service.adicionar(this.modNivel1Salvar)
      .then(() => {
        this.toasty.success("Assunto cadastrado com sucesso!");
        form.reset();
        this.modNivel1Salvar = new ModNivel1();
        this.pesquisar();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  atualizarModNivel1(form: FormControl) {
    this.modNivel1Service.atualizar(this.modNivel1Salvar)
      .then(modnivel1 => {
        this.modNivel1Salvar = modnivel1;

        this.toasty.success('Assunto alterado com sucesso!');

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  carregarEmpresas() {
    return this.cadEmpresaService.listarTodas()
      .then(empresas => {
        this.empresas = empresas.map(c => ({ label: c.cdEmpresa + " - " + c.nmEmpresa, value: c.cdEmpresa }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

}
