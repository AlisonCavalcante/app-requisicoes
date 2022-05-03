import { Funcionario } from './../shared/login/models/funcionario.model';
import { FuncionarioService } from './../services/funcionario.service';
import { DepartamentoService } from './../services/departamento.service';
import { Departamento } from './../shared/login/models/departamento.model';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.sass']
})
export class FuncionarioComponent implements OnInit {

  form!: FormGroup;
  departamentos$!: Observable<Departamento[]>;
  funcionarios$!: Observable<Funcionario[]>;
  departamentoFiltro!: string;
  edit!: boolean;
  displayDialogFuncionario: boolean = false;
  constructor(private formBuilder: FormBuilder, private funcionarioService: FuncionarioService ,private departamentoService: DepartamentoService) { }

  ngOnInit(): void {
    this.departamentos$ = this.departamentoService.getAll();
    this.departamentoFiltro = 'TODOS';
    this.funcionarios$ = this.funcionarioService.getAll();
  }

  add(){
    this.showDialog(true, false);
  }

  selecionaFuncionario(){
    this.showDialog(true, true);
  }

  showDialog(show: boolean, isEdit: boolean){
    this.edit = isEdit;
    this.displayDialogFuncionario = show;
  }

  delete(){}

}
