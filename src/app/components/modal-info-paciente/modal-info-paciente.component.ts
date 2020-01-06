import { Component, OnInit, Input, Inject, Output } from '@angular/core';
import { ProducaoMedica } from 'src/app/model/ProducaoMedica';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'guia-modal-info-paciente',
  templateUrl: './modal-info-paciente.component.html',
})
export class ModalInfoPacienteComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ModalInfoPacienteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ProducaoMedica) { }

  ngOnInit() {
    this.producaoMedicaSelected = this.data;
  }

  @Output() producaoMedicaSelected: ProducaoMedica; 

}
