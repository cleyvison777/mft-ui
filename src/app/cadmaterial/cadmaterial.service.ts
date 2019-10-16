import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { URLSearchParams } from '@angular/http';
import { Cadmaterial } from '../core/model';


export class CadmaterialFiltro{
  nmmaterial : string;
  page = 0;
  size = 5;
}
@Injectable()
export class CadmaterialService {

  cadmaterialURL = 'http://localhost:8081/cadmaterial';


  constructor(private http: Http) { }

  pesquisar(filtro: CadmaterialFiltro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    if (filtro.nmmaterial){
      params.set('nmmaterial', filtro.nmmaterial);

  }

    return this.http.get(`${this.cadmaterialURL}?resumo`, {  headers, search: filtro })
    .toPromise()
      .then(response => {

          const responseJson = response.json();
          const cadmaterial = responseJson.content;

          const resultado = {
            cadmaterial,
            total: responseJson.totalElements
          };
          return resultado;
    })

    };
    excluir(codigo: number): Promise<void> {
      const headers = new Headers;
      headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

      return this.http.delete(`${this.cadmaterialURL}/${codigo}`, { headers })
        .toPromise()
        .then(() => null);
    }

    adicionar(cadmaterial: Cadmaterial): Promise<Cadmaterial>{
      const headers = new Headers;
      headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
      headers.append('Content-Type', 'application/json');

      return this.http.post(this.cadmaterialURL, JSON.stringify(cadmaterial), { headers })
        .toPromise()
        .then(response => response.json());
    }

    listarTodas(): Promise<any> {
      const headers = new Headers;
       headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
       headers.append('Content-Type', 'application/json');

       return this.http.get(this.cadmaterialURL, { headers })
         .toPromise()
         .then(response => response.json().content);
   }

   atualizar(cadmaterial: Cadmaterial): Promise<Cadmaterial>{
     const headers = new Headers;
     headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
     headers.append('Content-Type', 'application/json');

     return this.http.put(`${this.cadmaterialURL}/${cadmaterial.cdMaterial}`,
         JSON.stringify(cadmaterial), { headers })
       .toPromise()
       .then(response => {
         const cadmaterialAlterada = response.json() as Cadmaterial;


         return cadmaterialAlterada;
       });
 }

   buscarPorCodigo(codigo: number): Promise<Cadmaterial> {
     const headers = new Headers();
     headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

     return this.http.get(`${this.cadmaterialURL}/${codigo}`, { headers })
       .toPromise()
       .then(response => {
         const cadmaterial = response.json() as Cadmaterial;

         return cadmaterial;
       });
 }

}
