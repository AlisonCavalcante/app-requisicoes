import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  mensagem!: string;
  emailEnviado!: boolean;
  formulario!: FormGroup;

  constructor(private authService: AuthService,private router: Router, private formBuilder: FormBuilder) {}

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

    this.authService.get();
  }

  logar() {
    this.router.navigate([''])
    console.log(this.formulario);
  }

  enviaLink() {}
}
