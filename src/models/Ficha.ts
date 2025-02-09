// src/models/FichaInput.ts
export interface Ficha {
    dataInicio: string; // formato ISO, ex.: "2025-01-15T10:15:00"
    dataFim: string;    // formato ISO
    idAluno: number;
    idProfessor: number;
  }
  