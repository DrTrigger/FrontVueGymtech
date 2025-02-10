// src/store/exercicioFichaStore.ts
import { defineStore } from 'pinia';
import type { ExercicioFichaResponse } from '../models/ExercicioFichaResponse';
import { listExercicioFichas, createExercicioFicha, updateExercicioFicha, deleteExercicioFicha, getExercicioFicha } from '../services/ExercicioFichaService';
import type { Exercicio } from '../models/Exercicio';
import type { ExercicioFicha } from '@/models/ExercicioFicha';

export const useExercicioFichaStore = defineStore('exercicioFicha', {
  state: () => ({
    exerciciosFicha: [] as ExercicioFichaResponse[],
  }),
  actions: {
    async fetchExerciciosFicha() {
      try {
        this.exerciciosFicha = await listExercicioFichas();
      } catch (error) {
        console.error('Erro ao buscar exercícios da ficha', error);
      }
    },
    async addExercicioFicha(exercicioFicha: ExercicioFicha) {
      try {
        const message = await createExercicioFicha(exercicioFicha);
        await this.fetchExerciciosFicha();
        return message;
      } catch (error) {
        console.error('Erro ao adicionar exercício da ficha', error);
      }
    },
    async updateExercicioFicha(id: number, exercicioFicha: ExercicioFicha) {
      try {
        const message = await updateExercicioFicha(id, exercicioFicha);
        await this.fetchExerciciosFicha();
        return message;
      } catch (error) {
        console.error('Erro ao atualizar exercício da ficha', error);
      }
    },
    async removeExercicioFicha(id: number) {
      try {
        const message = await deleteExercicioFicha(id);
        await this.fetchExerciciosFicha();
        return message;
      } catch (error) {
        console.error('Erro ao deletar exercício da ficha', error);
      }
    },
    async fetchExercicioFicha(id: number) {
      try {
        return await getExercicioFicha(id);
      } catch (error) {
        console.error('Erro ao buscar exercício da ficha', error);
      }
    },
  },
});
