import { ToastyService } from 'ng2-toasty';
import { CadempresaService } from './../cadempresa/cadempresa.service';
import { FormControl } from '@angular/forms';
import { CadAmf } from './../core/model';
import { AmfService, CadeAmfFiltro } from './amf.service';
import { Component, OnInit } from '@angular/core';
import { ErrorHandlerService } from '../core/error-handler.service';
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-cadastro-amf',
  templateUrl: './cadastro-amf.component.html',
  styleUrls: ['./cadastro-amf.component.css']
})
export class CadastroAmfComponent implements OnInit {
tatalRegistros = 0;
amf = [];
empresas = [];
filtro = new CadeAmfFiltro();
cadAmf = new CadAmf();


  constructor(
    private amfService: AmfService,
    private cadEmpresaService: CadempresaService,
    private errorHandler: ErrorHandlerService,
    private toasty: ToastyService
    ) { }

  ngOnInit() {
    this.consultar();
  }
  consultar( page = 0) {
    this.carregarEmpresas();
    this.filtro.page = page;
    this.amfService.consultar(this.filtro)
    .then(resultado => {
      this.amf = resultado.amf;
    });
  }

  salvar(form: FormControl) {
    this.amfService.adicionar(this.cadAmf)
    .then(() => {
      form.reset();
      this.cadAmf = new CadAmf();
      this.toasty.success('Cadastrado realizado com sucesso');
    });
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const page = event.first / event.rows;
    this.consultar(page);
  }



  carregarEmpresas() {
    return this.cadEmpresaService.listarTodas()
      .then(empresas => {
        this.empresas = empresas.map(c => ({ label: c.cdEmpresa + " - " + c.nmEmpresa, value: c.cdEmpresa }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

}
