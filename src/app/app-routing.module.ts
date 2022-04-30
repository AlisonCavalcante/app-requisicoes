import { LoginComponent } from './shared/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component: LoginComponent
  },
  {
    path:'departamento',
    loadChildren: () => import('./departamento/departamento.module').then((d) => d.DepartamentoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
