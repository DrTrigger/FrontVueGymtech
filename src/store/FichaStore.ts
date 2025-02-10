// src/store/fichaStore.ts
import { defineStore } from 'pinia';
import type { FichaResponse } from '../models/FichaResponse';
import { listFichas, createFicha, updateFicha, deleteFicha, getFicha } from '../services/FichaService';
import type { Ficha } from '../models/Ficha';

export const useFichaStore = defineStore('ficha', {
  state: () => ({
    fichas: [] as FichaResponse[],
  }),
  actions: {
    async fetchFichas() {
      try {
        this.fichas = await listFichas();
      } catch (error) {
        console.error('Erro ao buscar fichas:', error);
      }
    },
    async addFicha(ficha: Ficha) {
      try {
        const message = await createFicha(ficha);
        await this.fetchFichas();
        return message;
      } catch (error) {
        console.error('Erro ao cadastrar ficha:', error);
      }
    },
    async updateFicha(id: number, ficha: Ficha) {
      try {
        const message = await updateFicha(id, ficha);
        await this.fetchFichas();
        return message;
      } catch (error) {
        console.error('Erro ao atualizar ficha:', error);
      }
    },
    async removeFicha(id: number) {
      try {
        const message = await deleteFicha(id);
        await this.fetchFichas();
        return message;
      } catch (error) {
        console.error('Erro ao deletar ficha:', error);
      }
    },
    async fetchFicha(id: number) {
      try {
        return await getFicha(id);
      } catch (error) {
        console.error('Erro ao buscar ficha:', error);
      }
    },
  },
});
