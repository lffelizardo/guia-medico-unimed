import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { CooperativaDto } from 'src/app/model/cooperativa.dto';
import { CooperativaService } from 'src/app/service/cooperativa.service';

@Component({
  selector: '[guia-sinistralidade-acumulada]',
  templateUrl: './sinistralidade-acumulada.component.html'
})
export class SinistralidadeAcumuladaComponent implements OnInit {

  @Input() cooperativaDto: CooperativaDto;

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

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

  constructor(private cooperativaService: CooperativaService) { }

  ngOnInit() {
    this.cooperativaService.currentCoopertaiva.subscribe(c => this.cooperativaDto = c);
    this.fillChart();
  }

  fillChart(){

    this.lineChartData = [
      { data: this.cooperativaDto.sinistralidade.lastYear, label: this.cooperativaDto.sinistralidade.labelLastYear, fill: false },
      { data: this.cooperativaDto.sinistralidade.currentYear, label: this.cooperativaDto.sinistralidade.labelCurrentYear, fill: false },
    ];
  }
}
