import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RelatorioService } from '../../services/relatorio-financeiro.service';
import { RelatorioModel } from '../../models/relatorio-financeiro.model';

@Component({
  selector: 'app-relatorio-listar',
  imports: [RouterLink],
  templateUrl: './relatorio-listar.html',
  styleUrl: './relatorio-listar.scss',
})
export class RelatorioListar {
  private readonly relatorioService = inject(RelatorioService);
  relatorios = signal<RelatorioModel[]>([]);

  ngOnInit() {
    this.carregarRelatorios();
  }

  carregarRelatorios(): void {
    this.relatorioService.listar().subscribe({
      next: relatorios => {
        const relatoriosOrdenados = relatorios.sort((x, y) => x.titulo.localeCompare(y.titulo));
        this.relatorios.set(relatoriosOrdenados);
      },
      error: erro => {
        console.error("Erro ao carregar os relatórios: ", erro);
        alert("Não foi possível carregar os relatórios")
      }
    })


  }
  apagar(id: string): void {
    this.relatorioService.apagar(id).subscribe({
      next: () => {
        alert("Relatório apagado com sucesso");
        this.carregarRelatorios();
      },
      error: erro => {
        console.error("Erro ao tentar apagar relatório: ", erro);
        alert("Não foi possível apagar o relatório");
      }
    })
  }
}
