
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { URLSearchParams } from '@angular/http';
import { Modlocal1 } from 'src/app/core/model';

export class Modlocal1Filtro{
  nmlocal1 : string;
  page = 0;
  size = 5;
}

@Injectable()
export class Modlocal1Service {

  modlocal1URL = 'http://localhost:8081/unidadedeavaliacao';


  constructor(private http: Http) { }

  pesquisar(filtro: Modlocal1Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    if (filtro.nmlocal1){
      params.set('nmlocal1', filtro.nmlocal1);

  }

    return this.http.get(`${this.modlocal1URL}`, {  headers, search: filtro })
    .toPromise()
      .then(response => {

          const responseJson = response.json();
          const modlocal1 = responseJson.content;

          const resultado = {
            modlocal1,
            total: responseJson.totalElements
          };
          return resultado;
    })

    };
    excluir(cdLocal1: number): Promise<void> {
      const headers = new Headers;
      headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

      return this.http.delete(`${this.modlocal1URL}/${cdLocal1}`, { headers })
        .toPromise()
        .then(() => null);
    }

    adicionar(modlocal1: Modlocal1): Promise<Modlocal1>{
      const headers = new Headers;
      headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
      headers.append('Content-Type', 'application/json');

      return this.http.post(this.modlocal1URL, JSON.stringify(modlocal1), { headers })
        .toPromise()
        .then(response => response.json());
    }

    listarTodas(): Promise<any> {
      const headers = new Headers;
       headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
       headers.append('Content-Type', 'application/json');

       return this.http.get(this.modlocal1URL, { headers })
         .toPromise()
         .then(response => response.json().content);
   }

   atualizar(modlocal1: Modlocal1): Promise<Modlocal1>{
     const headers = new Headers;
     headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
     headers.append('Content-Type', 'application/json');

     return this.http.put(`${this.modlocal1URL}/${modlocal1.cdLocal1}`,
         JSON.stringify(modlocal1), { headers })
       .toPromise()
       .then(response => {
         const modlocal1Alterada = response.json() as Modlocal1;


         return modlocal1Alterada;
       });
 }

   buscarPorCodigo(codigo: number): Promise<Modlocal1> {
     const headers = new Headers();
     headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

     return this.http.get(`${this.modlocal1URL}/${codigo}`, { headers })
       .toPromise()
       .then(response => {
         const modlocal1 = response.json() as Modlocal1;

         return modlocal1;
       });
 }
}
