import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'tela-confirmar/:QntdDias/:ValorDiaria/:ValorPagar',
    loadChildren: () => import('./tela/tela.module').then( m => m.TelaPageModule)
  },
  {
    path: 'tela-confirmar-cadastro/:ValorPagar',
    loadChildren: () => import('./tela-confirmar-cadastro/tela-confirmar-cadastro.module').then( m => m.TelaConfirmarCadastroPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
