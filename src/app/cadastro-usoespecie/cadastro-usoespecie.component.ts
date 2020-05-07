import { CheckboxModule } from 'primeng/checkbox';
import { CadempresaService } from './../cadempresa/cadempresa.service';
import { FormControl } from '@angular/forms';
import { LazyLoadEvent } from './../../primeng/components/common/lazyloadevent.d';
import { UsoEspecie } from './../core/model';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService } from 'primeng/primeng';
import { ToastyService } from 'ng2-toasty';
import { ErrorHandlerService } from './../core/error-handler.service';
import { UsoespecieService, UsoEspecieFiltro } from './usoespecie.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cadastro-usoespecie',
  templateUrl: './cadastro-usoespecie.component.html',
  styleUrls: ['./cadastro-usoespecie.component.css']
})
export class CadastroUsoespecieComponent implements OnInit {

  selecao = [
    { label: 'Comercial', value: 'Comercial'},
    { label: 'Não Comercial', value: 'Não Comercial'},
  ];
  totalRegistrosEspecie = 0;
  filtro = new UsoEspecieFiltro;
  nmUso: string;
  mensagem: string;
  cadEspecieUso = [];
  usoEspecieSalva = new UsoEspecie;
  empresas: [];
  @ViewChild('tabela') grid;

  constructor(
    private cadempresaService: CadempresaService,
    private usoespecieService: UsoespecieService,
    private errorHandler: ErrorHandlerService,
    private toasty: ToastyService,
    private confirmation: ConfirmationService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  
  ngOnInit() {
    
    // if(this.usoEspecieSalva.lgMadeira == false){
    //   this.mensagem = 'a';
    // } else{
    //   this.mensagem = 'b'
    // }

    const codigoUsoEspecie = this.route.snapshot.params['codigo'];
       if(codigoUsoEspecie) {
         this.carregarUsoEspecie(codigoUsoEspecie);
       }
    this.carregarEmpresas();

  }

  get editando() {
    return Boolean(this.usoEspecieSalva.cdUso);

    
  }


pesquisandoUsoEspecie(page = 0){
  this.filtro.page = page;
   this.usoespecieService.pesquisarUsoEspecie(this.filtro)
    .then(resultado => {
      this.totalRegistrosEspecie = resultado.total;
       this.cadEspecieUso = resultado.cadEspecieUso;
    })
    .catch(erro => this.errorHandler.handle(erro));
 }
 aoMudarPaginaEspecieUso(event: LazyLoadEvent) {
  const page = event.first / event.rows;
  this.pesquisandoUsoEspecie(page);
   }
   
   adicionandoUsoEspecie(form: FormControl) {
        this.usoespecieService.adicionarUsoEspecie(this.usoEspecieSalva)
         .then(() => {
          this.toasty.success("Uso Especie cadastrada com sucesso!");
          form.reset();
          this.usoEspecieSalva = new UsoEspecie();
          this.pesquisandoUsoEspecie();
         })
         .catch(erro => this.errorHandler.handle(erro));
   }

   carregarEmpresas() {
    return this.cadempresaService.listarTodas()
      .then(empresas => {
        this.empresas = empresas.map(c => ({ label: c.cdEmpresa + " - " + c.nmEmpresa, value: c.cdEmpresa }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  excluindoUsoEspecie(cadUsoEspecie: any){
      this.usoespecieService.excluirUsoEspecie(cadUsoEspecie.cdUso)
       .then(() =>{
         if(this.grid.first === 0){
           this.pesquisandoUsoEspecie();
         } else {
           this.grid.first = 0;
            this.pesquisandoUsoEspecie();
         }
         this.toasty.success('Familia excluída com sucesso!');

       })
       .catch(erro => this.errorHandler.handle(erro));

  }
  confirmarExclusaoUsoEspecie(cadUsoEspecie: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluindoUsoEspecie(cadUsoEspecie);
      }
    });
  }

   atualizandoUsoEspecie(form: FormControl){
      this.usoespecieService.atualizarUsoespecie(this.usoEspecieSalva)
       .then(cadEspecieUso =>{
         this.usoEspecieSalva  = cadEspecieUso;
         this.toasty.success('Atualização realizada com sucesso!');
         this.pesquisandoUsoEspecie();
         this.router.navigate(['/cadastro-usoespecie']);

       })
       .catch(erro => this.errorHandler.handle(erro));

   }
       //confirmação para alterar
        
       confirmarAlterar(cadEspecieUso: any) {
        this.confirmation.confirm({
          message: 'Tem certeza que deseja alterar?',
          accept: () => {
            this.atualizandoUsoEspecie(cadEspecieUso);
          }
        });
      }
      carregarUsoEspecie(codigo: number) {
         this.usoespecieService.buscarPeloCodigoUsoEspecie(codigo)
          .then(cadEspecieUso => {
            this.usoEspecieSalva = cadEspecieUso;
          })
          .catch(erro => this.errorHandler.handle(erro));

      }

      salvar(form: FormControl){
       if(this.editando){
        this.confirmarAlterar(form);
       } else{
         this.adicionandoUsoEspecie(form);
       }
     }

}
