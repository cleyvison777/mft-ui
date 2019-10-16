import { CadempresaService } from './../cadempresa/cadempresa.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CadfrequenciaFiltro, CadfrequenciaService } from './cadfrequencia.service';
import { LazyLoadEvent } from 'src/primeng/api';
import { ToastyService } from 'ng2-toasty/src/toasty.service';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { Cadfrequencia } from '../core/model';
import { FormControl } from '@angular/forms';
import { ErrorHandlerService } from '../core/error-handler.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-cadfrequencia',
  templateUrl: './cadfrequencia.component.html',
  styleUrls: ['./cadfrequencia.component.css']
})
export class CadfrequenciaComponent {

  tatalRegistros = 0;
  filtro = new CadfrequenciaFiltro();
  nmFrequencia: string;

  frequenciaSalvar = new Cadfrequencia();
  empresas = [];
  @ViewChild('tabela') grid;

  cadfrequencia=[]

  constructor(
    private cadEmpresaService: CadempresaService,
    private cadfrequenciaService: CadfrequenciaService,
    private toasty: ToastyService,
    private confirmation: ConfirmationService,
    private errorHandler: ErrorHandlerService,
    private route: ActivatedRoute,
  ){}

  ngOnInit() {
    //console.log(this.route.snapshot.params['codigo']);

    this.carregarEmpresas();

    const codigoFrequencia = this.route.snapshot.params['codigo'];

    //se houver um id entra no metodo de carregar valores
    if(codigoFrequencia){
      this.carregarFrequencia(codigoFrequencia);
    }
  }

  get editando(){
    return Boolean(this.frequenciaSalvar.cdFrequencia)
  }

  //Metodo para carregar valores
  carregarFrequencia(codigo: number){
    this.cadfrequenciaService.buscarPorCodigo(codigo)
      .then(frequencia => {
        this.frequenciaSalvar = frequencia;
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisar(page = 0){

    this.filtro.page = page;

    this.cadfrequenciaService.pesquisar(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.cadfrequencia = resultado.cadfrequencia;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }
  aoMudarPagina(event: LazyLoadEvent){
    const page = event.first / event.rows;
    this.pesquisar(page);
  }

  confirmarExclusao(frequencia: any) {
    this.confirmation.confirm( {
      message: 'Tem certeza que deseja excluir?',
      accept: () =>{
        this.excluir(frequencia);
      }
    });
  }

  excluir(frequencia: any){

    this.cadfrequenciaService.excluir(frequencia.cdFrequencia)
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
  salvar(form: FormControl){

    if(this.editando){
      this.confirmarAlterar(form);
    } else {
      this.confirmarSalvar(form);
    }

  }


      confirmarSalvar(frequencia: any) {
        this.confirmation.confirm( {
          message: 'Tem certeza que deseja salvar?',
          accept: () =>{
            this.adicionarFrequencia(frequencia);
          }
        });
      }

      confirmarAlterar(frequencia: any) {
        this.confirmation.confirm( {
          message: 'Tem certeza que deseja alterar?',
          accept: () =>{
            this.atualizarFrequencia(frequencia);
          }
        });
      }

      adicionarFrequencia(form: FormControl){
        this.cadfrequenciaService.adicionar(this.frequenciaSalvar)
          .then(() => {
            this.toasty.success("Frequencia cadastrada com sucesso!");
            form.reset();
            this.frequenciaSalvar = new Cadfrequencia();
            this.pesquisar();
          })
          .catch(erro => this.errorHandler.handle(erro));
      }

      atualizarFrequencia(form: FormControl){
        this.cadfrequenciaService.atualizar(this.frequenciaSalvar)
        .then(frequencia => {
          this.frequenciaSalvar = frequencia;

          this.toasty.success('Frequencia alterada com sucesso!');

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
