import { FamiliaService } from './../cadastro-familia/familia.service';
import { LazyLoadEvent } from './../../primeng/components/common/lazyloadevent.d';
import { CadListaEspecie, Genero, CadFamilia } from './../core/model';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService } from 'primeng/primeng';
import { ToastyService } from 'ng2-toasty';
import { ErrorHandlerService } from './../core/error-handler.service';
import { GeneroService, GeneroFiltro } from './genero.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cadastro-genero',
  templateUrl: './cadastro-genero.component.html',
  styleUrls: ['./cadastro-genero.component.css']
})



export class CadastroGeneroComponent implements OnInit {
  totalRegistrosGenero = 0;
  familia = [];
  genero = [];

  filtro = new GeneroFiltro();
  cadGenero = new Genero;
  @ViewChild('tabela') grid;


  //chamar o dialog
  display: boolean;
  displayMaximizable = true;
///////
  constructor(
    private generoService: GeneroService,
    private familiaService: FamiliaService,
    private errorHandler: ErrorHandlerService,
    private toasty: ToastyService,
    private confirmation: ConfirmationService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.carregarFamilia();

  }
  ////chamar o dialog
  showBasicDialog() {
    this.display = true;
}

consultar(page = 0) {
 this.filtro.page = page;
 this.generoService.consultar(this.filtro)
  .then(resultado => {
    this.totalRegistrosGenero = resultado.total;
    this.genero = resultado.genero;
  })
  .catch(erro => this.errorHandler.handle(erro));

}
 aoMudarPaginaGenero(event: LazyLoadEvent){
   const page = event.first / event.rows;
   this.consultar(page);
 }




 carregarFamilia() {
  return this.familiaService.listarTodasFamilia()
  .then( familia => {
    this.familia = familia.map(e => ({label: e.cdFamilia + " - " + e.nmFamilia, value: e.cdFamilia}));
  })
  
  .catch(erro => this.errorHandler.handle(erro));
  
   }






}
