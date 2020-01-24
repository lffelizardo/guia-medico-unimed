import {Component, Input, OnInit} from '@angular/core';
import {ModificadorPaciente} from '../../model/modificador-paciente.model';

@Component({
  selector: 'app-producao-medica-detalhe-modificadores-table',
  templateUrl: './producao-medica-detalhe-modificadores-table.component.html',
  styleUrls: ['./producao-medica-detalhe-modificadores-table.component.scss']
})
export class ProducaoMedicaDetalheModificadoresTableComponent implements OnInit {

  constructor() { }

  @Input() modificadores: ModificadorPaciente[];

  displayedColumns: string[] = ['movimento', 'valor', 'acomodacao', 'variavel', 'urgencia', 'total'];

  ngOnInit() {
  }

}
