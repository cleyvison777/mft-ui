import { CadAmf } from './../core/model';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';



export class CadeAmfFiltro {

  nmArea: string;
  page = 0;
  size = 5;
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
    params.set('page', filtro.page.toString());
    params.set('size', filtro.size.toString());

    if (filtro.nmArea) {
      params.set('nmArea', filtro.nmArea);
    }

    return this.http.get(`${this.cadAmfURL}`,
      { headers, search: filtro })
      .toPromise()
      .then(response => {
        const responseJson = response.json();
        const amf = responseJson.content;

        const resultado = {
          amf,
          total: responseJson.totalElements
        };
        return resultado;
      });
  }



  adicionar(cadAmf: CadAmf): Promise<CadAmf> {
    const params = new URLSearchParams;
    const headers = new Headers();
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    headers.append('Content-Type', 'application/json');

    return this.http.post(this.cadAmfURL,
      JSON.stringify(cadAmf), { headers })
      .toPromise()
      .then(response => response.json());
  }

  atualizar(cadAmf: CadAmf): Promise<CadAmf> {
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    headers.append('Content-Type', 'application/json');
     return this.http.put(`${this.cadAmfURL}/${cadAmf.cdarea}`,
     JSON.stringify(cadAmf), { headers })
     .toPromise()
     .then(response =>{
       const cadamfaltera = response.json() as CadAmf;

       return cadamfaltera;
     });
  }

  buscarPeloCodigo(cdarea: number): Promise<CadAmf> {
    const headers = new Headers();
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    return this.http.get(`${this.cadAmfURL}/${cdarea}`, { headers })
    .toPromise()
    .then(response => {
      const cadAmf = response.json() as CadAmf;

      return cadAmf;
    });
  }

   excluir(cdarea: number): Promise<void> {
   const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    return this.http.delete(`${this.cadAmfURL}/${cdarea}`, { headers })
    .toPromise()
    .then(() => null);
   }
}







