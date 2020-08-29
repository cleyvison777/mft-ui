import { TsatualtsanteriorService, TsFiltro } from './../cadastro-tsatualtsanterior/tsatualtsanterior.service';
import { FormControl } from '@angular/forms';
import { CadempresaService } from './../cadempresa/cadempresa.service';
import { LazyLoadEvent } from './../../primeng/components/common/lazyloadevent.d';
import { CadTratamentoSilvicultural, CadTsAtualTsAnterior } from './../core/model';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService } from 'primeng/primeng';
import { ToastyService } from 'ng2-toasty';
import { ErrorHandlerService } from './../core/error-handler.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { SilviculturalFiltro, SituacaoService } from './situacao.service';

@Component({
  selector: 'app-cadastro-situacaosilvicultural',
  templateUrl: './cadastro-situacaosilvicultural.component.html',
  styleUrls: ['./cadastro-situacaosilvicultural.component.css']
})
export class CadastroSituacaosilviculturalComponent implements OnInit {
  totalElementosSilvicultural = 0;
  totalElementosTS = 0;
  listaSilvicultural = [];
  listaTs = [];
  empresas = [];
  cadTratamentoSilviculturalSalva = new CadTratamentoSilvicultural();
  cadTsAtualTsAnteriorSalva = new CadTsAtualTsAnterior();
  filtro = new SilviculturalFiltro();
  filtroTS = new TsFiltro();
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
    const codigoSilvicultural = this.route.snapshot.params['codigo'];
    if(codigoSilvicultural) {
      this.carregarSilvicultural(codigoSilvicultural);
      this.consultaTS(codigoSilvicultural);
    }
  }

  get editando() {
    return Boolean(this.cadTratamentoSilviculturalSalva.cdTratamento);
  }



  //consultaSilvicultural
  cosultaSilvicultural(page = 0) {
  this.filtro.page = page;
  this.situacaoService.consultar(this.filtro)
   .then(resultado => {
     this.totalElementosSilvicultural = resultado.total;
     this.listaSilvicultural = resultado.listaSilvicultural;
   })
   .catch(erro => this.errorHandler.handle(erro));
  }

  //paginaçãoaoMudarPaginaSilvicultal
  aoMudarPaginaSilvicultal(event: LazyLoadEvent) {
    const page = event.first / event.rows;
    this.cosultaSilvicultural(page);
  }

//consultaTS//
  consultaTS(codigo: number) {
    //this.filtroTS.page = page;
    this.tsService.buscarPeloTs(codigo)
      .then(resultado => {
         this.listaTs = resultado.listaTs;
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  aoMudarPaginaTS(event: LazyLoadEvent) {
    const page = event.first / event.rows;
    this.consultaTS(page);
  }

//consultaTS//
  
  carregarEmpresas() {
    return this.cadEmpresaService.listarTodas()
      .then(empresas => {
        this.empresas = empresas.map(c => ({ label: c.cdEmpresa + " - " + c.nmEmpresa, value: c.cdEmpresa }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }
adicionarTratamentoSilvicultural(form: FormControl){
  this.situacaoService.adicionar(this.cadTratamentoSilviculturalSalva)
   .then(() => {
     this.cadTratamentoSilviculturalSalva = new CadTratamentoSilvicultural();
     this.cosultaSilvicultural();
     this.toasty.success('Cadastrado realizado com sucesso!');

   })
   .catch(erro => this.errorHandler.handle(erro));
   }
   
   excluirSilvicultural(listaSilvicultural: any) {
     this.situacaoService.excluir(listaSilvicultural.cdTratamento)
     .then(() => {
       if(this.grid.first === 0){
         this.cosultaSilvicultural();
       } else{
        this.grid.first = 0;
        this.cosultaSilvicultural();
       }
       this.toasty.success('Situação Silvicultural excluída com sucesso!');
     })
     .catch(erro => this.errorHandler.handle(erro));
   }

   confirmarExclusao(listaSilvicultural: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
       this.excluirSilvicultural(listaSilvicultural);
      }
    });
  }
   atualizarSilvicultural(form: FormControl) {
     this.situacaoService.atualizar(this.cadTratamentoSilviculturalSalva)
      .then(cadTratamentoSilvicultural => {
      this.cadTratamentoSilviculturalSalva = cadTratamentoSilvicultural;
      this.toasty.success('Atualização realizada com sucesso!');
      this.cosultaSilvicultural();
      this.router.navigate(['/cadastro-situacaosilvicultural']);
      })
      .catch(erro => this.errorHandler.handle(erro));
   }
   //confirmação para alterar
   confirmarAlterar(cadTratamentoSilvicultural: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja alterar?',
      accept: () => {
        this.atualizarSilvicultural(cadTratamentoSilvicultural);
      }
    });
  }
     carregarSilvicultural(codigo: number) {
       this.situacaoService.buscarPeloCogigoSilvicultural(codigo)
       .then(cadTratamentoSilvicultural => {
          this.cadTratamentoSilviculturalSalva = cadTratamentoSilvicultural;
        })
        .catch(erro => this.errorHandler.handle(erro));
     }

     salvar(form: FormControl) {
       if(this.editando) {
         this.confirmarAlterar(form);
       } else {
         this.adicionarTratamentoSilvicultural(form);
       }
     }
 }



