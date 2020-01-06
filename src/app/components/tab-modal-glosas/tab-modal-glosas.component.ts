import { Component, OnInit, Input, Output } from '@angular/core';
import { Glosa } from 'src/app/model/Glosa';
import { ProducaoMedica } from 'src/app/model/ProducaoMedica';
import { Glosas } from 'src/app/model/Glosas';
import { ModalContestarGlosaComponent } from '../modal-contestar-glosa/modal-contestar-glosa.component';
import { MatDialog } from '@angular/material';
import { ContestarDto } from 'src/app/model/contestar.dto';

@Component({
  selector: 'guia-tab-modal-glosas',
  templateUrl: './tab-modal-glosas.component.html'
})
export class TabModalGlosasComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  displayedColumns: string[] = ['movimento', 'valor', 'motivo'];

  @Input()  data: ProducaoMedica;

  @Output() paciente: string;

  ngOnInit() {
    // this.dataSource = this.data.glosas;
  }

  openContestar(row: Glosa) {
    let dto: ContestarDto = {
      paciente: this.data.paciente,
      glosa: row
    };
    const dialogRef = this.dialog.open(ModalContestarGlosaComponent, {
    width: '750px',
    data: dto
  });
  }

}
