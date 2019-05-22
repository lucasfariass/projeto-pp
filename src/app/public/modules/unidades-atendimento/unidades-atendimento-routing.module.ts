import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PesquisarUnidadesComponent } from './components/pesquisar-unidades/pesquisar-unidades.component';
import { FormUnidadeComponent } from './components/form-unidade/form-unidade.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pesquisar',
    pathMatch: 'full'
  },
  {
    path: 'pesquisar',
    component: PesquisarUnidadesComponent
  },
  {
    path: 'cadastrar',
    component: FormUnidadeComponent
  },
  {
    path: 'editar/:id',
    component: FormUnidadeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnidadesAtendimentoRoutingModule { }
