import { Component, ViewChild, OnInit } from '@angular/core';
import { SelectItem, TreeNode, LazyLoadEvent, ConfirmationService } from 'primeng/primeng';
import { NodeService } from 'src/service/nodeservice';
import { Modlocal1Service } from '../modlocal1/modlocal1.service';
import { ErrorHandlerService } from '../core/error-handler.service';
import { Modlocal3 } from '../core/model';
import { Modlocal3Filtro, UnidadelocalsublocalService } from './unidadelocalsublocal.service';
import { Modlocal2Service } from '../modlocal2/modlocal2.service';
import { ActivatedRoute } from '@angular/router';
import { CadempresaService } from '../cadempresa/cadempresa.service';
import { ToastyService } from 'ng2-toasty';
import { FormControl } from '@angular/forms';




interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-unidadelocalsublocal',
  templateUrl: './unidadelocalsublocal.component.html',
  styleUrls: ['./unidadelocalsublocal.component.css']
})
export class UnidadelocalsublocalComponent implements OnInit {


  cities1: SelectItem[];
  selectedCity1: City;

  files: TreeNode[];

  tatalRegistros = 0;
  filtro = new Modlocal3Filtro();


  modLocal3Salvar = new Modlocal3();

  empresas = [];

  @ViewChild('tabela') grid;

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
  modlocal3 = [];



  constructor(
    private nodeService: NodeService,
    private cadEmpresaService: CadempresaService,
    private modLocal1Service: Modlocal1Service,
    private modLocal2Service: Modlocal2Service,
    private errorHandler: ErrorHandlerService,
    private unidadelocalsublocalService: UnidadelocalsublocalService,
    private route: ActivatedRoute,
    private confirmation: ConfirmationService,
    private toasty: ToastyService
  ) { }



  ngOnInit() {
    this.nodeService.getFiles().then(files => this.files = files);
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
    this.carregarEmpresas();

    const codigoModlocal3 = this.route.snapshot.params['codigo'];

    //se houver um id entra no metodo de carregar valores
    if (codigoModlocal3) {
      this.carregarModlocal3(codigoModlocal3);
    }

  }

  get editando() {
    return Boolean(this.modLocal3Salvar.cdLocal3)
  }

