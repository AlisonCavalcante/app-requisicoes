import { RequisicaoComponent } from './requisicao.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/guards/auth-guard.guard';

const routes: Routes = [
  {
    path: '',
    component: RequisicaoComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequisicaoRoutingModule { }
