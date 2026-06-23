export interface ProjetoModel {
    id: string;
    nome: string;
    codigoProjeto: "";
    // Apesar do nome ser horasEstimadas, o valor será salvo em minutos
    custoEstimado: number | null;
}