  //Metodo para carregar valores
  carregarModlocal3(codigo: number) {
    this.unidadelocalsublocalService.buscarPorCodigo(codigo)
      .then(modlocal3 => {
        this.modLocal3Salvar = modlocal3;
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarEmTodosOsLocais(page = 0) {

    this.filtro.page = page;

    this.unidadelocalsublocalService.pesquisarEmTodosOsLocais(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modlocal3 = resultado.modlocal3;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }


  pesquisarPicadasInventario(page = 0) {

    this.filtro.page = page;

    this.unidadelocalsublocalService.pesquisarPicadasInventario(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modlocal3 = resultado.modlocal3;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarDerruba(page = 0) {

    this.filtro.page = page;

    this.unidadelocalsublocalService.pesquisarDerruba(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modlocal3 = resultado.modlocal3;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarEmTodosOsLocais2(page = 0) {

    this.filtro.page = page;

    this.unidadelocalsublocalService.pesquisarEmTodosOsLocais2(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modlocal3 = resultado.modlocal3;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }


  pesquisarTrilhasDeArraste(page = 0) {

    this.filtro.page = page;

    this.unidadelocalsublocalService.pesquisarTrilhasDeArraste(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modlocal3 = resultado.modlocal3;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }


  pesquisarEmTodosOsLocais3(page = 0) {

    this.filtro.page = page;

    this.unidadelocalsublocalService.pesquisarEmTodosOsLocais3(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modlocal3 = resultado.modlocal3;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarTodoPatio(page = 0) {

    this.filtro.page = page;

    this.unidadelocalsublocalService.pesquisarTodoPatio(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modlocal3 = resultado.modlocal3;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarBordasPatio(page = 0) {

    this.filtro.page = page;

    this.unidadelocalsublocalService.pesquisarBordasPatio(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modlocal3 = resultado.modlocal3;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarSaidaPatio(page = 0) {

    this.filtro.page = page;

    this.unidadelocalsublocalService.pesquisarSaidaPatio(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modlocal3 = resultado.modlocal3;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarEmTodosOsLocais4(page = 0) {

    this.filtro.page = page;

    this.unidadelocalsublocalService.pesquisarEmTodosOsLocais4(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modlocal3 = resultado.modlocal3;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarTodoPatioTransportado(page = 0) {

    this.filtro.page = page;

    this.unidadelocalsublocalService.pesquisarTodoPatioTransportado(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modlocal3 = resultado.modlocal3;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarEmTodosOsLocais5(page = 0) {

    this.filtro.page = page;

    this.unidadelocalsublocalService.pesquisarEmTodosOsLocais5(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modlocal3 = resultado.modlocal3;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisareEstradasPrincipais(page = 0) {

    this.filtro.page = page;

    this.unidadelocalsublocalService.pesquisareEstradasPrincipais(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modlocal3 = resultado.modlocal3;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarEmTodosOsLocais6(page = 0) {

    this.filtro.page = page;

    this.unidadelocalsublocalService.pesquisarEmTodosOsLocais6(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modlocal3 = resultado.modlocal3;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarEstradasSecundarias(page = 0) {

    this.filtro.page = page;

    this.unidadelocalsublocalService.pesquisarEstradasSecundarias(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modlocal3 = resultado.modlocal3;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarTodaMalhaViaria(page = 0) {

    this.filtro.page = page;

    this.unidadelocalsublocalService.pesquisarTodaMalhaViaria(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modlocal3 = resultado.modlocal3;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarParcela(page = 0) {

    this.filtro.page = page;

    this.unidadelocalsublocalService.pesquisarParcela(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modlocal3 = resultado.modlocal3;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarGeral(page = 0) {

    this.filtro.page = page;

    this.unidadelocalsublocalService.pesquisarGeral(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modlocal3 = resultado.modlocal3;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarEmTodosOsLocais7(page = 0) {

    this.filtro.page = page;

    this.unidadelocalsublocalService.pesquisarEmTodosOsLocais7(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modlocal3 = resultado.modlocal3;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarGeralAcam(page = 0) {

    this.filtro.page = page;

    this.unidadelocalsublocalService.pesquisarGeralAcam(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modlocal3 = resultado.modlocal3;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarAlojamento(page = 0) {

    this.filtro.page = page;

    this.unidadelocalsublocalService.pesquisarAlojamento(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modlocal3 = resultado.modlocal3;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarEmTodosOsLocais8(page = 0) {

    this.filtro.page = page;

    this.unidadelocalsublocalService.pesquisarEmTodosOsLocais8(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modlocal3 = resultado.modlocal3;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarGeralEscri(page = 0) {

    this.filtro.page = page;

    this.unidadelocalsublocalService.pesquisarGeralEscri(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modlocal3 = resultado.modlocal3;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarPmfs(page = 0) {

    this.filtro.page = page;

    this.unidadelocalsublocalService.pesquisarPmfs(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modlocal3 = resultado.modlocal3;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarEmTodosOsLocais9(page = 0) {

    this.filtro.page = page;

    this.unidadelocalsublocalService.pesquisarEmTodosOsLocais9(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modlocal3 = resultado.modlocal3;

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarGeralEntor(page = 0) {

    this.filtro.page = page;

    this.unidadelocalsublocalService.pesquisarGeralEntor(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.modlocal3 = resultado.modlocal3;

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

  carregarEmpresas() {
    return this.cadEmpresaService.listarTodas()
      .then(empresas => {
        this.empresas = empresas.map(c => ({ label: c.cdEmpresa + " - " + c.nmEmpresa, value: c.cdEmpresa }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  excluir(unidadelocalsublocalService: any) {

    this.modLocal2Service.excluir(unidadelocalsublocalService.cdLocal3)
      .then(() => {
        if (this.grid.first === 0) {
          //this.pesquisar();
        } else {
          this.grid.first = 0;
          // this.pesquisar();
        }
        this.toasty.success('Local 3 excluído com sucesso!');
      })
      .catch(erro => this.errorHandler.handle(erro));

  }
  salvar(unidadelocalsublocalService: any) {

    this.confirmation.confirm({
      message: 'Tem certeza que deseja salvar?',
      accept: () => {
        this.adicionarModLocal3(unidadelocalsublocalService);
      }
    });

  }



  adicionarModLocal3(form: FormControl) {
    this.unidadelocalsublocalService.adicionar(this.modLocal3Salvar)
      .then(() => {
        this.toasty.success("Local de Avaliação cadastrado com sucesso!");
        form.reset();
        this.modLocal3Salvar = new Modlocal3();


      })
      .catch(erro => this.errorHandler.handle(erro));
  }


  aoMudarPagina(event: LazyLoadEvent) {
    const page = event.first / event.rows;

  }



}

