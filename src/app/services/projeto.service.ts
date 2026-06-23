import { inject, Injectable } from '@angular/core';
import { ProjetoModel } from '../models/projeto-models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProjetoService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiUrl}/api/v1/trabalho/projetos`;

  listar(): Observable<ProjetoModel[]> {
    const url = this.baseUrl;

    return this.http.get<ProjetoModel[]>(url);
  }

  cadastrar(projeto: ProjetoModel): Observable<ProjetoModel> {
    const url = this.baseUrl;

    return this.http.post<ProjetoModel>(url, projeto);
  }
  apagar(id: string): Observable<void>{
    const url = `${this.baseUrl}/${id}`;

    return this.http.delete<void>(url);
  }

  obterPorId(id: string): Observable<ProjetoModel> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<ProjetoModel>(url);
  }

  editar(id: string, projeto: ProjetoModel): Observable<void>{
    const url = `${this.baseUrl}/${id}`;
    return this.http.put<void>(url, projeto);
  }
}
