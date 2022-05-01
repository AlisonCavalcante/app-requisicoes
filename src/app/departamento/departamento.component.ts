import { Departamento } from './../shared/login/models/departamento.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DepartamentoService } from '../services/departamento.service';

@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.sass'],
})
export class DepartamentoComponent implements OnInit {

  displayDialogDepartamento!: boolean;
  form!: FormGroup;
  edit!: boolean;
  departamentos!: Departamento[];

  constructor(private formBuilder: FormBuilder, private departamentoService: DepartamentoService) {}

  ngOnInit(): void {
    this.departamentoService.getAll().subscribe((res) => {
      this.departamentos = res;
    })
  }

  add() {
    this.edit = false;
    console.log(this.displayDialogDepartamento);
    this.displayDialogDepartamento = true;
  }

  selecionaDepartamento() {}

  delete() {}

  save() {}
}
