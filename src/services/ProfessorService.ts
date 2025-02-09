// src/services/professorService.ts
import axios from 'axios';
import type { Professor } from '../models/Professor';
import type { ProfessorResponse } from '../models/ProfessorResponse';

const API_URL = 'http://localhost:8080'; // Ajuste conforme necessário

export const createProfessor = async (prof: Professor): Promise<string> => {
  const response = await axios.post(`${API_URL}/professor/cadastrar`, prof);
  return response.data;
};

export const listProfessores = async (): Promise<ProfessorResponse[]> => {
  const response = await axios.get(`${API_URL}/professor/listar`);
  return response.data;
};

export const getProfessor = async (id: number): Promise<ProfessorResponse> => {
  const response = await axios.get(`${API_URL}/professor/${id}`);
  return response.data;
};

export const updateProfessor = async (id: number, prof: Professor): Promise<string> => {
  const response = await axios.put(`${API_URL}/professor/editar/${id}`, prof);
  return response.data;
};

export const deleteProfessor = async (id: number): Promise<string> => {
  const response = await axios.delete(`${API_URL}/professor/deletar/${id}`);
  return response.data;
};
