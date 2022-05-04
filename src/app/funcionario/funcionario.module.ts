import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComumModule } from '../shared/login/modules/comum.module';
import { FuncionarioRoutingModule } from './funcionario-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';

import { FuncionarioComponent } from './funcionario.component';
import { DialogInsertFuncionarioComponent } from './dialog-insert-funcionario/dialog-insert-funcionario.component';



@NgModule({
  declarations: [
    FuncionarioComponent,
    DialogInsertFuncionarioComponent,
  ],
  imports: [
    CommonModule,
    ComumModule,
    FuncionarioRoutingModule,
    NgSelectModule
  ]
})
export class FuncionarioModule { }
