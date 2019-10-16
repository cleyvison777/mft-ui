import { Injectable } from '@angular/core';

import { Http, Headers } from '@angular/http';
import { Verificador_m } from 'src/app/core/model';

export class CadverificadorFiltro{
  nmTipoVerificador : string;

}

@Injectable()
export class VerificadorMEditandoService {

  verificadormURL = 'http://localhost:8081/verificador_m';



  constructor(private http: Http) { }

    pesquisarMon(): Promise<any> {

    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');


    return this.http.get(`${this.verificadormURL}?nmTipoVerificador=Mon`, {  headers })
    .toPromise()
      .then(response => response.json());

    }
    pesquisarImp(): Promise<any> {

      const headers = new Headers;

      headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');


      return this.http.get(`${this.verificadormURL}?nmTipoVerificador=Impac`, {  headers })
      .toPromise()
        .then(response => response.json());

      }

      pesquisarPMFS(): Promise<any> {

        const headers = new Headers;

        headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');


        return this.http.get(`${this.verificadormURL}?nmTipoVerificador=PMFS`, {  headers })
        .toPromise()
          .then(response => response.json());

        }
        pesquisarCerti(): Promise<any> {

          const headers = new Headers;

          headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');


          return this.http.get(`${this.verificadormURL}?nmTipoVerificador=Certi`, {  headers })
          .toPromise()
            .then(response => response.json());

          }

          pesquisarSuste(): Promise<any> {

            const headers = new Headers;

            headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');


            return this.http.get(`${this.verificadormURL}?nmTipoVerificador=Suste`, {  headers })
            .toPromise()
              .then(response => response.json());

            }

            buscarPorCodigo(id: number): Promise<Verificador_m> {
              const headers = new Headers();
              headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

              return this.http.get(`${this.verificadormURL}/${id}`, { headers })
                .toPromise()
                .then(response => {
                  const cadverificadorm = response.json() as Verificador_m;

                  return cadverificadorm;
                });
          }

          atualizar(verificador_m: Verificador_m): Promise<Verificador_m>{
            const headers = new Headers;
            headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
            headers.append('Content-Type', 'application/json');

            return this.http.put(`${this.verificadormURL}/${verificador_m.cdVerificador}`,
                JSON.stringify(verificador_m), { headers })
              .toPromise()
              .then(response => {
                const verificador_mAlterada = response.json() as Verificador_m;


                return verificador_mAlterada;
              });
        }




}

