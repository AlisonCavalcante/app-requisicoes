import { Departamento } from './../../shared/login/models/departamento.model';
import { DepartamentoService } from './../../services/departamento.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { Component, OnInit, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-dialog-insert-departamento',
  templateUrl: './dialog-insert-departamento.component.html',
  styleUrls: ['./dialog-insert-departamento.component.sass']
})
export class DialogInsertDepartamentoComponent implements OnInit, OnChanges {

  @Input() displayDialogDepartamento!: boolean;
  @Output() isShow = new EventEmitter;
  form!: FormGroup;
  @Input() edit!: boolean;
  @Input() departamentoEdit!: Departamento;

  constructor(private formBuilder: FormBuilder, private departamentoService: DepartamentoService) { }

  ngOnInit(): void {
    this.configForm();

  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes){
      if(this.edit){
        this.form.patchValue({
          nome: this.departamentoEdit.nome,
          telefone: this.departamentoEdit.telefone
        })
      }
    }
  }

  configForm() {
    this.form = this.formBuilder.group({
      nome: [null, Validators.required],
      telefone: [null, [Validators.required]],
    });
  }

  save(){
    if(this.edit){
      let departamento = this.updateDepartamento();
      this.departamentoService.update(departamento).subscribe((res)=> {
        this.reset(false);
      });
    } else {
      this.departamentoService.createDepartamento(this.form.value).subscribe((res) => {
        this.reset(false);
      });
    }
    this.resetForm();
  }

  updateDepartamento(): Departamento{
    this.departamentoEdit.nome = this.form.get('nome')?.value;
    this.departamentoEdit.telefone = this.form.get('telefone')?.value;
    return this.departamentoEdit;
  }

  reset(valor: boolean){
    this.isShow.emit(valor);
    this.edit = valor;
    this.displayDialogDepartamento = valor;
  }

  resetForm(){
    this.form.reset();
  }
}
