import { Verificador_m, Verificador_Local_m, Cadtipodemetodo } from './../core/model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CadtipodeverificadorService } from './../cadtipodeverificador/cadtipodeverificador.service';

import { FormControl } from '@angular/forms';
import { ErrorHandlerService } from '../core/error-handler.service';

import { ActivatedRoute } from '@angular/router';
import { ToastyService } from 'ng2-toasty/src/toasty.service';
import { CadverificadorLocalFiltro, AssociarverificadorService } from './associarverificador.service';
import { VerificadorMService } from '../verificador-m/verificador-m.service';
import { CadtipodemetodoService } from '../cadtipodemetodo/cadtipodemetodo.service';
import { CadamostragemService } from '../cadamostragem/cadamostragem.service';
import { CadfrequenciaService } from '../cadfrequencia/cadfrequencia.service';
import { Modlocal1Service } from '../modlocal1/modlocal1.service';
import { Modlocal2Service } from '../modlocal2/modlocal2.service';
import { UnidadelocalsublocalService } from '../unidadelocalsublocal/unidadelocalsublocal.service';
import { CadmaterialService } from '../cadmaterial/cadmaterial.service';

@Component({
  selector: 'app-associarverificador',
  templateUrl: './associarverificador.component.html',
  styleUrls: ['./associarverificador.component.css']
})
export class AssociarverificadorComponent implements OnInit {

  verificadorlocalm = [];
  verificadorm = [];
  cadtipodeverificador = [];
  cadtipodemetodo = [];
  cadamostragem = [];
  cadfrequencia = [];
  modlocal1 = [];
  modlocalFOD = [];
  modlocalFOA = [];
  modlocalPEO = [];
  modlocalPATRANS = [];
  modlocalINFRA = [];
  modlocalMON = [];
  modlocalACAM = [];
  modlocalESCRI = [];
  modlocalENTOR = [];
  modlocal3_cdLocal1_1_cdLocal2_1 = [];
  modlocal3_cdLocal1_1_cdLocal2_2 = [];
  modlocal3_cdLocal1_1_cdLocal2_3 = [];

  modlocal3_cdLocal1_2_cdLocal2_4 = [];
  modlocal3_cdLocal1_2_cdLocal2_5 = [];

  modlocal3_cdLocal1_3_cdLocal2_6 = [];
  modlocal3_cdLocal1_3_cdLocal2_7 = [];
  modlocal3_cdLocal1_3_cdLocal2_8 = [];
  modlocal3_cdLocal1_3_cdLocal2_9 = [];

  modlocal3_cdLocal1_4_cdLocal2_10 = [];
  modlocal3_cdLocal1_4_cdLocal2_11 = [];
  
  modlocal3_cdLocal1_5_cdLocal2_12 = [];
  modlocal3_cdLocal1_5_cdLocal2_13 = [];
  modlocal3_cdLocal1_5_cdLocal2_14 = [];
  modlocal3_cdLocal1_5_cdLocal2_15 = [];

  modlocal3_cdLocal1_6_cdLocal2_16 = [];
  modlocal3_cdLocal1_6_cdLocal2_17 = [];
  modlocal3_cdLocal1_6_cdLocal2_18 = [];

  modlocal3_cdLocal1_7_cdLocal2_19 = [];
  modlocal3_cdLocal1_7_cdLocal2_20 = [];
  modlocal3_cdLocal1_7_cdLocal2_21 = [];

  modlocal3_cdLocal1_8_cdLocal2_22 = [];
  modlocal3_cdLocal1_8_cdLocal2_23 = [];
  modlocal3_cdLocal1_8_cdLocal2_24 = [];

  modlocal3_cdLocal1_9_cdLocal2_25 = [];
  modlocal3_cdLocal1_9_cdLocal2_26 = [];

  cadmaterial = [];
  cadmaterial2 = [];
  cadmaterial3 = [];

  associarVerificadorSalvar = new Verificador_Local_m;


  filtro = new CadverificadorLocalFiltro;

  @ViewChild('tabela') grid;
  constructor(

    private associarverificadorService: AssociarverificadorService,
    private unidadelocalsublocalService: UnidadelocalsublocalService,
    private cadMaterialService: CadmaterialService,
    private verificadorMService: VerificadorMService,
    private toasty: ToastyService,
    private modLocal1Service: Modlocal1Service,
    private modLocal2Service: Modlocal2Service,
    private tipoDeVerificadores: CadtipodeverificadorService,
    private amostragem: CadamostragemService,
    private frequencia: CadfrequenciaService,
    private tipoDeMetodo: CadtipodemetodoService,
    private errorHandler: ErrorHandlerService,
    private route: ActivatedRoute


  ) { }

  ngOnInit() {

    this.carregarTipoDeVerificadores();
    this.carregarTipoDeMetodo();
    this.carregarAmostragem();
    this.carregarFrequencia();
    this.carregarUnidadeDeAvaliacao();
    this.carregarLocalDeAvaliacaoFOD();
    this.carregarLocalDeAvaliacaoFOA();
    this.carregarLocalDeAvaliacaoPEO();
    this.carregarLocalDeAvaliacaoPATRANS();
    this.carregarLocalDeAvaliacaoINFRA();
    this.carregarLocalDeAvaliacaoMON();
    this.carregarLocalDeAvaliacaoACAM();
    this.carregarLocalDeAvaliacaoESCRI();
    this.carregarLocalDeAvaliacaoENTOR();

    this.carregar_modlocal3_cdLocal1_1_cdLocal2_1();
    this.carregar_modlocal3_cdLocal1_1_cdLocal2_2();
    this.carregar_modlocal3_cdLocal1_1_cdLocal2_3();

    this.carregar_modlocal3_cdLocal1_2_cdLocal2_4();
    this.carregar_modlocal3_cdLocal1_2_cdLocal2_5();

    this.carregar_modlocal3_cdLocal1_3_cdLocal2_6();
    this.carregar_modlocal3_cdLocal1_3_cdLocal2_7();
    this.carregar_modlocal3_cdLocal1_3_cdLocal2_8();
    this.carregar_modlocal3_cdLocal1_3_cdLocal2_9();

    this.carregar_modlocal3_cdLocal1_4_cdLocal2_10();
    this.carregar_modlocal3_cdLocal1_4_cdLocal2_11();

    this.carregar_modlocal3_cdLocal1_5_cdLocal2_12();
    this.carregar_modlocal3_cdLocal1_5_cdLocal2_13();
    this.carregar_modlocal3_cdLocal1_5_cdLocal2_14();
    this.carregar_modlocal3_cdLocal1_5_cdLocal2_15();

    this.carregar_modlocal3_cdLocal1_6_cdLocal2_16();
    this.carregar_modlocal3_cdLocal1_6_cdLocal2_17();
    this.carregar_modlocal3_cdLocal1_6_cdLocal2_18();

    this.carregar_modlocal3_cdLocal1_7_cdLocal2_19();
    this.carregar_modlocal3_cdLocal1_7_cdLocal2_20();
    this.carregar_modlocal3_cdLocal1_7_cdLocal2_21();

    this.carregar_modlocal3_cdLocal1_8_cdLocal2_22();
    this.carregar_modlocal3_cdLocal1_8_cdLocal2_23();
    this.carregar_modlocal3_cdLocal1_8_cdLocal2_24();

    this.carregar_modlocal3_cdLocal1_9_cdLocal2_25();
    this.carregar_modlocal3_cdLocal1_9_cdLocal2_26();

    this.carregarMaterial1();
    this.carregarMaterial2();
    this.carregarMaterial3();

    

    // this.pesquisar();
    const codigoVerificadorLocalM = this.route.snapshot.params['codigo'];

    //  se houver um id entra no metodo de carregar valores
    if (codigoVerificadorLocalM) {
      this.carregarVerificadorLocalM(codigoVerificadorLocalM);
    }

  }

  pesquisarMon() {
    this.verificadorMService.pesquisarMon()
      .then(verificadores => this.verificadorm = verificadores);
  }

  pesquisarImp() {

    this.verificadorMService.pesquisarImp()
      .then(verificadores => this.verificadorm = verificadores);
  }

  pesquisarPMFS() {
    this.verificadorMService.pesquisarPMFS()
      .then(verificadores => this.verificadorm = verificadores);
  }

