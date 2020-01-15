import { Component, OnInit, Output } from '@angular/core';
import { CooperativaService } from 'src/app/service/cooperativa.service';
import { Cooperativa } from 'src/app/model/cooperativa.model';

@Component({
  selector: 'guia-minha-cooperativa',
  templateUrl: './minha-cooperativa.component.html'
})
export class MinhaCooperativaComponent implements OnInit {

  @Output() cooperativaDto: Cooperativa;

  constructor(private cooperativaService: CooperativaService) { }

  ngOnInit() {
    this.cooperativaDto = this.cooperativaService.findCooperativaDataById();
  }

}
