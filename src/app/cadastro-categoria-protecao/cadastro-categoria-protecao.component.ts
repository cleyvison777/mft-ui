import { CadCategoriaProtecao } from './../core/model';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, LazyLoadEvent } from 'primeng/primeng';
import { ToastyService } from 'ng2-toasty';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { CategoriaProtecaoService, CategoriaFiltro } from './categoria-protecao.service';
import { CadempresaService } from './../cadempresa/cadempresa.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cadastro-categoria-protecao',
  templateUrl: './cadastro-categoria-protecao.component.html',
  styleUrls: ['./cadastro-categoria-protecao.component.css']
})
export class CadastroCategoriaProtecaoComponent implements OnInit {
  totalRegistrosCategoriaProtecao = 0;
  listaCategoriaProtecao = [];
  empresas = [];
  cadCategoriaProtecao = new CadCategoriaProtecao;
  filtroCategoria = new CategoriaFiltro();
  @ViewChild('tabela') grid;


  constructor(
    private cadEmpresaService: CadempresaService,
    private categoriaProtecaoService: CategoriaProtecaoService,
    private errorHandler: ErrorHandlerService,
    private toasty: ToastyService,
    private confirmation: ConfirmationService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }

  consultaCategoriaProtecao(page = 0) {
    this.filtroCategoria.page = page;
     this.categoriaProtecaoService.consulta(this.filtroCategoria)
     .then(resultado => {
       this.totalRegistrosCategoriaProtecao = resultado.total;
       this.listaCategoriaProtecao = resultado.listaCategoriaProtecao;
     })
     .catch(erro => this.errorHandler.handle(erro));
  }
  aoMudarPaginaGrupoEcologico(event: LazyLoadEvent) {
    const page = event.first / event.rows;
    this.consultaCategoriaProtecao(page);
  }

}
