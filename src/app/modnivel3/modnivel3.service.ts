import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { ModNivel3 } from '../core/model';



export class Modnivel3Filtro {

  nmNivel1: string;
  nmNivel2: string;
  codigo: string;
  page = 0;
  size = 5;
  cdNivel1: any;
  cdNivel2: any;
}

@Injectable()
export class Modnivel3Service {



  modnivel3URL = 'http://localhost:8081/modnivel3';

  URLmodnivel3_cdNivel1_1_cdNivel2_1 = 'http://localhost:8081/modnivel3?cdNivel1=1&cdNivel2=1';
  URLmodnivel3_cdNivel1_1_cdNivel2_2 = 'http://localhost:8081/modnivel3?cdNivel1=1&cdNivel2=2';
  URLmodnivel3_cdNivel1_1_cdNivel2_3 = 'http://localhost:8081/modnivel3?cdNivel1=1&cdNivel2=3';

  URLmodnivel3_cdNivel1_2_cdNivel2_4 = 'http://localhost:8081/modnivel3?cdNivel1=2&cdNivel2=4';

  URLmodnivel3_cdNivel1_3_cdNivel2_5 = 'http://localhost:8081/modnivel3?cdNivel1=3&cdNivel2=5';
  URLmodnivel3_cdNivel1_3_cdNivel2_6 = 'http://localhost:8081/modnivel3?cdNivel1=3&cdNivel2=6';

  URLmodnivel3_cdNivel1_4_cdNivel2_7 = 'http://localhost:8081/modnivel3?cdNivel1=4&cdNivel2=7';
  URLmodnivel3_cdNivel1_4_cdNivel2_8 = 'http://localhost:8081/modnivel3?cdNivel1=4&cdNivel2=8';

  URLmodnivel3_cdNivel1_5_cdNivel2_9 = 'http://localhost:8081/modnivel3?cdNivel1=5&cdNivel2=9';
  URLmodnivel3_cdNivel1_5_cdNivel2_10 = 'http://localhost:8081/modnivel3?cdNivel1=5&cdNivel2=10';

  URLmodnivel3_cdNivel1_6_cdNivel2_11 = 'http://localhost:8081/modnivel3?cdNivel1=6&cdNivel2=11';
  URLmodnivel3_cdNivel1_6_cdNivel2_12 = 'http://localhost:8081/modnivel3?cdNivel1=6&cdNivel2=12';

  constructor(private http: Http) { }



  pesquisarModNivel3_cdNivel1_1_cdNivel2_1(filtro: Modnivel3Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    return this.http.get(`${this.URLmodnivel3_cdNivel1_1_cdNivel2_1}`, { headers })
      .toPromise()
      .then(response => {

        const responseJson = response.json();
        const modnivel3 = responseJson.content;

        const resultado = {
          modnivel3,
          total: responseJson.totalElements
        };
        return resultado;
      })
  };

  pesquisarModNivel3_cdNivel1_1_cdNivel2_2(filtro: Modnivel3Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    return this.http.get(`${this.URLmodnivel3_cdNivel1_1_cdNivel2_2}`, { headers })
      .toPromise()
      .then(response => {

        const responseJson = response.json();
        const modnivel3 = responseJson.content;

        const resultado = {
          modnivel3,
          total: responseJson.totalElements
        };
        return resultado;
      })
  };

  pesquisarModNivel3_cdNivel1_1_cdNivel2_3(filtro: Modnivel3Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    return this.http.get(`${this.URLmodnivel3_cdNivel1_1_cdNivel2_3}`, { headers })
      .toPromise()
      .then(response => {

        const responseJson = response.json();
        const modnivel3 = responseJson.content;

        const resultado = {
          modnivel3,
          total: responseJson.totalElements
        };
        return resultado;
      })
  };

  pesquisarModNivel3_cdNivel1_2_cdNivel2_1(filtro: Modnivel3Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    return this.http.get(`${this.URLmodnivel3_cdNivel1_2_cdNivel2_4}`, { headers })
      .toPromise()
      .then(response => {

        const responseJson = response.json();
        const modnivel3 = responseJson.content;

        const resultado = {
          modnivel3,
          total: responseJson.totalElements
        };
        return resultado;
      })
  };

  pesquisarModNivel3_cdNivel1_3_cdNivel2_1(filtro: Modnivel3Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    return this.http.get(`${this.URLmodnivel3_cdNivel1_3_cdNivel2_5}`, { headers })
      .toPromise()
      .then(response => {

        const responseJson = response.json();
        const modnivel3 = responseJson.content;

        const resultado = {
          modnivel3,
          total: responseJson.totalElements
        };
        return resultado;
      })
  };

