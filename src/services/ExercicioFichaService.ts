// src/services/exercicioFichaService.ts
import axios from 'axios';
import type { ExercicioFicha } from '../models/ExercicioFicha';
import type { ExercicioFichaResponse } from '../models/ExercicioFichaResponse';

const API_URL = 'http://localhost:8080'; // Ajuste conforme necessário

export const createExercicioFicha = async (
  exercicioFicha: ExercicioFicha
): Promise<string> => {
  const response = await axios.post(`${API_URL}/exercicio-ficha/cadastrar`, exercicioFicha);
  return response.data;
};

export const listExercicioFichas = async (): Promise<ExercicioFichaResponse[]> => {
  const response = await axios.get(`${API_URL}/exercicio-ficha/listar`);
  return response.data;
};

export const updateExercicioFicha = async (
  id: number,
  exercicioFicha: ExercicioFicha
): Promise<string> => {
  const response = await axios.put(`${API_URL}/exercicio-ficha/editar/${id}`, exercicioFicha);
  return response.data;
};

export const deleteExercicioFicha = async (id: number): Promise<string> => {
  // Implemente conforme seu endpoint; abaixo um exemplo:
  const response = await axios.delete(`${API_URL}/exercicio-ficha/deletar/${id}`);
  return response.data;
};

export const getExercicioFicha = async (id: number): Promise<ExercicioFichaResponse> => {
  // Implemente conforme seu endpoint; abaixo um exemplo:
  const response = await axios.get(`${API_URL}/exercicio-ficha/${id}`);
  return response.data;
};
