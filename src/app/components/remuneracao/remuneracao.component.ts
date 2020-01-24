import {Component, OnInit, Output, ViewChild} from '@angular/core';
import {RemuneracaoService} from 'src/app/service/remuneracao.service';
import {Period} from 'src/app/model/Period';
import {Remuneracao} from 'src/app/model/Remuneracao';
import {MinhaRemuneracao} from '../../model/minha-remuneracao.model';
import {MinhaRemuneracaoComponent} from '../minha-remuneracao/minha-remuneracao.component';
import {ProducaoMedicaPaciente} from '../../model/producao-medica-paciente.model';

@Component({
  selector: 'guia-remuneracao',
  templateUrl: './remuneracao.component.html'
})
export class RemuneracaoComponent implements OnInit {

  @Output() remuneracao: Remuneracao;

  @ViewChild('appMinhaRemuneracao', {static: false}) minhaRemuneracaoComponent: MinhaRemuneracaoComponent;

  minhaRemuneracao: MinhaRemuneracao;

  producaoMedicaPacienteList: ProducaoMedicaPaciente[];

  constructor(private remuneracaoService: RemuneracaoService) {
    this.findRemuneracoes();
  }

  selectedPeriod: string;

  periods: Period[] = [
    {value: '11-19', viewValue: 'Novembro/2019'},
    {value: '12-19', viewValue: 'Dezembro/2019'},
    {value: '01-20', viewValue: 'Janeiro/2019'}
  ];

  ngOnInit() {
    this.minhaRemuneracao = this.remuneracaoService.findMinhaRemuneracao('123');
    this.producaoMedicaPacienteList = this.remuneracaoService.findProducaoMedica('123');
  }

  findRemuneracoes() {
    // this.remuneracoes = this.remuneracaoService.getRemuneracaoById();
  }

  onPeriodChange() {
    const periodSelected = this.periods.filter(p => p.value === this.selectedPeriod)[0];
    console.log(periodSelected);
    // this.remuneracao = this.remuneracaoService.getRemuneracaoByPeriod(periodSelected.value).remuneracoes;
  }

}
