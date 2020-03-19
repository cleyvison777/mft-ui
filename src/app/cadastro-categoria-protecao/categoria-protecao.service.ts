import { CadCategoriaProtecao } from './../core/model';
import { promise } from 'protractor';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';

export class CategoriaFiltro {
  page = 0;
  size = 15;
  nmCategoriaProtecao: string;
}

@Injectable({
  providedIn: 'root'
})
export class CategoriaProtecaoService {
  CategoriaProtecaoURL = 'http://localhost:8080/categoriaProtecao';
   
  constructor( private http: Http) { }

       //consultar 
       consulta(filtro: CategoriaFiltro): Promise<any>{
        const params = new URLSearchParams;
        const headers = new Headers;
        params.set('page', filtro.page.toString());
        params.set('size', filtro.size.toString());
          if (filtro.nmCategoriaProtecao) {
            params.set('nmCategoriaProtecao', filtro.nmCategoriaProtecao);
          }
          return this.http.get(`${this.CategoriaProtecaoURL}`,
          { headers, search: filtro})
           .toPromise()
           .then(response => {
             const responseJson = response.json();
             const listaCategoriaProtecao = responseJson.content;
             const resultado = {
              listaCategoriaProtecao,
              total: responseJson.totalElements
             };
             return resultado;
           });

       }

       adicionar(cadCategoriaProtecao: CadCategoriaProtecao): Promise<CadCategoriaProtecao> {
        const params = new URLSearchParams;
        const headers = new Headers();
        headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
        headers.append('Content-Type', 'application/json');
         return this.http.post(this.CategoriaProtecaoURL,
          JSON.stringify(cadCategoriaProtecao),
          { headers })
          .toPromise()
           .then(response => response.json());
       }


       excluir(cdCategoriaProtecao: number): Promise<void> {
        const headers = new Headers;
        headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
         return this.http.delete(`${this.CategoriaProtecaoURL}/${cdCategoriaProtecao}`, { headers })
          .toPromise()
           .then(() => null);
       }
}
