import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { ModMonitoramentoTemplate } from '../core/model';

export class ModmonitoramentotemplateFiltro{
  mmTemplate : string;
  page = 0;
  size = 5;
}

@Injectable()
export class ModmonitoramentotemplateService {

  modmonitoramentotemplateurl = 'http://localhost:8081/modmonitoramentotemplate';

  constructor(private http: Http){}


  pesquisar(filtro: ModmonitoramentotemplateFiltro): Promise<any> {

    const params = new URLSearchParams;
    const headers = new Headers;

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    if (filtro.mmTemplate){
      params.set('mmTemplate', filtro.mmTemplate);

  }

    return this.http.get(`${this.modmonitoramentotemplateurl}`, {  headers, search: filtro })
    .toPromise()
      .then(response => {

          const responseJson = response.json();
          const modmonitoramentotemplate = responseJson.content;

          const resultado = {
            modmonitoramentotemplate,
            total: responseJson.totalElements
          };
          return resultado;
    })

    };


    excluir(cdTemplate: number): Promise<void> {
      const headers = new Headers;
      headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

      return this.http.delete(`${this.modmonitoramentotemplateurl}/${cdTemplate}`, { headers })
        .toPromise()
        .then(() => null);
    }


    adicionar(ModMonitoramentoTemplate: ModMonitoramentoTemplate): Promise<ModMonitoramentoTemplate>{
      const headers = new Headers;
      headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
      headers.append('Content-Type', 'application/json');

      return this.http.post(this.modmonitoramentotemplateurl, JSON.stringify(ModMonitoramentoTemplate), { headers })
        .toPromise()
        .then(response => response.json());
    }


    listarTodas(): Promise<any> {
      const headers = new Headers;
       headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
       headers.append('Content-Type', 'application/json');

       return this.http.get(this.modmonitoramentotemplateurl, { headers })
         .toPromise()
         .then(response => response.json().content);
   }

   atualizar(modMonitoramentoTemplate: ModMonitoramentoTemplate): Promise<ModMonitoramentoTemplate>{
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    headers.append('Content-Type', 'application/json');

    return this.http.put(`${this.modmonitoramentotemplateurl}/${modMonitoramentoTemplate.cdTemplate}`,
        JSON.stringify(modMonitoramentoTemplate), { headers })
      .toPromise()
      .then(response => {
        const modMonitoramentoTemplateAlterada = response.json() as ModMonitoramentoTemplate;

        return modMonitoramentoTemplateAlterada;
      });
  }

  buscarPorCodigo(codigo: number): Promise<ModMonitoramentoTemplate> {
    const headers = new Headers();
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    return this.http.get(`${this.modmonitoramentotemplateurl}/${codigo}`, { headers })
      .toPromise()
      .then(response => {
        const modMonitoramentoTemplate = response.json() as ModMonitoramentoTemplate;

        return modMonitoramentoTemplate;
      });
}


}
