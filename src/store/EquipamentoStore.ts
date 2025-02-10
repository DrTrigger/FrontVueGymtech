// src/store/equipamentoStore.ts
import { defineStore } from 'pinia';
import type { EquipamentoResponse } from '../models/EquipamentoResponse';
import { listEquipamentos, createEquipamento, editEquipamento, deleteEquipamento } from '../services/EquipamentoService';
import type { Equipamento } from '../models/Equipamento';

export const useEquipamentoStore = defineStore('equipamento', {
  state: () => ({
    equipamentos: [] as EquipamentoResponse[],
  }),
  actions: {
    async fetchEquipamentos() {
      try {
        this.equipamentos = await listEquipamentos();
      } catch (error) {
        console.error('Erro ao buscar equipamentos', error);
      }
    },
    async addEquipamento(equipamento: Equipamento) {
      try {
        const message = await createEquipamento(equipamento);
        await this.fetchEquipamentos();
        return message;
      } catch (error) {
        console.error('Erro ao adicionar equipamento', error);
      }
    },
    async updateEquipamento(id: number, equipamento: Equipamento) {
      try {
        const message = await editEquipamento(id, equipamento);
        await this.fetchEquipamentos();
        return message;
      } catch (error) {
        console.error('Erro ao atualizar equipamento', error);
      }
    },
    async removeEquipamento(id: number) {
      try {
        const message = await deleteEquipamento(id);
        await this.fetchEquipamentos();
        return message;
      } catch (error) {
        console.error('Erro ao deletar equipamento', error);
      }
    },
  },
});
