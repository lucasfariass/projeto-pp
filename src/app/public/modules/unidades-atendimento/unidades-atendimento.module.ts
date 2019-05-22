import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnidadesAtendimentoRoutingModule } from './unidades-atendimento-routing.module';
import { FormUnidadeComponent } from './components/form-unidade/form-unidade.component';
import { PesquisarUnidadesComponent } from './components/pesquisar-unidades/pesquisar-unidades.component';
import { UnidadesAtendimentoService } from './services/unidades-atendimento.service';

@NgModule({
  declarations: [
    FormUnidadeComponent,
    PesquisarUnidadesComponent
  ],
  imports: [
    CommonModule,
    UnidadesAtendimentoRoutingModule
  ],
  providers: [
    UnidadesAtendimentoService
  ]
})
export class UnidadesAtendimentoModule { }
