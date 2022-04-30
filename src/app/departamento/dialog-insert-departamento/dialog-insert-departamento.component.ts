import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-insert-departamento',
  templateUrl: './dialog-insert-departamento.component.html',
  styleUrls: ['./dialog-insert-departamento.component.sass']
})
export class DialogInsertDepartamentoComponent implements OnInit {

  @Input() displayDialogDepartamento!: boolean;
  form!: FormGroup;
  edit!: boolean;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.configForm();
  }

  configForm() {
    this.form = this.formBuilder.group({
      nome: [null, Validators.required],
      telefone: [null, [Validators.required]],
    });
  }

  save(){

  }
}
