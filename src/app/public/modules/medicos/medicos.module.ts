import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicosRoutingModule } from './medicos-routing.module';
import { FormMedicosComponent } from './components/form-medicos/form-medicos.component';

@NgModule({
  declarations: [FormMedicosComponent],
  imports: [
    CommonModule,
    MedicosRoutingModule
  ]
})
export class MedicosModule { }
