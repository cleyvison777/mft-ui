import { CadTratamentoSilvicultural } from './../core/model';
import { Http, URLSearchParams, Headers } from '@angular/http';
import { Injectable } from '@angular/core';


export class SilviculturalFiltro {
  page = 0;
  size = 15;
  nmTratamento: string;
}
@Injectable({
  providedIn: 'root'
})
export class SituacaoService {

  SilviculturalURL = 'http://localhost:8082/cadtratamentosilvicultural';

  constructor(private http: Http) { }

  //consulta
  consultar(filtro: SilviculturalFiltro): Promise<any> {
    const params = new URLSearchParams;
    const headers = new Headers;
    params.set('page', filtro.page.toString());
    params.set('size', filtro.size.toString());

    if(filtro.nmTratamento){
      params.set('nmTratamento', filtro.nmTratamento);
    }
    return this.http.get(`${this.SilviculturalURL}`, {headers, search: filtro})
     .toPromise()
     .then(response =>{
       const responseJson = response.json();
       const listaSilvicultural = responseJson.content;
       const resultado = {
        listaSilvicultural,
        total :  responseJson.totalElements
       };
       return resultado;
     });

  }

  adicionar(cadTratamentoSilvicultural: CadTratamentoSilvicultural): Promise<CadTratamentoSilvicultural> {
        const params = new URLSearchParams;
        const headers = new Headers();
        headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.SilviculturalURL,
          JSON.stringify(cadTratamentoSilvicultural),
          {headers})
          .toPromise()
           .then(response => response.json());
  }

  excluir(cdTratamento: number): Promise<void> {
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
      return this.http.delete(`${this.SilviculturalURL}/${cdTratamento}`, { headers })
       .toPromise()
        .then(() => null);
    }

}
