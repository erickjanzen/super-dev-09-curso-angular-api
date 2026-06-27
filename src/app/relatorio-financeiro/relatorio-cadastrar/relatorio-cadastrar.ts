import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RelatorioModel } from '../../models/relatorio-financeiro.model';
import { RelatorioService } from '../../services/relatorio-financeiro.service';

@Component({
  selector: 'app-relatorio-cadastrar',
  imports: [FormsModule],
  templateUrl: './relatorio-cadastrar.html',
  styleUrl: './relatorio-cadastrar.scss',
})
export class RelatorioCadastrar {
  private readonly relatorioService = inject(RelatorioService);
  private readonly router = inject(Router);

  relatorio = signal<RelatorioModel>({
    id: crypto.randomUUID(),
    titulo: "",
    tipo: "",
    valorTotal: null,
    dataEmissao: "",
    responsavel: "",
  })
  
  salvar(): void {
    this.relatorioService.cadastrar(this.relatorio()).subscribe({
      next: () => {
        alert("Relatório cadastrado com sucesso");
      },
      error: erro => {
        console.error("Erro ao cadastrar relatório: " + erro);
        alert("Ocorreu um erro ao cadastrar tarefa");
      }
    })
  }
}
