import { Component, OnInit, Input } from '@angular/core';
import { RemuneracaoService } from 'src/app/service/remuneracao.service';
import { Remuneracao } from 'src/app/model/Remuneracao';
import { Glosas } from 'src/app/model/Glosas';
import { GlosaPeriod } from 'src/app/model/GlosaPeriod';

@Component({
  selector: 'guia-tab-glosas',
  templateUrl: './tab-glosas.component.html'
})
export class TabGlosasComponent implements OnInit {

  constructor(private remuneracaoService: RemuneracaoService) { }

  @Input() remuneracao: Remuneracao;

  glosas: Glosas;
  periods: GlosaPeriod[];

  displayedColumns: string[] = ['glosa', 'movimento', 'valor', 'recuperado', 'status'];

  ngOnInit() {
    // this.remuneracaoService.currentRemuneracao.subscribe(r => this.glosas = r.remuneracoes.glosas);
    this.periods = this.glosas.glosas;
  }

}
