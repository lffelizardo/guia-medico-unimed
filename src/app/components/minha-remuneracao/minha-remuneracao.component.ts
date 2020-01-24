import {Component, Input, OnInit, Output} from '@angular/core';
import {MinhaRemuneracao} from '../../model/minha-remuneracao.model';
import {MinhaRemuneracaoDetalhe} from '../../model/minha-remuneracao-detalhe.model';

@Component({
  selector: 'app-minha-remuneracao',
  templateUrl: './minha-remuneracao.component.html',
  styleUrls: ['./minha-remuneracao.component.scss']
})
export class MinhaRemuneracaoComponent implements OnInit {

  @Input()
  minhaRemurecao: MinhaRemuneracao;

  @Output()
  periodoSelecionado: MinhaRemuneracaoDetalhe;

  constructor() {
  }

  ngOnInit() {
    if(this.minhaRemurecao != null) {
      this.periodoSelecionado = this.minhaRemurecao.periodos[0];
    }
  }

  onPeriodChange() {
    // const periodSelected = this.periods.filter(p => p.value === this.selectedPeriod)[0];
    // console.log(periodSelected);
    // this.remuneracao = this.remuneracaoService.getRemuneracaoByPeriod(periodSelected.value).remuneracoes;
  }

}
