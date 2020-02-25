import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, LazyLoadEvent } from 'primeng/primeng';
import { ToastyService } from 'ng2-toasty';
import { ErrorHandlerService } from './../core/error-handler.service';
import { CadFamilia } from './../core/model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CadFamiliaFiltro, FamiliaService } from './familia.service';

@Component({
  selector: 'app-cadastro-familia',
  templateUrl: './cadastro-familia.component.html',
  styleUrls: ['./cadastro-familia.component.css']
})
export class CadastroFamiliaComponent implements OnInit {
totalRegistrosFamilia = 0;
familia = [];
filtro = new CadFamiliaFiltro();
cadFamilia = new CadFamilia;
@ViewChild('tabela') grid;


  constructor(
    private familiaService: FamiliaService,
    private errorHandler: ErrorHandlerService,
    private toasty: ToastyService,
    private confirmation: ConfirmationService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {

  }

  consultar(page = 0) {
    this.filtro.page = page;
    this.familiaService.consultar(this.filtro)
    .then(resultado => {
      this.totalRegistrosFamilia = resultado.total;
      this.familia = resultado.familia;
    })
    .catch(erro => this.errorHandler.handle(erro));

  }
  aoMudarPaginaFamilia(event: LazyLoadEvent) {
    const page = event.first / event.rows;
    this.consultar(page);
  }

  adicionarFamilia(form: FormControl) {
    this.familiaService.adicionar(this.cadFamilia)
     .then(() => {
       this.cadFamilia = new CadFamilia();
        this.consultar();
        this.toasty.success('Cadastrado realizado com sucesso!');
     })
     .catch(erro => this.errorHandler.handle(erro));

  }
   //exclui o resgitro da tabela
   
   excluir(familia: any) {
     this.familiaService.excluir(familia.cdFamilia)
      .then(() => {
        if(this.grid.first === 0) {
          this.consultar();
        } else{
          this.grid.first = 0;
          this.consultar();
        }
        this.toasty.success('Area excluída com sucesso!');
      })
      .catch(erro => this.errorHandler.handle(erro));
   }

   confirmarExclusao(familia: any){
     this.confirmation.confirm({
       message: 'Tem certeza que deseja excluir?',
       accept: () => {
         this.excluir(familia);
       }
     });
   }



}
