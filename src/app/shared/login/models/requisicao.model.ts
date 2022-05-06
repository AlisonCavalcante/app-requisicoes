import { Departamento } from "./departamento.model";
import { Funcionario } from "./funcionario.model";
import { Movimentacao } from "./movimentacao.model";

export interface Requisicao{
  _id?: string;
  solicitante: Funcionario;
  dataAbertura: any;
  ultimaAtualizacao: any;
  descricao: string;
  status: string;
  destino: Departamento;
  movimentacoes: Movimentacao[];
}
