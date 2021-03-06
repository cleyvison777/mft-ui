import { MenuService } from './../menu/menu.service';
import { FormControl } from '@angular/forms';
import { CadCategoriaProtecao, empresaSelecionada, MenuEmpresa } from './../core/model';
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
  cdEmp: any;
  cadCategoriaProtecao = new CadCategoriaProtecao;
  empresaSelecionada = new MenuEmpresa();
  filtroCategoria = new CategoriaFiltro();
  @ViewChild('tabela') grid;


  constructor(
    private cadEmpresaService: CadempresaService,
    private menuService: MenuService,
    private categoriaProtecaoService: CategoriaProtecaoService,
    private errorHandler: ErrorHandlerService,
    private toasty: ToastyService,
    private confirmation: ConfirmationService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.carregarEmpresas();
    this.carregarEmpresaSelecionada();
    const codigoCategoriaProtecao = this.route.snapshot.params['codigo'];
    if (codigoCategoriaProtecao) {
      this.carregarCategoriaProtecao(codigoCategoriaProtecao);
    }

  }

  get editando() {
    return Boolean(this.cadCategoriaProtecao.cdCategoriaProtecao);
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
  aoMudarPaginaCategoriaProtecao(event: LazyLoadEvent) {
    const page = event.first / event.rows;
    this.consultaCategoriaProtecao(page);
  }

  adicionarCategoriaProtecao(form: FormControl) {
    this.categoriaProtecaoService.adicionar(this.cadCategoriaProtecao)
     .then(() => {
       this.cadCategoriaProtecao = new CadCategoriaProtecao();
        this.consultaCategoriaProtecao();
         this.toasty.success('Cadastrado realizado com sucesso!');
       })
     .catch(erro => this.errorHandler.handle(erro));
  }

    //exclui o resgitro da tabela
      excluirCategoria(listaCategoriaProtecao: any) {
        this.categoriaProtecaoService.excluir(listaCategoriaProtecao.cdCategoriaProtecao)
         .then(() =>{
           if (this.grid.first === 0) {
            this.consultaCategoriaProtecao();
           } else {
            this.grid.first = 0;
            this.consultaCategoriaProtecao();

           }
           this.toasty.success('Categoria Protecao excluída com sucesso!');
         })
         .catch(erro => this.errorHandler.handle(erro));

      }

      confirmarExclusao(listaCategoriaProtecao: any){
        this.confirmation.confirm({
          message: 'Tem certeza que deseja excluir?',
          accept: () => {
           this.excluirCategoria(listaCategoriaProtecao);
          }
        });
      }

      atualizarCategoria(form: FormControl) {
        this.categoriaProtecaoService.atualizar(this.cadCategoriaProtecao)
         .then(categoriaprotecao => {
           this.cadCategoriaProtecao = categoriaprotecao;
           this.toasty.success('Atualização realizada com sucesso!');
           this.consultaCategoriaProtecao();
           this.router.navigate(['/cadastro-categoria-protecao']);
         })
         .catch(erro => this.errorHandler.handle(erro));
      }
         //confirmação para alterar
      confirmarAlterar(cadCategoriaProtecao: any) {
        this.confirmation.confirm({
          message: 'Tem certeza que deseja alterar?',
          accept: () => {
            this.atualizarCategoria(cadCategoriaProtecao);
          }
        });
      }
      carregarCategoriaProtecao(codigo: number) {
        this.categoriaProtecaoService.buscarPeloCodigoCategoria(codigo)
        .then(categoriaprotecao => {
          this.cadCategoriaProtecao = categoriaprotecao;
        })
        .catch(erro => this.errorHandler.handle(erro));

      }

  carregarEmpresas() {
    return this.cadEmpresaService.listarTodas()
      .then(empresas => {
        this.empresas = empresas.map(c => ({ label: c.cdEmpresa + " - " + c.nmEmpresa, value: c.cdEmpresa }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  salvar(form: FormControl) {
    if (this.editando) {
      this.confirmarAlterar(form);
    } else {
      this.adicionarCategoriaProtecao(form);
    }

  }

  pesquisarEmpresas(cdEmpresa) {
    this.categoriaProtecaoService.pesquisarEmpresa(cdEmpresa)
     .then(empresaSelecionada => this.listaCategoriaProtecao = empresaSelecionada);
  }

  carregarEmpresaSelecionada(){
    return this.menuService.carregarEmpresaSelecionada()
     .then(empresaSelecionada => {
       this.empresaSelecionada.cdEmpresa = empresaSelecionada;
       this.pesquisarEmpresas(this.empresaSelecionada.cdEmpresa);
       this.cadCategoriaProtecao.cdEmpresa.cdEmpresa = this.empresaSelecionada.cdEmpresa

     })
     .catch(erro => this.errorHandler.handle(erro));
  }

}
