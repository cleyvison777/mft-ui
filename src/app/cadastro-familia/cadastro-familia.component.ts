import { FormControl } from '@angular/forms';
import { CadFamilia } from './../core/model';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, LazyLoadEvent } from 'primeng/primeng';
import { ToastyService } from 'ng2-toasty';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { FamiliaService, CadastroFamiliaFiltro } from './familia.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cadastro-familia',
  templateUrl: './cadastro-familia.component.html',
  styleUrls: ['./cadastro-familia.component.css']
})
export class CadastroFamiliaComponent implements OnInit {
 totalRegistrosFamilia = 0;
 filtro = new CadastroFamiliaFiltro();
 nmFamilia: string;
 cadastrofamilia = [];
 familiaSalva = new CadFamilia;
 @ViewChild('tabela') grid;

  constructor(
    private familiaService: FamiliaService,
    private errorHandler: ErrorHandlerService,
    private toasty: ToastyService,
    private confirmation: ConfirmationService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  }
pesquisarFamilia(page = 0) {
 this.filtro.page = page;
 this.familiaService.pesquisarFamilia(this.filtro)
  .then(resultado => {
     this.totalRegistrosFamilia = resultado.total;
     this.cadastrofamilia = resultado.cadastrofamilia;
  })
  .catch(erro => this.errorHandler.handle(erro));
     }


     aoMudarPaginaFamilia(event: LazyLoadEvent) {
      const page = event.first / event.rows;
      this.pesquisarFamilia(page);
    }

    carregarFamilia(cdFamilia: number) {
       this.familiaService.buscarPeloCadigo(cdFamilia)
        .then(familia =>  {
          this.familiaSalva = familia;

        })
        .catch(erro => this.errorHandler.handle(erro));
    }
    adicionandoFamilia(form: FormControl) {
      this.familiaService.adicionarFamilia(this.familiaSalva)
       .then(() => {
      this.toasty.success("Empresa cadastrada com sucesso!");
      form.reset();
       this.familiaSalva = new CadFamilia();
       this.pesquisarFamilia();
       })
       .catch(erro => this.errorHandler.handle(erro));
    }
    excluindoFamilia(cadastrofamilia: any){
      this.familiaService.excluirFamilia(cadastrofamilia.cdFamilia)
       .then(() => {
         if (this.grid.first === 0) {
           this.pesquisarFamilia();
         } else {
          this.grid.first = 0;
          this.pesquisarFamilia();
         }
         this.toasty.success('Familia excluída com sucesso!');
       })
       .catch(erro => this.errorHandler.handle(erro));
    }
    confirmarExclusaoFamilia(cadastrofamilia: any) {
      this.confirmation.confirm({
        message: 'Tem certeza que deseja excluir?',
        accept: () =>{
          this.excluindoFamilia(cadastrofamilia);
        }
      });
    }
}
