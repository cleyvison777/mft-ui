import { CadastroFamiliaComponent } from './../cadastro-familia/cadastro-familia.component';
import { FormControl } from '@angular/forms';
import { FamiliaService, CadFamiliaFiltro } from './../cadastro-familia/familia.service';
import { LazyLoadEvent } from './../../primeng/components/common/lazyloadevent.d';
import { Genero } from './../core/model';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService } from 'primeng/primeng';
import { ToastyService } from 'ng2-toasty';
import { ErrorHandlerService } from './../core/error-handler.service';
import { GeneroService, GeneroFiltro } from './genero.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cadastro-genero',
  templateUrl: './cadastro-genero.component.html',
  styleUrls: ['./cadastro-genero.component.css'],
})



export class CadastroGeneroComponent implements OnInit {
  totalRegistrosGenero = 0;
  familia = [];
  listaGenero = [];
  filtrof = new CadFamiliaFiltro();
  filtro = new GeneroFiltro();
  genero = new Genero;
  @ViewChild('tabela') grid;

  //chamar o dialog
  displayBasic: boolean;
///////

  constructor(
    private generoService: GeneroService,
    private familiaService: FamiliaService,
    private errorHandler: ErrorHandlerService,
    private toasty: ToastyService,
    private confirmation: ConfirmationService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.carregarFamilia();
       //se houver um id entra no metodo de carregar valores
const cadigoGenero = this.route.snapshot.params['codigo'];
   if (cadigoGenero) {
      this.CarregarGenero(cadigoGenero);
      }
    
  }
  ////chamar o dialog
  showBasicDialog() {
    this.displayBasic = true;
}

get editando() {
  return Boolean(this.genero.cdGenero);
}

consultar(page = 0) {
 this.filtro.page = page;
 this.generoService.consultar(this.filtro)
  .then(resultado => {
    this.totalRegistrosGenero = resultado.total;
    this.listaGenero = resultado.listaGenero;
  })
  .catch(erro => this.errorHandler.handle(erro));

}
 aoMudarPaginaGenero(event: LazyLoadEvent) {
   const page = event.first / event.rows;
   this.consultar(page);
 }
//adiconar registro
adicionarGenero(form: FormControl) {
  this.generoService.adicionar(this.genero)
   .then(() => {
     this.genero = new Genero();
      this.consultar();
      this.toasty.success('Cadastrado realizado com sucesso!');

   })
   .catch(erro => this.errorHandler.handle(erro));

}


   carregarFamilia() {
    return this.familiaService.listarTodasFamilia()
    .then( familia => {
      this.familia = familia.map(e => ({label: e.cdFamilia + " - " + e.nmFamilia, value: e.cdFamilia}));
    })
    .catch(erro => this.errorHandler.handle(erro));
     }

      //exclui o resgitro da tabela
excluir(listaGenero: any) {
  this.generoService.excluir(listaGenero.cdGenero)
   .then(() => {
     if (this.grid.first === 0) {
       this.consultar();
     } else {
       this.grid.first = 0;
       this.consultar();
     }
     this.toasty.success('Genero excluída com sucesso!');
   })
   .catch(erro => this.errorHandler.handle(erro));
}

    confirmarExclusao(listaGenero: any) {
      this.confirmation.confirm({
        message: 'Tem certeza que deseja excluir?',
        accept: () => {
          this.excluir(listaGenero);
        }
      });
    }

           //verifica se e uma atualizção ou um novo cadastro
salvar(form: FormControl) {
  if ( this.editando) {
    this.confirmarAlterar(form);
  } else {
    this.adicionarGenero(form);
  }

}


atualizar(form: FormControl) {
  this.generoService.atualizar(this.genero)
   .then(listagenero => {
     this.genero = listagenero;
     this.toasty.success('Atualização realizada com sucesso!');
     this.consultar();
     this.router.navigate(['/cadastro-genero']);
   })
   .catch(erro => this.errorHandler.handle(erro));
}
     //confirmação para alterar
     confirmarAlterar(genero: any) {
      this.confirmation.confirm({
        message: 'Tem certeza que deseja alterar?',
         accept: () => {
           this.atualizar(genero);
         }
      });
     }

//Carregar Valores
CarregarGenero(codigo: number) {
  this.generoService.buscarPeloCodigoGenero(codigo)
  .then(listaGenero => {
    this.genero = listaGenero;
  })
  .catch(erro => this.errorHandler.handle(erro));

    }
}
