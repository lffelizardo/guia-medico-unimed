import { Component, OnInit, Input } from '@angular/core';
import { CooperativaDto } from 'src/app/model/cooperativa.dto';
import { CooperativaService } from 'src/app/service/cooperativa.service';

@Component({
  selector: 'guia-liquidez-corrente',
  templateUrl: './liquidez-corrente.component.html'
})
export class LiquidezCorrenteComponent implements OnInit {

  @Input() cooperativaDto: CooperativaDto;

  constructor(private cooperativaService: CooperativaService) { }

  ngOnInit() {
    this.cooperativaService.currentCoopertaiva.subscribe(c => this.cooperativaDto = c);
  }

}
