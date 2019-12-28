import { Component, OnInit, Input } from '@angular/core';
import { Period } from 'src/app/model/Period';
import { Totais } from 'src/app/model/Totais';
import { RemuneracaoService } from 'src/app/service/remuneracao.service';
import { RemuneracaoDto } from 'src/app/model/remuneracao.dto';
import { Remuneracao } from 'src/app/model/Remuneracao';

@Component({
  selector: 'guia-minha-remuneracao',
  templateUrl: './minha-remuneracao.component.html'
})


export class MinhaRemuneracaoComponent implements OnInit {

  constructor() { }

  @Input() remuneracoes: RemuneracaoDto[];

  remuneracao: Remuneracao;

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

  ngOnInit() {
  }

  onPeriodChange(period){
    const periodSelected = this.periods.filter(p => p.viewValue === period.viewValue);
    console.log(periodSelected);
    //let remuneracaoDto = this.remuneracoes.filter(r => r.periodo === periodSelected.viewValue);
    //this.remuneracao = remuneracaoDto.
  }

}
