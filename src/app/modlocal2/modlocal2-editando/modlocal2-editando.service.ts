import { Injectable } from '@angular/core';
import { Modlocal2 } from 'src/app/core/model';
import { Modlocal2Filtro } from '../modlocal2.service';
import { Http, Headers } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class Modlocal2EditandoService {
  modlocal2URL = 'http://localhost:8081/localdeavaliacao';


  constructor(private http: Http) { }


  pesquisar(filtro: Modlocal2Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');



    return this.http.get(`${this.modlocal2URL}?cdLocal1=${filtro.cdLocal1}`, {  headers })
    .toPromise()
      .then(response => {

          const responseJson = response.json();
          const modlocal2 = responseJson.content;

          const resultado = {
            modlocal2,
            total: responseJson.totalElements
          };
          return resultado;
    })

    };
    excluir(codigo: number): Promise<void> {
      const headers = new Headers;
      headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

      return this.http.delete(`${this.modlocal2URL}/${codigo}`, { headers })
        .toPromise()
        .then(() => null);
    }

    adicionar(modlocal2: Modlocal2): Promise<Modlocal2>{
      const headers = new Headers;
      headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
      headers.append('Content-Type', 'application/json');

      return this.http.post(this.modlocal2URL, JSON.stringify(modlocal2), { headers })
        .toPromise()
        .then(response => response.json());
    }


    listarTodas(): Promise<any> {
      const headers = new Headers;
       headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
       headers.append('Content-Type', 'application/json');

       return this.http.get(this.modlocal2URL, { headers })
         .toPromise()
         .then(response => response.json().content);
   }

   atualizar(modlocal2: Modlocal2): Promise<Modlocal2>{
     const headers = new Headers;
     headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
     headers.append('Content-Type', 'application/json');

     return this.http.put(`${this.modlocal2URL}/${modlocal2.cdLocal2}`,
         JSON.stringify(modlocal2), { headers })
       .toPromise()
       .then(response => {
         const modlocal2Alterada = response.json() as Modlocal2;


         return modlocal2Alterada;
       });
 }

   buscarPorCodigo(codigo: number): Promise<Modlocal2> {
     const headers = new Headers();
     headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

     return this.http.get(`${this.modlocal2URL}/${codigo}`, { headers })
       .toPromise()
       .then(response => {
         const modlocal2 = response.json() as Modlocal2;

         return modlocal2;
       });
 }
}
