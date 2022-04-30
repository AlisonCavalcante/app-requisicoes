import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartamentoRoutingModule } from './departamento-routing.module';
import { ComumModule } from '../shared/login/modules/comum.module';
import { ReactiveFormsModule } from '@angular/forms';

import { DepartamentoComponent } from './departamento.component';
import { DialogInsertDepartamentoComponent } from './dialog-insert-departamento/dialog-insert-departamento.component';


@NgModule({
  declarations: [
    DepartamentoComponent,
    DialogInsertDepartamentoComponent
  ],
  imports: [
    CommonModule,
    DepartamentoRoutingModule,
    ComumModule,
    ReactiveFormsModule,
  ]
})
export class DepartamentoModule { }
