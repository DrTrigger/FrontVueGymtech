// src/services/fichaService.ts
import axios from 'axios';
import type { Ficha } from '../models/Ficha';
import type { FichaResponse } from '../models/FichaResponse';

const API_URL = 'http://localhost:8080'; // Ajuste conforme sua configuração

export const createFicha = async (ficha: Ficha): Promise<string> => {
  const response = await axios.post(`${API_URL}/ficha/cadastrar`, ficha);
  return response.data;
};

export const listFichas = async (): Promise<FichaResponse[]> => {
  const response = await axios.get(`${API_URL}/ficha/listar`);
  return response.data;
};

export const updateFicha = async (id: number, ficha: Ficha): Promise<string> => {
  const response = await axios.put(`${API_URL}/ficha/editar/${id}`, ficha);
  return response.data;
};

export const deleteFicha = async (id: number): Promise<string> => {
  const response = await axios.delete(`${API_URL}/ficha/deletar/${id}`);
  return response.data;
};

export const getFicha = async (id: number): Promise<FichaResponse> => {
  const response = await axios.get(`${API_URL}/ficha/${id}`);
  return response.data;
};
