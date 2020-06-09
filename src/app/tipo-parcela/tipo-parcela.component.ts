import { FormControl } from '@angular/forms';
import { LazyLoadEvent } from './../../primeng/components/common/lazyloadevent.d';
import { TipoParcelaFiltro, TipoParcelaService } from './tipo-parcela.service';
import { CadTipoParcela } from './../core/model';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService } from 'primeng/primeng';
import { ToastyService } from 'ng2-toasty';
import { CadempresaService } from './../cadempresa/cadempresa.service';
import { ErrorHandlerService } from './../core/error-handler.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tipo-parcela',
  templateUrl: './tipo-parcela.component.html',
  styleUrls: ['./tipo-parcela.component.css']
})
export class TipoParcelaComponent implements OnInit {

  totalRegistrosTipoParcela = 0;
  listaTipoparcela = [];
  empresas = [];
  filtro = new TipoParcelaFiltro;
  cadTipoParcelaSalva = new CadTipoParcela;
  @ViewChild('tabela') grid;


  constructor(
    private tipoParcelaService: TipoParcelaService,
    private errorHandler: ErrorHandlerService,
    private cadEmpresaService: CadempresaService,
    private toasty: ToastyService,
    private confirmation: ConfirmationService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
   
    const codigoTipoParcela = this.route.snapshot.params['codigo'];
     //se houver um id entra no metodo de carregar valores
    if(codigoTipoParcela) {
      this.carregarTipoParcela(codigoTipoParcela);
    }

    this.carregarEmpresas();
    this.cadTipoParcelaSalva.lgEstudoCrescimento = false;
  }
  get editando(){
    return Boolean(this.cadTipoParcelaSalva.cdTipoParcela);
  }
  //consulta tipo parceça
  consultarTipoParcela(page = 0) {
    this.filtro.page = page;
    this.tipoParcelaService.pesquisaTipoParcela(this.filtro)
     .then(resultado => {
       this.totalRegistrosTipoParcela = resultado.total;
       this.listaTipoparcela = resultado.listaTipoparcela;
     })
     .catch(erro => this.errorHandler.handle(erro));

  }
   //paginação
  aoMudarPaginaTipoParcela(event: LazyLoadEvent) {
    const page = event.first / event.rows;
    this.consultarTipoParcela(page);
     }
 //lista os dados no dropdonw emprasa
     carregarEmpresas() {
      return this.cadEmpresaService.listarTodas()
        .then(empresas => {
          this.empresas = empresas.map(c => ({ label: c.cdEmpresa + " - " + c.nmEmpresa, value: c.cdEmpresa }));
        })
        .catch(erro => this.errorHandler.handle(erro));
    }
   // adiciona tipo parcela
    adicionandoTipoParcela(form: FormControl) {
      this.tipoParcelaService.adicionarTipoParcela(this.cadTipoParcelaSalva)
       .then(() => {
        this.toasty.success("Tipo Parcela cadastrada com sucesso!");
        form.reset();
        this.cadTipoParcelaSalva = new CadTipoParcela();
        this.consultarTipoParcela();
       })
       .catch(erro => this.errorHandler.handle(erro));
    }
     //exclui tipo parcela
    excluindoTipoParcela(listaTipoparcela: any){
      this.tipoParcelaService.excluirTipoParcela(listaTipoparcela.cdTipoParcela)
      .then(()=>{
        if(this.grid.first === 0){
          this.consultarTipoParcela();
        } else{
          this.grid.first = 0;
          this.consultarTipoParcela();
        }
        this.toasty.success('Familia excluída com sucesso!');
      })
      .catch(erro => this.errorHandler.handle(erro));
    }
    confirmarExclusaoTipoParcela(listaTipoparcela: any){
      this.confirmation.confirm({
        message: 'Tem certeza que deseja excluir?',
        accept: () => {
          this.excluindoTipoParcela(listaTipoparcela);
        }
      });
    }
    salvar(form: FormControl) {
      if(this.editando) {
        this.confirmarAlterarTipoParcela(form);

      } else {
        this.adicionandoTipoParcela(form);
      }
    }
     //atualiza tipo parcela 
    atualizarTipoparcela(form: FormControl) {
      this.tipoParcelaService.atualizar(this.cadTipoParcelaSalva)
       .then( cadTipoParcela => {
         this.cadTipoParcelaSalva = cadTipoParcela;
         this.toasty.success('Familia atualizada com sucesso!');
           this.consultarTipoParcela();
           this.router.navigate(['/tipo-parcela']);
       })
       .catch(erro => this.errorHandler.handle(erro));
    }
    //confirma a alteração 
    confirmarAlterarTipoParcela(cadTipoParcela: any) {
      this.confirmation.confirm({
        message: 'Tem certeza que deseja alterar?',
         accept: () => {
           this.atualizarTipoparcela(cadTipoParcela);
         }
      });
    }

    //Carregar Valores
    carregarTipoParcela(codigo: number) {
      this.tipoParcelaService.buscarTipoParcelaPeloCodigo(codigo)
       .then(cadastrotipoparcela => {
         this.cadTipoParcelaSalva = cadastrotipoparcela;
       })
       .catch(erro => this.errorHandler.handle(erro));

    }
}

