import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

export class GeneroFiltro {
  nmGenero: string;
  page = 0;
  size = 20;
}
@Injectable({
  providedIn: 'root'
})
export class GeneroService {
generoURL = 'http://localhost:8080/genero';
  constructor(private http: Http) { }

  //consultar 
   consultar(filtro: GeneroFiltro): Promise<any> {
       const params = new URLSearchParams();
       const headers = new Headers;
       headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
       params.set('page', filtro.page.toString());
       params.set('size', filtro.size.toString());
        if(filtro.nmGenero) {
          params.set('nmGenero', filtro.nmGenero);
        }
        return this.http.get(`${this.generoURL}`,
        { headers, search: filtro })
        .toPromise()
        .then(response =>{
          const responseJson = response.json();
          const genero = responseJson.content;

          const resultado = {
            genero,
            total: responseJson.totalElements
          };
          return resultado;
        });
   }


}
