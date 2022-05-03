import { Departamento } from './../../shared/login/models/departamento.model';
import { DepartamentoService } from './../../services/departamento.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Input, Output } from '@angular/core';
import { Component, OnInit, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-dialog-insert-departamento',
  templateUrl: './dialog-insert-departamento.component.html',
  styleUrls: ['./dialog-insert-departamento.component.sass']
})
export class DialogInsertDepartamentoComponent implements OnInit {

  @Input() displayDialogDepartamento!: boolean;
  @Output() isShow = new EventEmitter;
  form!: FormGroup;
  @Input() edit!: boolean;
  @Input() departamentoEdit!: Departamento;

  constructor(private formBuilder: FormBuilder, private departamentoService: DepartamentoService) { }

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
    if(this.edit){
      this.departamentoEdit.nome = this.form.get('nome')?.value;
      this.departamentoEdit.telefone = this.form.get('telefone')?.value;
      console.log(this.departamentoEdit)
      this.departamentoService.update(this.departamentoEdit).subscribe((res)=> {
        this.isShow.emit(false);
        this.displayDialogDepartamento = false;
      })
    } else {
      this.departamentoService.createDepartamento(this.form.value).subscribe((res) => {
        this.isShow.emit(false);
        this.displayDialogDepartamento = false;

      });
    }
    this.resetForm();
  }

  resetForm(){
    this.form.reset();
  }
}
