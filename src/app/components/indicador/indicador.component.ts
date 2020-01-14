import {Component, Input, OnInit} from '@angular/core';
import {Color, Label} from 'ng2-charts';
import {Indicador} from '../../model/indicador.model';

@Component({
  selector: 'app-indicador',
  templateUrl: './indicador.component.html',
  styleUrls: ['./indicador.component.scss']
})
export class IndicadorComponent implements OnInit {



  @Input() indicador: Indicador;

  lineChartData: any;

  lineChartLabels: Label[] = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'];

  lineChartOptions = {
    responsive: true,
    scales: {
      xAxes: [{
        gridLines: {
          display: false
        }
      }],
      yAxes: [{
        gridLines: {
          display:false
        },
        ticks: {
          display: false
        },
      }]
    },
    legend: {
      labels : {
        useLineStyle: false,
        boxWidth: 20
      },
      spanGaps: true,
      position: 'top',
      align: 'end'
    }
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'green',
      backgroundColor: 'rgba(0,255,0,0.3)', //green
    },
    {
      borderColor: 'yellowgreen',
      backgroundColor: 'rgba(0,255,0,0.3)', //green
    },
  ];

  lineChartPlugins = [];

  constructor() { }

  ngOnInit() {
    // this.cooperativaService.currentCoopertaiva.subscribe(c => this.cooperativaDto = c);
    this.fillChart();
  }

  fillChart(){
    if(this.indicador != null && this.indicador.hasGrafico) {
      this.lineChartData = [
        {data: this.indicador.valoresAnoAnterior, label: this.indicador.labelAnoAnterior, fill: false},
        {data: this.indicador.valoresAnoAtual, label: this.indicador.labelAnoAtual, fill: false},
      ];
    }
  }


}
