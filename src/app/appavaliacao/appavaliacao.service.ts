import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { AppAvaliacao } from '../core/model';



export class  AppAvaliacaoFiltro {
  
  cdMonitoramento: number;
  nmMonitoramento:string;
  
  
 
}


@Injectable()
export class AppavaliacaoService {

  appavaliacaoURL = "http://localhost:8081/appavaliacao";


  constructor(private http: Http) { }


  pesquisarMon(filtro: AppAvaliacaoFiltro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    if (filtro.nmMonitoramento) {
      params.set('cdMonitoramento', filtro.nmMonitoramento);
    }

    return this.http.get(`${this.appavaliacaoURL}`, { headers, search: filtro })
      .toPromise()
      .then(response => response.json().content)

  };

  pesquisar(filtro: AppAvaliacaoFiltro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    

    return this.http.get(`${this.appavaliacaoURL}`, { headers, search: filtro })
      .toPromise()
      .then(response => response.json().content)

  };

  excluir(cdAvaliacao: number): Promise<void> {
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    return this.http.delete(`${this.appavaliacaoURL}/${cdAvaliacao}`, { headers })
      .toPromise()
      .then(() => null);
  }

  adicionar(appAvaliacao: AppAvaliacao): Promise<AppAvaliacao> {
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    headers.append('Content-Type', 'application/json');

    return this.http.post(this.appavaliacaoURL, JSON.stringify(appAvaliacao), { headers })
      .toPromise()
      .then(response => response.json());
  }

  atualizar(appAvaliacao: AppAvaliacao): Promise<AppAvaliacao>  {
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    headers.append('Content-Type', 'application/json');

    return this.http.put(`${this.appavaliacaoURL}/${appAvaliacao.cdAvaliacao}`,
      JSON.stringify(appAvaliacao), { headers })
      .toPromise()
      .then(response => {
        const appAvaliacaoAlterada = response.json() as AppAvaliacao;


        return appAvaliacaoAlterada;
      });
  }

  listarTodas(): Promise<any> {
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    headers.append('Content-Type', 'application/json');

    return this.http.get(this.appavaliacaoURL, { headers })
      .toPromise()
      .then(response => response.json().content);
  }

  buscarPorCodigo(cdAvaliacao: number): Promise<AppAvaliacao> {
    const headers = new Headers();
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    return this.http.get(`${this.appavaliacaoURL}/${cdAvaliacao}`, { headers })
      .toPromise()
      .then(response => {
        const appAvaliacao = response.json() as AppAvaliacao;

        return appAvaliacao;
      });
  }
}
