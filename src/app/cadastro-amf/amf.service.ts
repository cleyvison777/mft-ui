import { CadAmf } from './../core/model';
import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AmfService {


  cadAmfURL = 'http://localhost:8080/cadamf';
  constructor(private http: Http) { }
  consultar(): Promise<any> {
    
    const params = new URLSearchParams;
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
     
  return  this.http.get(`${this.cadAmfURL}`, {headers})
    .toPromise()
    .then(Response => Response.json().content);
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




