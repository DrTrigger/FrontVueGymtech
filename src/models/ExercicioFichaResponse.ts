// src/models/ExercicioFichaResponse.ts
import type { Exercicio } from './Exercicio';
import type { EquipamentoResponse } from './EquipamentoResponse';

export interface ExercicioFichaResponse {
  id_exercicio_ficha: number;
  exercicio: Exercicio;
  id_ficha: number;
  matricula_aluno: string; // Este campo está ignorado no envio, mas pode vir na resposta
  equipamento: EquipamentoResponse;
  numero_repeticao: number;
  tempo_descanso: number;
  peso: number;
}
