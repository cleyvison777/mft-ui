import { Injectable } from '@angular/core';
import { Verificador_m } from '../core/model';
import { Http, Headers } from '@angular/http';

export class CadverificadorFiltro{
  nmTipoVerificador : string;

}

@Injectable()
export class VerificadorMService {

  verificadormURL = 'http://localhost:8081/verificador_m';



  constructor(private http: Http) { }

    pesquisarMon(): Promise<any> {

    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');


    return this.http.get(`${this.verificadormURL}?nmTipoDeVerificador=Mon`, {  headers })
    .toPromise()
      .then(response => response.json());

    }



    pesquisarImp(): Promise<any> {

      const headers = new Headers;

      headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');


      return this.http.get(`${this.verificadormURL}?nmTipoDeVerificador=Impac`, {  headers })
      .toPromise()
        .then(response => response.json());

      }

      pesquisarPMFS(): Promise<any> {

        const headers = new Headers;

        headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');


        return this.http.get(`${this.verificadormURL}?nmTipoDeVerificador=PMFS`, {  headers })
        .toPromise()
          .then(response => response.json());

        }
        pesquisarCerti(): Promise<any> {

          const headers = new Headers;

          headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');


          return this.http.get(`${this.verificadormURL}?nmTipoDeVerificador=Certi`, {  headers })
          .toPromise()
            .then(response => response.json());

          }

          pesquisarSuste(): Promise<any> {

            const headers = new Headers;

            headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');


            return this.http.get(`${this.verificadormURL}?nmTipoDeVerificador=Suste`, {  headers })
            .toPromise()
              .then(response => response.json());

            }



            buscarPorCodigo(codigo: number): Promise<Verificador_m> {
              const headers = new Headers();
              headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

              return this.http.get(`${this.verificadormURL}/${codigo}`, { headers })
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

            return this.http.put(`${this.verificadormURL}/${verificador_m.nmverificador}`,
                JSON.stringify(verificador_m), { headers })
              .toPromise()
              .then(response => {
                const verificador_mAlterada = response.json() as Verificador_m;


                return verificador_mAlterada;
              });
        }




}
