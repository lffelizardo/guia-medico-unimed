import { Component, OnInit, Input } from '@angular/core';
import { RemuneracaoService } from 'src/app/service/remuneracao.service';
import { Remuneracao } from 'src/app/model/Remuneracao';
import { Descontos } from 'src/app/model/Descontos';
import { Eventos } from 'src/app/model/Eventos';

@Component({
  selector: 'guia-tab-descontos',
  templateUrl: './tab-descontos.component.html'
})
export class TabDescontosComponent implements OnInit {

  constructor(private remuneracaoService: RemuneracaoService) { }

  @Input() remuneracao: Remuneracao;

  descontos: Descontos;
  eventos: Eventos[];

  displayedColumns: string[] = ['evento', 'valor', 'detalhes'];

  ngOnInit() {
    this.remuneracaoService.currentRemuneracao.subscribe(r => this.descontos = r.remuneracoes.listDescontos);
    this.eventos = this.descontos.eventos;
  }

}
