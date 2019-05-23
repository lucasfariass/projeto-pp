import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultasRoutingModule } from './consultas-routing.module';
import { PesquisarConsultasComponent } from './components/pesquisar-consultas/pesquisar-consultas.component';
import { FormConsultasComponent } from './components/form-consultas/form-consultas.component';

@NgModule({
  declarations: [PesquisarConsultasComponent, FormConsultasComponent],
  imports: [
    CommonModule,
    ConsultasRoutingModule
  ]
})
export class ConsultasModule { }