  pesquisarModNivel3_cdNivel1_3_cdNivel2_2(filtro: Modnivel3Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    return this.http.get(`${this.URLmodnivel3_cdNivel1_3_cdNivel2_6}`, { headers })
      .toPromise()
      .then(response => {

        const responseJson = response.json();
        const modnivel3 = responseJson.content;

        const resultado = {
          modnivel3,
          total: responseJson.totalElements
        };
        return resultado;
      })
  };

  pesquisarModNivel3_cdNivel1_4_cdNivel2_1(filtro: Modnivel3Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    return this.http.get(`${this.URLmodnivel3_cdNivel1_4_cdNivel2_7}`, { headers })
      .toPromise()
      .then(response => {

        const responseJson = response.json();
        const modnivel3 = responseJson.content;

        const resultado = {
          modnivel3,
          total: responseJson.totalElements
        };
        return resultado;
      })
  };

  pesquisarModNivel3_cdNivel1_4_cdNivel2_2(filtro: Modnivel3Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    return this.http.get(`${this.URLmodnivel3_cdNivel1_4_cdNivel2_8}`, { headers })
      .toPromise()
      .then(response => {

        const responseJson = response.json();
        const modnivel3 = responseJson.content;

        const resultado = {
          modnivel3,
          total: responseJson.totalElements
        };
        return resultado;
      })
  };

  pesquisarModNivel3_cdNivel1_5_cdNivel2_1(filtro: Modnivel3Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    return this.http.get(`${this.URLmodnivel3_cdNivel1_5_cdNivel2_9}`, { headers })
      .toPromise()
      .then(response => {

        const responseJson = response.json();
        const modnivel3 = responseJson.content;

        const resultado = {
          modnivel3,
          total: responseJson.totalElements
        };
        return resultado;
      })
  };

  pesquisarModNivel3_cdNivel1_5_cdNivel2_2(filtro: Modnivel3Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    return this.http.get(`${this.URLmodnivel3_cdNivel1_5_cdNivel2_10}`, { headers })
      .toPromise()
      .then(response => {

        const responseJson = response.json();
        const modnivel3 = responseJson.content;

        const resultado = {
          modnivel3,
          total: responseJson.totalElements
        };
        return resultado;
      })
  };

  pesquisarModNivel3_cdNivel1_6_cdNivel2_1(filtro: Modnivel3Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    return this.http.get(`${this.URLmodnivel3_cdNivel1_6_cdNivel2_11}`, { headers })
      .toPromise()
      .then(response => {

        const responseJson = response.json();
        const modnivel3 = responseJson.content;

        const resultado = {
          modnivel3,
          total: responseJson.totalElements
        };
        return resultado;
      })
  };

  pesquisarModNivel3_cdNivel1_6_cdNivel2_2(filtro: Modnivel3Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    return this.http.get(`${this.URLmodnivel3_cdNivel1_6_cdNivel2_12}`, { headers })
      .toPromise()
      .then(response => {

        const responseJson = response.json();
        const modnivel3 = responseJson.content;

        const resultado = {
          modnivel3,
          total: responseJson.totalElements
        };
        return resultado;
      })
  };

  excluir(cdNivel3: number): Promise<void> {
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    return this.http.delete(`${this.modnivel3URL}/${cdNivel3}`, { headers })
      .toPromise()
      .then(() => null);
  }

  adicionar(modnivel3: ModNivel3): Promise<ModNivel3> {
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    headers.append('Content-Type', 'application/json');

    return this.http.post(this.modnivel3URL, JSON.stringify(modnivel3), { headers })
      .toPromise()
      .then(response => response.json());
  }

  listarTodas(): Promise<any> {
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    headers.append('Content-Type', 'application/json');

    return this.http.get(this.modnivel3URL, { headers })
      .toPromise()
      .then(response => response.json().content);
  }

  listarTodas_cdNivel1_1_cdNivel2_1(): Promise<any> {
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    headers.append('Content-Type', 'application/json');

    return this.http.get(`${this.URLmodnivel3_cdNivel1_1_cdNivel2_1}`, { headers })
      .toPromise()
      .then(response => response.json().content);
  }

  listarTodas_cdNivel1_1_cdNivel2_2(): Promise<any> {
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    headers.append('Content-Type', 'application/json');

    return this.http.get(`${this.URLmodnivel3_cdNivel1_1_cdNivel2_2}`, { headers })
      .toPromise()
      .then(response => response.json().content);
  }

