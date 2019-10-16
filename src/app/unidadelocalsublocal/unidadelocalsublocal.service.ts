

import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Modlocal3 } from '../core/model';

export class Modlocal3Filtro {

  nmlocal1: string;
  nmLocal2: String;
  codigo: string;
  page = 0;
  size = 5;
  cdLocal2: any;
}

@Injectable()
export class UnidadelocalsublocalService {

  modLocal3URL = 'http://localhost:8081/sublocaldeavaliacao';

  modLocal3URL_cdLocal1_1_cdLocal2_1 = 'http://localhost:8081/sublocaldeavaliacao?cdLocal1=1&cdLocal2=1';
  modLocal3URL_cdLocal1_1_cdLocal2_2 = 'http://localhost:8081/sublocaldeavaliacao?cdLocal1=1&cdLocal2=2';
  modLocal3URL_cdLocal1_1_cdLocal2_3 = 'http://localhost:8081/sublocaldeavaliacao?cdLocal1=1&cdLocal2=3';

  modLocal3URL_cdLocal1_2_cdLocal2_4 = 'http://localhost:8081/sublocaldeavaliacao?cdLocal1=2&cdLocal2=4';
  modLocal3URL_cdLocal1_2_cdLocal2_5 = 'http://localhost:8081/sublocaldeavaliacao?cdLocal1=2&cdLocal2=5';

  modLocal3URL_cdLocal1_3_cdLocal2_6 = 'http://localhost:8081/sublocaldeavaliacao?cdLocal1=3&cdLocal2=6';
  modLocal3URL_cdLocal1_3_cdLocal2_7 = 'http://localhost:8081/sublocaldeavaliacao?cdLocal1=3&cdLocal2=7';
  modLocal3URL_cdLocal1_3_cdLocal2_8 = 'http://localhost:8081/sublocaldeavaliacao?cdLocal1=3&cdLocal2=8';
  modLocal3URL_cdLocal1_3_cdLocal2_9 = 'http://localhost:8081/sublocaldeavaliacao?cdLocal1=3&cdLocal2=9';

  modLocal3URL_cdLocal1_4_cdLocal2_10 = 'http://localhost:8081/sublocaldeavaliacao?cdLocal1=4&cdLocal2=10';
  modLocal3URL_cdLocal1_4_cdLocal2_11 = 'http://localhost:8081/sublocaldeavaliacao?cdLocal1=4&cdLocal2=11';

  modLocal3URL_cdLocal1_5_cdLocal2_12 = 'http://localhost:8081/sublocaldeavaliacao?cdLocal1=5&cdLocal2=12';
  modLocal3URL_cdLocal1_5_cdLocal2_13 = 'http://localhost:8081/sublocaldeavaliacao?cdLocal1=5&cdLocal2=13';
  modLocal3URL_cdLocal1_5_cdLocal2_14 = 'http://localhost:8081/sublocaldeavaliacao?cdLocal1=5&cdLocal2=14';
  modLocal3URL_cdLocal1_5_cdLocal2_15 = 'http://localhost:8081/sublocaldeavaliacao?cdLocal1=5&cdLocal2=15';

  modLocal3URL_cdLocal1_6_cdLocal2_16 = 'http://localhost:8081/sublocaldeavaliacao?cdLocal1=6&cdLocal2=16';
  modLocal3URL_cdLocal1_6_cdLocal2_17 = 'http://localhost:8081/sublocaldeavaliacao?cdLocal1=6&cdLocal2=17';
  modLocal3URL_cdLocal1_6_cdLocal2_18 = 'http://localhost:8081/sublocaldeavaliacao?cdLocal1=6&cdLocal2=18';

  modLocal3URL_cdLocal1_7_cdLocal2_19 = 'http://localhost:8081/sublocaldeavaliacao?cdLocal1=7&cdLocal2=19';
  modLocal3URL_cdLocal1_7_cdLocal2_20 = 'http://localhost:8081/sublocaldeavaliacao?cdLocal1=7&cdLocal2=20';
  modLocal3URL_cdLocal1_7_cdLocal2_21 = 'http://localhost:8081/sublocaldeavaliacao?cdLocal1=7&cdLocal2=21';

