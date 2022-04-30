import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.sass'],
})
export class DepartamentoComponent implements OnInit {
  displayDialogDepartamento!: boolean;
  form!: FormGroup;
  edit!: boolean;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {

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
