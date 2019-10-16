import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { AppMonitoramento } from '../core/model';

export class AppMonitoramentoFiltro {
  nmMonitoramento: string;
  page = 0;
  size = 5;
}


@Injectable()
export class AppmonitoramentoService {

 appmonitoramentoURL = 'http://localhost:8081/appmonitoramento';

  constructor(private http: Http) { }

  buscarPorCodigo(codigo: number): Promise<AppMonitoramento> {
    const headers = new Headers();
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    return this.http.get(`${this.appmonitoramentoURL}=${codigo}`, { headers })
      .toPromise()
      .then(response => {
        const appMonitoramento = response.json() as AppMonitoramento;

        return appMonitoramento;
      });
}

pesquisar(filtro: AppMonitoramentoFiltro): Promise<any> {

  const params = new URLSearchParams;
  const headers = new Headers;
  headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

  if (filtro.nmMonitoramento) {
    params.set('nmMonitoramento', filtro.nmMonitoramento);
  }

  return this.http.get(`${this.appmonitoramentoURL}`, { headers, search: filtro })
    .toPromise()
    .then(response => {
      const responseJson = response.json();
      const appmonitoramento = responseJson.content;

      const resultado = {
        appmonitoramento,
        total: responseJson.totalElements
      };
      return resultado;
    })

};

excluir(cdMonitoramento: number): Promise<void> {
  const headers = new Headers;
  headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

  return this.http.delete(`${this.appmonitoramentoURL}/${cdMonitoramento}`, { headers })
    .toPromise()
    .then(() => null);
}

adicionar(appMonitoramento: AppMonitoramento): Promise<AppMonitoramento> {
  const headers = new Headers;
  headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
  headers.append('Content-Type', 'application/json');

  return this.http.post(this.appmonitoramentoURL, JSON.stringify(appMonitoramento), { headers })
    .toPromise()
    .then(response => response.json());
}

listarTodas(): Promise<any> {
  const headers = new Headers;
  headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
  headers.append('Content-Type', 'application/json');

  return this.http.get(this.appmonitoramentoURL, { headers })
    .toPromise()
    .then(response => response.json().content);
}

atualizar(appMonitoramento: AppMonitoramento): Promise<AppMonitoramento> {
  const headers = new Headers;
  headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
  headers.append('Content-Type', 'application/json');

  return this.http.put(`${this.appmonitoramentoURL}/${appMonitoramento.cdMonitoramento}`,
    JSON.stringify(appMonitoramento), { headers })
    .toPromise()
    .then(response => {
      const appMonitoramentoAlterada = response.json() as AppMonitoramento;


      return appMonitoramentoAlterada;
    });
}



}
