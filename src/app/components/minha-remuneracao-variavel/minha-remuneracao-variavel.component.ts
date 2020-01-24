import {Component, Input, OnInit} from '@angular/core';
import {MinhaRemuneracaoDetalhe} from '../../model/minha-remuneracao-detalhe.model';

@Component({
  selector: 'app-minha-remuneracao-variavel',
  templateUrl: './minha-remuneracao-variavel.component.html',
  styleUrls: ['./minha-remuneracao-variavel.component.scss']
})
export class MinhaRemuneracaoVariavelComponent implements OnInit {

  @Input()
  minhaRemuneracaoDetalhe: MinhaRemuneracaoDetalhe;

  constructor() { }

  ngOnInit() {
  }

}
