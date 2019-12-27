import { Component, OnInit } from '@angular/core';
import { Glosa } from 'src/app/model/Glosa';

@Component({
  selector: 'guia-tab-modal-glosas',
  templateUrl: './tab-modal-glosas.component.html'
})
export class TabModalGlosasComponent implements OnInit {

  constructor() { }

  displayedColumns: string[] = ['movimento', 'valor', 'motivo'];

  dataSource: Glosa[] = [
    {
      movimento : '401424555 - Cesariana',
      valor : 890.00,
      motivo : 'Impossível cesariana e parto normal no mesmo paciente'
    }
  ];

  ngOnInit() {
  }

}
