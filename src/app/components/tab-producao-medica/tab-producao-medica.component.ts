import { Component, OnInit, Input, Output } from '@angular/core';
import { ProducaoMedica } from 'src/app/model/ProducaoMedica';
import { Movimento } from 'src/app/model/Movimento';
import { Modificador } from 'src/app/model/Modificador';
import { Glosa } from 'src/app/model/Glosa';
import { ModalInfoPacienteComponent } from '../modal-info-paciente/modal-info-paciente.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'guia-tab-producao-medica',
  templateUrl: './tab-producao-medica.component.html'
})
export class TabProducaoMedicaComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  @Output() producaoMedicaSelected: ProducaoMedica;

  displayedColumns: string[] = ['paciente', 'data', 'valor', 'variavel', 'glosas', 'prorata', 'valorRecebido'];
  movimentos: Movimento[] = [
    {
      movimento: '401424555 - Cesariana',
      posicao: 'Cirurgião',
      valor: 890.00,
      modificador: '+R$ 861,69',
      glosa: '-',
      total: 1.78622  
    },
    {
      movimento: '413245574 - Parto Normal',
      posicao: 'Cirurgião',
      valor: 631.26,
      modificador: '+R$ 611,17',
      glosa: '(R$ 1.242.43))',
      total: 0  
    }
  ];

  modificadores: Modificador[] = [
    {
      movimento: '401424555 - Cesariana',
      valor: 890.00,
      acomodacao: 457.46,
      variavel: 26.94,
      urgencia: 412.32,
      total: 1786.72
    },
    {
      movimento: '413245574 - Parto Normal',
      valor: 631.26,
      acomodacao: 324.46,
      variavel: 19.11,
      urgencia: 292.44,
      total: 1267.27
    }
  ];

  glosas: Glosa[] = [
    {
      movimento: '413245574 - Parto Normal',
      valor: 1267.77,
      motivo: 'Impossível cesariana e parto normal no mesmo paciente'
    }
  ];


  dataSource: ProducaoMedica[] = [
    {paciente: 'Acelio Ricardo COLACO',
      data: '08/05/2019',
      valor: 280,
      variavel: 5.60,
      glosa: 0,
      prorata: '-',
      valorRecebido: 285.60,
      dataAtendimento: '21/05/2019',
      carteiraPlano: '0335100551008626',
      movimentos: this.movimentos,
      modificadores: this.modificadores,
      glosas: this.glosas,
      valorApresentado: 3029.15,
      totalPaciente: 1786.72
    }
  ];

  getRecord(row: ProducaoMedica):void{
    console.log(row);
    this.producaoMedicaSelected = row;
    const dialogRef = this.dialog.open(ModalInfoPacienteComponent, {
      width: '750px',
      data: row 
    });
  }

}
