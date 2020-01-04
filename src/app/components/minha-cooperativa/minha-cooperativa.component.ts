import { Component, OnInit, ViewChild, Output } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label, BaseChartDirective } from 'ng2-charts';
import { CooperativaService } from 'src/app/service/cooperativa.service';
import { CooperativaDto } from 'src/app/model/cooperativa.dto';

@Component({
  selector: 'guia-minha-cooperativa',
  templateUrl: './minha-cooperativa.component.html'
})
export class MinhaCooperativaComponent implements OnInit {

  @Output() cooperativaDto: CooperativaDto;

  constructor(private cooperativaService: CooperativaService) { }

  ngOnInit() {
    this.cooperativaDto = this.cooperativaService.findCooperativaDataById();
  }

}
