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
  totalRegistrosEspecie = 0;
  filtro = new UsoEspecieFiltro;
  nmUso: string;
  cadEspecieUso = [];
  especieusoSalva = new UsoEspecie;
  @ViewChild('tabela') grid;

  constructor(
    private usoespecieService: UsoespecieService,
    private errorHandler: ErrorHandlerService,
    private toasty: ToastyService,
    private confirmation: ConfirmationService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
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

   carregarUsoEspecie(cdUso: number) {
   }
}
