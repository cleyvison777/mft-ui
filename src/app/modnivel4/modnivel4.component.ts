import { Component, OnInit, ViewChild } from '@angular/core';
import { Modnivel1Service } from '../modnivel1/modnivel1.service';
import { Modnivel2Service } from '../modnivel2/modnivel2.service';
import { Modnivel3Service } from '../modnivel3/modnivel3.service';
import { Modnivel4Service, Modnivel4Filtro } from './modnivel4.service';
import { ToastyService } from 'ng2-toasty';
import { ConfirmationService, LazyLoadEvent } from 'primeng/api';
import { ErrorHandlerService } from '../core/error-handler.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { ModNivel4 } from '../core/model';
import { CadempresaService } from '../cadempresa/cadempresa.service';

@Component({
  selector: 'app-modnivel4',
  templateUrl: './modnivel4.component.html',
  styleUrls: ['./modnivel4.component.css']
})
export class Modnivel4Component implements OnInit {

  tatalRegistros = 0;
  filtro = new Modnivel4Filtro();


  modNivel4Salvar = new ModNivel4();

  empresas = [];

  @ViewChild('tabela') grid;

  modnivel1 = [];

  modnivel2_cdNivel1_1 = [];
  modnivel2_cdNivel1_2 = [];
  modnivel2_cdNivel1_3 = [];
  modnivel2_cdNivel1_4 = [];
  modnivel2_cdNivel1_5 = [];
  modnivel2_cdNivel1_6 = [];


  modnivel3_cdNivel1_1_cdNivel2_1 = [];
  modnivel3_cdNivel1_1_cdNivel2_2 = [];
  modnivel3_cdNivel1_1_cdNivel2_3 = [];

  modnivel3_cdNivel1_2_cdNivel2_4 = [];

  modnivel3_cdNivel1_3_cdNivel2_5 = [];
  modnivel3_cdNivel1_3_cdNivel2_6 = [];

  modnivel3_cdNivel1_4_cdNivel2_7 = [];
  modnivel3_cdNivel1_4_cdNivel2_8 = [];

  modnivel3_cdNivel1_5_cdNivel2_9 = [];
  modnivel3_cdNivel1_5_cdNivel2_10 = [];

  modnivel3_cdNivel1_6_cdNivel2_11 = [];
  modnivel3_cdNivel1_6_cdNivel2_12 = [];

  modnivel3 = [];

  modnivel3PreExplo = [];
  modnivel3Explo = [];
  modnivel3PosExplo = [];
  modnivel4 = [];

  constructor(
    private modNivel1Service: Modnivel1Service,
    private modNivel2Service: Modnivel2Service,
    private modNivel3Service: Modnivel3Service,
    private modNivel4Service: Modnivel4Service,
    private cadEmpresaService: CadempresaService,
    private toasty: ToastyService,
    private confirmation: ConfirmationService,
    private errorHandler: ErrorHandlerService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.carregarModNivel1();

    this.carregarModNivel2_cdNivel1_1();
    this.carregarModNivel2_cdNivel1_2();
    this.carregarModNivel2_cdNivel1_3();
    this.carregarModNivel2_cdNivel1_4();
    this.carregarModNivel2_cdNivel1_5();
    this.carregarModNivel2_cdNivel1_6();

    this.carregarModNivel3_cdNivel1_1_cdNivel2_1();
    this.carregarModNivel3_cdNivel1_1_cdNivel2_2();
    this.carregarModNivel3_cdNivel1_1_cdNivel2_3();

    this.carregarModNivel3_cdNivel1_2_cdNivel2_4();

    this.carregarModNivel3_cdNivel1_3_cdNivel2_5();
    this.carregarModNivel3_cdNivel1_3_cdNivel2_6();

    this.carregarModNivel3_cdNivel1_4_cdNivel2_7();
    this.carregarModNivel3_cdNivel1_4_cdNivel2_8();

    this.carregarModNivel3_cdNivel1_5_cdNivel2_9();
    this.carregarModNivel3_cdNivel1_5_cdNivel2_10();

    this.carregarModNivel3_cdNivel1_6_cdNivel2_11();
    this.carregarModNivel3_cdNivel1_6_cdNivel2_12();

    this.carregarModNivel3PreExplo();
    this.carregarModNivel3Explo();
    this.carregarModNivel3PosExplo();

    this.carregarEmpresas();
    //console.log(this.route.snapshot.params['codigo']);

    const codigoModnivel4 = this.route.snapshot.params['codigo'];

    //se houver um id entra no metodo de carregar valores
    if (codigoModnivel4) {
      this.carregarModlocal4(codigoModnivel4);
    }
  }

