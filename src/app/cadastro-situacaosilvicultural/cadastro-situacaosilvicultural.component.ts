import { TsatualtsanteriorService, TsFiltro } from './../cadastro-tsatualtsanterior/tsatualtsanterior.service';
import { FormControl } from '@angular/forms';
import { CadempresaService } from './../cadempresa/cadempresa.service';
import { LazyLoadEvent } from './../../primeng/components/common/lazyloadevent.d';
import { CadTratamentoSilvicultural, CadTsAtualTsAnterior } from './../core/model';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService } from 'primeng/primeng';
import { ToastyService, ToastyModule } from 'ng2-toasty';
import { ErrorHandlerService } from './../core/error-handler.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { SilviculturalFiltro, SituacaoService } from './situacao.service';
import { isNull } from 'util';

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
  listaTsSalva = [];

  empresas = [];
  cadTratamentoSilviculturalSalva = new CadTratamentoSilvicultural();
  cadTsAtualTsAnteriorSalva = new CadTsAtualTsAnterior();
  filtro = new SilviculturalFiltro();
  filtroTS = new TsFiltro();
  exibirFormularioTS = false;
  @ViewChild('tabela') grid;
  exibirFormularioAtualizaTS = false;

  constructor(
    private cadEmpresaService: CadempresaService,
    private situacaoService: SituacaoService,
    private tsService: TsatualtsanteriorService,
    private errorHandler: ErrorHandlerService,
    private toasty: ToastyService,
    private confirmation: ConfirmationService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.carregarEmpresas();
    this.CarregarSilviculturaldropdown();

    const codigoTsaterior = this.route.snapshot.params['codigo'];
    const codigoSilvicultural = this.route.snapshot.params['codigo'];
    if (codigoSilvicultural) {
      this.carregarSilvicultural(codigoSilvicultural);
      this.consultaTS(codigoSilvicultural);
    }
  }
// exibir modal vai ficar para proxima
  // novoTs() {
  //   this.exibirFormularioTS = true;
  // }
  // AtualizaTs() {
  //   this.exibirFormularioAtualizaTS = true;

  // }
////////
  get editando() {
    return Boolean(this.cadTratamentoSilviculturalSalva.cdTratamento);
  }
  // get editandoTs() {
  //   return Boolean(this.cadTsAtualTsAnteriorSalva.cdTratamentoAnteriorPk);
  // }


  /// TS

  // consultaTS//
   consultaTS(cdTratamentoAnterior: number) {
     // this.filtroTS.page = page;
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
        ///ele atribui o pega o valor da cdTratamento como busca na consultaTS
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
       form.reset(form);
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

  // salvarTs(form: FormControl) {
  //   if (this.editandoTs) {
  //     this.confirmarAlterarTsAnterior(form);
  //   } else {
  //     this.adicionarTsAtual(form);
  //   }
  // }

  carregarTsanterior(codigo: number) {
    this.tsService.buscarPeloTsAtualiza(codigo)
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


////////////////////////////////


adicionarTratamentoSilvicultural(form: FormControl) {
  this.situacaoService.adicionar(this.cadTratamentoSilviculturalSalva)
    .then(() => {
      this.cadTratamentoSilviculturalSalva = new CadTratamentoSilvicultural();
      this.cosultaSilvicultural();
      this.toasty.success('Cadastrado realizado com sucesso!');

    })
    .catch(erro => this.errorHandler.handle(erro));
}

 // consultaSilvicultural
 cosultaSilvicultural(page = 0) {
  this.filtro.page = page;
  this.situacaoService.consultar(this.filtro)
    .then(resultado => {
      this.totalElementosSilvicultural = resultado.total;
      this.listaSilvicultural = resultado.listaSilvicultural;
    })
    .catch(erro => this.errorHandler.handle(erro));
}

// paginaçãoaoMudarPaginaSilvicultal
aoMudarPaginaSilvicultal(event: LazyLoadEvent) {
  const page = event.first / event.rows;
  this.cosultaSilvicultural(page);
}

  excluirSilvicultural(listaSilvicultural: any) {
    this.situacaoService.excluir(listaSilvicultural.cdTratamento)
      .then(() => {
        if (this.grid.first === 0) {
          this.cosultaSilvicultural();
        } else {
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
  // confirmação para alterar
  confirmarAlterar(cadTratamentoSilvicultural: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja alterar?',
      accept: () => {
        this.atualizarSilvicultural(cadTratamentoSilvicultural);
      }
    });
  }
  carregarSilvicultural(codigo: number, ) {
    this.situacaoService.buscarPeloCogigoSilvicultural(codigo)
      .then(cadTratamentoSilvicultural => {
        this.cadTratamentoSilviculturalSalva = cadTratamentoSilvicultural;
      })
      .catch(erro => this.errorHandler.handle(erro));
  
  }

  salvar(form: FormControl) {
    if (this.editando) {
      this.confirmarAlterar(form);
    } else {
      this.adicionarTratamentoSilvicultural(form);
    }
  }
}