  pesquisarCerti() {
    this.verificadorMService.pesquisarCerti()
      .then(verificadores => this.verificadorm = verificadores);
  }

  pesquisarSuste() {
    this.verificadorMService.pesquisarSuste()
      .then(verificadores => this.verificadorm = verificadores);
  }


   //Metodo para carregar valores
   carregarVerificadorLocalM(codigo: number) {
    this.associarverificadorService.buscarPorCodigo(codigo)
      .then(verificadorlocal => {
        this.associarVerificadorSalvar = verificadorlocal;
      })
      .catch(erro => this.errorHandler.handle(erro));
    }

    carregarTipoDeMetodo() {
      return this.tipoDeMetodo.listarTodas()
        .then(tipoDeMetodo => {
          this.cadtipodemetodo = tipoDeMetodo.map(c => ({ label: c.nmTipoDeMetodo, value: c.cdTipoDeMetodo }));
        })
        .catch(erro => this.errorHandler.handle(erro));
    }

    carregarTipoDeVerificadores() {
      return this.tipoDeVerificadores.listarTodas()
        .then(tipoDeVerificadores => {
          this.cadtipodeverificador = tipoDeVerificadores.map(c => ({ label: c.nmTipoDeVerificador, value: c.cdTipoDeVerificador }));
        })
        .catch(erro => this.errorHandler.handle(erro));
    }

    carregarAmostragem() {
      return this.amostragem.listarTodas()
        .then(amostragem => {
          this.cadamostragem = amostragem.map(c => ({ label: c.nmAmostragem, value: c.cdAmostragem }));
        })
        .catch(erro => this.errorHandler.handle(erro));
    }
    carregarFrequencia() {
      return this.frequencia.listarTodas()
        .then(frequencia => {
          this.cadfrequencia = frequencia.map(c => ({ label: c.nmFrequencia, value: c.cdFrequencia }));
        })
        .catch(erro => this.errorHandler.handle(erro));
    }

    carregarUnidadeDeAvaliacao() {
      return this.modLocal1Service.listarTodas()
        .then(modlocal1 => {
          this.modlocal1 = modlocal1.map(c => ({ label: c.cdLocal1 + " - " + c.nmlocal1, value: c.cdLocal1 }));
        })
        .catch(erro => this.errorHandler.handle(erro));
    }

    carregarMaterial1() {
      return this.cadMaterialService.listarTodas()
        .then(material => {
          this.cadmaterial = material.map(c => ({ label: c.nmMaterial, value: c.cdMaterial }));
        })
        .catch(erro => this.errorHandler.handle(erro));
    }

    carregarMaterial2() {
      return this.cadMaterialService.listarTodas()
        .then(material => {
          this.cadmaterial2 = material.map(c => ({ label: c.nmMaterial, value: c.cdMaterial }));
        })
        .catch(erro => this.errorHandler.handle(erro));
    }

    carregarMaterial3() {
      return this.cadMaterialService.listarTodas()
        .then(material => {
          this.cadmaterial3 = material.map(c => ({ label: c.nmMaterial, value: c.cdMaterial }));
        })
        .catch(erro => this.errorHandler.handle(erro));
    }

    carregarLocalDeAvaliacaoFOD() {
      return this.modLocal2Service.listarFOD()
        .then(modlocal2 => {
          this.modlocalFOD = modlocal2.map(c => ({ label: c.cdLocal2 + " - " + c.nmLocal2, value: c.cdLocal2 }));
        })
        .catch(erro => this.errorHandler.handle(erro));
    }
  
    carregarLocalDeAvaliacaoFOA() {
      return this.modLocal2Service.listarFOA()
        .then(modlocal2 => {
          this.modlocalFOA = modlocal2.map(c => ({ label: c.cdLocal2 + " - " + c.nmLocal2, value: c.cdLocal2 }));
        })
        .catch(erro => this.errorHandler.handle(erro));
    }
  
    carregarLocalDeAvaliacaoPEO() {
      return this.modLocal2Service.listarPEO()
        .then(modlocal2 => {
          this.modlocalPEO = modlocal2.map(c => ({ label: c.cdLocal2 + " - " + c.nmLocal2, value: c.cdLocal2 }));
        })
        .catch(erro => this.errorHandler.handle(erro));
    }
  
