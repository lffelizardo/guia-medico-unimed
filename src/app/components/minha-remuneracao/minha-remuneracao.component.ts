import { Component, OnInit } from '@angular/core';
import { Period } from 'src/app/model/Period';
import { Totais } from 'src/app/model/Totais';

@Component({
  selector: 'guia-minha-remuneracao',
  templateUrl: './minha-remuneracao.component.html'
})


export class MinhaRemuneracaoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  totalValue: number = 3726914;
  totais: Totais = {
    producaoTotal : 4439687,
    descontos : 508773,
    glosas : 2040
  }

  periods: Period[] = [
    {value: '11-19', viewValue: 'Novembro/2019'},
    {value: '12-19', viewValue: 'Dezembro/2019'},
    {value: '01-20', viewValue: 'Janeiro/2019'}
  ];

}
