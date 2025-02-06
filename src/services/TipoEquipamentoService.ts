// src/services/tipoEquipamentoService.ts
import axios from 'axios';
import type { TipoEquipamento } from '../models/TipoEquipamento';

const API_URL = 'http://localhost:8080'; // ajuste conforme necessário

export const createTipoEquipamento = async (equipamento: TipoEquipamento): Promise<string> => {
  const response = await axios.post(`${API_URL}/equipamentos/tipos/cadastrar`, equipamento);
  return response.data;
};

export const listTipoEquipamentos = async (): Promise<TipoEquipamento[]> => {
  const response = await axios.get(`${API_URL}/equipamentos/tipos/listar`);
  return response.data;
};

export const getTipoEquipamento = async (id: number): Promise<TipoEquipamento> => {
  const response = await axios.get(`${API_URL}/equipamentos/tipos/${id}`);
  return response.data;
};

export const editTipoEquipamento = async (id: number, equipamento: TipoEquipamento): Promise<TipoEquipamento> => {
  const response = await axios.put(`${API_URL}/equipamentos/tipos/editar/${id}`, equipamento);
  return response.data;
};

export const deleteTipoEquipamento = async (id: number): Promise<string> => {
  const response = await axios.delete(`${API_URL}/equipamentos/tipos/deletar/${id}`);
  return response.data;
};
