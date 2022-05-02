import { Observable } from 'rxjs';
import { Departamento } from './../shared/login/models/departamento.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, SimpleChanges } from '@angular/core';
import { DepartamentoService } from '../services/departamento.service';
import { OnChanges } from '@angular/core';
import { AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.sass'],
})
export class DepartamentoComponent implements OnInit, OnChanges {

  displayDialogDepartamento!: boolean;
  form!: FormGroup;
  edit!: boolean;
  departamentos$!: Observable<Departamento[]>;

  constructor(private formBuilder: FormBuilder, private departamentoService: DepartamentoService) {}

  ngOnInit(): void {
   this.inicializarForm();
   this.departamentos$ = this.departamentoService.getAll();
   console.log(this.departamentos$)
  }


  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
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

  selecionaDepartamento(departamento: Departamento) {
    console.log(departamento)
  }

  delete(departamento: Departamento, index: number) {
    this.departamentoService.delete(departamento, index).subscribe();
  }

  save() {

  }
}