    carregarLocalDeAvaliacaoPATRANS() {
      return this.modLocal2Service.listarPATRANS()
        .then(modlocal2 => {
          this.modlocalPATRANS = modlocal2.map(c => ({ label: c.cdLocal2 + " - " + c.nmLocal2, value: c.cdLocal2 }));
        })
        .catch(erro => this.errorHandler.handle(erro));
    }
  
    carregarLocalDeAvaliacaoINFRA() {
      return this.modLocal2Service.listarINFRA()
        .then(modlocal2 => {
          this.modlocalINFRA = modlocal2.map(c => ({ label: c.cdLocal2 + " - " + c.nmLocal2, value: c.cdLocal2 }));
        })
        .catch(erro => this.errorHandler.handle(erro));
    }
  
    carregarLocalDeAvaliacaoMON() {
      return this.modLocal2Service.listarMON()
        .then(modlocal2 => {
          this.modlocalMON = [] = modlocal2.map(c => ({ label: c.cdLocal2 + " - " + c.nmLocal2, value: c.cdLocal2 }));
        })
        .catch(erro => this.errorHandler.handle(erro));
    }
  
    carregarLocalDeAvaliacaoACAM() {
      return this.modLocal2Service.listarACAM()
        .then(modlocal2 => {
          this.modlocalACAM = modlocal2.map(c => ({ label: c.cdLocal2 + " - " + c.nmLocal2, value: c.cdLocal2 }));
        })
        .catch(erro => this.errorHandler.handle(erro));
    }
  
    carregarLocalDeAvaliacaoESCRI() {
      return this.modLocal2Service.listarESCRI()
        .then(modlocal2 => {
          this.modlocalESCRI = modlocal2.map(c => ({ label: c.cdLocal2 + " - " + c.nmLocal2, value: c.cdLocal2 }));
        })
        .catch(erro => this.errorHandler.handle(erro));
    }
  
    carregarLocalDeAvaliacaoENTOR() {
      return this.modLocal2Service.listarENTOR()
        .then(modlocal2 => {
          this.modlocalENTOR = modlocal2.map(c => ({ label: c.cdLocal2 + " - " + c.nmLocal2, value: c.cdLocal2 }));
        })
        .catch(erro => this.errorHandler.handle(erro));
    }

    carregar_modlocal3_cdLocal1_1_cdLocal2_1() {
      return this.unidadelocalsublocalService.listarEmTodosOsLocais()
        .then(modlocal3_cdLocal1_1_cdLocal2_1 => {
          this.modlocal3_cdLocal1_1_cdLocal2_1 = modlocal3_cdLocal1_1_cdLocal2_1.map(c => ({ label: c.cdLocal3 + " - " + c.nmLocal3, value: c.cdLocal3 }));
        })
        .catch(erro => this.errorHandler.handle(erro));
    }
    carregar_modlocal3_cdLocal1_1_cdLocal2_2() {
      return this.unidadelocalsublocalService.listarPicadasDeInventario()
        .then(modlocal3_cdLocal1_1_cdLocal2_2 => {
          this.modlocal3_cdLocal1_1_cdLocal2_2 = modlocal3_cdLocal1_1_cdLocal2_2.map(c => ({ label: c.cdLocal3 + " - " + c.nmLocal3, value: c.cdLocal3 }));
        })
        .catch(erro => this.errorHandler.handle(erro));
    }
    carregar_modlocal3_cdLocal1_1_cdLocal2_3() {
      return this.unidadelocalsublocalService.listarLocalDeDerruba()
        .then(modlocal3_cdLocal1_1_cdLocal2_3 => {
          this.modlocal3_cdLocal1_1_cdLocal2_3 = modlocal3_cdLocal1_1_cdLocal2_3.map(c => ({ label: c.cdLocal3 + " - " + c.nmLocal3, value: c.cdLocal3 }));
        })
        .catch(erro => this.errorHandler.handle(erro));
    }

