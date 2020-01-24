import {Component, Input, OnInit} from '@angular/core';
import {GlosaPaciente} from '../../model/glosa-paciente.model';
import {MatDialog} from '@angular/material';
import {ProducaoMedicaDetalheGlosasContestarDialogComponent} from '../producao-medica-detalhe-glosas-contestar-dialog/producao-medica-detalhe-glosas-contestar-dialog.component';
import {ProducaoMedicaPaciente} from '../../model/producao-medica-paciente.model';

@Component({
  selector: 'app-producao-medica-detalhe-glosas-table',
  templateUrl: './producao-medica-detalhe-glosas-table.component.html',
  styleUrls: ['./producao-medica-detalhe-glosas-table.component.scss']
})
export class ProducaoMedicaDetalheGlosasTableComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  @Input() producaoMedicaPaciente: ProducaoMedicaPaciente;

  displayedColumns: string[] = ['movimento', 'valor', 'motivo', 'contestar'];

  ngOnInit() {
  }

  openContestar(glosa: GlosaPaciente) {
    const dialogRef = this.dialog.open(ProducaoMedicaDetalheGlosasContestarDialogComponent, {
      width: '600px',
      data: {
        glosa: glosa,
        nomePaciente: this.producaoMedicaPaciente.nomePaciente
      }
    });
  }
}
