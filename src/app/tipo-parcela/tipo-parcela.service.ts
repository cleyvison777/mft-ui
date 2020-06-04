import { CadTipoParcela } from './../core/model';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';
import { toPublicName } from '@angular/compiler/src/i18n/serializers/xmb';

 export class TipoParcelaFiltro {
  nmTipoParcela: string;
  page = 0;
  size = 10;
}
@Injectable({
  providedIn: 'root'
})
export class TipoParcelaService {
TipoParcelaURL='http://localhost:8082/cadtipoparcela';
  constructor( private http: Http) { }


  pesquisaTipoParcela(filtro: TipoParcelaFiltro): Promise<any> {
      const params = new URLSearchParams;
      const headers = new Headers;
      headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
      params.set('page', filtro.page.toString());
      params.set('size', filtro.size.toString());

      if(filtro.nmTipoParcela){
        params.set('nmTipoParcela', filtro.nmTipoParcela);
      }

      return this.http.get(`${this.TipoParcelaURL}`, { headers, search: filtro})
       .toPromise()
        .then(response => {
          const responseJason = response.json();
          const listaTipoparcela = responseJason.content;

          const resultado = {
            listaTipoparcela,
            total: responseJason.totalElements
          };
           return resultado;
        });

  }

  listarTodasParcelas(): Promise<any> {
    const headers = new Headers;
      headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
      headers.append('Content-Type', 'application/json');
      return this.http.get(`${this.TipoParcelaURL}`, {headers})
       .toPromise()
       .then(response => response.json().content);
  }

  adicionarTipoParcela(cadTipoParcela: CadTipoParcela): Promise<CadTipoParcela> {
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    headers.append('Content-Type', 'application/json');

   return this.http.post(this.TipoParcelaURL, JSON.stringify(cadTipoParcela), { headers})
    .toPromise()
     .then(response => response.json());
  }
  excluirTipoParcela(cdTipoParcela: number): Promise<void> {
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
     return this.http.delete(`${this.TipoParcelaURL}/ ${cdTipoParcela}`, {headers})
      .toPromise()
       .then(() => null);
  }
}