    carregar_modlocal3_cdLocal1_2_cdLocal2_4() {
      return this.unidadelocalsublocalService.listarEmTodosOsLocais2()
        .then(modlocal3_cdLocal1_2_cdLocal2_4 => {
          this.modlocal3_cdLocal1_2_cdLocal2_4 = modlocal3_cdLocal1_2_cdLocal2_4.map(c => ({ label: c.cdLocal3 + " - " + c.nmLocal3, value: c.cdLocal3 }));
        })
        .catch(erro => this.errorHandler.handle(erro));
    }

    carregar_modlocal3_cdLocal1_2_cdLocal2_5() {
      return this.unidadelocalsublocalService.listarTrilhasDeArraste()
        .then(modlocal3_cdLocal1_2_cdLocal2_5 => {
          this.modlocal3_cdLocal1_2_cdLocal2_5 = modlocal3_cdLocal1_2_cdLocal2_5.map(c => ({ label: c.cdLocal3 + " - " + c.nmLocal3, value: c.cdLocal3 }));
        })
        .catch(erro => this.errorHandler.handle(erro));
    }
   
    carregar_modlocal3_cdLocal1_3_cdLocal2_6() {
      return this.unidadelocalsublocalService.listarEmTodosOsLocais3()
        .then(modlocal3_cdLocal1_3_cdLocal2_6 => {
          this.modlocal3_cdLocal1_3_cdLocal2_6 = modlocal3_cdLocal1_3_cdLocal2_6.map(c => ({ label: c.cdLocal3 + " - " + c.nmLocal3, value: c.cdLocal3 }));
        })
        .catch(erro => this.errorHandler.handle(erro));
    }

    carregar_modlocal3_cdLocal1_3_cdLocal2_7() {
      return this.unidadelocalsublocalService.listarTodoPatio()
        .then(modlocal3_cdLocal1_3_cdLocal2_7 => {
          this.modlocal3_cdLocal1_3_cdLocal2_7 = modlocal3_cdLocal1_3_cdLocal2_7.map(c => ({ label: c.cdLocal3 + " - " + c.nmLocal3, value: c.cdLocal3 }));
        })
        .catch(erro => this.errorHandler.handle(erro));
    }
    carregar_modlocal3_cdLocal1_3_cdLocal2_8() {
      return this.unidadelocalsublocalService.listarBordasDoPatio()
        .then(modlocal3_cdLocal1_3_cdLocal2_8 => {
          this.modlocal3_cdLocal1_3_cdLocal2_8 = modlocal3_cdLocal1_3_cdLocal2_8.map(c => ({ label: c.cdLocal3 + " - " + c.nmLocal3, value: c.cdLocal3 }));
        })
        .catch(erro => this.errorHandler.handle(erro));
    }
    carregar_modlocal3_cdLocal1_3_cdLocal2_9() {
      return this.unidadelocalsublocalService.listarSaidaDoPatio()
        .then(modlocal3_cdLocal1_3_cdLocal2_9 => {
          this.modlocal3_cdLocal1_3_cdLocal2_9 = modlocal3_cdLocal1_3_cdLocal2_9.map(c => ({ label: c.cdLocal3 + " - " + c.nmLocal3, value: c.cdLocal3 }));
        })
        .catch(erro => this.errorHandler.handle(erro));
    }

    carregar_modlocal3_cdLocal1_4_cdLocal2_10() {
      return this.unidadelocalsublocalService.listarEmTodosOsLocais4()
        .then(modlocal3_cdLocal1_4_cdLocal2_10 => {
          this.modlocal3_cdLocal1_4_cdLocal2_10 = modlocal3_cdLocal1_4_cdLocal2_10.map(c => ({ label: c.cdLocal3 + " - " + c.nmLocal3, value: c.cdLocal3 }));
        })
        .catch(erro => this.errorHandler.handle(erro));
    }

    carregar_modlocal3_cdLocal1_4_cdLocal2_11() {
      return this.unidadelocalsublocalService.listarTodoPatio4()
        .then(modlocal3_cdLocal1_4_cdLocal2_11 => {
          this.modlocal3_cdLocal1_4_cdLocal2_11 = modlocal3_cdLocal1_4_cdLocal2_11.map(c => ({ label: c.cdLocal3 + " - " + c.nmLocal3, value: c.cdLocal3 }));
        })
        .catch(erro => this.errorHandler.handle(erro));
    }
    
