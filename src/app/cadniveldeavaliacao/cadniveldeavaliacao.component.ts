import { Component, ViewChild} from '@angular/core';
import { CadniveldeavaliacaoService, CadniveldeavaliacaoFiltro } from './cadniveldeavaliacao.service';
import { LazyLoadEvent } from 'src/primeng/api';
import { ToastyService } from 'ng2-toasty/src/toasty.service';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { FormControl } from '@angular/forms';
import { ErrorHandlerService } from '../core/error-handler.service';
import { ActivatedRoute } from '@angular/router';
import { Cadniveldeavaliacao } from '../core/model';

@Component({
  selector: 'app-cadniveldeavaliacao',
  templateUrl: './cadniveldeavaliacao.component.html',
  styleUrls: ['./cadniveldeavaliacao.component.css']
})
export class CadniveldeavaliacaoComponent  {

  tatalRegistros = 0;
  filtro = new CadniveldeavaliacaoFiltro();
  nmNivelDeAvaliacao: string;
  cadnivelavaliacao = []

  cadnivelavaliacaoSalvar = new Cadniveldeavaliacao();
  @ViewChild('tabela') grid;


  constructor(
    private cadniveldeavaliacaoService: CadniveldeavaliacaoService,
    private errorHandler: ErrorHandlerService,
    private toasty: ToastyService,
    private confirmation: ConfirmationService,
    private route: ActivatedRoute) {}

  ngOnInit() {

    const codigoNivelDeAvaliacao = (this.route.snapshot.params['codigo']);

    if(codigoNivelDeAvaliacao){
      this.carregarNivelDeAvaliacao(codigoNivelDeAvaliacao);

  }
  }
  get editando(){
    return Boolean(this.cadnivelavaliacaoSalvar.cdNivelDeAvaliacao)
  }

  //Metodo para carregar valores
  carregarNivelDeAvaliacao(cdNivelDeAvaliacao: number){
    this.cadniveldeavaliacaoService.buscarPorCodigo(cdNivelDeAvaliacao)
      .then(niveldeavaliacao => {
        this.cadnivelavaliacaoSalvar = niveldeavaliacao;
      })
      .catch(erro => this.errorHandler.handle(erro));
  }


  pesquisar(page = 0){

    this.filtro.page = page;

    this.cadniveldeavaliacaoService.pesquisar(this.filtro)
      .then(resultado => {
        this.tatalRegistros = resultado.total;
        this.cadnivelavaliacao = resultado.cadniveldeavaliacao;
      })

    }
    aoMudarPagina(event: LazyLoadEvent){
      const page = event.first / event.rows;
      this.pesquisar(page);
    }

    salvar(form: FormControl){

      if(this.editando){
        this.confirmarAlterar(form);
      } else {

      }

    }

        confirmarAlterar(niveldeavaliacao: any) {
          this.confirmation.confirm( {
            message: 'Tem certeza que deseja alterar?',
            accept: () =>{
              this.atualizarNivelDeAvaliacao(niveldeavaliacao);
            }
          });
        }

   atualizarNivelDeAvaliacao(form: FormControl){
    this.cadniveldeavaliacaoService.atualizar(this.cadnivelavaliacaoSalvar)
    .then(niveldeavaliacao => {
      this.cadnivelavaliacaoSalvar = niveldeavaliacao;

      this.toasty.success('Nível de avaliação alteradã com sucesso!');

    })
  .catch(erro => this.errorHandler.handle(erro));
  }



}
