import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelaConfirmarCadastroPage } from './tela-confirmar-cadastro.page';


const routes: Routes = [
  {
    path: '',
    component: TelaConfirmarCadastroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelaConfirmarCadastroPageRoutingModule {}
