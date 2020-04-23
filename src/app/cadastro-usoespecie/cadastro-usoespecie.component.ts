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
  totalRegistrosEspecie = 0;
  filtro = new UsoEspecieFiltro;
  nmUso: string;
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
    this.usoEspecieSalva.lgMadeira = false;
    this.carregarEmpresas();

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
}
