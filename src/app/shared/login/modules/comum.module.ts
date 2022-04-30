import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimeNGModule } from './primeng.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PrimeNGModule
  ],
  exports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: []
})
export class ComumModule { }