  modLocal3URL_cdLocal1_8_cdLocal2_22 = 'http://localhost:8081/sublocaldeavaliacao?cdLocal1=8&cdLocal2=22';
  modLocal3URL_cdLocal1_8_cdLocal2_23 = 'http://localhost:8081/sublocaldeavaliacao?cdLocal1=8&cdLocal2=23';
  modLocal3URL_cdLocal1_8_cdLocal2_24 = 'http://localhost:8081/sublocaldeavaliacao?cdLocal1=8&cdLocal2=24';

  modLocal3URL_cdLocal1_9_cdLocal2_25 = 'http://localhost:8081/sublocaldeavaliacao?cdLocal1=9&cdLocal2=25';
  modLocal3URL_cdLocal1_9_cdLocal2_26 = 'http://localhost:8081/sublocaldeavaliacao?cdLocal1=9&cdLocal2=26';

  constructor(private http: Http) { }


  adicionar(modlocal3: Modlocal3): Promise<Modlocal3> {
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    headers.append('Content-Type', 'application/json');

    return this.http.post(this.modLocal3URL, JSON.stringify(modlocal3), { headers })
      .toPromise()
      .then(response => response.json());
  }

  buscarPorCodigo(codigo: number): Promise<Modlocal3> {
    const headers = new Headers();
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    return this.http.get(`${this.modLocal3URL}/${codigo}`, { headers })
      .toPromise()
      .then(response => {
        const modlocal3 = response.json() as Modlocal3;

        return modlocal3;
      });
  }

  atualizar(modlocal3: Modlocal3): Promise<Modlocal3> {
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    headers.append('Content-Type', 'application/json');

    return this.http.put(`${this.modLocal3URL}/${modlocal3.cdLocal3}`,
      JSON.stringify(modlocal3), { headers })
      .toPromise()
      .then(response => {
        const modlocal3Alterada = response.json() as Modlocal3;


        return modlocal3Alterada;
      });
  }




  pesquisarEmTodosOsLocais(filtro: Modlocal3Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');



    return this.http.get(`${this.modLocal3URL}?cdLocal2=1&cdLocal1=1`, { headers })
      .toPromise()
      .then(response => {

        const responseJson = response.json();
        const modlocal3 = responseJson.content;

        const resultado = {
          modlocal3,
          total: responseJson.totalElements
        };
        return resultado;
      })

  };



  listarEmTodosOsLocais(): Promise<any> {
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    headers.append('Content-Type', 'application/json');

    return this.http.get(this.modLocal3URL_cdLocal1_1_cdLocal2_1, { headers })
      .toPromise()
      .then(response => response.json().content);
  }

  pesquisarPicadasInventario(filtro: Modlocal3Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');



    return this.http.get(`${this.modLocal3URL}?cdLocal2=2&cdLocal1=1`, { headers })
      .toPromise()
      .then(response => {

        const responseJson = response.json();
        const modlocal3 = responseJson.content;

        const resultado = {
          modlocal3,
          total: responseJson.totalElements
        };
        return resultado;
      })

  };


  listarPicadasDeInventario(): Promise<any> {
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    headers.append('Content-Type', 'application/json');

    return this.http.get(this.modLocal3URL_cdLocal1_1_cdLocal2_2, { headers })
      .toPromise()
      .then(response => response.json().content);
  }

   pesquisarDerruba(filtro: Modlocal3Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');



    return this.http.get(`${this.modLocal3URL}?cdLocal2=3&cdLocal1=1`, { headers })
      .toPromise()
      .then(response => {

        const responseJson = response.json();
        const modlocal3 = responseJson.content;

        const resultado = {
          modlocal3,
          total: responseJson.totalElements
        };
        return resultado;
      })

  };

