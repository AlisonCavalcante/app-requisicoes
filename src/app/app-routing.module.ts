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
  },
  {
    path:'funcionario',
    loadChildren: () => import('./funcionario/funcionario.module').then((f) => f.FuncionarioModule)
  },
  {
    path:'requisicao',
    loadChildren: () => import('./requisicao/requisicao.module').then((r) => r.RequisicaoModule)
  },
  {
    path:'movimentacao',
    loadChildren: () => import('./movimentacao/movimentacao.module').then((m) => m.MovimentacaoModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
