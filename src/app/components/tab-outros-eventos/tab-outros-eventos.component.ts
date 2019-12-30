import { Component, OnInit, Input } from '@angular/core';
import { Remuneracao } from 'src/app/model/Remuneracao';
import { OutrosEventos } from 'src/app/model/OutrosEventos';
import { Eventos } from 'src/app/model/Eventos';
import { RemuneracaoService } from 'src/app/service/remuneracao.service';

@Component({
  selector: 'guia-tab-outros-eventos',
  templateUrl: './tab-outros-eventos.component.html'
})
export class TabOutrosEventosComponent implements OnInit {

  constructor(private remuneracaoService: RemuneracaoService) { }

  @Input() remuneracao: Remuneracao;

  outrosEventos: OutrosEventos;
  eventos: Eventos[];

  displayedColumns: string[] = ['evento', 'valor', 'detalhes'];

  ngOnInit() {
    this.remuneracaoService.currentRemuneracao.subscribe(r => this.outrosEventos = r.remuneracoes.outrosEventos);
    this.eventos = this.outrosEventos.eventos;
  }

}
