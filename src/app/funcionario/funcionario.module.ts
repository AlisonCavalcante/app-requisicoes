import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComumModule } from '../shared/login/modules/comum.module';
import { FuncionarioRoutingModule } from './funcionario-routing.module';

import { FuncionarioComponent } from './funcionario.component';



@NgModule({
  declarations: [
    FuncionarioComponent
  ],
  imports: [
    CommonModule,
    ComumModule,
    FuncionarioRoutingModule
  ]
})
export class FuncionarioModule { }
