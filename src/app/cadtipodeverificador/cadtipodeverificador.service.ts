import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { URLSearchParams } from '@angular/http';
import { Cadtipodeverificador } from "../core/model";


export class CadtipodeverificadorFiltro{
  nmTipoDeVerificador : string;
  page = 0;
  size = 5;
}

@Injectable()
export class CadtipodeverificadorService {

  cadtipodeverificadorURL = 'http://localhost:8081/cadtipodeverificador';


  constructor(private http: Http) { }

  pesquisar(filtro: CadtipodeverificadorFiltro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    if (filtro.nmTipoDeVerificador){
      params.set('nmTipoDeVerificador', filtro.nmTipoDeVerificador);

  }

    return this.http.get(`${this.cadtipodeverificadorURL}?resumo`, {  headers, search: filtro })
    .toPromise()
      .then(response => {

          const responseJson = response.json();
          const cadtipodeverificador = responseJson.content;

          const resultado = {
            cadtipodeverificador,
            total: responseJson.totalElements
          };
          return resultado;
    })

    };
    excluir(codigo: number): Promise<void> {
      const headers = new Headers;
      headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

      return this.http.delete(`${this.cadtipodeverificadorURL}/${codigo}`, { headers })
        .toPromise()
        .then(() => null);
    }

    adicionar(cadtipodeverificador: Cadtipodeverificador): Promise<Cadtipodeverificador>{
      const headers = new Headers;
      headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
      headers.append('Content-Type', 'application/json');

      return this.http.post(this.cadtipodeverificadorURL, JSON.stringify(cadtipodeverificador), { headers })
        .toPromise()
        .then(response => response.json());
    }

    atualizar(cadtipodeverificador: Cadtipodeverificador): Promise<Cadtipodeverificador>{
      const headers = new Headers;
      headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
      headers.append('Content-Type', 'application/json');

      return this.http.put(`${this.cadtipodeverificadorURL}/${cadtipodeverificador.cdTipoDeVerificador}`,
          JSON.stringify(cadtipodeverificador), { headers })
        .toPromise()
        .then(response => {
          const cadtipodeverificadorAlterado = response.json() as Cadtipodeverificador;


          return cadtipodeverificadorAlterado;
        });
  }

    buscarPorCodigo(codigo: number): Promise<Cadtipodeverificador> {
      const headers = new Headers();
      headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

      return this.http.get(`${this.cadtipodeverificadorURL}/${codigo}`, { headers })
        .toPromise()
        .then(response => {
          const cadtipodeverificador = response.json() as Cadtipodeverificador;

          return cadtipodeverificador;
        });
  }

  listarTodas(): Promise<any> {
     const headers = new Headers;
     headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
     headers.append('Content-Type', 'application/json');

     return this.http.get(this.cadtipodeverificadorURL, { headers })
       .toPromise()
       .then(response => response.json().content);
 }
}
