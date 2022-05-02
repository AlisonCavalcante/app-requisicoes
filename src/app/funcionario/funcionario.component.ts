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
  departamentoFiltro!: string;

  constructor(private formBuilder: FormBuilder, private departamentoService: DepartamentoService) { }

  ngOnInit(): void {
    this.departamentos$ = this.departamentoService.getAll();
    this.departamentoFiltro = 'TODOS';
  }

  add(){}

  selecionaFuncionario(){}

  delete(){}

}
