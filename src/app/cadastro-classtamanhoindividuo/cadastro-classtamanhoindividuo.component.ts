import { FormControl } from '@angular/forms';
import { LazyLoadEvent } from './../../primeng/components/common/lazyloadevent.d';
import { CadClassTamanhoIndividuo } from './../core/model';
import { ClasseTamanhoIndividoService, ClassIndividuoFiltro } from './classe-tamanho-individo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService } from 'primeng/primeng';
import { ToastyService } from 'ng2-toasty';
import { ErrorHandlerService } from './../core/error-handler.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cadastro-classtamanhoindividuo',
  templateUrl: './cadastro-classtamanhoindividuo.component.html',
  styleUrls: ['./cadastro-classtamanhoindividuo.component.css']
})
export class CadastroClasstamanhoindividuoComponent implements OnInit {
  totalregistrosClassTamanho = 0;
  listaClasseTamanho = [];
  cadClassTamanhoIndividuoSalva = new CadClassTamanhoIndividuo();
  filtro = new ClassIndividuoFiltro();
  @ViewChild('tabela') grid;

  constructor(
    private classeTamanhoIndividoService: ClasseTamanhoIndividoService,
    private errorHandler: ErrorHandlerService,
    private toasty: ToastyService,
    private confirmation: ConfirmationService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  }
//consulta
  consultaClasseTamanho(page = 0){
    this.filtro.page = page;
    this.classeTamanhoIndividoService.consultar(this.filtro)
     .then(resultado =>{
       this.totalregistrosClassTamanho = resultado.total;
       this.listaClasseTamanho = resultado.listaClasseTamanho;
     })
     .catch(erro => this.errorHandler.handle(erro));
  }
  //paginação
  aoMudarPaginaClasseTamanho(event: LazyLoadEvent) {
    const page = event.first / event.rows;
    this.consultaClasseTamanho(page);
  }
// adiciona 
  adicionarClassTamanho(form: FormControl) {
    this.classeTamanhoIndividoService.adicionar(this.cadClassTamanhoIndividuoSalva)
     .then(() => {
      this.toasty.success("Classe tamanho cadastrada com sucesso!");
      this.cadClassTamanhoIndividuoSalva = new CadClassTamanhoIndividuo();
      this.consultaClasseTamanho();
     })
     .catch(erro => this.errorHandler.handle(erro));
  }

  excluirClasseIndividuo(listaClasseTamanho: any){
    this.classeTamanhoIndividoService.excluir(listaClasseTamanho.cdClasseTamanho)
     .then(()=> {
       if(this.grid.first === 0){
         this.consultaClasseTamanho();
       } else {
        this.grid.first = 0;
        this.consultaClasseTamanho();
       }
       this.toasty.success('Classe Tamanho excluída com sucesso!');
     })
     .catch(erro => this.errorHandler.handle(erro));
  }

  confirmarExclusaoClasseTamanho(listaClasseTamanho: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluirClasseIndividuo(listaClasseTamanho);
      }
    });
  }
}
