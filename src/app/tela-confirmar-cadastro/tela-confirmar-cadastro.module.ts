import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelaConfirmarCadastroPageRoutingModule } from './tela-confirmar-cadastro-routing.module';

import { TelaConfirmarCadastroPage } from './tela-confirmar-cadastro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelaConfirmarCadastroPageRoutingModule
  ],
  declarations: [TelaConfirmarCadastroPage]
})
export class TelaConfirmarCadastroPageModule {}
