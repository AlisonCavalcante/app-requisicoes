import { Observable } from 'rxjs';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from './models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  mensagem!: string;
  emailEnviado!: boolean;
  formulario!: FormGroup;
  userLogado: boolean = false;
  usuario!: User;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      email: [
        null,
        [Validators.required, Validators.email, Validators.maxLength(60)],
      ],
      senha: [
        null,
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(30),
        ],
      ],
    });
  }

  logar() {
    let email = this.formulario.get('email')?.value;
    this.authService.getUser(email).subscribe(
      (res:  User) => {
        this.usuario = res;
        this.mensagem = '';
        if(this.validarSenha()){
          this.mensagem = 'Usuário Logado';
          this.userLogado = true;
        }else
        this.mensagem = 'Senha  incorreta'

      },
      (error) => {
        this.mensagem = error.error.mensagem;
        this.resetForm();
      }
    );
  }

  enviaLink() {}

  resetForm() {
    this.formulario.reset();
  }

  validarSenha(): boolean{
    let senha = this.formulario.get('senha')?.value;
    if(this.usuario.senha === senha){
      return true
    } else
    return false
  }

}
