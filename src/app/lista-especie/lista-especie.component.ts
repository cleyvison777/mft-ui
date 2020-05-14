import { FormControl } from '@angular/forms';
import { LazyLoadEvent } from './../../primeng/components/common/lazyloadevent.d';
import { CadListaEspecie } from './../core/model';
import { CadempresaService } from './../cadempresa/cadempresa.service';
import { ListaEspecieService, ListaEspecieFiltro } from './lista-especie.service';
import { ConfirmationService } from 'primeng/primeng';
import { ActivatedRoute, Router } from '@angular/router';
import { Confirmation } from './../../primeng/components/common/confirmation.d';
import { ToastyService } from 'ng2-toasty';
import { ErrorHandlerService } from './../core/error-handler.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-lista-especie',
  templateUrl: './lista-especie.component.html',
  styleUrls: ['./lista-especie.component.css']
})
export class ListaEspecieComponent implements OnInit {
 totalRegistrosEspecie = 0;
 listaespecie = [];
 empresas = [];
 filtro = new ListaEspecieFiltro();
 listaEspecieSalva = new CadListaEspecie;
 @ViewChild('tabela') grid;

//chamar o dialog
 displayBasic: boolean;

  constructor(
    private listaEspecieService: ListaEspecieService,
    private errorHandler: ErrorHandlerService,
    private cadEmpresaService: CadempresaService,
    private toasty: ToastyService,
    private confirmation: ConfirmationService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.carregarEmpresas();
  }
  
////chamar o dialog
showBasicDialog() {
  this.displayBasic = true;
}

consultarListaEspecie(page = 0) {
  this.filtro.page = page;
  this.listaEspecieService.pesquisarListaEspecie(this.filtro)
  .then(resultado => {
    this.totalRegistrosEspecie = resultado.total;
    this.listaespecie = resultado.listaespecie;

  })
  .catch(erro => this.errorHandler.handle(erro));
}
aoMudarPaginaEspecie(event: LazyLoadEvent) {
  const page = event.first / event.rows;
  this.consultarListaEspecie(page);

   }

   adicionandoListaEspecie(form: FormControl) {
     this.listaEspecieService.adicionarListaEspecie(this.listaEspecieSalva)
      .then(() => {
        this.listaEspecieSalva = new CadListaEspecie();
         this.consultarListaEspecie();
         this.toasty.success('Cadastrado realizado com sucesso!');

      })
      .catch(erro => this.errorHandler.handle(erro));

   }

   excluindoListaEspecie(listaespecie: any){
     this.listaEspecieService.excluirListaEspecie(listaespecie.cdListaEsp)
      .then(() =>{
        if(this.grid.first === 0){
          this.consultarListaEspecie();
        } else {
          this.grid.first = 0;
          this.consultarListaEspecie();
        }
        this.toasty.success('Genero excluída com sucesso!');
      })
      .catch(erro => this.errorHandler.handle(erro));
   }

   
   confirmarExclusao(listaespecie: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluindoListaEspecie(listaespecie);
      }
    });
  }

   carregarEmpresas() {
    return this.cadEmpresaService.listarTodas()
      .then(empresas => {
        this.empresas = empresas.map(c => ({ label: c.cdEmpresa + " - " + c.nmEmpresa, value: c.cdEmpresa }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

}
