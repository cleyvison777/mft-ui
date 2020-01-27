import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { promise } from 'protractor';


@Injectable({
  providedIn: 'root'
})
export class ArvoreService {

  constructor(private http: Http) { }

  consultar(): Promise<any> {
    return this.http.get('http://localhost:3000/cidades')
    .toPromise()
    .then(Response =>  Response.json());
   }

   adicionar(cidade: any): Promise<any> {
   return this.http.post('http://localhost:3000/cidades', cidade)
    .toPromise()
    .then(Response => Response.json());
   }

   excluir(id: number): Promise<void> {
    return  this.http.delete(`http://localhost:3000/cidades/${id}`)
      .toPromise()
      .then(() => null);
   }

   atualizar(cidade: any): Promise<any>{
     return this.http.put(`http://localhost:3000/cidades/${cidade.id}`, cidade)
     .toPromise()
     .then(Response => Response.json());
   }
}
