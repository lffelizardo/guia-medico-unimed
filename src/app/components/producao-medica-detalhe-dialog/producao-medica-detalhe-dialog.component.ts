import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ProducaoMedicaPaciente} from '../../model/producao-medica-paciente.model';

@Component({
  selector: 'app-producao-medica-detalhe-dialog',
  templateUrl: './producao-medica-detalhe-dialog.component.html',
  styleUrls: ['./producao-medica-detalhe-dialog.component.scss']
})
export class ProducaoMedicaDetalheDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ProducaoMedicaDetalheDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: ProducaoMedicaPaciente) {
  }

  producaoMedicaPaciente: ProducaoMedicaPaciente;

  ngOnInit() {
    this.producaoMedicaPaciente = this.data;
  }
  closeDialog(){
    this.dialogRef.close();
  }
}