  get editando() {
    return Boolean(this.modNivel4Salvar.cdNivel4)
  }

  //Metodo para carregar valores
  carregarModlocal4(codigo: number) {
    this.modNivel4Service.buscarPorCodigo(codigo)
      .then(modnivel4 => {
        this.modNivel4Salvar = modnivel4;
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarModnivel4_cdNivel1_1_cdNivel2_1_cdNivel3_1(page = 0) {

    this.filtro.page = page;

    this.modNivel4Service.pesquisarModnivel4_cdNivel1_1_cdNivel2_1_cdNivel3_1(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modnivel4 = resultado.modnivel4;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarModnivel4_cdNivel1_1_cdNivel2_1_cdNivel3_2(page = 0) {

    this.filtro.page = page;

    this.modNivel4Service.pesquisarModnivel4_cdNivel1_1_cdNivel2_1_cdNivel3_2(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modnivel4 = resultado.modnivel4;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarModnivel4_cdNivel1_1_cdNivel2_1_cdNivel3_3(page = 0) {

    this.filtro.page = page;

    this.modNivel4Service.pesquisarModnivel4_cdNivel1_1_cdNivel2_1_cdNivel3_3(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modnivel4 = resultado.modnivel4;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarModnivel4_cdNivel1_1_cdNivel2_1_cdNivel3_4(page = 0) {

    this.filtro.page = page;

    this.modNivel4Service.pesquisarModnivel4_cdNivel1_1_cdNivel2_1_cdNivel3_4(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modnivel4 = resultado.modnivel4;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarModnivel4_cdNivel1_1_cdNivel2_1_cdNivel3_5(page = 0) {

    this.filtro.page = page;

    this.modNivel4Service.pesquisarModnivel4_cdNivel1_1_cdNivel2_1_cdNivel3_5(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modnivel4 = resultado.modnivel4;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarModnivel4_cdNivel1_1_cdNivel2_2_cdNivel3_6(page = 0) {

    this.filtro.page = page;

    this.modNivel4Service.pesquisarModnivel4_cdNivel1_1_cdNivel2_2_cdNivel3_6(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modnivel4 = resultado.modnivel4;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarModnivel4_cdNivel1_1_cdNivel2_2_cdNivel3_7(page = 0) {

    this.filtro.page = page;

    this.modNivel4Service.pesquisarModnivel4_cdNivel1_1_cdNivel2_2_cdNivel3_7(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modnivel4 = resultado.modnivel4;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarModnivel4_cdNivel1_1_cdNivel2_2_cdNivel3_8(page = 0) {

    this.filtro.page = page;

    this.modNivel4Service.pesquisarModnivel4_cdNivel1_1_cdNivel2_2_cdNivel3_8(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modnivel4 = resultado.modnivel4;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarModnivel4_cdNivel1_1_cdNivel2_2_cdNivel3_9(page = 0) {

    this.filtro.page = page;

    this.modNivel4Service.pesquisarModnivel4_cdNivel1_1_cdNivel2_2_cdNivel3_9(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modnivel4 = resultado.modnivel4;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarModnivel4_cdNivel1_1_cdNivel2_3_cdNivel3_10(page = 0) {

    this.filtro.page = page;

    this.modNivel4Service.pesquisarModnivel4_cdNivel1_1_cdNivel2_3_cdNivel3_10(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modnivel4 = resultado.modnivel4;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarModnivel4_cdNivel1_1_cdNivel2_3_cdNivel3_11(page = 0) {

    this.filtro.page = page;

    this.modNivel4Service.pesquisarModnivel4_cdNivel1_1_cdNivel2_3_cdNivel3_11(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modnivel4 = resultado.modnivel4;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarModnivel4_cdNivel1_1_cdNivel2_3_cdNivel3_12(page = 0) {

    this.filtro.page = page;

    this.modNivel4Service.pesquisarModnivel4_cdNivel1_1_cdNivel2_3_cdNivel3_12(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modnivel4 = resultado.modnivel4;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }


  pesquisarModnivel4_cdNivel1_1_cdNivel2_3_cdNivel3_13(page = 0) {

    this.filtro.page = page;

    this.modNivel4Service.pesquisarModnivel4_cdNivel1_1_cdNivel2_3_cdNivel3_13(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modnivel4 = resultado.modnivel4;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }


  pesquisarModnivel4_cdNivel1_2_cdNivel2_4_cdNivel3_14(page = 0) {

    this.filtro.page = page;

    this.modNivel4Service.pesquisarModnivel4_cdNivel1_2_cdNivel2_4_cdNivel3_14(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modnivel4 = resultado.modnivel4;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarModnivel4_cdNivel1_2_cdNivel2_4_cdNivel3_15(page = 0) {

    this.filtro.page = page;

    this.modNivel4Service.pesquisarModnivel4_cdNivel1_2_cdNivel2_4_cdNivel3_15(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modnivel4 = resultado.modnivel4;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarModnivel4_cdNivel1_2_cdNivel2_4_cdNivel3_16(page = 0) {

    this.filtro.page = page;

    this.modNivel4Service.pesquisarModnivel4_cdNivel1_2_cdNivel2_4_cdNivel3_16(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modnivel4 = resultado.modnivel4;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarModnivel4_cdNivel1_2_cdNivel2_4_cdNivel3_17(page = 0) {

    this.filtro.page = page;

    this.modNivel4Service.pesquisarModnivel4_cdNivel1_2_cdNivel2_4_cdNivel3_17(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modnivel4 = resultado.modnivel4;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarModnivel4_cdNivel1_2_cdNivel2_4_cdNivel3_18(page = 0) {

    this.filtro.page = page;

    this.modNivel4Service.pesquisarModnivel4_cdNivel1_2_cdNivel2_4_cdNivel3_18(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modnivel4 = resultado.modnivel4;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarModnivel4_cdNivel1_2_cdNivel2_4_cdNivel3_19(page = 0) {

    this.filtro.page = page;

    this.modNivel4Service.pesquisarModnivel4_cdNivel1_2_cdNivel2_4_cdNivel3_19(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modnivel4 = resultado.modnivel4;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarModnivel4_cdNivel1_2_cdNivel2_4_cdNivel3_20(page = 0) {

    this.filtro.page = page;

    this.modNivel4Service.pesquisarModnivel4_cdNivel1_2_cdNivel2_4_cdNivel3_20(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modnivel4 = resultado.modnivel4;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarModnivel4_cdNivel1_2_cdNivel2_4_cdNivel3_21(page = 0) {

    this.filtro.page = page;

    this.modNivel4Service.pesquisarModnivel4_cdNivel1_2_cdNivel2_4_cdNivel3_21(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modnivel4 = resultado.modnivel4;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarModnivel4_cdNivel1_2_cdNivel2_4_cdNivel3_22(page = 0) {

    this.filtro.page = page;

    this.modNivel4Service.pesquisarModnivel4_cdNivel1_2_cdNivel2_4_cdNivel3_22(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modnivel4 = resultado.modnivel4;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarModnivel4_cdNivel1_2_cdNivel2_4_cdNivel3_23(page = 0) {

    this.filtro.page = page;

    this.modNivel4Service.pesquisarModnivel4_cdNivel1_2_cdNivel2_4_cdNivel3_23(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modnivel4 = resultado.modnivel4;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarModnivel4_cdNivel1_2_cdNivel2_4_cdNivel3_24(page = 0) {

    this.filtro.page = page;

    this.modNivel4Service.pesquisarModnivel4_cdNivel1_2_cdNivel2_4_cdNivel3_24(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modnivel4 = resultado.modnivel4;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarModnivel4_cdNivel1_2_cdNivel2_4_cdNivel3_25(page = 0) {

    this.filtro.page = page;

    this.modNivel4Service.pesquisarModnivel4_cdNivel1_2_cdNivel2_4_cdNivel3_25(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modnivel4 = resultado.modnivel4;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarModnivel4_cdNivel1_2_cdNivel2_4_cdNivel3_26(page = 0) {

    this.filtro.page = page;

    this.modNivel4Service.pesquisarModnivel4_cdNivel1_2_cdNivel2_4_cdNivel3_26(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modnivel4 = resultado.modnivel4;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }


  pesquisarModnivel4_cdNivel1_3_cdNivel2_5_cdNivel3_27(page = 0) {

    this.filtro.page = page;

    this.modNivel4Service.pesquisarModnivel4_cdNivel1_3_cdNivel2_5_cdNivel3_27(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modnivel4 = resultado.modnivel4;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarModnivel4_cdNivel1_3_cdNivel2_5_cdNivel3_28(page = 0) {

    this.filtro.page = page;

    this.modNivel4Service.pesquisarModnivel4_cdNivel1_3_cdNivel2_5_cdNivel3_28(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modnivel4 = resultado.modnivel4;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarModnivel4_cdNivel1_3_cdNivel2_5_cdNivel3_29(page = 0) {

    this.filtro.page = page;

    this.modNivel4Service.pesquisarModnivel4_cdNivel1_3_cdNivel2_5_cdNivel3_29(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modnivel4 = resultado.modnivel4;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarModnivel4_cdNivel1_3_cdNivel2_5_cdNivel3_30(page = 0) {

    this.filtro.page = page;

    this.modNivel4Service.pesquisarModnivel4_cdNivel1_3_cdNivel2_5_cdNivel3_30(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modnivel4 = resultado.modnivel4;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarModnivel4_cdNivel1_3_cdNivel2_6_cdNivel3_31(page = 0) {

    this.filtro.page = page;

    this.modNivel4Service.pesquisarModnivel4_cdNivel1_3_cdNivel2_6_cdNivel3_31(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modnivel4 = resultado.modnivel4;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarModnivel4_cdNivel1_3_cdNivel2_6_cdNivel3_32(page = 0) {

    this.filtro.page = page;

    this.modNivel4Service.pesquisarModnivel4_cdNivel1_3_cdNivel2_6_cdNivel3_32(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modnivel4 = resultado.modnivel4;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarModnivel4_cdNivel1_4_cdNivel2_7_cdNivel3_33(page = 0) {

    this.filtro.page = page;

    this.modNivel4Service.pesquisarModnivel4_cdNivel1_4_cdNivel2_7_cdNivel3_33(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modnivel4 = resultado.modnivel4;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarModnivel4_cdNivel1_4_cdNivel2_7_cdNivel3_34(page = 0) {

    this.filtro.page = page;

    this.modNivel4Service.pesquisarModnivel4_cdNivel1_4_cdNivel2_7_cdNivel3_34(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modnivel4 = resultado.modnivel4;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarModnivel4_cdNivel1_4_cdNivel2_8_cdNivel3_35(page = 0) {

    this.filtro.page = page;

    this.modNivel4Service.pesquisarModnivel4_cdNivel1_4_cdNivel2_8_cdNivel3_35(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modnivel4 = resultado.modnivel4;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarModnivel4_cdNivel1_4_cdNivel2_8_cdNivel3_36(page = 0) {

    this.filtro.page = page;

    this.modNivel4Service.pesquisarModnivel4_cdNivel1_4_cdNivel2_8_cdNivel3_36(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modnivel4 = resultado.modnivel4;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarModnivel4_cdNivel1_4_cdNivel2_8_cdNivel3_37(page = 0) {

    this.filtro.page = page;

    this.modNivel4Service.pesquisarModnivel4_cdNivel1_4_cdNivel2_8_cdNivel3_37(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modnivel4 = resultado.modnivel4;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarModnivel4_cdNivel1_4_cdNivel2_8_cdNivel3_38(page = 0) {

    this.filtro.page = page;

    this.modNivel4Service.pesquisarModnivel4_cdNivel1_4_cdNivel2_8_cdNivel3_38(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modnivel4 = resultado.modnivel4;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarModnivel4_cdNivel1_5_cdNivel2_9_cdNivel3_39(page = 0) {

    this.filtro.page = page;

    this.modNivel4Service.pesquisarModnivel4_cdNivel1_5_cdNivel2_9_cdNivel3_39(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modnivel4 = resultado.modnivel4;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarModnivel4_cdNivel1_5_cdNivel2_9_cdNivel3_40(page = 0) {

    this.filtro.page = page;

    this.modNivel4Service.pesquisarModnivel4_cdNivel1_5_cdNivel2_9_cdNivel3_40(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modnivel4 = resultado.modnivel4;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarModnivel4_cdNivel1_5_cdNivel2_10_cdNivel3_41(page = 0) {

    this.filtro.page = page;

    this.modNivel4Service.pesquisarModnivel4_cdNivel1_5_cdNivel2_10_cdNivel3_41(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modnivel4 = resultado.modnivel4;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarModnivel4_cdNivel1_5_cdNivel2_10_cdNivel3_42(page = 0) {

    this.filtro.page = page;

    this.modNivel4Service.pesquisarModnivel4_cdNivel1_5_cdNivel2_10_cdNivel3_42(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modnivel4 = resultado.modnivel4;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarModnivel4_cdNivel1_6_cdNivel2_11_cdNivel3_43(page = 0) {

    this.filtro.page = page;

    this.modNivel4Service.pesquisarModnivel4_cdNivel1_6_cdNivel2_11_cdNivel3_43(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modnivel4 = resultado.modnivel4;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarModnivel4_cdNivel1_6_cdNivel2_12_cdNivel3_44(page = 0) {

    this.filtro.page = page;

    this.modNivel4Service.pesquisarModnivel4_cdNivel1_6_cdNivel2_12_cdNivel3_44(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modnivel4 = resultado.modnivel4;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarDelimitacaoIdenti(page = 0) {

    this.filtro.page = page;

    this.modNivel4Service.pesquisarDelimitacaoIdenti(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modnivel4 = resultado.modnivel4;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }
  pesquisarInventarioFlorestal(page = 0) {

    this.filtro.page = page;

    this.modNivel4Service.pesquisarInventarioFlorestal(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modnivel4 = resultado.modnivel4;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarCorteDeCipos(page = 0) {

    this.filtro.page = page;

    this.modNivel4Service.pesquisarCorteDeCipos(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modnivel4 = resultado.modnivel4;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarInstalacaoInfra(page = 0) {

    this.filtro.page = page;

    this.modNivel4Service.pesquisarInstalacaoInfra(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modnivel4 = resultado.modnivel4;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarDerruba(page = 0) {

    this.filtro.page = page;

    this.modNivel4Service.pesquisarDerruba(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modnivel4 = resultado.modnivel4;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarArraste(page = 0) {

    this.filtro.page = page;

    this.modNivel4Service.pesquisarArraste(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modnivel4 = resultado.modnivel4;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarOperacaoDePatio(page = 0) {

    this.filtro.page = page;

    this.modNivel4Service.pesquisarOperacaoDePatio(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modnivel4 = resultado.modnivel4;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarTransporte(page = 0) {

    this.filtro.page = page;

    this.modNivel4Service.pesquisarTransporte(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modnivel4 = resultado.modnivel4;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarSilviculturaPosExplo(page = 0) {

    this.filtro.page = page;

    this.modNivel4Service.pesquisarSilviculturaPosExplo(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modnivel4 = resultado.modnivel4;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarProtecaoFlorestal(page = 0) {

    this.filtro.page = page;

    this.modNivel4Service.pesquisarProtecaoFlorestal(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modnivel4 = resultado.modnivel4;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarSegurancaNoTrabalho(page = 0) {

    this.filtro.page = page;

    this.modNivel4Service.pesquisarSegurancaNoTrabalho(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modnivel4 = resultado.modnivel4;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }
  pesquisarInfraEstruturaAcampamento(page = 0) {

    this.filtro.page = page;

    this.modNivel4Service.pesquisarInfraEstruturaAcampamento(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modnivel4 = resultado.modnivel4;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const page = event.first / event.rows;

  }

  confirmarExclusao(modnivel4: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(modnivel4);
      }
    });
  }

  excluir(modnivel4: any) {

    this.modNivel4Service.excluir(modnivel4.cdNivel4)
      .then(() => {
        if (this.grid.first === 0) {
          //this.pesquisar();
        } else {
          this.grid.first = 0;
          // this.pesquisar();
        }
        this.toasty.success('Etapa excluída com sucesso!');
      })
      .catch(erro => this.errorHandler.handle(erro));

  }
  salvar(modnivel4: any) {

    this.confirmation.confirm({
      message: 'Tem certeza que deseja salvar?',
      accept: () => {
        this.adicionarModNivel4(modnivel4);
      }
    });

  }



  adicionarModNivel4(form: FormControl) {
    this.modNivel4Service.adicionar(this.modNivel4Salvar)
      .then(() => {
        this.toasty.success("Local de Avaliação cadastrada com sucesso!");
        form.reset();
        this.modNivel4Salvar = new ModNivel4();
        //this.pesquisar();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }



  carregarModNivel1() {
    return this.modNivel1Service.listarTodas()
      .then(modnivel1 => {
        this.modnivel1 = modnivel1.map(c => ({ label: c.cdNivel1 + " - " + c.nmNivel1, value: c.cdNivel1 }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  carregarModNivel2_cdNivel1_1() {
    return this.modNivel2Service.listarTodascdNivel1_1()
      .then(modnivel2 => {
        this.modnivel2_cdNivel1_1 = modnivel2.map(c => ({ label: c.cdNivel2 + " - " + c.nmNivel2, value: c.cdNivel2 }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }


  carregarModNivel2_cdNivel1_2() {
    return this.modNivel2Service.listarTodascdNivel1_2()
      .then(modnivel2 => {
        this.modnivel2_cdNivel1_2 = modnivel2.map(c => ({ label: c.cdNivel2 + " - " + c.nmNivel2, value: c.cdNivel2 }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  carregarModNivel2_cdNivel1_3() {
    return this.modNivel2Service.listarTodascdNivel1_3()
      .then(modnivel2 => {
        this.modnivel2_cdNivel1_3 = modnivel2.map(c => ({ label: c.cdNivel2 + " - " + c.nmNivel2, value: c.cdNivel2 }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }
  carregarModNivel2_cdNivel1_4() {
    return this.modNivel2Service.listarTodascdNivel1_4()
      .then(modnivel2 => {
        this.modnivel2_cdNivel1_4 = modnivel2.map(c => ({ label: c.cdNivel2 + " - " + c.nmNivel2, value: c.cdNivel2 }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }
  carregarModNivel2_cdNivel1_5() {
    return this.modNivel2Service.listarTodascdNivel1_5()
      .then(modnivel2 => {
        this.modnivel2_cdNivel1_5 = modnivel2.map(c => ({ label: c.cdNivel2 + " - " + c.nmNivel2, value: c.cdNivel2 }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }
  carregarModNivel2_cdNivel1_6() {
    return this.modNivel2Service.listarTodascdNivel1_6()
      .then(modnivel2 => {
        this.modnivel2_cdNivel1_6 = modnivel2.map(c => ({ label: c.cdNivel2 + " - " + c.nmNivel2, value: c.cdNivel2 }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }
  carregarModNivel3_cdNivel1_1_cdNivel2_1() {
    return this.modNivel3Service.listarTodas_cdNivel1_1_cdNivel2_1()
      .then(modnivel3 => {
        this.modnivel3_cdNivel1_1_cdNivel2_1 = modnivel3.map(c => ({ label: c.cdNivel3 + " - " + c.nmNivel3, value: c.cdNivel3 }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  carregarModNivel3_cdNivel1_1_cdNivel2_2() {
    return this.modNivel3Service.listarTodas_cdNivel1_1_cdNivel2_2()
      .then(modnivel3 => {
        this.modnivel3_cdNivel1_1_cdNivel2_2 = modnivel3.map(c => ({ label: c.cdNivel3 + " - " + c.nmNivel3, value: c.cdNivel3 }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  carregarModNivel3_cdNivel1_1_cdNivel2_3() {
    return this.modNivel3Service.listarTodas_cdNivel1_1_cdNivel2_3()
      .then(modnivel3 => {
        this.modnivel3_cdNivel1_1_cdNivel2_3 = modnivel3.map(c => ({ label: c.cdNivel3 + " - " + c.nmNivel3, value: c.cdNivel3 }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  carregarModNivel3_cdNivel1_2_cdNivel2_4() {
    return this.modNivel3Service.listarTodas_cdNivel1_2_cdNivel2_4()
      .then(modnivel3 => {
        this.modnivel3_cdNivel1_2_cdNivel2_4 = modnivel3.map(c => ({ label: c.cdNivel3 + " - " + c.nmNivel3, value: c.cdNivel3 }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  carregarModNivel3_cdNivel1_3_cdNivel2_5() {
    return this.modNivel3Service.listarTodas_cdNivel1_3_cdNivel2_5()
      .then(modnivel3 => {
        this.modnivel3_cdNivel1_3_cdNivel2_5 = modnivel3.map(c => ({ label: c.cdNivel3 + " - " + c.nmNivel3, value: c.cdNivel3 }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  carregarModNivel3_cdNivel1_3_cdNivel2_6() {
    return this.modNivel3Service.listarTodas_cdNivel1_3_cdNivel2_6()
      .then(modnivel3 => {
        this.modnivel3_cdNivel1_3_cdNivel2_6 = modnivel3.map(c => ({ label: c.cdNivel3 + " - " + c.nmNivel3, value: c.cdNivel3 }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  carregarModNivel3_cdNivel1_4_cdNivel2_7() {
    return this.modNivel3Service.listarTodas_cdNivel1_4_cdNivel2_7()
      .then(modnivel3 => {
        this.modnivel3_cdNivel1_4_cdNivel2_7 = modnivel3.map(c => ({ label: c.cdNivel3 + " - " + c.nmNivel3, value: c.cdNivel3 }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  carregarModNivel3_cdNivel1_4_cdNivel2_8() {
    return this.modNivel3Service.listarTodas_cdNivel1_4_cdNivel2_8()
      .then(modnivel3 => {
        this.modnivel3_cdNivel1_4_cdNivel2_8 = modnivel3.map(c => ({ label: c.cdNivel3 + " - " + c.nmNivel3, value: c.cdNivel3 }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  carregarModNivel3_cdNivel1_5_cdNivel2_9() {
    return this.modNivel3Service.listarTodas_cdNivel1_5_cdNivel2_9()
      .then(modnivel3 => {
        this.modnivel3_cdNivel1_5_cdNivel2_9 = modnivel3.map(c => ({ label: c.cdNivel3 + " - " + c.nmNivel3, value: c.cdNivel3 }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  carregarModNivel3_cdNivel1_5_cdNivel2_10() {
    return this.modNivel3Service.listarTodas_cdNivel1_5_cdNivel2_10()
      .then(modnivel3 => {
        this.modnivel3_cdNivel1_5_cdNivel2_10 = modnivel3.map(c => ({ label: c.cdNivel3 + " - " + c.nmNivel3, value: c.cdNivel3 }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  carregarModNivel3_cdNivel1_6_cdNivel2_11() {
    return this.modNivel3Service.listarTodas_cdNivel1_6_cdNivel2_11()
      .then(modnivel3 => {
        this.modnivel3_cdNivel1_6_cdNivel2_11 = modnivel3.map(c => ({ label: c.cdNivel3 + " - " + c.nmNivel3, value: c.cdNivel3 }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  carregarModNivel3_cdNivel1_6_cdNivel2_12() {
    return this.modNivel3Service.listarTodas_cdNivel1_6_cdNivel2_12()
      .then(modnivel3 => {
        this.modnivel3_cdNivel1_6_cdNivel2_12 = modnivel3.map(c => ({ label: c.cdNivel3 + " - " + c.nmNivel3, value: c.cdNivel3 }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  carregarModNivel3PreExplo() {
    return this.modNivel3Service.listarTodasPreExplo()
      .then(modnivel3 => {
        this.modnivel3PreExplo = modnivel3.map(c => ({ label: c.cdNivel3 + " - " + c.nmNivel3, value: c.cdNivel3 }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }
  carregarModNivel3Explo() {
    return this.modNivel3Service.listarTodasExplo()
      .then(modnivel3 => {
        this.modnivel3Explo = modnivel3.map(c => ({ label: c.cdNivel3 + " - " + c.nmNivel3, value: c.cdNivel3 }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }
  carregarModNivel3PosExplo() {
    return this.modNivel3Service.listarTodasPosExplo()
      .then(modnivel3 => {
        this.modnivel3PosExplo = modnivel3.map(c => ({ label: c.cdNivel3 + " - " + c.nmNivel3, value: c.cdNivel3 }));
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
