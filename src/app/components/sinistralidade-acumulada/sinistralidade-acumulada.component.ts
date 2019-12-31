import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';

@Component({
  selector: 'guia-sinistralidade-acumulada',
  templateUrl: './sinistralidade-acumulada.component.html'
})
export class SinistralidadeAcumuladaComponent implements OnInit {

  lineChartData: ChartDataSets[] = [
    { data: [85, 72, 78, 75, 77, 75, 78, 80, 82, 86, 89, 81], label: '2018', fill: false },
    { data: [75, 82, 68, 55, 47, 45, 58, 60, 72, 86, 79, 61], label: '2019', fill: false },
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

  constructor() { }

  ngOnInit() {
  }
}
