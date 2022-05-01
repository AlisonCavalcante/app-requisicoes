import { Departamento } from './departamento.model';

export interface Funcionario{
  _id?: string;
  nome: string,
  email: string,
  funcao: string,
  ultimoAcesso: any,
  departamento: Departamento
}
