// src/models/TipoEquipamento.ts
export interface TipoEquipamento {
    idTipo?: number; // opcional, pois pode não existir ao criar um novo registro
    nomeTipo: string;
    descricao: string;
}
  