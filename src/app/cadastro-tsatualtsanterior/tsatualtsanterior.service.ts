import { CadTsAtualTsAnterior } from './../core/model';
import { promise } from 'protractor';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';


export class TsFiltro {
  page = 0;
  size = 15;
  cdTratamentotual: number;
  
}

@Injectable({
  providedIn: 'root'
})
export class TsatualtsanteriorService {
  
  CadTsURL = 'http://localhost:8082/cadtsatualtsanterior';
  constructor(private http: Http) { }


  adicionar(cadTsAtualTsAnterior: CadTsAtualTsAnterior): Promise<CadTsAtualTsAnterior>{
    const params = new URLSearchParams;
    const headers = new Headers();
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.CadTsURL,
      JSON.stringify(cadTsAtualTsAnterior),
      { headers })
      .toPromise()
      .then(response => response.json());
  }


  consultar(filtro: TsFiltro): Promise<any>{
    const params = new URLSearchParams;
    const headers = new Headers;
    params.set('page', filtro.page.toString());
    params.set('size', filtro.size.toString());
    return this.http.get(`${this.CadTsURL}`, { headers, search: filtro })
      .toPromise()
      .then(response => {
        const responseJson = response.json();
        const listaTs = responseJson.content;
        const resultado = {
          listaTs,
          total: responseJson.totalElements
        };
        return resultado;

      });
  }

  buscarPeloTs(cdTratamentotual: number): Promise<any> {
    const headers = new Headers();
    const params = new URLSearchParams;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
   /* params.set('page', filtroTs.page.toString());
    params.set('size', filtroTs.size.toString());*/
    return this.http.get(`${this.CadTsURL}?cdTratamentotual=${cdTratamentotual}`)
      .toPromise()
      .then(response => {
        const responseJson = response.json();
        const listaTs = responseJson.content;
        const resultado = {
          listaTs,
          total: responseJson.totalElements
        };
        return resultado;

      });
  }


    atualizar(cadTsAtualTsAnterior: CadTsAtualTsAnterior): Promise<CadTsAtualTsAnterior> {
          const headers = new Headers;
          headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
          headers.append('Content-Type', 'application/json');
      return this.http.put(`${this.CadTsURL}/${cadTsAtualTsAnterior.cdTratamentAnterior}`,
        JSON.stringify(cadTsAtualTsAnterior), { headers })
        .toPromise()
        .then(response => {
          const cadTsAtualTsAnteriorAltera = response.json() as CadTsAtualTsAnterior;
          return cadTsAtualTsAnteriorAltera;
        });
    }
  
  
    buscarPeloTsAtualiza(cdTratamentAnterior: number): Promise<CadTsAtualTsAnterior> {
      const headers = new Headers();
      headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
      return this.http.get(`${this.CadTsURL}/ ${cdTratamentAnterior}`, { headers })
        .toPromise()
        .then(response => {
          const cadTsAtualTsAnterior = response.json() as CadTsAtualTsAnterior;
          return cadTsAtualTsAnterior;
        });
    }

}

