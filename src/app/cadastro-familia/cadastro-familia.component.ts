import { Headers } from '@angular/http';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, LazyLoadEvent } from 'primeng/primeng';
import { ToastyService } from 'ng2-toasty';
import { ErrorHandlerService } from './../core/error-handler.service';
import { CadFamilia, CadAmf } from './../core/model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CadFamiliaFiltro, FamiliaService } from './familia.service';

@Component({
  selector: 'app-cadastro-familia',
  templateUrl: './cadastro-familia.component.html',
  styleUrls: ['./cadastro-familia.component.css']
})
export class CadastroFamiliaComponent implements OnInit {
totalRegistrosFamilia = 0;
tatalRegistros = 0;
familia = [];
familia2 = [];
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
    //se houver um id entra no metodo de carregar valores
    const codigoFamilia = this.route.snapshot.params['codigo'];
    if (codigoFamilia) {
      this.CarrgarFamilia(codigoFamilia);
    }

  //  this.consultar();

  }

     //metodo para identificar se esta atualizando

get editando() {
 return Boolean(this.cadFamilia.cdFamilia);
}


pesquisar(page = 0) {

  this.filtro.page = page;

  this.familiaService.pesquisar(this.filtro)
    .then(resultado => {
      this.tatalRegistros = resultado.total;
      this.familia2 = resultado.familia;
    })
    .catch(erro => this.errorHandler.handle(erro));
  }



  aoMudarPagina(event: LazyLoadEvent){
    const page = event.first / event.rows;
    this.pesquisar(page);
  }
 
  

  adicionarFamilia(form: FormControl) {
    this.familiaService.adicionar(this.cadFamilia)
     .then(() => {
       this.cadFamilia = new CadFamilia();
        this.pesquisar();
        this.toasty.success('Cadastrado realizado com sucesso!');
     })
     .catch(erro => this.errorHandler.handle(erro));

  }
   //exclui o resgitro da tabela
   excluir(familia: any) {
     this.familiaService.excluir(familia.cdFamilia)
      .then(() => {
        if(this.grid.first === 0) {
          this.pesquisar();
        } else{
          this.grid.first = 0;
          this.pesquisar();
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

      //verifica se e uma atualizção ou um novo cadastro
     salva(form: FormControl) {
       if (this.editando) {
         this.confirmarAlterar(form);
       } else {
         this.adicionarFamilia(form);
       }
     }
     //atualiza registros na tabela
 atualizar(form: FormControl) {
   this.familiaService.atualizar(this.cadFamilia)
   .then(familia => {
     this.cadFamilia = familia;
     this.toasty.success('Atualização realizada com sucesso!');
    this.pesquisar();
     //REDIRECIONA PARA O ADICIONAR O AMF
     this.router.navigate(['/cadastro-familia']);
   })
   .catch(erro => this.errorHandler.handle(erro));   

 }
   
 //carregar valores
    CarrgarFamilia(codigo: number) {
      this.familiaService.buscarPeloCodigo(codigo)
      .then(familia => {
        this.cadFamilia = familia;
      })
      .catch(erro => this.errorHandler.handle(erro));
    }

    //confirmação para alterar
   confirmarAlterar(familia: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja alterar?',
      accept: () => {
        this.atualizar(familia);
      }
    });
  }
}
