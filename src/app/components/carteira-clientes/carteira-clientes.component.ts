import { Component, OnInit, Input } from '@angular/core';
import { Color, Label } from 'ng2-charts';
import { ChartDataSets } from 'chart.js';
import { CooperativaDto } from 'src/app/model/cooperativa.dto';
import { CooperativaService } from 'src/app/service/cooperativa.service';

@Component({
  selector: 'guia-carteira-clientes',
  templateUrl: './carteira-clientes.component.html'
})
export class CarteiraClientesComponent implements OnInit {

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
      { data: this.cooperativaDto.carteira.lastYear, label: this.cooperativaDto.carteira.labelLastYear, fill: false },
      { data: this.cooperativaDto.carteira.currentYear, label: this.cooperativaDto.carteira.labelCurrentYear, fill: false },
    ];
  }

}
