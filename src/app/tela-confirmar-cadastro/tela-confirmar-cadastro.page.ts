import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tela-confirmar-cadastro',
  templateUrl: './tela-confirmar-cadastro.page.html',
  styleUrls: ['./tela-confirmar-cadastro.page.scss'],
})
export class TelaConfirmarCadastroPage implements OnInit {

  constructor(private router: Router,private ActivatedRoute:ActivatedRoute) { }

  ValorPagar:any;


  ngOnInit() {

    this.ValorPagar = this.ActivatedRoute.snapshot.paramMap.get('ValorPagar')
  }

}
