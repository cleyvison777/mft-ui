import { AppMonitoramento } from './../core/model';
import { AppmonitoramentoService, AppMonitoramentoFiltro } from './appmonitoramento.service';
import { ModmonitoramentotemplateService } from './../modmonitoramentotemplate/modmonitoramentotemplate.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { SelectItem } from 'primeng/primeng';
import { ActivatedRoute } from '@angular/router';
import { ErrorHandlerService } from '../core/error-handler.service';
import { CadtipodeverificadorService } from '../cadtipodeverificador/cadtipodeverificador.service';
import { LazyLoadEvent } from 'src/primeng/api';
import { ToastyService } from 'ng2-toasty/src/toasty.service';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { FormControl } from '@angular/forms';
import { CadempresaService } from '../cadempresa/cadempresa.service';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-appmonitoramento',
  templateUrl: './appmonitoramento.component.html',
  styleUrls: ['./appmonitoramento.component.css']
})
export class AppmonitoramentoComponent  {

  tatalRegistros = 0;
  filtro = new AppMonitoramentoFiltro();
  nmAmostragem: string;
  appmonitoramento = [];
  MonitoramentoTemplate = [];
  cadtipodeverificador = [];
  empresas = [];

  appmonitoramentoSalvar = new AppMonitoramento;

  @ViewChild('tabela') grid;
  constructor(
    private modmonitoramentotemplateService: ModmonitoramentotemplateService,
    private appmonitoramentoService: AppmonitoramentoService,
    private tipoDeVerificadores: CadtipodeverificadorService,
    private cadEmpresaService: CadempresaService,
    private toasty: ToastyService,
    private confirmation: ConfirmationService,
    private route: ActivatedRoute,
    private errorHandler: ErrorHandlerService

  ) {}

  ngOnInit() {

    this.carregarMonitoramentoTemplate();
    this.carregarTipoDeVerificadores();
    this.carregarEmpresas();



    // this.pesquisar();
    const codigoAppMonitoramento = this.route.snapshot.params['codigo'];

    //  se houver um id entra no metodo de carregar valores
    if (codigoAppMonitoramento) {
      this.carregarAppMonitoramento(codigoAppMonitoramento);
    }

  }

  get editando() {
    return Boolean(this.appmonitoramentoSalvar.cdMonitoramento)
  }

  //Metodo para carregar valores
  carregarAppMonitoramento(codigo: number) {
    this.appmonitoramentoService.buscarPorCodigo(codigo)
      .then(appmonitoramento => {
        this.appmonitoramentoSalvar = appmonitoramento;
      })
      .catch(erro => this.errorHandler.handle(erro));
    }

    carregarMonitoramentoTemplate() {
      return this.modmonitoramentotemplateService.listarTodas()
        .then(modmonitoramento => {
          this.MonitoramentoTemplate = modmonitoramento.map(c => ({ label: c.cdTemplate + " - " + c.nmTemplate, value: c.cdTemplate }));
        })
        .catch(erro => this.errorHandler.handle(erro));
    }

    carregarTipoDeVerificadores() {
      return this.tipoDeVerificadores.listarTodas()
        .then(tipoDeVerificadores => {
          this.cadtipodeverificador = tipoDeVerificadores.map(c => ({ label: c.nmTipoDeVerificador, value: c.cdTipoDeVerificador }));
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

    pesquisar(page = 0) {

      this.filtro.page = page;

      this.appmonitoramentoService.pesquisar(this.filtro)
        .then(resultado => {
          this.tatalRegistros = resultado.total;
          this.appmonitoramento = resultado.appmonitoramento;

        })
        .catch(erro => this.errorHandler.handle(erro));
    }

    aoMudarPagina(event: LazyLoadEvent) {
      const page = event.first / event.rows;
      this.pesquisar(page);
    }

    confirmarExclusao(appmonitoramento: any) {
      this.confirmation.confirm({
        message: 'Tem certeza que deseja excluir?',
        accept: () => {
          this.excluir(appmonitoramento);
        }
      });
    }

    excluir(appmonitoramento: any) {

      this.appmonitoramentoService.excluir(appmonitoramento.cdMonitoramento)
        .then(() => {
          if (this.grid.first === 0) {
            this.pesquisar();
          } else {
            this.grid.first = 0;
            this.pesquisar();
          }
          this.toasty.success('Aplicação excluída com sucesso!');
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


    confirmarSalvar(appmonitoramento: any) {
      this.confirmation.confirm({
        message: 'Tem certeza que deseja salvar?',
        accept: () => {
          this.adicionarAppMonitoramento(appmonitoramento);
        }
      });
    }

    confirmarAlterar(appmonitoramento: any) {
      this.confirmation.confirm({
        message: 'Tem certeza que deseja alterar?',
        accept: () => {
          this.atualizarAppMonitoramento(appmonitoramento);
        }
      });
    }

    adicionarAppMonitoramento(form: FormControl) {
      this.appmonitoramentoService.adicionar(this.appmonitoramentoSalvar)
        .then(() => {
          this.toasty.success("Aplicação cadastrada com sucesso!");
          form.reset();
          this.appmonitoramentoSalvar = new AppMonitoramento();
          this.pesquisar();
        })
        .catch(erro => this.errorHandler.handle(erro));
    }

    atualizarAppMonitoramento(form: FormControl) {
      this.appmonitoramentoService.atualizar(this.appmonitoramentoSalvar)
        .then(appmonitoramento => {
          this.appmonitoramentoSalvar = appmonitoramento;

          this.toasty.success('Aplicação alterada com sucesso!');

        })
        .catch(erro => this.errorHandler.handle(erro));
    }
}
