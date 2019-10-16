import { Component, OnInit, ViewChild } from '@angular/core';
import { CadtipodemetodoFiltro, CadtipodemetodoService } from './cadtipodemetodo.service';
import { Cadtipodemetodo } from '../core/model';
import { LazyLoadEvent } from 'src/primeng/api';
import { ToastyService } from 'ng2-toasty/src/toasty.service';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { FormControl } from '@angular/forms';
import { ErrorHandlerService } from '../core/error-handler.service';
import { ActivatedRoute } from '@angular/router';
import { CadempresaService } from '../cadempresa/cadempresa.service';

@Component({
  selector: 'app-cadtipodemetodo',
  templateUrl: './cadtipodemetodo.component.html',
  styleUrls: ['./cadtipodemetodo.component.css']
})
export class CadtipodemetodoComponent {

  tatalRegistros = 0;
  filtro = new CadtipodemetodoFiltro();
  nmFrequencia: string;

  tipodemetodoSalvar = new Cadtipodemetodo();
  empresas = [];
  @ViewChild('tabela') grid;

  cadtipodemetodo = []

  constructor(
    private cadtipodemetodoService: CadtipodemetodoService,
    private cadEmpresaService: CadempresaService,
    private toasty: ToastyService,
    private confirmation: ConfirmationService,
    private errorHandler: ErrorHandlerService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {

    //console.log(this.route.snapshot.params['codigo']);
    this.carregarEmpresas();
    const codigoTipoDeMetodo = this.route.snapshot.params['codigo'];

    //se houver um id entra no metodo de carregar valores
    if (codigoTipoDeMetodo) {
      this.carregarTipoDeMetodo(codigoTipoDeMetodo);
    }

  }

  get editando() {
    return Boolean(this.tipodemetodoSalvar.cdTipoDeMetodo)
  }

  //Metodo para carregar valores
  carregarTipoDeMetodo(codigo: number) {
    this.cadtipodemetodoService.buscarPorCodigo(codigo)
      .then(tipodemetodo => {
        this.tipodemetodoSalvar = tipodemetodo;
      })
      .catch(erro => this.errorHandler.handle(erro));
  }


  pesquisar(page = 0) {

    this.filtro.page = page;

    this.cadtipodemetodoService.pesquisar(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.cadtipodemetodo = resultado.cadtipodemetodo;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }
  aoMudarPagina(event: LazyLoadEvent) {
    const page = event.first / event.rows;
    this.pesquisar(page);
  }

  confirmarExclusao(tipodemetodo: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(tipodemetodo);
      }
    });
  }

  excluir(tipometodo: any) {

    this.cadtipodemetodoService.excluir(tipometodo.cdTipoDeMetodo)
      .then(() => {
        if (this.grid.first === 0) {
          this.pesquisar();
        } else {
          this.grid.first = 0;
          this.pesquisar();
        }
        this.toasty.success('Frequencia excluída com sucesso!');
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


  confirmarSalvar(tipodemetodo: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja salvar?',
      accept: () => {
        this.adicionarTipoDeMetodo(tipodemetodo);
      }
    });
  }

  confirmarAlterar(tipodemetodo: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja alterar?',
      accept: () => {
        this.atualizarTipoDeMetodo(tipodemetodo);
      }
    });
  }

  adicionarTipoDeMetodo(form: FormControl) {
    this.cadtipodemetodoService.adicionar(this.tipodemetodoSalvar)
      .then(() => {
        this.toasty.success("Tipo de metodo cadastrado com sucesso!");
        form.reset();
        this.tipodemetodoSalvar = new Cadtipodemetodo();
        this.pesquisar();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  atualizarTipoDeMetodo(form: FormControl) {
    this.cadtipodemetodoService.atualizar(this.tipodemetodoSalvar)
      .then(tipodemetodo => {
        this.tipodemetodoSalvar = tipodemetodo;

        this.toasty.success('Tipo de metodo alterado com sucesso!');

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
