import { Component, OnInit, Output } from '@angular/core';
import { RemuneracaoDto } from 'src/app/model/remuneracao.dto';
import {RemuneracaoService } from 'src/app/service/remuneracao.service';

@Component({
  selector: 'guia-remuneracao',
  templateUrl: './remuneracao.component.html'
})
export class RemuneracaoComponent implements OnInit {

  remuneracoes: RemuneracaoDto[];

  constructor(private remuneracaoService: RemuneracaoService) {
    this.findRemuneracoes();
   }

  ngOnInit() {
  }

  findRemuneracoes(){
    this.remuneracoes = this.remuneracaoService.getRemuneracaoById();
  }

}
