import { CadempresaService } from './../cadempresa/cadempresa.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CadmaterialFiltro, CadmaterialService } from './cadmaterial.service';
import { Cadmaterial } from '../core/model';
import { LazyLoadEvent } from 'src/primeng/api';
import { ToastyService } from 'ng2-toasty/src/toasty.service';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { FormControl } from '@angular/forms';
import { ErrorHandlerService } from '../core/error-handler.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadmaterial',
  templateUrl: './cadmaterial.component.html',
  styleUrls: ['./cadmaterial.component.css']
})
export class CadmaterialComponent {

  tatalRegistros = 0;
  filtro = new CadmaterialFiltro();
  nmmaterial: string;

  materialSalvar = new Cadmaterial();
  empresas = [];
  @ViewChild('tabela') grid;

  cadmaterial = []

  constructor(
    private cadmaterialService: CadmaterialService,
    private cadEmpresaService: CadempresaService,
    private toasty: ToastyService,
    private confirmation: ConfirmationService,
    private errorHandler: ErrorHandlerService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    //console.log(this.route.snapshot.params['codigo']);
    this.carregarEmpresas();
    const codigoMaterial = this.route.snapshot.params['codigo'];

    //se houver um id entra no metodo de carregar valores
    if (codigoMaterial) {
      this.carregarMaterial(codigoMaterial);
    }
  }

  get editando() {
    return Boolean(this.materialSalvar.cdMaterial)
  }

  //Metodo para carregar valores
  carregarMaterial(codigo: number) {
    this.cadmaterialService.buscarPorCodigo(codigo)
      .then(meterial => {
        this.materialSalvar = meterial;
      })
      .catch(erro => this.errorHandler.handle(erro));
  }
  pesquisar(page = 0) {

    this.filtro.page = page;

    this.cadmaterialService.pesquisar(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.cadmaterial = resultado.cadmaterial;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }
  aoMudarPagina(event: LazyLoadEvent) {
    const page = event.first / event.rows;
    this.pesquisar(page);
  }

  confirmarExclusao(material: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(material);
      }
    });
  }

  excluir(material: any) {

    this.cadmaterialService.excluir(material.cdMaterial)
      .then(() => {
        if (this.grid.first === 0) {
          this.pesquisar();
        } else {
          this.grid.first = 0;
          this.pesquisar();
        }
        this.toasty.success('Material excluído com sucesso!');
      })
      .catch(erro => this.errorHandler.handle(erro));

  }

  salvar(form: FormControl) {

    if (this.editando) {
      this.confirmarAlterar(form);
    } else {
      this.confirmarSalvar(form);
    }

  }


  confirmarSalvar(material: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja salvar?',
      accept: () => {
        this.adicionarMaterial(material);
      }
    });
  }

  confirmarAlterar(material: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja alterar?',
      accept: () => {
        this.atualizarMaterial(material);
      }
    });
  }
  adicionarMaterial(form: FormControl) {
    this.cadmaterialService.adicionar(this.materialSalvar)
      .then(() => {
        this.toasty.success("Material cadastrado com sucesso!");
        form.reset();
        this.materialSalvar = new Cadmaterial();
        this.pesquisar();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  atualizarMaterial(form: FormControl) {
    this.cadmaterialService.atualizar(this.materialSalvar)
      .then(material => {
        this.materialSalvar = material;

        this.toasty.success('Material alterado com sucesso!');

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
