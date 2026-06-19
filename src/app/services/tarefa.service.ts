import { inject, Injectable } from '@angular/core';
import { TarefaModel } from '../models/tarefa.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//como gerar service: ng g s services\tarefa.service
//service é responsável pela comunicação com a API de tarefas
@Injectable({
  providedIn: 'root',
})
export class TarefaService {
  // cliente responsável por fazer a requisição para o back-end (API)
  private readonly http = inject(HttpClient);

  listar(): Observable<TarefaModel[]> {
    const url = "https://api.franciscosensaulas.com/api/v1/trabalho/tarefas";

    //fazer requisição par carregar a lista de tarefas
    return this.http.get<TarefaModel[]>(url);
  }

  cadastrar(tarefa: TarefaModel): Observable<TarefaModel> {
    const url = "https://api.franciscosensaulas.com/api/v1/trabalho/tarefas";

    return this.http.post<TarefaModel>(url, tarefa);
  }
}
