import { Observable } from 'rxjs';
import { Departamento } from './../shared/login/models/departamento.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, SimpleChanges } from '@angular/core';
import { DepartamentoService } from '../services/departamento.service';
import { OnChanges } from '@angular/core';

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
  departamentoEdit!: Departamento;
  constructor(private formBuilder: FormBuilder, private departamentoService: DepartamentoService) {}

  ngOnInit(): void {
   this.inicializarForm();
   this.departamentos$ = this.departamentoService.getAll();
   console.log(this.departamentos$)
  }


  ngOnChanges(changes: SimpleChanges): void {

  }

  inicializarForm(){
    this.form = this.formBuilder.group({
      nome: [null, [Validators.required]],
      telefone: [null, [Validators.required]],
    })
  }

  add() {
     this.showDialog(true, false);
  }

  onShowDialog(event: any){
   this.displayDialogDepartamento = event;
  }

  onEdit(event: any){
    this.edit = event;
  }

  selecionaDepartamento(departamento: Departamento) {
    this.departamentoEdit = departamento;
    this.showDialog(true, true);
  }

  showDialog(show: boolean, isEdit: boolean){
    console.log(isEdit)
    this.edit = isEdit;
    this.displayDialogDepartamento = show;
  }

  delete(departamento: Departamento, index: number) {
    this.departamentoService.delete(departamento, index).subscribe();
  }

  save() {

  }
}
