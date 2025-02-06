// src/services/exercicioService.ts
import axios from 'axios';
import type { Exercicio } from '../models/Exercicio';

const API_URL = 'http://localhost:8080'; // Ajuste conforme necessário

export const createExercicio = async (exercicio: Exercicio): Promise<string> => {
  const response = await axios.post(`${API_URL}/exercicio/cadastrar`, exercicio);
  return response.data;
};

export const listExercicios = async (): Promise<Exercicio[]> => {
  const response = await axios.get(`${API_URL}/exercicio/listar`);
  return response.data;
};

export const deleteExercicio = async (id: number): Promise<string> => {
  const response = await axios.delete(`${API_URL}/exercicio/deletar/${id}`);
  return response.data;
};

export const editExercicio = async (id: number, exercicio: Exercicio): Promise<string> => {
  const response = await axios.put(`${API_URL}/exercicio/editar/${id}`, exercicio);
  return response.data;
};


//falta implementart
export const getExercicio = async (id: number): Promise<Exercicio> => {
  const response = await axios.get(`${API_URL}/exercicio/${id}`); //falta implementar
  return response.data;
};