import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjetoService } from '../../services/projeto.service';
import { ProjetoModel } from '../../models/projeto-models';

@Component({
  selector: 'app-projeto-listar',
  imports: [RouterLink],
  templateUrl: './projeto-listar.html',
  styleUrl: './projeto-listar.scss',
})
export class ProjetoListar {
  private readonly projetoService = inject(ProjetoService);
  projetos = signal<ProjetoModel[]>([]);
  ngOnInit() {
    this.carregarProjetos();
  }
  
  carregarProjetos(): void {
    this.projetoService.listar().subscribe({
      next: projetos => {
        const projetosOrdenados = projetos.sort((x, y) => x.nome.localeCompare(y.nome));
        this.projetos.set(projetosOrdenados);
      },
      error: erro => {
        console.error("Erro ao carregar os projetos:", erro);
        alert("Não foi possível carregar os projetos")
      }
    })


  }
  apagar(id: string): void {
    this.projetoService.apagar(id).subscribe({
      next: () => {
        alert("Projeto apagado com sucesso");
        this.carregarProjetos();
      },
    })
  }
}
