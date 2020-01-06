import { Component, OnInit, Input } from '@angular/core';
import { Movimento } from 'src/app/model/Movimento';
import { ProducaoMedica } from 'src/app/model/ProducaoMedica';

@Component({
  selector: 'guia-tab-movimentos',
  templateUrl: './tab-movimentos.component.html'
})
export class TabMovimentosComponent implements OnInit {

  constructor() { }

  displayedColumns: string[] = ['movimento', 'posicao', 'valor', 'modificador', 'glosa', 'total'];
  

  @Input() data: ProducaoMedica;

  ngOnInit() {
  }

}
