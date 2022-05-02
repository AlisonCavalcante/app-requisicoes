import { Observable } from 'rxjs';
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
  departamentos$!: Observable<Departamento[]>;

  constructor(private formBuilder: FormBuilder, private departamentoService: DepartamentoService) {}

  ngOnInit(): void {
   this.inicializarForm();
   this.departamentos$ = this.departamentoService.getAll();
  }

  inicializarForm(){
    this.form = this.formBuilder.group({
      nome: [null, [Validators.required]],
      telefone: [null, [Validators.required]],
    })
  }

  add() {
    this.edit = false;
     console.log(this.displayDialogDepartamento);
     this.displayDialogDepartamento = true;
  }

  selecionaDepartamento() {}

  delete(departamento: Departamento) {
    this.departamentoService.delete(departamento).subscribe();
  }

  save() {

  }
}
