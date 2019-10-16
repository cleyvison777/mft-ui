import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { URLSearchParams } from '@angular/http';
import { Cadamostragem } from '../core/model';


export class CadamostragemFiltro {
  nmAmostragem: string;
  page = 0;
  size = 5;
}

@Injectable()
export class CadamostragemService {

  cadamostragemurl = 'http://localhost:8081/cadamostragem';

  constructor(private http: Http) { }

  pesquisar(filtro: CadamostragemFiltro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    if (filtro.nmAmostragem) {
      params.set('nmAmostragem', filtro.nmAmostragem);
    }

    return this.http.get(`${this.cadamostragemurl}?resumo`, { headers, search: filtro })
      .toPromise()
      .then(response => {
        const responseJson = response.json();
        const cadamostragem = responseJson.content;

        const resultado = {
          cadamostragem,
          total: responseJson.totalElements
        };
        return resultado;
      })

  };

  excluir(cdAmostragem: number): Promise<void> {
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    return this.http.delete(`${this.cadamostragemurl}/${cdAmostragem}`, { headers })
      .toPromise()
      .then(() => null);
  }

  adicionar(cadamostragem: Cadamostragem): Promise<Cadamostragem> {
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    headers.append('Content-Type', 'application/json');

    return this.http.post(this.cadamostragemurl, JSON.stringify(cadamostragem), { headers })
      .toPromise()
      .then(response => response.json());
  }

  listarTodas(): Promise<any> {
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    headers.append('Content-Type', 'application/json');

    return this.http.get(this.cadamostragemurl, { headers })
      .toPromise()
      .then(response => response.json().content);
  }

  atualizar(cadamostragem: Cadamostragem): Promise<Cadamostragem> {
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    headers.append('Content-Type', 'application/json');

    return this.http.put(`${this.cadamostragemurl}/${cadamostragem.cdAmostragem}`,
      JSON.stringify(cadamostragem), { headers })
      .toPromise()
      .then(response => {
        const cadamostragemAlterada = response.json() as Cadamostragem;


        return cadamostragemAlterada;
      });
  }

  buscarPorCodigo(cdAmostragem: number): Promise<Cadamostragem> {
    const headers = new Headers();
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    return this.http.get(`${this.cadamostragemurl}/${cdAmostragem}`, { headers })
      .toPromise()
      .then(response => {
        const cadamostragem = response.json() as Cadamostragem;

        return cadamostragem;
      });
  }

}
