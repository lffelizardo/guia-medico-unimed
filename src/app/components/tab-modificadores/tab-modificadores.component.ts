import { Component, OnInit, Input } from '@angular/core';
import { Modificador } from 'src/app/model/Modificador';
import { Movimento } from 'src/app/model/Movimento';
import { ProducaoMedica } from 'src/app/model/ProducaoMedica';

@Component({
  selector: 'guia-tab-modificadores',
  templateUrl: './tab-modificadores.component.html'
})
export class TabModificadoresComponent implements OnInit {

  constructor() { }

  displayedColumns: string[] = ['movimento', 'valor', 'acomodacao', 'variavel', 'urgencia', 'total'];

  @Input() data: ProducaoMedica;

  ngOnInit() {
  }

}
