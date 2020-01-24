import {Component, Input, OnInit} from '@angular/core';
import {ProducaoMedicaPaciente} from '../../model/producao-medica-paciente.model';
import {RemuneracaoService} from '../../service/remuneracao.service';
import {ProducaoMedicaDetalheDialogComponent} from '../producao-medica-detalhe-dialog/producao-medica-detalhe-dialog.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-producao-medica-table',
  templateUrl: './producao-medica-table.component.html',
  styleUrls: ['./producao-medica-table.component.scss']
})
export class ProducaoMedicaTableComponent implements OnInit {

  constructor(private remuneracaoService: RemuneracaoService, public dialog: MatDialog) { }

  @Input()
  producaoMedicaList: ProducaoMedicaPaciente[];
  displayedColumns: string[] = ['paciente', 'data', 'valor', 'variavel', 'glosas', 'prorata', 'valorRecebido'];

  ngOnInit() {
    this.producaoMedicaList = this.remuneracaoService.findProducaoMedica('test');
  }

  showDetalheProducaoMedicaPaciente(row: ProducaoMedicaPaciente): void {
    const dialogRef = this.dialog.open(ProducaoMedicaDetalheDialogComponent, {
      width: '750px',
      data: row
    });
  }

}
