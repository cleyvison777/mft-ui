import { FormControl } from '@angular/forms';
import { LazyLoadEvent } from './../../primeng/components/common/lazyloadevent.d';
import { CadTsAtualTsAnterior, CadTratamentoSilvicultural } from './../core/model';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService } from 'primeng/primeng';
import { ToastyService } from 'ng2-toasty';
import { ErrorHandlerService } from './../core/error-handler.service';
import { TsatualtsanteriorService } from './tsatualtsanterior.service';
import { SituacaoService } from './../cadastro-situacaosilvicultural/situacao.service';
import { CadempresaService } from './../cadempresa/cadempresa.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { resetComponentState } from '@angular/core/src/render3/instructions';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';

@Component({
  selector: 'app-cadastro-tsatualtsanterior',
  templateUrl: './cadastro-tsatualtsanterior.component.html',
  styleUrls: ['./cadastro-tsatualtsanterior.component.css']
})

export class CadastroTsatualtsanteriorComponent implements OnInit {
  empresas = [];
  listaTs = [];
  listaSilvicultural = [];
  listaTsSalva = [];
  cadTratamentoSilviculturalSalva = new CadTratamentoSilvicultural();
  cadTsAtualTsAnteriorSalva = new CadTsAtualTsAnterior();
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
    this.CarregarSilviculturaldropdown();
  }


  get editandoTs() {
    return Boolean(this.cadTsAtualTsAnteriorSalva.cdTratamentoAnteriorPk);
 }

  // consultaTS//
  consultaTS(cdTratamentoAnterior: number) {
     this.tsService.buscarPeloTs(cdTratamentoAnterior)
       .then(resultado => {
        this.listaTs = resultado.listaTs;

      })
    .catch(erro => this.errorHandler.handle(erro));
   }

   aoMudarPaginaTS(event: LazyLoadEvent) {
      const page = event.first / event.rows;
      this.consultaTS(page);
  }




 adicionarTsAtual(form: FormControl) {
   this.tsService.adicionar(this.cadTsAtualTsAnteriorSalva)
     .then(() => {
       this.cadTsAtualTsAnteriorSalva = new CadTsAtualTsAnterior();
       this.toasty.success('Cadastrado realizado com sucesso!');
       ///Pega o valor do cdTratamento como busca na consultaTS
       this.consultaTS(this.carregarSilvicultural =  this.route.snapshot.params['codigo']);
     })

     .catch(erro => this.errorHandler.handle(erro));

 }

 // excluirTS

 excluirTsAnterior(listaTs: any) {
  this.tsService.excluir(listaTs.cdTratamentoAnteriorPk)
   .then(() => {
     if (this.grid.first === 0) {
       this.consultaTS(this.carregarSilvicultural =  this.route.snapshot.params['codigo']);
           } else {
    this.grid.first = 0;
    this.consultaTS(this.carregarSilvicultural =  this.route.snapshot.params['codigo']);      }
     this.toasty.success('Situação Silvicultural excluída com sucesso!');
   })
   .catch(erro => this.errorHandler.handle(erro));

 }


 confirmarExclusaoTS(listaTs: any) {
   this.confirmation.confirm({
     message: 'Tem certeza que deseja excluir?',
     accept: () => {
       this.excluirTsAnterior(listaTs);
     }

   });
 }

 atualizarTsAterior(form: FormControl) {
   this.tsService.atualizar(this.cadTsAtualTsAnteriorSalva)
    .then(cadTsAtualTsAnterior => {
      this.cadTsAtualTsAnteriorSalva = cadTsAtualTsAnterior;
      this.toasty.success('Atualização realizada com sucesso!');
     this.consultaTS(this.carregarSilvicultural =  this.route.snapshot.params['codigo'])
    })
    .catch(erro => this.errorHandler.handle(erro));

 }

  // confirmação para alterar TS!
  confirmarAlterarTsAnterior(cadTsAtualTsAnterior: any) {
   this.confirmation.confirm({
     message: 'Tem certeza que deseja alterar?',
     accept: () => {
       this.atualizarTsAterior(cadTsAtualTsAnterior);
     }
   });
 }

  salvarTs(form: FormControl) {
   if (this.editandoTs) {
     this.confirmarAlterarTsAnterior(form);
   } else {
    this.adicionarTsAtual(form);
  }
}

 carregarTsanterior(cod: number) {
   this.tsService.buscarPeloTsAtualiza(cod)
    .then(cadTsAtualTsAnterior => {
       this.cadTsAtualTsAnteriorSalva = cadTsAtualTsAnterior;
    })
    .catch(erro => this.errorHandler.handle(erro));
 }

 carregarEmpresas() {
   return this.cadEmpresaService.listarTodas()
     .then(empresas => {
       this.empresas = empresas.map(c => ({ label: c.cdEmpresa + ' - ' + c.nmEmpresa, value: c.cdEmpresa }));
     })
     .catch(erro => this.errorHandler.handle(erro));
 }

 CarregarSilviculturaldropdown() {
   return this.situacaoService.listarSilvicultural()
     .then(listaTsSalva => {
       this.listaTsSalva = listaTsSalva.map(c => ({ label: c.cdTratamento + ' - ' + c.nmTratamento, value: c.cdTratamento }));
     })
     .catch(erro => this.errorHandler.handle(erro));
 }

 carregarSilvicultural(codigo: number, ) {
  this.situacaoService.buscarPeloCogigoSilvicultural(codigo)
    .then(cadTratamentoSilvicultural => {
      this.cadTratamentoSilviculturalSalva = cadTratamentoSilvicultural;
    })
    .catch(erro => this.errorHandler.handle(erro));

     }

}
