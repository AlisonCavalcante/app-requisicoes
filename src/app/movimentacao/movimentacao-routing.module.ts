import { MovimentacaoComponent } from './movimentacao.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/guards/auth-guard.guard';

const routes: Routes = [
  {
    path: '',
    component: MovimentacaoComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovimentacaoRoutingModule { }
