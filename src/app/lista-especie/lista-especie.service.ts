import { Http, Headers } from '@angular/http';
import { CadListaEspecie } from './../core/model';
import { Injectable } from '@angular/core';

@Injectable(
  { providedIn: 'root'}
)
export class ListaEspecieService {

 CadListaEspecieURL = 'http://localhost:8080/cadlistaespecie';

 constructor( private http: Http) { }
  
  listarTodasEspecie(): Promise<any> {
  const headers = new Headers;
  headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
  headers.append('Content-Type', 'application/json');

  return this.http.get(this. CadListaEspecieURL, { headers })
  .toPromise()
  .then(response => response.json().content);
  }

}
