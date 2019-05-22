import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { FichasAtendimentoRoutingModule } from './fichas-atendimento-routing.module';
import { FormPacienteComponent } from './components/form-paciente/form-paciente.component';
import { FichasAtendimentoService } from './services/fichas-atendimento.service';

@NgModule({
  declarations: [
    FormPacienteComponent
  ],
  imports: [
    CommonModule,
    FichasAtendimentoRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    FichasAtendimentoService
  ]
})
export class FichasAtendimentoModule { }
