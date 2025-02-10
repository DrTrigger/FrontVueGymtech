// src/services/equipamentoService.ts
import axios from 'axios';
import type { Equipamento } from '../models/Equipamento';
import type { EquipamentoResponse } from '../models/EquipamentoResponse';

const API_URL = 'http://localhost:8080'; // ajuste conforme necessário

export const createEquipamento = async (equipamento: Equipamento): Promise<string> => {
  const response = await axios.post(`${API_URL}/equipamento/cadastrar`, equipamento);
  return response.data;
};

export const listEquipamentos = async (): Promise<EquipamentoResponse[]> => {
  const response = await axios.get(`${API_URL}/equipamento/listar`);
  return response.data;
};

export const getEquipamento = async (id: number): Promise<EquipamentoResponse> => {
  const response = await axios.get(`${API_URL}/equipamento/${id}`);
  return response.data;
};

export const editEquipamento = async (id: number, equipamento: Equipamento): Promise<string> => {
  const response = await axios.put(`${API_URL}/equipamento/editar/${id}`, equipamento);
  return response.data;
};

export const deleteEquipamento = async (id: number): Promise<string> => {
  const response = await axios.delete(`${API_URL}/equipamento/deletar/${id}`);
  return response.data;
};
