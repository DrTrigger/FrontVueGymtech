// src/models/EquipamentoInput.ts
export interface Equipamento {
    nome: string;
    id_tipo_equipamento: number;
    peso: number;
    fabricante: string;
    dataAquisicao: string; // utilizar string no formato ISO (ex.: "2025-02-06T18:56:00")
    estado: string;
    descricao: string;
  }
  