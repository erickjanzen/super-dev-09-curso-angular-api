export interface RelatorioModel {
    id: string;
    titulo: string;
    tipo: string;
    valorTotal: number | null;
    dataEmissao: string;
    responsavel: string;
}