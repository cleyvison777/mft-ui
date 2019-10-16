import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { URLSearchParams } from '@angular/http';
import { Modlocal2 } from '../core/model';


export class Modlocal2Filtro {

  nmlocal1: string;
  codigo: string;
  page = 0;
  size = 5;
  cdLocal1: any;
}

@Injectable()
export class Modlocal2Service {
  modlocal2URL = 'http://localhost:8081/localdeavaliacao';


  constructor(private http: Http) { }


  pesquisarFOD(filtro: Modlocal2Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');



    return this.http.get(`${this.modlocal2URL}?cdLocal1=1`, { headers })
      .toPromise()
      .then(response => {

        const responseJson = response.json();
        const modlocal2 = responseJson.content;

        const resultado = {
          modlocal2,
          total: responseJson.totalElements
        };
        return resultado;
      })

  };

  pesquisarFOA(filtro: Modlocal2Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');



    return this.http.get(`${this.modlocal2URL}?cdLocal1=2`, { headers })
      .toPromise()
      .then(response => {

        const responseJson = response.json();
        const modlocal2 = responseJson.content;

        const resultado = {
          modlocal2,
          total: responseJson.totalElements
        };
        return resultado;
      })

  };

  pesquisarPEO(filtro: Modlocal2Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');



    return this.http.get(`${this.modlocal2URL}?cdLocal1=3`, { headers })
      .toPromise()
      .then(response => {

        const responseJson = response.json();
        const modlocal2 = responseJson.content;

        const resultado = {
          modlocal2,
          total: responseJson.totalElements
        };
        return resultado;
      })

  };

  pesquisarPATRANS(filtro: Modlocal2Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');



    return this.http.get(`${this.modlocal2URL}?cdLocal1=4`, { headers })
      .toPromise()
      .then(response => {

        const responseJson = response.json();
        const modlocal2 = responseJson.content;

        const resultado = {
          modlocal2,
          total: responseJson.totalElements
        };
        return resultado;
      })

  };

  pesquisarINFRA(filtro: Modlocal2Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');



    return this.http.get(`${this.modlocal2URL}?cdLocal1=5`, { headers })
      .toPromise()
      .then(response => {

        const responseJson = response.json();
        const modlocal2 = responseJson.content;

        const resultado = {
          modlocal2,
          total: responseJson.totalElements
        };
        return resultado;
      })

  };

  pesquisarMON(filtro: Modlocal2Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');



    return this.http.get(`${this.modlocal2URL}?cdLocal1=6`, { headers })
      .toPromise()
      .then(response => {

        const responseJson = response.json();
        const modlocal2 = responseJson.content;

        const resultado = {
          modlocal2,
          total: responseJson.totalElements
        };
        return resultado;
      })

  };

  pesquisarACAM(filtro: Modlocal2Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');



    return this.http.get(`${this.modlocal2URL}?cdLocal1=7`, { headers })
      .toPromise()
      .then(response => {

        const responseJson = response.json();
        const modlocal2 = responseJson.content;

        const resultado = {
          modlocal2,
          total: responseJson.totalElements
        };
        return resultado;
      })

  };


  pesquisarESCRI(filtro: Modlocal2Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');



    return this.http.get(`${this.modlocal2URL}?cdLocal1=8`, { headers })
      .toPromise()
      .then(response => {

        const responseJson = response.json();
        const modlocal2 = responseJson.content;

        const resultado = {
          modlocal2,
          total: responseJson.totalElements
        };
        return resultado;
      })

  };

  pesquisarENTOR(filtro: Modlocal2Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');



    return this.http.get(`${this.modlocal2URL}?cdLocal1=9`, { headers })
      .toPromise()
      .then(response => {

        const responseJson = response.json();
        const modlocal2 = responseJson.content;

        const resultado = {
          modlocal2,
          total: responseJson.totalElements
        };
        return resultado;
      })

  };
  excluir(cdLocal2: number): Promise<void> {
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    return this.http.delete(`${this.modlocal2URL}/${cdLocal2}`, { headers })
      .toPromise()
      .then(() => null);
  }

  adicionar(modlocal2: Modlocal2): Promise<Modlocal2> {
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    headers.append('Content-Type', 'application/json');

    return this.http.post(this.modlocal2URL, JSON.stringify(modlocal2), { headers })
      .toPromise()
      .then(response => response.json());
  }

  listarTodas(): Promise<any> {
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    headers.append('Content-Type', 'application/json');

    return this.http.get(this.modlocal2URL, { headers })
      .toPromise()
      .then(response => response.json().content);
  }

  atualizar(modlocal2: Modlocal2): Promise<Modlocal2> {
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    headers.append('Content-Type', 'application/json');

    return this.http.put(`${this.modlocal2URL}/${modlocal2.cdLocal2}`,
      JSON.stringify(modlocal2), { headers })
      .toPromise()
      .then(response => {
        const modlocal2Alterada = response.json() as Modlocal2;


        return modlocal2Alterada;
      });
  }

  buscarPorCodigo(codigo: number): Promise<Modlocal2> {
    const headers = new Headers();
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    return this.http.get(`${this.modlocal2URL}/${codigo}`, { headers })
      .toPromise()
      .then(response => {
        const modlocal2 = response.json() as Modlocal2;

        return modlocal2;
      });
  }

  listarFOD(): Promise<any> {
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    headers.append('Content-Type', 'application/json');

    return this.http.get(`${this.modlocal2URL}?cdLocal1=1`, { headers })
      .toPromise()
      .then(response => response.json().content);
  }

  listarFOA(): Promise<any> {
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    headers.append('Content-Type', 'application/json');

    return this.http.get(`${this.modlocal2URL}?cdLocal1=2`, { headers })
      .toPromise()
      .then(response => response.json().content);
  }


  listarPEO(): Promise<any> {
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    headers.append('Content-Type', 'application/json');

    return this.http.get(`${this.modlocal2URL}?cdLocal1=3`, { headers })
      .toPromise()
      .then(response => response.json().content);
  }

  listarPATRANS(): Promise<any> {
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    headers.append('Content-Type', 'application/json');

    return this.http.get(`${this.modlocal2URL}?cdLocal1=4`, { headers })
      .toPromise()
      .then(response => response.json().content);
  }
  listarINFRA(): Promise<any> {
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    headers.append('Content-Type', 'application/json');

    return this.http.get(`${this.modlocal2URL}?cdLocal1=5`, { headers })
      .toPromise()
      .then(response => response.json().content);
  }
  listarMON(): Promise<any> {
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    headers.append('Content-Type', 'application/json');

    return this.http.get(`${this.modlocal2URL}?cdLocal1=6`, { headers })
      .toPromise()
      .then(response => response.json().content);
  }
  listarACAM(): Promise<any> {
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    headers.append('Content-Type', 'application/json');

    return this.http.get(`${this.modlocal2URL}?cdLocal1=7`, { headers })
      .toPromise()
      .then(response => response.json().content);
  }
  listarESCRI(): Promise<any> {
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    headers.append('Content-Type', 'application/json');

    return this.http.get(`${this.modlocal2URL}?cdLocal1=8`, { headers })
      .toPromise()
      .then(response => response.json().content);
  }
  listarENTOR(): Promise<any> {
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    headers.append('Content-Type', 'application/json');

    return this.http.get(`${this.modlocal2URL}?cdLocal1=9`, { headers })
      .toPromise()
      .then(response => response.json().content);
  }


}
