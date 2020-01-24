import {Component, Inject, OnInit} from '@angular/core';
import {GlosaPaciente} from '../../model/glosa-paciente.model';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-producao-medica-detalhe-glosas-contestar-dialog',
  templateUrl: './producao-medica-detalhe-glosas-contestar-dialog.component.html',
  styleUrls: ['./producao-medica-detalhe-glosas-contestar-dialog.component.scss']
})
export class ProducaoMedicaDetalheGlosasContestarDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ProducaoMedicaDetalheGlosasContestarDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data) { }


  glosa: GlosaPaciente;
  nomePaciente: string;

  ngOnInit() {
    this.glosa = this.data.glosa;
    this.nomePaciente = this.data.nomePaciente;
  }

  cancelarContestacao(){
    this.dialogRef.close();
  }

  enviarContestacao(){
    /* TO-DO */
    this.dialogRef.close();
  }
}
