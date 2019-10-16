import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { ModNivel1 } from '../core/model';

export class ModNivel1Filtro {
  nmNivel1: string;
  page = 0;
  size = 5;
}

@Injectable()
export class Modnivel1Service {

  modnivel1url = 'http://localhost:8081/modnivel1';

  constructor(private http: Http) { }


  pesquisar(filtro: ModNivel1Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    if (filtro.nmNivel1) {
      params.set('nmNivel1', filtro.nmNivel1);

    }

    return this.http.get(`${this.modnivel1url}?resumo`, { headers, search: filtro })
      .toPromise()
      .then(response => {

        const responseJson = response.json();
        const modnivel1 = responseJson.content;

        const resultado = {
          modnivel1,
          total: responseJson.totalElements
        };
        return resultado;
      })

  };


  excluir(cdNivel1: number): Promise<void> {
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    return this.http.delete(`${this.modnivel1url}/${cdNivel1}`, { headers })
      .toPromise()
      .then(() => null);
  }


  adicionar(modNivel1: ModNivel1): Promise<ModNivel1> {
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    headers.append('Content-Type', 'application/json');

    return this.http.post(this.modnivel1url, JSON.stringify(modNivel1), { headers })
      .toPromise()
      .then(response => response.json());
  }


  listarTodas(): Promise<any> {
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    headers.append('Content-Type', 'application/json');

    return this.http.get(this.modnivel1url, { headers })
      .toPromise()
      .then(response => response.json().content);
  }

  atualizar(modNivel1: ModNivel1): Promise<ModNivel1> {
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    headers.append('Content-Type', 'application/json');

    return this.http.put(`${this.modnivel1url}/${modNivel1.cdNivel1}`,
      JSON.stringify(modNivel1), { headers })
      .toPromise()
      .then(response => {
        const modnivel1Alterada = response.json() as ModNivel1;

        return modnivel1Alterada;
      });
  }

  buscarPorCodigo(codigo: number): Promise<ModNivel1> {
    const headers = new Headers();
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    return this.http.get(`${this.modnivel1url}/${codigo}`, { headers })
      .toPromise()
      .then(response => {
        const modnivel1 = response.json() as ModNivel1;

        return modnivel1;
      });
  }


}
