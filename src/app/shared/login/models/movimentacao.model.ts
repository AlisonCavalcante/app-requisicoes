import { Funcionario } from "./funcionario.model";

export interface Movimentacao{
  _id?: string;
  funcionario: Funcionario;
  dataHora: any;
  status: string
  descricao: string;

}
