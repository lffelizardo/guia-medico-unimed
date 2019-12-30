import { Component, OnInit, Output } from '@angular/core';
import { RemuneracaoDto } from 'src/app/model/remuneracao.dto';
import {RemuneracaoService } from 'src/app/service/remuneracao.service';
import { Period } from 'src/app/model/Period';
import { Totais } from 'src/app/model/Totais';
import { Remuneracao } from 'src/app/model/Remuneracao';

@Component({
  selector: 'guia-remuneracao',
  templateUrl: './remuneracao.component.html'
})
export class RemuneracaoComponent implements OnInit {

  @Output() remuneracoes: RemuneracaoDto[];
  @Output() remuneracao: Remuneracao;

  constructor(private remuneracaoService: RemuneracaoService) {
    this.findRemuneracoes();
   }

   selectedPeriod: string;
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

  findRemuneracoes(){
    this.remuneracoes = this.remuneracaoService.getRemuneracaoById();
  }

  onPeriodChange(){
    const periodSelected = this.periods.filter(p => p.value === this.selectedPeriod)[0];
    console.log(periodSelected);
    this.remuneracao = this.remuneracaoService.getRemuneracaoByPeriod(periodSelected.value).remuneracoes;
  }

}
