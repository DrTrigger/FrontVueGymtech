// src/store/exercicioStore.ts
import type { TipoEquipamento } from '../models/TipoEquipamento';
import { listTipoEquipamentos, createTipoEquipamento, getTipoEquipamento, editTipoEquipamento, deleteTipoEquipamento } from '../services/TipoEquipamentoService';
import { createGenericStore } from './GenericStore';

export const useTipoEquipamentoStore = createGenericStore<TipoEquipamento>('tipoEquipamento', {
  list: listTipoEquipamentos,
  create: createTipoEquipamento,
  delete: deleteTipoEquipamento,
  get: getTipoEquipamento, // Adicione esta linha
  update: editTipoEquipamento,
});