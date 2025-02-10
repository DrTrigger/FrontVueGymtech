// src/models/FichaResponse.ts
import type { Aluno } from './Aluno';
import type { Professor } from './Professor';
import type { ExercicioFichaResponse } from './ExercicioFichaResponse';
import type { ProfessorResponse } from './ProfessorResponse';

export interface FichaResponse {
  id: number;
  data_inicio: string; // formato ISO
  data_fim: string;    // formato ISO
  aluno: Aluno;
  professor: ProfessorResponse;
  exercicioFichaList: ExercicioFichaResponse[];
}
