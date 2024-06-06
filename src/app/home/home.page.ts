import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.html'],
})
export class HomePage {
  ValorDiaria = 0
  QntdDias = 0
  ValorPagar = 0

  constructor(public router: Router){}
    abrirTela(){
      this.ValorPagar = this.QntdDias*this.ValorDiaria
      this.router.navigateByUrl
      (`/tela-confirmar/${this.ValorDiaria}/${this.QntdDias}/${this.ValorPagar}`);



    }


  }


