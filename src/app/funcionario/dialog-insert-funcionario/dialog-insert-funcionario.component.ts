import { Funcionario } from './../../shared/login/models/funcionario.model';
import { FuncionarioService } from './../../services/funcionario.service';
import { Departamento } from './../../shared/login/models/departamento.model';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {
  EventEmitter,
  Input,
  Output,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-insert-funcionario',
  templateUrl: './dialog-insert-funcionario.component.html',
  styleUrls: ['./dialog-insert-funcionario.component.sass'],
})
export class DialogInsertFuncionarioComponent implements OnInit, OnChanges {
  @Input() displayDialogFuncionario: boolean = false;
  @Input() departamentos$!: Observable<Departamento[]>;
  form!: FormGroup;
  @Input() funcionarioEdit!: Funcionario;
  departamento!: Departamento [];
  funcionario: Funcionario = {
    nome: "",
    email: "",
    funcao: "",
    ultimoAcesso: "",
    departamentoId: "",
    departamento: this.departamento,
  };
  @Input() edit: boolean = false;
  @Output() isShow = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private funcionarioService: FuncionarioService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      departamento: ['', Validators.required],
      funcao: [null, [Validators.required]],
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      if (this.edit) {
        this.form.patchValue({
          nome: this.funcionarioEdit.nome,
          email: this.funcionarioEdit.email,
          funcao: this.funcionarioEdit.funcao,
        });
      }
    }
  }

  upload(event: any) {}
  save() {

    if (this.edit) {
      let funcionario = this.updateFuncionario(this.funcionarioEdit);
      this.funcionarioService.update(funcionario).subscribe((res) => {
        this.reset(false);
      });
    } else {
      let funcionario = this.updateFuncionario(this.funcionario);
      this.funcionarioService.create(funcionario).subscribe((res) => {
        this.reset(false);

      });
    }
  }
  reset(valor: boolean) {
    this.isShow.emit(valor);
    this.edit = valor;
    this.displayDialogFuncionario = valor;
    this.form.reset();
  }

  updateFuncionario(funcionario: Funcionario): Funcionario {

      funcionario.nome = this.form.get('nome')?.value;
      funcionario.email = this.form.get('email')?.value;
      let departamento = this.form.get('departamento')?.value;
      funcionario.departamentoId = departamento._id;
      funcionario.funcao = this.form.get('funcao')?.value;
      return funcionario;

  }
}