  listarTodas_cdNivel1_1_cdNivel2_3(): Promise<any> {
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    headers.append('Content-Type', 'application/json');

    return this.http.get(`${this.URLmodnivel3_cdNivel1_1_cdNivel2_3}`, { headers })
      .toPromise()
      .then(response => response.json().content);
  }

  listarTodas_cdNivel1_2_cdNivel2_4(): Promise<any> {
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    headers.append('Content-Type', 'application/json');

    return this.http.get(`${this.URLmodnivel3_cdNivel1_2_cdNivel2_4}`, { headers })
      .toPromise()
      .then(response => response.json().content);
  }

  listarTodas_cdNivel1_3_cdNivel2_5(): Promise<any> {
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    headers.append('Content-Type', 'application/json');

    return this.http.get(`${this.URLmodnivel3_cdNivel1_3_cdNivel2_5}`, { headers })
      .toPromise()
      .then(response => response.json().content);
  }

  listarTodas_cdNivel1_3_cdNivel2_6(): Promise<any> {
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    headers.append('Content-Type', 'application/json');

    return this.http.get(`${this.URLmodnivel3_cdNivel1_3_cdNivel2_6}`, { headers })
      .toPromise()
      .then(response => response.json().content);
  }

  listarTodas_cdNivel1_4_cdNivel2_7(): Promise<any> {
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    headers.append('Content-Type', 'application/json');

    return this.http.get(`${this.URLmodnivel3_cdNivel1_4_cdNivel2_7}`, { headers })
      .toPromise()
      .then(response => response.json().content);
  }

  listarTodas_cdNivel1_4_cdNivel2_8(): Promise<any> {
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    headers.append('Content-Type', 'application/json');

    return this.http.get(`${this.URLmodnivel3_cdNivel1_4_cdNivel2_8}`, { headers })
      .toPromise()
      .then(response => response.json().content);
  }

  listarTodas_cdNivel1_5_cdNivel2_9(): Promise<any> {
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    headers.append('Content-Type', 'application/json');

    return this.http.get(`${this.URLmodnivel3_cdNivel1_5_cdNivel2_9}`, { headers })
      .toPromise()
      .then(response => response.json().content);
  }

  listarTodas_cdNivel1_5_cdNivel2_10(): Promise<any> {
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    headers.append('Content-Type', 'application/json');

    return this.http.get(`${this.URLmodnivel3_cdNivel1_5_cdNivel2_10}`, { headers })
      .toPromise()
      .then(response => response.json().content);
  }

  listarTodas_cdNivel1_6_cdNivel2_11(): Promise<any> {
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    headers.append('Content-Type', 'application/json');

    return this.http.get(`${this.URLmodnivel3_cdNivel1_6_cdNivel2_11}`, { headers })
      .toPromise()
      .then(response => response.json().content);
  }

  listarTodas_cdNivel1_6_cdNivel2_12(): Promise<any> {
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    headers.append('Content-Type', 'application/json');

    return this.http.get(`${this.URLmodnivel3_cdNivel1_6_cdNivel2_12}`, { headers })
      .toPromise()
      .then(response => response.json().content);
  }
  listarTodasPreExplo(): Promise<any> {
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    headers.append('Content-Type', 'application/json');

    return this.http.get(`${this.modnivel3URL}?cdNivel2=1`, { headers })
      .toPromise()
      .then(response => response.json().content);
  }

  listarTodasExplo(): Promise<any> {
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    headers.append('Content-Type', 'application/json');

    return this.http.get(`${this.modnivel3URL}?cdNivel2=2`, { headers })
      .toPromise()
      .then(response => response.json().content);
  }
  listarTodasPosExplo(): Promise<any> {
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    headers.append('Content-Type', 'application/json');

    return this.http.get(`${this.modnivel3URL}?cdNivel2=3`, { headers })
      .toPromise()
      .then(response => response.json().content);
  }

  atualizar(modnivel3: ModNivel3): Promise<ModNivel3> {
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    headers.append('Content-Type', 'application/json');

    return this.http.put(`${this.modnivel3URL}/${modnivel3.cdNivel3}`,
      JSON.stringify(modnivel3), { headers })
      .toPromise()
      .then(response => {
        const modnivel3Alterada = response.json() as ModNivel3;


        return modnivel3Alterada;
      });
  }

  buscarPorCodigo(codigo: number): Promise<ModNivel3> {
    const headers = new Headers();
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    return this.http.get(`${this.modnivel3URL}/${codigo}`, { headers })
      .toPromise()
      .then(response => {
        const modnivel3 = response.json() as ModNivel3;

        return modnivel3;
      });
  }
}
