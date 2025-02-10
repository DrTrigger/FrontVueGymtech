import type { TipoEquipamento } from "./TipoEquipamento";

export interface EquipamentoResponse {
    idEquipamento: number;
    nome: string;
    peso: number;
    fabricante: string;
    dataAquisicao: string;
    estado: string;
    descricao: string;
    tipoEquipamento: TipoEquipamento;
}