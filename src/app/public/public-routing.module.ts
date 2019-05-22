import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TelaInicialComponent } from './components/tela-inicial/tela-inicial.component';

const routes: Routes = [
  {
    path: 'tela-inicial',
    component: TelaInicialComponent
  },
  {
    path: 'unidades',
    loadChildren: './modules/unidades-atendimento/unidades-atendimento.module#UnidadesAtendimentoModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
