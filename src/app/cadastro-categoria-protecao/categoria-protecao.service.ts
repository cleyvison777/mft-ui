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

}
