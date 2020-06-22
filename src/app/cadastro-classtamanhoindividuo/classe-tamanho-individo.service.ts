import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';


export class ClassIndividuoFiltro {
  page = 0;
  size = 15;
  nmClasseTamanho: string;
}
@Injectable({
  providedIn: 'root'
})
export class ClasseTamanhoIndividoService {

 ClassIndividuoURL = 'http://localhost:8082/classtamanhoindividuo';

  constructor( private http: Http) { }

         //consultar 
  consultar(filtro: ClassIndividuoFiltro): Promise<any> {
    const params = new URLSearchParams;
        const headers = new Headers;
        params.set('page', filtro.page.toString());
        params.set('size', filtro.size.toString());
         if(filtro.nmClasseTamanho){
           params.set('nmClasseTamanho', filtro.nmClasseTamanho);
         }
         return this.http.get(`${this.ClassIndividuoURL}`, { headers, search: filtro})
         .toPromise()
         .then(response => {
          const responseJson = response.json();
          const listaClasseTamanho = responseJson.content;
          const resultado = {
            listaClasseTamanho,
            total: responseJson.totalElements
          };
          return resultado;
         });
      }
  }
