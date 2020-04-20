import { ActivatedRoute, Router } from '@angular/router';
import { ListaEspecieService } from './../lista-especie/lista-especie.service';
import { ConfirmationService } from 'primeng/primeng';
import { ToastyService } from 'ng2-toasty';
import { CadempresaService } from './../cadempresa/cadempresa.service';
import { FormControl } from '@angular/forms';
import { CadAmf, CadListaEspecie } from './../core/model';
import { AmfService, CadeAmfFiltro} from './amf.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ErrorHandlerService } from '../core/error-handler.service';
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-cadastro-amf',
  templateUrl: './cadastro-amf.component.html',
  styleUrls: ['./cadastro-amf.component.css']
})
export class CadastroAmfComponent implements OnInit {
totalRegistrosAMF = 0;
amf = [];
empresas = [];
especies = [];
filtro = new CadeAmfFiltro();
cadAmf = new CadAmf();

@ViewChild('tabela') grid;


  constructor(
    private amfService: AmfService,
    private cadEmpresaService: CadempresaService,
    private listaEspecieService: ListaEspecieService,
    private errorHandler: ErrorHandlerService,
    private toasty: ToastyService,
    private confirmation: ConfirmationService,
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit() {
    this.carregarEmpresas();
    this.carregarListaEpecie();
    this.cadAmf.lgMudaContada = false;
    this.cadAmf.lgPalmeiraContada = false;
    
    const codigoAmf = this.route.snapshot.params['codigo'];
    //se houver um id entra no metodo de carregar valores
    if (codigoAmf) {
       this.carregarAmf(codigoAmf);
       
    }

  }
   //metodo para identificar se esta atualizando
  get editando() {
    return Boolean(this.cadAmf.cdarea);
  }
  //Faz a consulta na tabela
  consultar(page = 0) {
    this.filtro.page = page;
    //chama aconsulta amfservice
    this.amfService.consultar(this.filtro)
      .then(resultado => {
        this.totalRegistrosAMF = resultado.total;
        this.amf = resultado.amf;
      })
      .catch(erro => this.errorHandler.handle(erro));
    }
  //verifica se e uma atualizção ou um novo cadastro
    salvar(form: FormControl) {
       if (this.editando) {
         this.confirmarAlterar(form);
       } else {
     this.adicionarAmf(form);
       }

    }
  //chama o metodo adicionar(amfservice)
  adicionarAmf(form: FormControl) {
    this.amfService.adicionar(this.cadAmf)
    .then(() => {
      form.reset();
      this.cadAmf = new CadAmf();
      this.consultar();
      this.toasty.success('Cadastrado realizado com sucesso!');
    })
    .catch(erro => this.errorHandler.handle(erro));
  }

  atualizarAmf(form: FormControl) {
    this.amfService.atualizar(this.cadAmf)
    .then(amf => {
      this.cadAmf = amf;
      this.toasty.success('Atualização realizada com sucesso!');
      this.consultar();
      //REDIRECIONA PARA O ADICIONAR O AMF
      this.router.navigate(['/cadastro-amf']);

    })
    .catch(erro => this.errorHandler.handle(erro));
  }
  //confirmação para alterar
  confirmarAlterar(amf: any) {
    this.confirmation.confirm( {
      message: 'Tem certeza que deseja alterar?',
      accept: () => {
        this.atualizarAmf(amf);
      }
    });
  }

  aoMudarPaginaAMF(event: LazyLoadEvent) {
    const page = event.first / event.rows;
    this.consultar(page);
  }

  confirmarExclusao(amf: any) {
    this.confirmation.confirm( {
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(amf);
      }
    });
  }

  excluir(amf: any) {
  this.amfService.excluir(amf.cdarea)
  .then(() => {
    if (this.grid.first === 0) {
      this.consultar();
    } else {
      this.grid.first = 0;
      this.consultar();
    }
    this.toasty.success('Area excluída com sucesso!');
  })
  .catch(erro => this.errorHandler.handle(erro));

}

//Metodo para carregar valores
carregarAmf(codigo: number) {
 this.amfService.buscarPeloCodigo(codigo)
 .then(amf => {
  this.cadAmf = amf;
 })
.catch(erro => this.errorHandler.handle(erro));
}


carregarListaEpecie() {
return this.listaEspecieService.listarTodasEspecie()
.then( especies => {
  this.especies = especies.map(e => ({label: e.cdListaEsp + " - " + e.nmListaEsp, value: e.cdListaEsp}));
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

}
