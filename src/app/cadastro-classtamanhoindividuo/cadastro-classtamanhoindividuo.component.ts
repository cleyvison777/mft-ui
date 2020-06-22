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
  cadClassTamanhoIndividuo = new CadClassTamanhoIndividuo();
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

  consultaClasseTamanho(page = 0){
    this.filtro.page = page;
    this.classeTamanhoIndividoService.consultar(this.filtro)
     .then(resultado =>{
       this.totalregistrosClassTamanho = resultado.total;
       this.listaClasseTamanho = resultado.listaClasseTamanho;
     })
     .catch(erro => this.errorHandler.handle(erro));
  }
  aoMudarPaginaClasseTamanho(event: LazyLoadEvent) {
    const page = event.first / event.rows;
    this.consultaClasseTamanho(page);
  }
}
