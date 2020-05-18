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
 //se houver um id entra no metodo de carregar valores
    const codigoListaEspecie = this.route.snapshot.params['codigo'];
      if(codigoListaEspecie){
        this.carregarListaEspecie(codigoListaEspecie);
      }

  }
  
////chamar o dialog
showBasicDialog() {
  this.displayBasic = true;
}

get editanto() {
  return Boolean(this.listaEspecieSalva.cdListaEsp);
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
//adicionando
   adicionandoListaEspecie(form: FormControl) {
     this.listaEspecieService.adicionarListaEspecie(this.listaEspecieSalva)
      .then(() => {
        this.listaEspecieSalva = new CadListaEspecie();
         this.consultarListaEspecie();
         this.toasty.success('Cadastrado realizado com sucesso!');

      })
      .catch(erro => this.errorHandler.handle(erro));

   }
  //excluindo
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
  atualizandoListaEspecie(form: FormControl) {
    this.listaEspecieService.atualizarListaEspecie(this.listaEspecieSalva)
     .then(listaespecie => {
       this.listaEspecieSalva = listaespecie;
       this.toasty.success('Atualização realizada com sucesso!');
        this.consultarListaEspecie();
        this.router.navigate(['/lista-especie']);
     })
     .catch(erro => this.errorHandler.handle(erro));
  }

  //confirmação para alterar
  confirmarAlterar(listaespecie: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja alterar?',
       accept: () => {
         this.atualizandoListaEspecie(listaespecie);
       }
    });
   }
//Carregar Valores
   carregarListaEspecie(codigo: number) {
     this.listaEspecieService.buscarPeloCodigoListaEspecie(codigo)
      .then(listaespecie => {
        this.listaEspecieSalva = listaespecie;
      })
      .catch(erro => this.errorHandler.handle(erro));

   }

   //verifica se e uma atualizção ou um novo cadastro
salvar(form: FormControl) {
  if ( this.editanto) {
    this.confirmarAlterar(form);
  } else {
    this.adicionandoListaEspecie(form);
  }

}

}
