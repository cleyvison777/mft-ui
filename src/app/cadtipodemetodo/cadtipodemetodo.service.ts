import { Cadtipodemetodo } from './../core/model';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { URLSearchParams } from '@angular/http';

export class CadtipodemetodoFiltro{
  tipometodo : string;
  page = 0;
  size = 5;
}

@Injectable()
export class CadtipodemetodoService {
  cadtipodemetodoURL = 'http://localhost:8081/cadtipodemetodo';


  constructor(private http: Http) { }

  pesquisar(filtro: CadtipodemetodoFiltro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    if (filtro.tipometodo){
      params.set('tipometodo', filtro.tipometodo);

  }

    return this.http.get(`${this.cadtipodemetodoURL}?resumo`, {  headers, search: filtro })
    .toPromise()
      .then(response => {

          const responseJson = response.json();
          const cadtipodemetodo = responseJson.content;

          const resultado = {
            cadtipodemetodo,
            total: responseJson.totalElements
          };
          return resultado;
    })

    };
    excluir(codigo: number): Promise<void> {
      const headers = new Headers;
      headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

      return this.http.delete(`${this.cadtipodemetodoURL}/${codigo}`, { headers })
        .toPromise()
        .then(() => null);
    }

    adicionar(cadtipodemetodo: Cadtipodemetodo): Promise<Cadtipodemetodo>{
      const headers = new Headers;
      headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
      headers.append('Content-Type', 'application/json');

      return this.http.post(this.cadtipodemetodoURL, JSON.stringify(cadtipodemetodo), { headers })
        .toPromise()
        .then(response => response.json());
    }
    listarTodas(): Promise<any> {
      const headers = new Headers;
       headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
       headers.append('Content-Type', 'application/json');

       return this.http.get(this.cadtipodemetodoURL, { headers })
         .toPromise()
         .then(response => response.json().content);
   }

   atualizar(cadtipodemetodo: Cadtipodemetodo): Promise<Cadtipodemetodo>{
     const headers = new Headers;
     headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
     headers.append('Content-Type', 'application/json');

     return this.http.put(`${this.cadtipodemetodoURL}/${cadtipodemetodo.cdTipoDeMetodo}`,
         JSON.stringify(cadtipodemetodo), { headers })
       .toPromise()
       .then(response => {
         const cadtipodemetodoAlterada = response.json() as Cadtipodemetodo;


         return cadtipodemetodoAlterada;
       });
 }

   buscarPorCodigo(codigo: number): Promise<Cadtipodemetodo> {
     const headers = new Headers();
     headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

     return this.http.get(`${this.cadtipodemetodoURL}/${codigo}`, { headers })
       .toPromise()
       .then(response => {
         const cadtipodemetodo = response.json() as Cadtipodemetodo;

         return cadtipodemetodo;

    });
 }
}
