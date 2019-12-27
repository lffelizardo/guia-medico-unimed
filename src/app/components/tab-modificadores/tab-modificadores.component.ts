import { Component, OnInit } from '@angular/core';
import { Modificador } from 'src/app/model/Modificador';
import { Movimento } from 'src/app/model/Movimento';

@Component({
  selector: 'guia-tab-modificadores',
  templateUrl: './tab-modificadores.component.html'
})
export class TabModificadoresComponent implements OnInit {

  constructor() { }

  displayedColumns: string[] = ['movimento', 'valor', 'acomodacao', 'variavel', 'urgencia', 'total'];

  dataSource: Modificador[] = [
    {
      movimento : '401424555 - Cesariana',
      posicao : 'Cirurgião',
      valor : 890.00,
      acomodacao : 861.69,
      variavel : 0,
      urgencia : 0,
      total : 1786.72
    }
  ];

  ngOnInit() {
  }

}