  listarLocalDeDerruba(): Promise<any> {
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    headers.append('Content-Type', 'application/json');

    return this.http.get(this.modLocal3URL_cdLocal1_1_cdLocal2_3, { headers })
      .toPromise()
      .then(response => response.json().content);
  }


  pesquisarEmTodosOsLocais2(filtro: Modlocal3Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');



    return this.http.get(`${this.modLocal3URL}?cdLocal2=4&cdLocal1=2`, { headers })
      .toPromise()
      .then(response => {

        const responseJson = response.json();
        const modlocal3 = responseJson.content;

        const resultado = {
          modlocal3,
          total: responseJson.totalElements
        };
        return resultado;
      })

  };

  listarEmTodosOsLocais2(): Promise<any> {
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    headers.append('Content-Type', 'application/json');

    return this.http.get(this.modLocal3URL_cdLocal1_2_cdLocal2_4, { headers })
      .toPromise()
      .then(response => response.json().content);
  }

  pesquisarTrilhasDeArraste(filtro: Modlocal3Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');



    return this.http.get(`${this.modLocal3URL}?cdLocal2=5&cdLocal1=2`, { headers })
      .toPromise()
      .then(response => {

        const responseJson = response.json();
        const modlocal3 = responseJson.content;

        const resultado = {
          modlocal3,
          total: responseJson.totalElements
        };
        return resultado;
      })

  };

  listarTrilhasDeArraste(): Promise<any> {
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    headers.append('Content-Type', 'application/json');

    return this.http.get(this.modLocal3URL_cdLocal1_2_cdLocal2_5, { headers })
      .toPromise()
      .then(response => response.json().content);
  }

  pesquisarEmTodosOsLocais3(filtro: Modlocal3Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');



    return this.http.get(`${this.modLocal3URL}?cdLocal2=6&cdLocal1=3`, { headers })
      .toPromise()
      .then(response => {

        const responseJson = response.json();
        const modlocal3 = responseJson.content;

        const resultado = {
          modlocal3,
          total: responseJson.totalElements
        };
        return resultado;
      })

  };

  listarEmTodosOsLocais3(): Promise<any> {
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    headers.append('Content-Type', 'application/json');

    return this.http.get(this.modLocal3URL_cdLocal1_3_cdLocal2_6, { headers })
      .toPromise()
      .then(response => response.json().content);
  }

  pesquisarTodoPatio(filtro: Modlocal3Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');



    return this.http.get(`${this.modLocal3URL}?cdLocal2=7&cdLocal1=3`, { headers })
      .toPromise()
      .then(response => {

        const responseJson = response.json();
        const modlocal3 = responseJson.content;

        const resultado = {
          modlocal3,
          total: responseJson.totalElements
        };
        return resultado;
      })

  };

  listarTodoPatio(): Promise<any> {
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    headers.append('Content-Type', 'application/json');

    return this.http.get(this.modLocal3URL_cdLocal1_3_cdLocal2_7, { headers })
      .toPromise()
      .then(response => response.json().content);
  }

  pesquisarBordasPatio(filtro: Modlocal3Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');



    return this.http.get(`${this.modLocal3URL}?cdLocal2=8&cdLocal1=3`, { headers })
      .toPromise()
      .then(response => {

        const responseJson = response.json();
        const modlocal3 = responseJson.content;

        const resultado = {
          modlocal3,
          total: responseJson.totalElements
        };
        return resultado;
      })

  };

  listarBordasDoPatio(): Promise<any> {
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    headers.append('Content-Type', 'application/json');

    return this.http.get(this.modLocal3URL_cdLocal1_3_cdLocal2_8, { headers })
      .toPromise()
      .then(response => response.json().content);
  }


  pesquisarSaidaPatio(filtro: Modlocal3Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');



    return this.http.get(`${this.modLocal3URL}?cdLocal2=9&cdLocal1=3`, { headers })
      .toPromise()
      .then(response => {

        const responseJson = response.json();
        const modlocal3 = responseJson.content;

        const resultado = {
          modlocal3,
          total: responseJson.totalElements
        };
        return resultado;
      })

  };

