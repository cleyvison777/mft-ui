import { Component, OnInit, ViewChild } from '@angular/core';
import { SelectItem, ConfirmationService } from 'primeng/primeng';
import { AppAvaliacao } from '../core/model';
import { AppmonitoramentoService } from '../appmonitoramento/appmonitoramento.service';
import { CadempresaService } from '../cadempresa/cadempresa.service';
import { ToastyService } from 'ng2-toasty';
import { ActivatedRoute } from '@angular/router';
import { ErrorHandlerService } from '../core/error-handler.service';
import { AppavaliacaoService, AppAvaliacaoFiltro } from './appavaliacao.service';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-appavaliacao',
  templateUrl: './appavaliacao.component.html',
  styleUrls: ['./appavaliacao.component.css']
})
export class AppavaliacaoComponent  {

  tatalRegistros = 0;
  nmMonitoramento:string;
  cdMonitoramento: number;
  appmonitoramento = [];
  appavaliacao = [];
  empresas = [];

  appavaliacaoSalvar = new AppAvaliacao;

  @ViewChild('tabela') grid;
  constructor(
    private appmonitoramentoService: AppmonitoramentoService,
    private apavaliacaoService: AppavaliacaoService,
    private cadEmpresaService: CadempresaService,
    private toasty: ToastyService,
    private confirmation: ConfirmationService,
    private route: ActivatedRoute,
    private errorHandler: ErrorHandlerService
  ) {}

  ngOnInit() {
    this.pesquisarMon();
    this.carregarAppMonitoramento();
    this.carregarEmpresas();
    

    
    // this.pesquisar();
    const codigoAppAvaliacao = this.route.snapshot.params['codigo'];
    //  se houver um id entra no metodo de carregar valores
    if (codigoAppAvaliacao) {
       this.carregarAppavaliacao(codigoAppAvaliacao);
    }
  }

  get editando() {
    return Boolean(this.appavaliacaoSalvar.cdAvaliacao)
  }

  //Metodo para carregar valores
  carregarAppavaliacao(cdAvaliacao: number) {
    this.apavaliacaoService.buscarPorCodigo(cdAvaliacao)
      .then(appavaliacao => {
        this.appavaliacaoSalvar = appavaliacao;
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

  carregarAppMonitoramento() {
    return this.appmonitoramentoService.listarTodas()
      .then(appmonitoramento => {
        this.appmonitoramento = appmonitoramento.map(c => ({ label: c.cdMonitoramento + " - " + c.nmMonitoramento, value: c.cdMonitoramento }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

 pesquisarMon() {

    const filtro: AppAvaliacaoFiltro = {
      cdMonitoramento: this.cdMonitoramento,
      nmMonitoramento: this.nmMonitoramento
    } 
    this.apavaliacaoService.pesquisarMon(filtro)
      .then(appavaliacao => this.appavaliacao = appavaliacao);
  }
  pesquisar() {

    const filtro: AppAvaliacaoFiltro = {
      cdMonitoramento: this.cdMonitoramento,
      nmMonitoramento: this.nmMonitoramento
    } 
    this.apavaliacaoService.pesquisar(filtro)
      .then(appavaliacao => this.appavaliacao = appavaliacao);
  }


  confirmarExclusao(appavaliacao: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(appavaliacao);
      }
    });
  }

  excluir(appavaliacao: any) {

    this.apavaliacaoService.excluir(appavaliacao.cdAvaliacao)
      .then(() => {
        if (this.grid.first === 0) {
          this.pesquisarMon();
        } else {
          this.grid.first = 0;
          this.pesquisarMon();
        }
        this.toasty.success('Avaliação excluída com sucesso!');
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


  confirmarSalvar(appavaliacao: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja salvar?',
      accept: () => {
        this.adicionarAppavaliacao(appavaliacao);
      }
    });
  }

  confirmarAlterar(appavaliacao: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja alterar?',
      accept: () => {
        this.atualizarAppavaliacao(appavaliacao);
      }
    });
  }

  adicionarAppavaliacao(form: FormControl) {

    this.apavaliacaoService.adicionar(this.appavaliacaoSalvar)
      .then(() => {
        this.toasty.success("Avaliação cadastrada com sucesso!");
        form.reset();
        this.appavaliacaoSalvar = new AppAvaliacao();
        this.pesquisar();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  atualizarAppavaliacao(form: FormControl) {
    this.apavaliacaoService.atualizar(this.appavaliacaoSalvar)
      .then(appavaliacao => {
        this.appavaliacaoSalvar = appavaliacao;

        this.toasty.success('Avaliação alterada com sucesso!');

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  


}