    carregar_modlocal3_cdLocal1_5_cdLocal2_12() {
      return this.unidadelocalsublocalService.listarEmTodosOsLocais5()
        .then(modlocal3_cdLocal1_5_cdLocal2_12 => {
          this.modlocal3_cdLocal1_5_cdLocal2_12 = modlocal3_cdLocal1_5_cdLocal2_12.map(c => ({ label: c.cdLocal3 + " - " + c.nmLocal3, value: c.cdLocal3 }));
        })
        .catch(erro => this.errorHandler.handle(erro));
    }

    carregar_modlocal3_cdLocal1_5_cdLocal2_13() {
      return this.unidadelocalsublocalService.listarEstradasPrincipais()
        .then(modlocal3_cdLocal1_5_cdLocal2_13 => {
          this.modlocal3_cdLocal1_5_cdLocal2_13 = modlocal3_cdLocal1_5_cdLocal2_13.map(c => ({ label: c.cdLocal3 + " - " + c.nmLocal3, value: c.cdLocal3 }));
        })
        .catch(erro => this.errorHandler.handle(erro));
    }

    carregar_modlocal3_cdLocal1_5_cdLocal2_14() {
      return this.unidadelocalsublocalService.listarEstradasSecudarias()
        .then(modlocal3_cdLocal1_5_cdLocal2_14 => {
          this.modlocal3_cdLocal1_5_cdLocal2_14 = modlocal3_cdLocal1_5_cdLocal2_14.map(c => ({ label: c.cdLocal3 + " - " + c.nmLocal3, value: c.cdLocal3 }));
        })
        .catch(erro => this.errorHandler.handle(erro));
    }

    carregar_modlocal3_cdLocal1_5_cdLocal2_15() {
      return this.unidadelocalsublocalService.listarTodaMalhaViaria()
        .then(modlocal3_cdLocal1_5_cdLocal2_15 => {
          this.modlocal3_cdLocal1_5_cdLocal2_15 = modlocal3_cdLocal1_5_cdLocal2_15.map(c => ({ label: c.cdLocal3 + " - " + c.nmLocal3, value: c.cdLocal3 }));
        })
        .catch(erro => this.errorHandler.handle(erro));
    }

    carregar_modlocal3_cdLocal1_6_cdLocal2_16() {
      return this.unidadelocalsublocalService.listarEmTodosOsLocais6()
        .then(modlocal3_cdLocal1_6_cdLocal2_16 => {
          this.modlocal3_cdLocal1_6_cdLocal2_16 = modlocal3_cdLocal1_6_cdLocal2_16.map(c => ({ label: c.cdLocal3 + " - " + c.nmLocal3, value: c.cdLocal3 }));
        })
        .catch(erro => this.errorHandler.handle(erro));
    }

    carregar_modlocal3_cdLocal1_6_cdLocal2_17() {
      return this.unidadelocalsublocalService.listaParcela()
        .then(modlocal3_cdLocal1_6_cdLocal2_17 => {
          this.modlocal3_cdLocal1_6_cdLocal2_17 = modlocal3_cdLocal1_6_cdLocal2_17.map(c => ({ label: c.cdLocal3 + " - " + c.nmLocal3, value: c.cdLocal3 }));
        })
        .catch(erro => this.errorHandler.handle(erro));
    }

    carregar_modlocal3_cdLocal1_6_cdLocal2_18() {
      return this.unidadelocalsublocalService.listarGeral()
        .then(modlocal3_cdLocal1_6_cdLocal2_18 => {
          this.modlocal3_cdLocal1_6_cdLocal2_18 = modlocal3_cdLocal1_6_cdLocal2_18.map(c => ({ label: c.cdLocal3 + " - " + c.nmLocal3, value: c.cdLocal3 }));
        })
        .catch(erro => this.errorHandler.handle(erro));
    }

