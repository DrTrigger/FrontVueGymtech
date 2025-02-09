// src/store/exercicioStore.ts
import { createPlano, deletePlano, editPlano, getPlano, listPlanos } from '@/services/PlanoService';
import type { Plano } from '../models/Plano';
import { createGenericStore } from './GenericStore';

export const usePlanoStore = createGenericStore<Plano>('plano', {
  list: listPlanos,
  create: createPlano,
  delete: deletePlano,
  update: editPlano,
  get: getPlano,
});
