import { Cadempresa } from './../core/model';
import { CadempresaService, CadempresaFiltro,  } from './cadempresa.service';
import { Component, OnInit, ViewChild} from '@angular/core';
import { LazyLoadEvent } from 'src/primeng/api';
import { ToastyService } from 'ng2-toasty/src/toasty.service';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { FormControl } from '@angular/forms';
import { ErrorHandlerService } from '../core/error-handler.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadempresa',
  templateUrl: './cadempresa.component.html',
  styleUrls: ['./cadempresa.component.css']
})
export class CadempresaComponent implements OnInit{

  tatalRegistros = 0;
  filtro = new CadempresaFiltro();
  nmEmpresa: string;

  empresas = [];
  empresasSalvar = new Cadempresa();
  @ViewChild('tabela') grid;


  constructor(
    private cadempresaService: CadempresaService,
    private errorHandler: ErrorHandlerService,
    private toasty: ToastyService,
    private confirmation: ConfirmationService,
    private route: ActivatedRoute
    ) {}

  ngOnInit() {
   // this.pesquisar();
   const codigoEmpresa = this.route.snapshot.params['codigo'];

   //se houver um id entra no metodo de carregar valores
   if(codigoEmpresa){
      this.carregarEmpresa(codigoEmpresa);
   }


  }

  get editando(){
    return Boolean(this.empresasSalvar.cdEmpresa)
  }
//Metodo para carregar valores
  carregarEmpresa(cdEmpresa: number){
    this.cadempresaService.buscarPorCodigo(cdEmpresa)
      .then(empresa => {
        this.empresasSalvar = empresa;
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisar(page = 0){

    this.filtro.page = page;

    this.cadempresaService.pesquisar(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.empresas = resultado.cadempresa;
      })
      .catch(erro => this.errorHandler.handle(erro));
    }



    aoMudarPagina(event: LazyLoadEvent){
      const page = event.first / event.rows;
      this.pesquisar(page);
    }


    excluir(empresa: any){

      this.cadempresaService.excluir(empresa.cdEmpresa)
      .then(() => {
        if (this.grid.first === 0) {
          this.pesquisar();
        } else {
          this.grid.first = 0;
          this.pesquisar();
        }
        this.toasty.success('Empresa excluída com sucesso!');
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
        confirmarExclusao(empresa: any) {
          this.confirmation.confirm( {
            message: 'Tem certeza que deseja excluir?',
            accept: () =>{
              this.excluir(empresa);
            }
          });
        }

        confirmarSalvar(empresa: any) {
          this.confirmation.confirm( {
            message: 'Tem certeza que deseja salvar?',
            accept: () =>{
              this.adicionarEmpresa(empresa);
            }
          });
        }

        confirmarAlterar(empresa: any) {
          this.confirmation.confirm( {
            message: 'Tem certeza que deseja alterar?',
            accept: () =>{
              this.atualizarEmpresa(empresa);
            }
          });
        }

  adicionarEmpresa(form: FormControl){
    this.cadempresaService.adicionar(this.empresasSalvar)
      .then(() => {
        this.toasty.success("Empresa cadastrada com sucesso!");
        form.reset();
        this.empresasSalvar = new Cadempresa();
        this.pesquisar();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  atualizarEmpresa(form: FormControl){
    this.cadempresaService.atualizar(this.empresasSalvar)
    .then(empresa => {
      this.empresasSalvar = empresa;

      this.toasty.success('Empresa alterada com sucesso!');

    })
  .catch(erro => this.errorHandler.handle(erro));
  }

  }

