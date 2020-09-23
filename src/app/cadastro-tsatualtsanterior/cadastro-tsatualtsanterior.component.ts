import { CadTsAtualTsAnterior } from './../core/model';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService } from 'primeng/primeng';
import { ToastyService } from 'ng2-toasty';
import { ErrorHandlerService } from './../core/error-handler.service';
import { TsatualtsanteriorService } from './tsatualtsanterior.service';
import { SituacaoService } from './../cadastro-situacaosilvicultural/situacao.service';
import { CadempresaService } from './../cadempresa/cadempresa.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cadastro-tsatualtsanterior',
  templateUrl: './cadastro-tsatualtsanterior.component.html',
  styleUrls: ['./cadastro-tsatualtsanterior.component.css']
})
export class CadastroTsatualtsanteriorComponent implements OnInit {
  empresas = [];
  listaTs = [];
  listaSilvicultural = [];

  cadTsAtualTsAnterior = new CadTsAtualTsAnterior();
  @ViewChild('tabela') grid;

  constructor(
    private cadEmpresaService: CadempresaService,
    private situacaoService: SituacaoService,
    private tsService: TsatualtsanteriorService,
    private errorHandler: ErrorHandlerService,
    private toasty: ToastyService,
    private confirmation: ConfirmationService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.carregarEmpresas();
    this.carregarSilvicultural();
  }

  carregarEmpresas() {
    return this.cadEmpresaService.listarTodas()
      .then(empresas => {
        this.empresas = empresas.map(c => ({ label: c.cdEmpresa + " - " + c.nmEmpresa, value: c.cdEmpresa }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  carregarSilvicultural() {
    return this.situacaoService.listarSilvicultural()
      .then(listaSilvicultural => {
        this.listaSilvicultural = listaSilvicultural.map(c => ({ label: c.cdTratamento + " - " + c.nmTratamento, value: c.cdTratamento }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

 carregarSitAnt(codigo: number) {
  return this.tsService.buscarPeloTs(codigo)
  .then(listaTs => {
    this.listaTs = listaTs.map(c => ({
    label: c.cdTratamentotual.cdTratamento + " - " +
     c.cdTratamentotual.nmTratamento, value: c.cdTratamentotual.cdTratamento
  }));
  })
    .catch(erro => this.errorHandler.handle(erro));
  }

}
