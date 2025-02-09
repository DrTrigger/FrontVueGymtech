// src/services/contratoService.ts
import axios from 'axios';
import type { Contrato } from '../models/Contrato';
import type { ContratoResponse } from '../models/ContratoResponse';

const API_URL = 'http://localhost:8080'; // ajuste conforme necessário

export const createContrato = async (contrato: Contrato): Promise<string> => {
  const response = await axios.post(`${API_URL}/contrato/cadastrar`, contrato);
  return response.data;
};

export const listContratos = async (): Promise<ContratoResponse[]> => {
  const response = await axios.get(`${API_URL}/contrato/listar`);
  return response.data;
};

export const getContrato = async (id: number): Promise<ContratoResponse> => {
  const response = await axios.get(`${API_URL}/contrato/${id}`);
  return response.data;
};

export const editContrato = async (id: number, contrato: Contrato): Promise<string> => {
  const response = await axios.put(`${API_URL}/contrato/editar/${id}`, contrato);
  return response.data;
};

export const deleteContrato = async (id: number): Promise<string> => {
  const response = await axios.delete(`${API_URL}/contrato/deletar/${id}`);
  return response.data;
};
