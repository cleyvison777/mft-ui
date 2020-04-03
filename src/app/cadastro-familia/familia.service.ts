import { CadFamilia } from './../core/model';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';

export class CadFamiliaFiltro {
  nmFamilia: string;
 
}

@Injectable({
  providedIn: 'root'
})

export class FamiliaService {

  cadFamiliaURL = 'http://localhost:8081/cadfamilia';
  constructor(private http: Http) { }
  //consultar 
  
  consultar(filtro: CadFamiliaFiltro): Promise<any> {
    const params = new URLSearchParams();
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
  
    if (filtro.nmFamilia) {
      params.set('nmFamilia', filtro.nmFamilia);
    }
    return this.http.get(`${this.cadFamiliaURL}`,
      { headers, search: filtro })
      .toPromise()
      .then(response => {
        const responseJson = response.json();
        
      
      });
  }

  //adiciona registros na tabela

  adicionar(cadFamilia: CadFamilia): Promise<CadFamilia> {
    const params = new URLSearchParams;
    const headers = new Headers();
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.cadFamiliaURL,
      JSON.stringify(cadFamilia), { headers })
      .toPromise()
      .then(response => response.json());
  }
  //exclui o resgitro da tabela
  excluir(cdFamilia: number): Promise<void> {
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    return this.http.delete(`${this.cadFamiliaURL}/${cdFamilia}`, { headers })
      .toPromise()
      .then(() => null);
  }

  //atualiza
  atualizar(cadFamilia: CadFamilia): Promise<CadFamilia> {
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    headers.append('Content-Type', 'application/json');
    return this.http.put(`${this.cadFamiliaURL}/${cadFamilia.cdFamilia}`,
      JSON.stringify(cadFamilia), { headers })
      .toPromise()
      .then(response => {
        const cadFamiliaAltera = response.json() as CadFamilia;

        return cadFamiliaAltera;
      });
  }
  //buscar pelo godigo para atualizar
  buscarPeloCodigo(cdFamilia: number): Promise<CadFamilia> {
    const headers = new Headers();
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    return this.http.get(`${this.cadFamiliaURL}/${cdFamilia}`, { headers })
      .toPromise()
      .then(response => {
        const cadFamilia = response.json() as CadFamilia;
        return cadFamilia;
      });

  }

  listarTodasFamilia(): Promise<any> {
    const headers = new Headers;
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    headers.append('Content-Type', 'application/json');

    return this.http.get(this.cadFamiliaURL, { headers })
      .toPromise()
      .then(response => response.json());
  }

}