  listarSaidaDoPatio(): Promise<any> {
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    headers.append('Content-Type', 'application/json');

    return this.http.get(this.modLocal3URL_cdLocal1_3_cdLocal2_9, { headers })
      .toPromise()
      .then(response => response.json().content);
  }

  pesquisarEmTodosOsLocais4(filtro: Modlocal3Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');



    return this.http.get(`${this.modLocal3URL}?cdLocal2=10&cdLocal1=4`, { headers })
      .toPromise()
      .then(response => {

        const responseJson = response.json();
        const modlocal3 = responseJson.content;

        const resultado = {
          modlocal3,
          total: responseJson.totalElements
        };
        return resultado;
      })

  };

  listarEmTodosOsLocais4(): Promise<any> {
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    headers.append('Content-Type', 'application/json');

    return this.http.get(this.modLocal3URL_cdLocal1_4_cdLocal2_10, { headers })
      .toPromise()
      .then(response => response.json().content);
  }

  pesquisarTodoPatioTransportado(filtro: Modlocal3Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');



    return this.http.get(`${this.modLocal3URL}?cdLocal2=11&cdLocal1=4`, { headers })
      .toPromise()
      .then(response => {

        const responseJson = response.json();
        const modlocal3 = responseJson.content;

        const resultado = {
          modlocal3,
          total: responseJson.totalElements
        };
        return resultado;
      })

  };


  listarTodoPatio4(): Promise<any> {
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    headers.append('Content-Type', 'application/json');

    return this.http.get(this.modLocal3URL_cdLocal1_4_cdLocal2_11, { headers })
      .toPromise()
      .then(response => response.json().content);
  }

  pesquisarEmTodosOsLocais5(filtro: Modlocal3Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');



    return this.http.get(`${this.modLocal3URL}?cdLocal2=12&cdLocal1=5`, { headers })
      .toPromise()
      .then(response => {

        const responseJson = response.json();
        const modlocal3 = responseJson.content;

        const resultado = {
          modlocal3,
          total: responseJson.totalElements
        };
        return resultado;
      })

  };

  listarEmTodosOsLocais5(): Promise<any> {
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    headers.append('Content-Type', 'application/json');

    return this.http.get(this.modLocal3URL_cdLocal1_5_cdLocal2_12, { headers })
      .toPromise()
      .then(response => response.json().content);
  }

  pesquisareEstradasPrincipais(filtro: Modlocal3Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');



    return this.http.get(`${this.modLocal3URL}?cdLocal2=13&cdLocal1=5`, { headers })
      .toPromise()
      .then(response => {

        const responseJson = response.json();
        const modlocal3 = responseJson.content;

        const resultado = {
          modlocal3,
          total: responseJson.totalElements
        };
        return resultado;
      })

  };

  listarEstradasPrincipais(): Promise<any> {
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    headers.append('Content-Type', 'application/json');

    return this.http.get(this.modLocal3URL_cdLocal1_5_cdLocal2_13, { headers })
      .toPromise()
      .then(response => response.json().content);
  }

  pesquisarEstradasSecundarias(filtro: Modlocal3Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');



    return this.http.get(`${this.modLocal3URL}?cdLocal2=14&cdLocal1=5`, { headers })
      .toPromise()
      .then(response => {

        const responseJson = response.json();
        const modlocal3 = responseJson.content;

        const resultado = {
          modlocal3,
          total: responseJson.totalElements
        };
        return resultado;
      })

  };

  listarEstradasSecudarias(): Promise<any> {
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    headers.append('Content-Type', 'application/json');

    return this.http.get(this.modLocal3URL_cdLocal1_5_cdLocal2_14, { headers })
      .toPromise()
      .then(response => response.json().content);
  }


