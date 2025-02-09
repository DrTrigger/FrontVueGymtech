// src/store/contratoStore.ts
import { defineStore } from 'pinia';
import type { ContratoResponse } from '../models/ContratoResponse';
import type { Contrato } from '../models/Contrato';
import { listContratos, createContrato, editContrato, deleteContrato } from '../services/ContratoService';

export const useContratoStore = defineStore('contrato', {
  state: () => ({
    contratos: [] as ContratoResponse[],
  }),
  actions: {
    async fetchContratos() {
      try {
        this.contratos = await listContratos();
      } catch (error) {
        console.error('Erro ao buscar contratos', error);
      }
    },
    async addContrato(contrato: Contrato) {
      try {
        const message = await createContrato(contrato);
        await this.fetchContratos();
        return message;
      } catch (error) {
        console.error('Erro ao adicionar contrato', error);
      }
    },
    async updateContrato(id: number, contrato: Contrato) {
      try {
        const message = await editContrato(id, contrato);
        await this.fetchContratos();
        return message;
      } catch (error) {
        console.error('Erro ao editar contrato', error);
      }
    },
    async removeContrato(id: number) {
      try {
        const message = await deleteContrato(id);
        await this.fetchContratos();
        return message;
      } catch (error) {
        console.error('Erro ao deletar contrato', error);
      }
    },
  },
});
