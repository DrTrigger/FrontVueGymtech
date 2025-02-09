// src/models/Aluno.ts
export interface Aluno {
    id?: number; // opcional, pois pode ser gerado pelo back-end
    nome: string;
    data_nascimento: string;
    cpf: string;
    email: string;
    senha: string;
    data_matricula: string;
    matricula_aluno: string;
    restricao_medica: string;
    //contratos: Contrato[];
}
  