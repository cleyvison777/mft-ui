import { CadClassTamanhoIndividuo } from './../core/model';
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

      listarTodasClasseIndividuo(): Promise<any> {
        const headers = new Headers;
      headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
      headers.append('Content-Type', 'application/json');
        return this.http.get(`${this.ClassIndividuoURL}`, {headers})
         .toPromise()
         .then(response => response.json().content);
      }

      adicionar(cadClassTamanhoIndividuo: CadClassTamanhoIndividuo): Promise<CadClassTamanhoIndividuo> {
        const headers = new Headers;
         headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
         headers.append('Content-Type', 'application/json');

         return this.http.post(this.ClassIndividuoURL, JSON.stringify(cadClassTamanhoIndividuo), {headers})
          .toPromise()
           .then(response => response.json());
      }

      excluir(cdClasseTamanho: number): Promise<void> {
        const headers = new Headers;
        headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
         return this.http.delete(`${this.ClassIndividuoURL}/ ${cdClasseTamanho}`, {headers})
           .toPromise()
            .then(() => null);

      }

      atualizar(cadClassTamanhoIndividuo: CadClassTamanhoIndividuo): Promise<CadClassTamanhoIndividuo> {
        const headers = new Headers;
        headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
        headers.append('Content-Type', 'application/json');
        return this.http.put(`${this.ClassIndividuoURL}/${cadClassTamanhoIndividuo.cdClasseTamanho}`,
         JSON.stringify(cadClassTamanhoIndividuo), {headers})
          .toPromise()
           .then(response => {
             const cadClassTamanhoIndividuoAltera = response.json() as CadClassTamanhoIndividuo;
              return cadClassTamanhoIndividuoAltera;
           });
      }

      buscarClassTamanhoPeloCodigo(cdClasseTamanho: number): Promise<CadClassTamanhoIndividuo> {
        const headers = new Headers();
        headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
        return this.http.get(`${this.ClassIndividuoURL}/${cdClasseTamanho}`, {headers})
         .toPromise()
          .then(response =>{
            const cadClassTamanhoIndividuo = response.json() as CadClassTamanhoIndividuo;

             return cadClassTamanhoIndividuo;

          });
      }

      
  }
