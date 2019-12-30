import { Component, OnInit, Input } from '@angular/core';
import { Remuneracao } from 'src/app/model/Remuneracao';
import { RemuneracaoService } from 'src/app/service/remuneracao.service';
import { RemuneracaoVariavel } from 'src/app/model/RemuneracaoVariavel';

@Component({
  selector: 'guia-remuneracao-variavel',
  templateUrl: './remuneracao-variavel.component.html'
})
export class RemuneracaoVariavelComponent implements OnInit {

  constructor(private remuneracaoService: RemuneracaoService) { }

  remuneracaoVariavel: RemuneracaoVariavel;

  ngOnInit() {
    this.remuneracaoService.currentRemuneracao.subscribe(r => this.remuneracaoVariavel = r.remuneracaoVariavel);
  }

  /*totalValue: number = 74538;
  percentual: string = '2%';
  percentualConquista: string = '50%';*/

}
