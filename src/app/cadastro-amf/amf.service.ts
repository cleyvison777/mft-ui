import { CadAmf } from './../core/model';
import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';



export class CadeAmfFiltro {

  nmArea: string;
  pagina = 0;
  itensPorPagina = 5;
}


@Injectable({
  providedIn: 'root'
})

export class AmfService {


  cadAmfURL = 'http://localhost:8080/cadamf';
  constructor(private http: Http) { }

  consultar(filtro: CadeAmfFiltro): Promise<any> {
    const params = new URLSearchParams();
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    params.set('page', filtro.pagina.toString());
    params.set('size', filtro.itensPorPagina.toString());

    if (filtro.nmArea) {
      params.set('nmArea', filtro.nmArea);
    }
  return  this.http.get(`${this.cadAmfURL}`, 
     { headers, search: filtro })
    .toPromise()
    .then (response => response.json().content);
    }



    adicionar(cadAmf: CadAmf): Promise<CadAmf> {
    const params = new URLSearchParams;
    const headers = new Headers();
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    headers.append('Content-Type', 'application/json');

    return this.http.post(this.cadAmfURL,
      JSON.stringify(cadAmf), {headers})
      .toPromise()
      .then(response => response.json());
    }
  }

 


  // adicionar(cidade: any): Promise<any> {
  //   return this.http.post('http://localhost:3000/cidades', cidade)
  //    .toPromise()
  //    .then(Response => Response.json());
  //   }




