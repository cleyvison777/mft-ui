import { Cadfrequencia } from './../core/model';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { URLSearchParams } from '@angular/http';

export class CadfrequenciaFiltro{
  nmFrequencia : string;
  page = 0;
  size = 5;
}

@Injectable()
export class CadfrequenciaService {

  cadfrequenciaURL = 'http://localhost:8081/cadfrequencia';


  constructor(private http: Http) { }

  pesquisar(filtro: CadfrequenciaFiltro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    if (filtro.nmFrequencia){
      params.set('nmFrequencia', filtro.nmFrequencia);

  }

    return this.http.get(`${this.cadfrequenciaURL}?resumo`, {  headers, search: filtro })
    .toPromise()
      .then(response => {

          const responseJson = response.json();
          const cadfrequencia = responseJson.content;

          const resultado = {
            cadfrequencia,
            total: responseJson.totalElements
          };
          return resultado;
    })

    };
    excluir(codigo: number): Promise<void> {
      const headers = new Headers;
      headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

      return this.http.delete(`${this.cadfrequenciaURL}/${codigo}`, { headers })
        .toPromise()
        .then(() => null);
    }

    adicionar(cadfrequencia: Cadfrequencia): Promise<Cadfrequencia>{
      const headers = new Headers;
      headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
      headers.append('Content-Type', 'application/json');

      return this.http.post(this.cadfrequenciaURL, JSON.stringify(cadfrequencia), { headers })
        .toPromise()
        .then(response => response.json());
    }
    listarTodas(): Promise<any> {
      const headers = new Headers;
       headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
       headers.append('Content-Type', 'application/json');

       return this.http.get(this.cadfrequenciaURL, { headers })
         .toPromise()
         .then(response => response.json().content);
   }

   atualizar(cadfrequencia: Cadfrequencia): Promise<Cadfrequencia>{
     const headers = new Headers;
     headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
     headers.append('Content-Type', 'application/json');

     return this.http.put(`${this.cadfrequenciaURL}/${cadfrequencia.cdFrequencia}`,
         JSON.stringify(cadfrequencia), { headers })
       .toPromise()
       .then(response => {
         const cadfrequenciaAlterada = response.json() as Cadfrequencia;


         return cadfrequenciaAlterada;
       });
 }

   buscarPorCodigo(codigo: number): Promise<Cadfrequencia> {
     const headers = new Headers();
     headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

     return this.http.get(`${this.cadfrequenciaURL}/${codigo}`, { headers })
       .toPromise()
       .then(response => {
         const cadfrequencia = response.json() as Cadfrequencia;

         return cadfrequencia;
       });
 }

}
