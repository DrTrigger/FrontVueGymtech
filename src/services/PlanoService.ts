// src/services/contratoService.ts
import axios from 'axios';
import type { Plano } from '../models/Plano';

const API_URL = 'http://localhost:8080'; // ajuste conforme necessário

export const createPlano = async (plano: Plano): Promise<string> => {
  const response = await axios.post(`${API_URL}/plano/cadastrar`, plano);
  return response.data;
};

export const listPlanos = async (): Promise<Plano[]> => {
  const response = await axios.get(`${API_URL}/plano/listar`);
  return response.data;
};

export const getPlano = async (id: number): Promise<Plano> => {
  const response = await axios.get(`${API_URL}/plano/${id}`);
  return response.data;
};

export const editPlano = async (id: number, plano: Plano): Promise<string> => {
  const response = await axios.put(`${API_URL}/plano/editar/${id}`, plano);
  return response.data;
};

export const deletePlano = async (id: number): Promise<string> => {
  const response = await axios.delete(`${API_URL}/plano/deletar/${id}`);
  return response.data;
};
