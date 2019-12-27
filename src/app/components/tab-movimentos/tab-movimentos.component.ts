import { Component, OnInit } from '@angular/core';
import { Movimento } from 'src/app/model/Movimento';

@Component({
  selector: 'guia-tab-movimentos',
  templateUrl: './tab-movimentos.component.html'
})
export class TabMovimentosComponent implements OnInit {

  constructor() { }

  displayedColumns: string[] = ['movimento', 'posicao', 'valor', 'modificador', 'glosa', 'total'];
  

  dataSource: Movimento[] = [
    {
      movimento : '401424555 - Cesariana',
      posicao : 'Cirurgião',
      valor : 890.00,
      modificador : '+R$ 861,69',
      glosa : '-',
      total : 1786.72
    }
  ];

  ngOnInit() {
  }

}
