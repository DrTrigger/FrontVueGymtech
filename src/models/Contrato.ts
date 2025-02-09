import type { Aluno } from "./Aluno";

export interface Contrato {
    id?: number;
    idPessoa: number;
    idPlano: number;
    nome: string;
    data_inicio: string;
    data_fim: string;
    data_vencimento: string;
    status: string;
    valor_pago: number;
  }
  
  