  pesquisarTodaMalhaViaria(filtro: Modlocal3Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');



    return this.http.get(`${this.modLocal3URL}?cdLocal2=15&cdLocal1=5`, { headers })
      .toPromise()
      .then(response => {

        const responseJson = response.json();
        const modlocal3 = responseJson.content;

        const resultado = {
          modlocal3,
          total: responseJson.totalElements
        };
        return resultado;
      })

  };

  listarTodaMalhaViaria(): Promise<any> {
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    headers.append('Content-Type', 'application/json');

    return this.http.get(this.modLocal3URL_cdLocal1_5_cdLocal2_15, { headers })
      .toPromise()
      .then(response => response.json().content);
  }


  pesquisarEmTodosOsLocais6(filtro: Modlocal3Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');



    return this.http.get(`${this.modLocal3URL}?cdLocal2=16&cdLocal1=6`, { headers })
      .toPromise()
      .then(response => {

        const responseJson = response.json();
        const modlocal3 = responseJson.content;

        const resultado = {
          modlocal3,
          total: responseJson.totalElements
        };
        return resultado;
      })

  };


  listarEmTodosOsLocais6(): Promise<any> {
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    headers.append('Content-Type', 'application/json');

    return this.http.get(this.modLocal3URL_cdLocal1_6_cdLocal2_16, { headers })
      .toPromise()
      .then(response => response.json().content);
  }

  pesquisarParcela(filtro: Modlocal3Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');



    return this.http.get(`${this.modLocal3URL}?cdLocal2=17&cdLocal1=6`, { headers })
      .toPromise()
      .then(response => {

        const responseJson = response.json();
        const modlocal3 = responseJson.content;

        const resultado = {
          modlocal3,
          total: responseJson.totalElements
        };
        return resultado;
      })

  };

  listaParcela(): Promise<any> {
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    headers.append('Content-Type', 'application/json');

    return this.http.get(this.modLocal3URL_cdLocal1_6_cdLocal2_17, { headers })
      .toPromise()
      .then(response => response.json().content);
  }

  pesquisarGeral(filtro: Modlocal3Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');



    return this.http.get(`${this.modLocal3URL}?cdLocal2=18&cdLocal1=6`, { headers })
      .toPromise()
      .then(response => {

        const responseJson = response.json();
        const modlocal3 = responseJson.content;

        const resultado = {
          modlocal3,
          total: responseJson.totalElements
        };
        return resultado;
      })

  };

  listarGeral(): Promise<any> {
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    headers.append('Content-Type', 'application/json');

    return this.http.get(this.modLocal3URL_cdLocal1_6_cdLocal2_18, { headers })
      .toPromise()
      .then(response => response.json().content);
  }

  pesquisarEmTodosOsLocais7(filtro: Modlocal3Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');



    return this.http.get(`${this.modLocal3URL}?cdLocal2=19&cdLocal1=7`, { headers })
      .toPromise()
      .then(response => {

        const responseJson = response.json();
        const modlocal3 = responseJson.content;

        const resultado = {
          modlocal3,
          total: responseJson.totalElements
        };
        return resultado;
      })

  };


  listarEmTodosOsLocais7(): Promise<any> {
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    headers.append('Content-Type', 'application/json');

    return this.http.get(this.modLocal3URL_cdLocal1_7_cdLocal2_19, { headers })
      .toPromise()
      .then(response => response.json().content);
  }

  pesquisarGeralAcam(filtro: Modlocal3Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');



    return this.http.get(`${this.modLocal3URL}?cdLocal2=20&cdLocal1=7`, { headers })
      .toPromise()
      .then(response => {

        const responseJson = response.json();
        const modlocal3 = responseJson.content;

        const resultado = {
          modlocal3,
          total: responseJson.totalElements
        };
        return resultado;
      })

  };

  listarGeral7(): Promise<any> {
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    headers.append('Content-Type', 'application/json');

    return this.http.get(this.modLocal3URL_cdLocal1_7_cdLocal2_20, { headers })
      .toPromise()
      .then(response => response.json().content);
  }

