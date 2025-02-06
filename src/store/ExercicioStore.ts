// src/store/exercicioStore.ts
import type { Exercicio } from '../models/Exercicio';
import { listExercicios, createExercicio, deleteExercicio, editExercicio, getExercicio } from '../services/ExercicioService';
import { createGenericStore } from './GenericStore';

export const useExercicioStore = createGenericStore<Exercicio>('exercicio', {
  list: listExercicios,
  create: createExercicio,
  delete: deleteExercicio,
  update: editExercicio,
  get: getExercicio,
});
