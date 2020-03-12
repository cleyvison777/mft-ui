import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, LazyLoadEvent } from 'primeng/primeng';
import { ToastyService } from 'ng2-toasty';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { CadGrupoEcologico } from './../core/model';
import { GrupoEcologicoFiltro, GrupoEcologicoService } from './grupo-ecologico.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cadastro-grupo-ecologico',
  templateUrl: './cadastro-grupo-ecologico.component.html',
  styleUrls: ['./cadastro-grupo-ecologico.component.css']
})
export class CadastroGrupoEcologicoComponent implements OnInit {
  totalRegistrosGrupoEcologico = 0;
  listaGrupoEcologico = [];
  filtro = new GrupoEcologicoFiltro();
  cadGrupoEcologico = new CadGrupoEcologico();
  @ViewChild('tabela') grid;

  constructor(
    private grupoEcologicoService: GrupoEcologicoService,
    private errorHandler: ErrorHandlerService,
    private toasty: ToastyService,
    private confirmation: ConfirmationService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }
consultarGrupoEcologico(page = 0) {
  this.filtro.page = page;
   this.grupoEcologicoService.consultar(this.filtro)
    .then(resultado =>{
      this.totalRegistrosGrupoEcologico = resultado.total;
      this.listaGrupoEcologico = resultado.listaGrupoEcologico;
    })
    .catch(erro => this.errorHandler.handle(erro));
   }

   aoMudarPaginaGrupoEcologico(event: LazyLoadEvent) {
    const page = event.first / event.rows;
    this.consultarGrupoEcologico(page);
  }
}
