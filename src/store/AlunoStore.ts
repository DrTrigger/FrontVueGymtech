import type { Aluno } from '../models/Aluno';
import { listAlunos, createAluno, deleteAluno, editAluno, getAluno } from '../services/AlunoService';
import { createGenericStore } from './GenericStore';

export const useAlunoStore = createGenericStore<Aluno>('aluno', {
  list: listAlunos,
  create: createAluno,
  delete: deleteAluno,
  update: editAluno,
  get: getAluno,
});