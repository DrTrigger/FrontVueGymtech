// src/models/ContratoResponse.ts
import type { Aluno } from './Aluno';
import type { Plano } from './Plano';

export interface ContratoResponse {
  id: number;
  aluno: Aluno;
  plano: Plano;
  nome: string;
  data_inicio: string;
  data_fim: string;
  data_vencimento: string;
  status: string;
  valor_pago: number;
}
