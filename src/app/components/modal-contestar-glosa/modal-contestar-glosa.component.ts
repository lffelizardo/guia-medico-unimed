import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Glosa } from 'src/app/model/Glosa';
import { ContestarDto } from 'src/app/model/contestar.dto';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-modal-contestar-glosa',
  templateUrl: './modal-contestar-glosa.component.html'
})
export class ModalContestarGlosaComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ModalContestarGlosaComponent>,
              @Inject(MAT_DIALOG_DATA) public data: ContestarDto) { }

  
  motivoContestar = new FormControl();

  ngOnInit() {
  }

  cancelar(){
    this.dialogRef.close();
  }

  enviar(){
    this.dialogRef.close();
  }

}
