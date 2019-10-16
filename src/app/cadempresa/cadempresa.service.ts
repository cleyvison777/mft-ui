
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { URLSearchParams } from '@angular/http';
import { Cadempresa } from 'src/app/core/model';


export class CadempresaFiltro {
  nmEmpresa: string;
  page = 0;
  size = 5;
}


@Injectable()
export class CadempresaService {

  cadempresaurl = 'http://localhost:8081/cadempresa';

  constructor(private http: Http) { }


  pesquisar(filtro: CadempresaFiltro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    params.set('page', filtro.page.toString());
    params.set('size', filtro.size.toString());

    if (filtro.nmEmpresa) {
      params.set('nmEmpresa', filtro.nmEmpresa);
    }

    return this.http.get(`${this.cadempresaurl}`, { headers, search: filtro })
      .toPromise()
      .then(response => {
        const responseJson = response.json();
        const cadempresa = responseJson.content;

        const resultado = {
          cadempresa,
          total: responseJson.totalElements
        };
        return resultado;
      })

  };


  excluir(cdEmpresa: number): Promise<void> {
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    return this.http.delete(`${this.cadempresaurl}/${cdEmpresa}`, { headers })
      .toPromise()
      .then(() => null);
  }

  adicionar(cadempresa: Cadempresa): Promise<Cadempresa> {
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    headers.append('Content-Type', 'application/json');

    return this.http.post(this.cadempresaurl, JSON.stringify(cadempresa), { headers })
      .toPromise()
      .then(response => response.json());
  }



  listarTodas(): Promise<any> {
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    headers.append('Content-Type', 'application/json');

    return this.http.get(this.cadempresaurl, { headers })
      .toPromise()
      .then(response => response.json().content);
  }

  atualizar(cadempresa: Cadempresa): Promise<Cadempresa> {
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    headers.append('Content-Type', 'application/json');

    return this.http.put(`${this.cadempresaurl}/${cadempresa.cdEmpresa}`,
      JSON.stringify(cadempresa), { headers })
      .toPromise()
      .then(response => {
        const cadempresaAlterada = response.json() as Cadempresa;


        return cadempresaAlterada;
      });
  }

  buscarPorCodigo(cdEmpresa: number): Promise<Cadempresa> {
    const headers = new Headers();
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    return this.http.get(`${this.cadempresaurl}/${cdEmpresa}`, { headers })
      .toPromise()
      .then(response => {
        const cadempresa = response.json() as Cadempresa;

        return cadempresa;
      });
  }

}
