import { CadempresaService } from './../cadempresa/cadempresa.service';
import { FormControl } from '@angular/forms';
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
  empresas = [];
  filtro = new GrupoEcologicoFiltro();
  cadGrupoEcologico = new CadGrupoEcologico();
  @ViewChild('tabela') grid;

  constructor(
    private cadEmpresaService: CadempresaService,
    private grupoEcologicoService: GrupoEcologicoService,
    private errorHandler: ErrorHandlerService,
    private toasty: ToastyService,
    private confirmation: ConfirmationService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.carregarEmpresas();
     //se houver um id entra no metodo de carregar valores
    const codigoGrupoEcologico = this.route.snapshot.params['codigo'];
       if(codigoGrupoEcologico) {
         this.carregarGrupoEcologico(codigoGrupoEcologico);
       }

  }
  get editando() {
    return Boolean(this.cadGrupoEcologico.cdGrupoEcologico);
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

  adicionarGrupoEcologico(form: FormControl) {
    this.grupoEcologicoService.adicionar(this.cadGrupoEcologico)
      .then(() => {
        this.cadGrupoEcologico = new CadGrupoEcologico();
         this.consultarGrupoEcologico();
         this.toasty.success('Cadastrado realizado com sucesso!');
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
    
  excluir(listaGrupoEcologico: any) {
    this.grupoEcologicoService.excluir(listaGrupoEcologico.cdGrupoEcologico)
    .then(() => {
      if(this.grid.first === 0) {
        this.consultarGrupoEcologico();
      } else {
        this.grid.first = 0;
        this.consultarGrupoEcologico();
      }
      this.toasty.success('Genero excluída com sucesso!');
    })
    .catch(erro => this.errorHandler.handle(erro));
  }

  confirmarExclusao(listaGrupoEcologico: any){
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(listaGrupoEcologico);
      }
    });
  }

   atualizarGrupo(form: FormControl) {
     this.grupoEcologicoService.atualizar(this.cadGrupoEcologico)
    .then(grupoecologico => {
          this.cadGrupoEcologico = grupoecologico;
          this.toasty.success('Atualização realizada com sucesso!');
          this.consultarGrupoEcologico();
          this.router.navigate(['/cadastro-grupo-ecologico']);
        })
        .catch(erro => this.errorHandler.handle(erro));

   }

   //confirmação para alterar
      confirmarAlterar(cadGrupoEcologico: any) {
        this.confirmation.confirm({
          message: 'Tem certeza que deseja alterar?',
          accept: () => {
            this.atualizarGrupo(cadGrupoEcologico);
          }
        });
      }
     
      carregarGrupoEcologico(cadigo: number){
        this.grupoEcologicoService.buscarPeloCodigoGrupoEcologico(cadigo)
         .then( grupoecologico => {
           this.cadGrupoEcologico = grupoecologico;
         })
         .catch(erro => this.errorHandler.handle(erro));

      }

      salvar(form: FormControl) {
        if (this.editando) {
          this.confirmarAlterar(form);
        } else {
          this.adicionarGrupoEcologico(form);
        }
      }
}