// src/models/Exercicio.ts
export interface Exercicio {
    id_exercicio?: number; // opcional, pois pode não existir ao criar um novo
    grupoMuscular: string;
    nome: string;
  }
  