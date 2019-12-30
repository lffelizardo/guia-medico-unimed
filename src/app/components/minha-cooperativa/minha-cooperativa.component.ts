import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label, BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'guia-minha-cooperativa',
  templateUrl: './minha-cooperativa.component.html'
})
export class MinhaCooperativaComponent implements OnInit {

  lineChartData: ChartDataSets[] = [
    { data: [85, 72, 78, 75, 77, 75, 78, 80, 82, 86, 89, 81], label: '2018' },
    { data: [75, 82, 68, 55, 47, 45, 58, 60, 72, 86, 79, 61], label: '2019' },
  ];

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
        }
        }]
      }
  };

  lineChartColors: Color[] = [
    {
      //borderColor: 'black',
      backgroundColor: 'rgba(0,255,0,0.3)', //green
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

  constructor() { }

  ngOnInit() {
  }

}
