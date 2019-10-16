import { Component, OnInit, ViewChild } from '@angular/core';
import { LazyLoadEvent } from 'src/primeng/api';
import { ToastyService } from 'ng2-toasty/src/toasty.service';
import { FormControl } from '@angular/forms';
import { ErrorHandlerService } from '../core/error-handler.service';
import { ActivatedRoute } from '@angular/router';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { Modlocal2Filtro, Modlocal2Service } from './modlocal2.service';
import { Modlocal2 } from '../core/model';
import { Modlocal1Service } from '../modlocal1/modlocal1.service';

@Component({
  selector: 'app-modlocal2',
  templateUrl: './modlocal2.component.html',
  styleUrls: ['./modlocal2.component.css']
})
export class Modlocal2Component implements OnInit {

  tatalRegistros = 0;
  filtro = new Modlocal2Filtro();


  modLocal2Salvar = new Modlocal2();

  empresas = [
    { label: 'Exemplo', value: 1 }
  ];

  @ViewChild('tabela') grid;

  modlocal1 = [];
  modlocal2 = [];

  constructor(
    private modLocal1Service: Modlocal1Service,
    private modLocal2Service: Modlocal2Service,
    private toasty: ToastyService,
    private confirmation: ConfirmationService,
    private errorHandler: ErrorHandlerService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.carregarUnidadeDeAvaliacao();
    //console.log(this.route.snapshot.params['codigo']);

    const codigoModlocal2 = this.route.snapshot.params['codigo'];

    //se houver um id entra no metodo de carregar valores
    if (codigoModlocal2) {
      this.carregarModlocal2(codigoModlocal2);
    }
  }

  get editando() {
    return Boolean(this.modLocal2Salvar.cdLocal2)
  }

  //Metodo para carregar valores
  carregarModlocal2(codigo: number) {
    this.modLocal2Service.buscarPorCodigo(codigo)
      .then(modlocal2 => {
        this.modLocal2Salvar = modlocal2;
      })
      .catch(erro => this.errorHandler.handle(erro));
  }



  pesquisarFOD(page = 0) {

    this.filtro.page = page;

    this.modLocal2Service.pesquisarFOD(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modlocal2 = resultado.modlocal2;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarFOA(page = 0) {

    this.filtro.page = page;

    this.modLocal2Service.pesquisarFOA(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modlocal2 = resultado.modlocal2;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarPEO(page = 0) {

    this.filtro.page = page;

    this.modLocal2Service.pesquisarPEO(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modlocal2 = resultado.modlocal2;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarPATRANS(page = 0) {

    this.filtro.page = page;

    this.modLocal2Service.pesquisarPATRANS(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modlocal2 = resultado.modlocal2;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarINFRA(page = 0) {

    this.filtro.page = page;

    this.modLocal2Service.pesquisarINFRA(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modlocal2 = resultado.modlocal2;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarMON(page = 0) {

    this.filtro.page = page;

    this.modLocal2Service.pesquisarMON(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modlocal2 = resultado.modlocal2;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarACAM(page = 0) {

    this.filtro.page = page;

    this.modLocal2Service.pesquisarACAM(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modlocal2 = resultado.modlocal2;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarESCRI(page = 0) {

    this.filtro.page = page;

    this.modLocal2Service.pesquisarESCRI(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modlocal2 = resultado.modlocal2;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarENTOR(page = 0) {

    this.filtro.page = page;

    this.modLocal2Service.pesquisarENTOR(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modlocal2 = resultado.modlocal2;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }





  aoMudarPagina(event: LazyLoadEvent) {
    const page = event.first / event.rows;

  }

  confirmarExclusao(modlocal2: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(modlocal2);
      }
    });
  }

  excluir(modlocal2: any) {

    this.modLocal2Service.excluir(modlocal2.cdLocal2)
      .then(() => {
        if (this.grid.first === 0) {
          //this.pesquisar();
        } else {
          this.grid.first = 0;
          // this.pesquisar();
        }
        this.toasty.success('Local de Avaliação excluída com sucesso!');
      })
      .catch(erro => this.errorHandler.handle(erro));

  }
  salvar(modlocal2: any) {

    this.confirmation.confirm({
      message: 'Tem certeza que deseja salvar?',
      accept: () => {
        this.adicionarModLocal2(modlocal2);
      }
    });

  }



  adicionarModLocal2(form: FormControl) {
    this.modLocal2Service.adicionar(this.modLocal2Salvar)
      .then(() => {
        this.toasty.success("Local de Avaliação cadastrado com sucesso!");
        form.reset();
        this.modLocal2Salvar = new Modlocal2();


      })
      .catch(erro => this.errorHandler.handle(erro));
  }



  carregarUnidadeDeAvaliacao() {
    return this.modLocal1Service.listarTodas()
      .then(modlocal1 => {
        this.modlocal1 = modlocal1.map(c => ({ label: c.cdLocal1 + " - " + c.nmlocal1, value: c.cdLocal1 }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }



}
