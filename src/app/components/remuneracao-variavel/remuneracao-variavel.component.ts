import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'guia-remuneracao-variavel',
  templateUrl: './remuneracao-variavel.component.html'
})
export class RemuneracaoVariavelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  totalValue: number = 74538;
  percentual: string = '2%';
  percentualConquista: string = '50%';

}
