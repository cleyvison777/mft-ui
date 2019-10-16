import { CadempresaService } from './../cadempresa/cadempresa.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Modlocal1Filtro, Modlocal1Service } from './modlocal1.service';
import { LazyLoadEvent } from 'src/primeng/api';
import { ToastyService } from 'ng2-toasty/src/toasty.service';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Modlocal1 } from 'src/app/core/model';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';

@Component({
  selector: 'app-modlocal1',
  templateUrl: './modlocal1.component.html',
  styleUrls: ['./modlocal1.component.css']
})
export class Modlocal1Component implements OnInit {

  tatalRegistros = 0;
  filtro = new Modlocal1Filtro();


  modLocal1Salvar = new Modlocal1();
  empresas = [];

  @ViewChild('tabela') grid;

  modlocal1 = []

  constructor(
    private modLocal1Service: Modlocal1Service,
    private cadEmpresaService: CadempresaService,
    private toasty: ToastyService,
    private confirmation: ConfirmationService,
    private errorHandler: ErrorHandlerService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    //console.log(this.route.snapshot.params['codigo']);
    this.carregarEmpresas();
    const codigoModlocal1 = this.route.snapshot.params['codigo'];
    const cdempresaModlocal1 = this.route.snapshot.params['cdempresa'];

    //se houver um id entra no metodo de carregar valores
    if (codigoModlocal1) {
      this.carregarModlocal1(codigoModlocal1);
    }
  }

  get editando() {
    return Boolean(this.modLocal1Salvar.cdLocal1)
  }

  //Metodo para carregar valores
  carregarModlocal1(codigo: number) {
    this.modLocal1Service.buscarPorCodigo(codigo)
      .then(modlocal1 => {
        this.modLocal1Salvar = modlocal1;
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisar(page = 0) {

    this.filtro.page = page;

    this.modLocal1Service.pesquisar(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modlocal1 = resultado.modlocal1;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }
  aoMudarPagina(event: LazyLoadEvent) {
    const page = event.first / event.rows;
    this.pesquisar(page);
  }

  confirmarExclusao(modlocal1: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(modlocal1);
      }
    });
  }

  excluir(modlocal1: any) {

    this.modLocal1Service.excluir(modlocal1.cdLocal1)
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


  confirmarSalvar(modLocal1: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja salvar?',
      accept: () => {
        this.adicionarModLocal1(modLocal1);
      }
    });
  }

  confirmarAlterar(modLocal1: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja alterar?',
      accept: () => {
        this.atualizarModLocal1(modLocal1);
      }
    });
  }

  adicionarModLocal1(form: FormControl) {
    this.modLocal1Service.adicionar(this.modLocal1Salvar)
      .then(() => {
        this.toasty.success("Unidade de Avaliação cadastrada com sucesso!");
        form.reset();
        this.modLocal1Salvar = new Modlocal1();
        this.pesquisar();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  atualizarModLocal1(form: FormControl) {
    this.modLocal1Service.atualizar(this.modLocal1Salvar)
      .then(modlocal1 => {
        this.modLocal1Salvar = modlocal1;

        this.toasty.success('Unidade de Avaliação alterada com sucesso!');

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
