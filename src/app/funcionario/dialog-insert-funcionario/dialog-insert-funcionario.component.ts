import { Departamento } from './../../shared/login/models/departamento.model';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-insert-funcionario',
  templateUrl: './dialog-insert-funcionario.component.html',
  styleUrls: ['./dialog-insert-funcionario.component.sass']
})
export class DialogInsertFuncionarioComponent implements OnInit {

  @Input() displayDialogFuncionario: boolean =false;
  @Input() departamentos$!: Observable<Departamento[]>;
  form!: FormGroup
  edit: boolean = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      departamento: ['', Validators.required],
      funcao: [null, [Validators.required]]
    })
  }

  upload(event: any){

  }
  save(){}
}
