import { ConfirmationService } from 'primeng/primeng';
import { ToastyService } from 'ng2-toasty';
import { CadempresaService } from './../cadempresa/cadempresa.service';
import { FormControl } from '@angular/forms';
import { CadAmf } from './../core/model';
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
filtro = new CadeAmfFiltro();
cadAmf = new CadAmf();
@ViewChild('tabela') grid;


  constructor(
    private amfService: AmfService,
    private cadEmpresaService: CadempresaService,
    private errorHandler: ErrorHandlerService,
    private toasty: ToastyService,
    private confirmation: ConfirmationService

    ) { }

  ngOnInit() {

    this.carregarEmpresas();

  }
  
  consultar(page = 0) {

    this.filtro.page = page;

    this.amfService.consultar(this.filtro)
      .then(resultado => {
        this.totalRegistrosAMF = resultado.total;
        this.amf = resultado.amf;
      })
      .catch(erro => this.errorHandler.handle(erro));
    }

  salvar(form: FormControl) {
    this.amfService.adicionar(this.cadAmf)
    .then(() => {
      form.reset();
      this.cadAmf = new CadAmf();
      this.consultar();
      this.toasty.success('Cadastrado realizado com sucesso');
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

  carregarEmpresas() {
    return this.cadEmpresaService.listarTodas()
      .then(empresas => {
        this.empresas = empresas.map(c => ({ label: c.cdEmpresa + " - " + c.nmEmpresa, value: c.cdEmpresa }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

}
