import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tela',
  templateUrl: './tela.page.html',
  styleUrls: ['./tela.page.scss'],
})
export class TelaPage implements OnInit {

  QntdDias:any;
  ValorDiaria:any;
  ValorPagar:any;

  constructor(private activetedRoute: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.QntdDias = this.activetedRoute.snapshot.paramMap.get('QntdDias')
    this.ValorDiaria = this.activetedRoute.snapshot.paramMap.get('ValorDiaria')
    this.ValorPagar = this.activetedRoute.snapshot.paramMap.get('ValorPagar')
  }
  confirmar(){
    this.router.navigateByUrl
    (`/tela-confirmar-cadastro/${this.ValorPagar}`)
  }
}