  pesquisarAlojamento(filtro: Modlocal3Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');



    return this.http.get(`${this.modLocal3URL}?cdLocal2=21&cdLocal1=7`, { headers })
      .toPromise()
      .then(response => {

        const responseJson = response.json();
        const modlocal3 = responseJson.content;

        const resultado = {
          modlocal3,
          total: responseJson.totalElements
        };
        return resultado;
      })

  };

  listarAlojamento(): Promise<any> {
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    headers.append('Content-Type', 'application/json');

    return this.http.get(this.modLocal3URL_cdLocal1_7_cdLocal2_21, { headers })
      .toPromise()
      .then(response => response.json().content);
  }

  pesquisarEmTodosOsLocais8(filtro: Modlocal3Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');



    return this.http.get(`${this.modLocal3URL}?cdLocal2=22&cdLocal1=8`, { headers })
      .toPromise()
      .then(response => {

        const responseJson = response.json();
        const modlocal3 = responseJson.content;

        const resultado = {
          modlocal3,
          total: responseJson.totalElements
        };
        return resultado;
      })

  };

  listarEmTodosOsLocais8(): Promise<any> {
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    headers.append('Content-Type', 'application/json');

    return this.http.get(this.modLocal3URL_cdLocal1_8_cdLocal2_22, { headers })
      .toPromise()
      .then(response => response.json().content);
  }

  pesquisarGeralEscri(filtro: Modlocal3Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');



    return this.http.get(`${this.modLocal3URL}?cdLocal2=23&cdLocal1=8`, { headers })
      .toPromise()
      .then(response => {

        const responseJson = response.json();
        const modlocal3 = responseJson.content;

        const resultado = {
          modlocal3,
          total: responseJson.totalElements
        };
        return resultado;
      })

  };

  listarGeral8(): Promise<any> {
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    headers.append('Content-Type', 'application/json');

    return this.http.get(this.modLocal3URL_cdLocal1_8_cdLocal2_23, { headers })
      .toPromise()
      .then(response => response.json().content);
  }

  pesquisarPmfs(filtro: Modlocal3Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');



    return this.http.get(`${this.modLocal3URL}?cdLocal2=24&cdLocal1=8`, { headers })
      .toPromise()
      .then(response => {

        const responseJson = response.json();
        const modlocal3 = responseJson.content;

        const resultado = {
          modlocal3,
          total: responseJson.totalElements
        };
        return resultado;
      })

  };

  listarPMFS(): Promise<any> {
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    headers.append('Content-Type', 'application/json');

    return this.http.get(this.modLocal3URL_cdLocal1_8_cdLocal2_24, { headers })
      .toPromise()
      .then(response => response.json().content);
  }

  pesquisarEmTodosOsLocais9(filtro: Modlocal3Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');



    return this.http.get(`${this.modLocal3URL}?cdLocal25=0&cdLocal1=9`, { headers })
      .toPromise()
      .then(response => {

        const responseJson = response.json();
        const modlocal3 = responseJson.content;

        const resultado = {
          modlocal3,
          total: responseJson.totalElements
        };
        return resultado;
      })

  };

  listarEmTodosOsLocais9(): Promise<any> {
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    headers.append('Content-Type', 'application/json');

    return this.http.get(this.modLocal3URL_cdLocal1_9_cdLocal2_25, { headers })
      .toPromise()
      .then(response => response.json().content);
  }

  pesquisarGeralEntor(filtro: Modlocal3Filtro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');



    return this.http.get(`${this.modLocal3URL}?cdLocal2=26&cdLocal1=9`, { headers })
      .toPromise()
      .then(response => {

        const responseJson = response.json();
        const modlocal3 = responseJson.content;

        const resultado = {
          modlocal3,
          total: responseJson.totalElements
        };
        return resultado;
      })

  };

  listarGeral9(): Promise<any> {
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    headers.append('Content-Type', 'application/json');

    return this.http.get(this.modLocal3URL_cdLocal1_9_cdLocal2_26, { headers })
      .toPromise()
      .then(response => response.json().content);
  }



}
