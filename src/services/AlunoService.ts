// src/services/alunoService.ts
import axios from 'axios';
import type { Aluno } from '../models/Aluno';

const API_URL = 'http://localhost:8080'; // ajuste conforme necessário

export const createAluno = async (aluno: Aluno): Promise<string> => {
  const response = await axios.post(`${API_URL}/aluno/cadastrar`, aluno);
  return response.data;
};

export const listAlunos = async (): Promise<Aluno[]> => {
  const response = await axios.get(`${API_URL}/aluno/listar`);
  console.log(response.data);
  // vou criar em aluno uma list de contratos
  // vou associar diretamente aqui chamando o endpoint personalizado que vou criar no back e adicionar na lista aqui.
  return response.data;
};

export const getAluno = async (id: number): Promise<Aluno> => {
  const response = await axios.get(`${API_URL}/aluno/${id}`);
  return response.data;
};

export const editAluno = async (id: number, aluno: Aluno): Promise<string> => {
  const response = await axios.put(`${API_URL}/aluno/editar/${id}`, aluno);
  return response.data;
};

export const deleteAluno = async (id: number): Promise<string> => {
  const response = await axios.delete(`${API_URL}/aluno/deletar/${id}`);
  return response.data;
};
