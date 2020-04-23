import { UsoEspecie } from './../core/model';
import { Http, URLSearchParams, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

export class UsoEspecieFiltro {
  nmUso: string;
  page = 0;
  size = 10;
}

@Injectable({
  providedIn: 'root'
})
export class UsoespecieService {

  cadusoEspecieURL = 'http://localhost:8081/usoespecie';
  constructor(private http: Http) { }
  

  pesquisarUsoEspecie(filtro: UsoEspecieFiltro): Promise<any> {
    const params = new URLSearchParams;
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    params.set('page', filtro.page.toString());
    params.set('size', filtro.size.toString());

    if(filtro.nmUso) {
      params.set('nmUso', filtro.nmUso);
    }
    return this.http.get(`${this.cadusoEspecieURL}`, {headers, search: filtro})
     .toPromise()
      .then(response => {
        const responseJson = response.json();
        const cadEspecieUso = responseJson.content;

        const resultado = {
          cadEspecieUso,
           total: responseJson.totalElements
        };
        return resultado;
      });
  }

  buscarPeloCodigo(cdUso: number): Promise<UsoEspecie> {
    const headers = new Headers();
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
     return this.http.get(`${this.cadusoEspecieURL}/${cdUso}`, { headers })
      .toPromise()
       .then(response => {
         const cadEspecieUso = response.json() as UsoEspecie;
           return cadEspecieUso;
       });
  }

}