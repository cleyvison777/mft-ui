import { CadtipodeverificadorService } from './../cadtipodeverificador/cadtipodeverificador.service';
import { Cadtipodeverificador } from './../core/model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ModmonitoramentotemplateService, ModmonitoramentotemplateFiltro } from './modmonitoramentotemplate.service';
import { ToastyService } from 'ng2-toasty';
import { ConfirmationService, LazyLoadEvent } from 'primeng/api';
import { ErrorHandlerService } from '../core/error-handler.service';
import { ActivatedRoute } from '@angular/router';
import { ModMonitoramentoTemplate } from '../core/model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-modmonitoramentotemplate',
  templateUrl: './modmonitoramentotemplate.component.html',
  styleUrls: ['./modmonitoramentotemplate.component.css']
})
export class ModmonitoramentotemplateComponent implements OnInit {

  tatalRegistros = 0;
  filtro = new ModmonitoramentotemplateFiltro();

  modmonitoramentotemplateSalvar = new ModMonitoramentoTemplate();

  Modmonitoramentotemplate=[];
  tipodeverificador=[];
  empresas = [
    {label: 'Exemplo', value: 1}
  ];

  @ViewChild('tabela') grid;



  constructor(
    private modmonitoramentotemplateService: ModmonitoramentotemplateService,
    private cadtipodeverificadorService: CadtipodeverificadorService,
    private toasty: ToastyService,
    private confirmation: ConfirmationService,
    private errorHandler: ErrorHandlerService,
    private route: ActivatedRoute,
    )
  {}

  ngOnInit() {
    this.carregarTipoDeVerificadores();
  //console.log(this.route.snapshot.params['codigo']);

  const codigoModMonitoramentoTemplate = this.route.snapshot.params['codigo'];

  //se houver um id entra no metodo de carregar valores
  if(codigoModMonitoramentoTemplate){
    this.carregarModMonitoramentoTemplate(codigoModMonitoramentoTemplate);
  }
  }

  get editando(){
    return Boolean(this.modmonitoramentotemplateSalvar.cdTemplate)
  }

  //Metodo para carregar valores
  carregarModMonitoramentoTemplate(codigo: number){
    this.modmonitoramentotemplateService.buscarPorCodigo(codigo)
      .then(modmonitoramentotemplate => {
        this.modmonitoramentotemplateSalvar = modmonitoramentotemplate;
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisar(page = 0){

    this.filtro.page = page;

    this.modmonitoramentotemplateService.pesquisar(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.Modmonitoramentotemplate = resultado.modmonitoramentotemplate;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }
  aoMudarPagina(event: LazyLoadEvent){
    const page = event.first / event.rows;
    this.pesquisar(page);
  }

  confirmarExclusao(modmonitoramentotemplate: any) {
    this.confirmation.confirm( {
      message: 'Tem certeza que deseja excluir?',
      accept: () =>{
        this.excluir(modmonitoramentotemplate);
      }
    });
  }

  excluir(modmonitoramentotemplate: any){

    this.modmonitoramentotemplateService.excluir(modmonitoramentotemplate.cdTemplate)
      .then(() => {
        if (this.grid.first === 0) {
          this.pesquisar();
        } else {
          this.grid.first = 0;
          this.pesquisar();
        }
        this.toasty.success('Modelo de monitoramento excluido com sucesso!');
      })
      .catch(erro => this.errorHandler.handle(erro));

  }
  salvar(form: FormControl){

    if(this.editando){
      this.confirmarAlterar(form);
    } else {
      this.confirmarSalvar(form);
    }

  }


      confirmarSalvar(modmonitoramentotemplate: any) {
        this.confirmation.confirm( {
          message: 'Tem certeza que deseja salvar?',
          accept: () =>{
            this.adicionarModMonitoramentoTemplate(modmonitoramentotemplate);
          }
        });
      }

      confirmarAlterar(modmonitoramentotemplate: any) {
        this.confirmation.confirm( {
          message: 'Tem certeza que deseja alterar?',
          accept: () =>{
            this.atualizarModMonitoramentoTemplate(modmonitoramentotemplate);
          }
        });
      }

      adicionarModMonitoramentoTemplate(form: FormControl){
        this.modmonitoramentotemplateService.adicionar(this.modmonitoramentotemplateSalvar)
          .then(() => {
            this.toasty.success("Assunto cadastrado com sucesso!");
            form.reset();
            this.modmonitoramentotemplateSalvar = new ModMonitoramentoTemplate();
            this.pesquisar();
          })
          .catch(erro => this.errorHandler.handle(erro));
      }

      atualizarModMonitoramentoTemplate(form: FormControl){
        this.modmonitoramentotemplateService.atualizar(this.modmonitoramentotemplateSalvar)
        .then(modnivel1 => {
          this.modmonitoramentotemplateSalvar = modnivel1;

          this.toasty.success('Assunto alterado com sucesso!');

        })
      .catch(erro => this.errorHandler.handle(erro));
      }

      carregarTipoDeVerificadores() {
        return this.cadtipodeverificadorService.listarTodas()
          .then(tipodeverificador => {
            this.tipodeverificador = tipodeverificador.map(c => ({ label: c.cdTipoDeVerificador + " - " + c.nmTipoDeVerificador, value: c.cdTipoDeVerificador }));
          })
          .catch(erro => this.errorHandler.handle(erro));
    }


}