    carregar_modlocal3_cdLocal1_7_cdLocal2_19() {
      return this.unidadelocalsublocalService.listarEmTodosOsLocais7()
        .then(modlocal3_cdLocal1_7_cdLocal2_19 => {
          this.modlocal3_cdLocal1_7_cdLocal2_19 = modlocal3_cdLocal1_7_cdLocal2_19.map(c => ({ label: c.cdLocal3 + " - " + c.nmLocal3, value: c.cdLocal3 }));
        })
        .catch(erro => this.errorHandler.handle(erro));
    }

    carregar_modlocal3_cdLocal1_7_cdLocal2_20() {
      return this.unidadelocalsublocalService.listarGeral7()
        .then(modlocal3_cdLocal1_7_cdLocal2_20 => {
          this.modlocal3_cdLocal1_7_cdLocal2_20 = modlocal3_cdLocal1_7_cdLocal2_20.map(c => ({ label: c.cdLocal3 + " - " + c.nmLocal3, value: c.cdLocal3 }));
        })
        .catch(erro => this.errorHandler.handle(erro));
    }

    carregar_modlocal3_cdLocal1_7_cdLocal2_21() {
      return this.unidadelocalsublocalService.listarAlojamento()
        .then(modlocal3_cdLocal1_7_cdLocal2_21 => {
          this.modlocal3_cdLocal1_7_cdLocal2_21 = modlocal3_cdLocal1_7_cdLocal2_21.map(c => ({ label: c.cdLocal3 + " - " + c.nmLocal3, value: c.cdLocal3 }));
        })
        .catch(erro => this.errorHandler.handle(erro));
    }

    carregar_modlocal3_cdLocal1_8_cdLocal2_22() {
      return this.unidadelocalsublocalService.listarEmTodosOsLocais8()
        .then(modlocal3_cdLocal1_8_cdLocal2_22 => {
          this.modlocal3_cdLocal1_8_cdLocal2_22 = modlocal3_cdLocal1_8_cdLocal2_22.map(c => ({ label: c.cdLocal3 + " - " + c.nmLocal3, value: c.cdLocal3 }));
        })
        .catch(erro => this.errorHandler.handle(erro));
    }

    carregar_modlocal3_cdLocal1_8_cdLocal2_23() {
      return this.unidadelocalsublocalService.listarGeral8()
        .then(modlocal3_cdLocal1_8_cdLocal2_23 => {
          this.modlocal3_cdLocal1_8_cdLocal2_23 = modlocal3_cdLocal1_8_cdLocal2_23.map(c => ({ label: c.cdLocal3 + " - " + c.nmLocal3, value: c.cdLocal3 }));
        })
        .catch(erro => this.errorHandler.handle(erro));
    }

    carregar_modlocal3_cdLocal1_8_cdLocal2_24() {
      return this.unidadelocalsublocalService.listarPMFS()
        .then(modlocal3_cdLocal1_8_cdLocal2_24 => {
          this.modlocal3_cdLocal1_8_cdLocal2_24 = modlocal3_cdLocal1_8_cdLocal2_24.map(c => ({ label: c.cdLocal3 + " - " + c.nmLocal3, value: c.cdLocal3 }));
        })
        .catch(erro => this.errorHandler.handle(erro));
    }

    carregar_modlocal3_cdLocal1_9_cdLocal2_25() {
      return this.unidadelocalsublocalService.listarEmTodosOsLocais9()
        .then(modlocal3_cdLocal1_9_cdLocal2_25 => {
          this.modlocal3_cdLocal1_9_cdLocal2_25 = modlocal3_cdLocal1_9_cdLocal2_25.map(c => ({ label: c.cdLocal3 + " - " + c.nmLocal3, value: c.cdLocal3 }));
        })
        .catch(erro => this.errorHandler.handle(erro));
    }

    carregar_modlocal3_cdLocal1_9_cdLocal2_26() {
      return this.unidadelocalsublocalService.listarGeral9()
        .then(modlocal3_cdLocal1_9_cdLocal2_26 => {
          this.modlocal3_cdLocal1_9_cdLocal2_26 = modlocal3_cdLocal1_9_cdLocal2_26.map(c => ({ label: c.cdLocal3 + " - " + c.nmLocal3, value: c.cdLocal3 }));
        })
        .catch(erro => this.errorHandler.handle(erro));
    }

   

    



}
