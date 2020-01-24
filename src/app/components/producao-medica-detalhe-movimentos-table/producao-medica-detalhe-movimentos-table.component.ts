import {Component, Input, OnInit} from '@angular/core';
import {MovimentoPaciente} from '../../model/movimento-paciente.model';

@Component({
  selector: 'app-producao-medica-detalhe-movimentos-table',
  templateUrl: './producao-medica-detalhe-movimentos-table.component.html',
  styleUrls: ['./producao-medica-detalhe-movimentos-table.component.scss']
})
export class ProducaoMedicaDetalheMovimentosTableComponent implements OnInit {

  constructor() { }

  @Input() movimentos: MovimentoPaciente[];

  displayedColumns: string[] = ['movimento', 'posicao', 'valor', 'modificador', 'glosa', 'total'];

  ngOnInit() {
  }

}
