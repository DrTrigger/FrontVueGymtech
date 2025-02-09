// src/models/ProfessorInput.ts
export interface Professor {
    nome: string;
    data_nascimento: string; // formato ISO (ex.: "1997-05-15T10:30:00")
    cpf: string;
    email: string;
    senha: string;
    salario: number;
    cref: string;
    carga_horaria_semanal: number;
  }
  