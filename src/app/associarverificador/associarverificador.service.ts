import { Injectable } from '@angular/core';
import { Verificador_Local_m } from '../core/model';
import { Http, Headers } from '@angular/http';

export class CadverificadorLocalFiltro{
  nmTipoVerificador : string;

}

@Injectable()
export class AssociarverificadorService {

  verificadorlocalmURL = 'http://localhost:8081/verificador_local_m';

  constructor(private http: Http) { }


  buscarPorCodigo(codigo: number): Promise<Verificador_Local_m> {
    const headers = new Headers();
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    return this.http.get(`${this.verificadorlocalmURL}/${codigo}`, { headers })
      .toPromise()
      .then(response => {
        const cadverificadorlocalm = response.json() as Verificador_Local_m;

        return cadverificadorlocalm;
      });
}
}
