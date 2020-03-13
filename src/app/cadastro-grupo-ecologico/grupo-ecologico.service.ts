import { CadGrupoEcologico } from './../core/model';
import { Http, Headers} from '@angular/http';
import { Injectable } from '@angular/core';

export class GrupoEcologicoFiltro {
  page = 0;
  size = 15;
  nmGrupoEcologico: string;
}


@Injectable({
  providedIn: 'root'
})

export class GrupoEcologicoService {

GrupoEcologicoURL = 'http://localhost:8080/grupoecologico';

  constructor(private http: Http) { }

    //consultar 
consultar(filtro: GrupoEcologicoFiltro): Promise<any>{
  const params = new URLSearchParams;
  const headers = new Headers;
  headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
  params.set('page', filtro.page.toString());
  params.set('size', filtro.size.toString());
  if (filtro.nmGrupoEcologico) {
     params.set('nmGrupoEcologico', filtro.nmGrupoEcologico);
       }
    return this.http.get(`${this.GrupoEcologicoURL}`,
       { headers, search: filtro })
       .toPromise()
       .then(response => {
         const responseJson = response.json();
         const listaGrupoEcologico = responseJson.content;

         const resultado = {
          listaGrupoEcologico,
          total: responseJson.totalElements
         };
         return resultado;
       });
  }

  adicionar(cadGrupoEcologico: CadGrupoEcologico): Promise<CadGrupoEcologico> {
    const params = new URLSearchParams;
    const headers = new Headers();
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    headers.append('Content-Type', 'application/json');
      return this.http.post(this.GrupoEcologicoURL,
        JSON.stringify(cadGrupoEcologico), { headers })
        .toPromise()
         .then(response => response.json());
  }
    //exclui o resgitro da tabela
     excluir(cdGrupoEcologico: number): Promise<void> {
      const headers = new Headers;
      headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
       return this.http.delete(`${this.GrupoEcologicoURL}/${cdGrupoEcologico}`, { headers })
        .toPromise()
         .then(() => null);
     }

}
