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

}
