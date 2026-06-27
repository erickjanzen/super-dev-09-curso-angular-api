import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RelatorioModel } from '../models/relatorio-financeiro.model';

@Injectable({
  providedIn: 'root',
})
export class RelatorioService {
  private readonly http = inject(HttpClient);

  private readonly baseUrl = `${environment.apiUrl}/api/v1/trabalho/relatorios-financeiros`;

  listar(): Observable<RelatorioModel[]> {
    const url = this.baseUrl;

    return this.http.get<RelatorioModel[]>(url);
  }
  cadastrar(relatorio: RelatorioModel): Observable<RelatorioModel> {
    const url = this.baseUrl;

    return this.http.post<RelatorioModel>(url, relatorio);
  }
  apagar(id: string): Observable<void>{
    const url = `${this.baseUrl}/${id}`;

    return this.http.delete<void>(url);
  }

  obterPorId(id: string): Observable<RelatorioModel> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<RelatorioModel>(url);
  }

  editar(id: string, relatorio: RelatorioModel): Observable<void>{
    const url = `${this.baseUrl}/${id}`;
    return this.http.put<void>(url, relatorio);
  }
}
