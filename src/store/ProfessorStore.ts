// src/store/professorStore.ts
import { defineStore } from 'pinia';
import type { ProfessorResponse } from '../models/ProfessorResponse';
import { listProfessores, createProfessor, updateProfessor, deleteProfessor } from '../services/ProfessorService';
import type { Professor } from '../models/Professor';

export const useProfessorStore = defineStore('professor', {
  state: () => ({
    professors: [] as ProfessorResponse[],
  }),
  actions: {
    async fetchProfessores() {
      try {
        this.professors = await listProfessores();
      } catch (error) {
        console.error('Erro ao buscar professores', error);
      }
    },
    async addProfessor(prof: Professor) {
      try {
        const message = await createProfessor(prof);
        await this.fetchProfessores();
        return message;
      } catch (error) {
        console.error('Erro ao cadastrar professor', error);
      }
    },
    async updateProfessor(id: number, prof: Professor) {
      try {
        const message = await updateProfessor(id, prof);
        await this.fetchProfessores();
        return message;
      } catch (error) {
        console.error('Erro ao atualizar professor', error);
      }
    },
    async removeProfessor(id: number) {
      try {
        const message = await deleteProfessor(id);
        await this.fetchProfessores();
        return message;
      } catch (error) {
        console.error('Erro ao deletar professor', error);
      }
    },
  },
});
