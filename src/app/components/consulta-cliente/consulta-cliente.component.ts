import { Component, OnInit, Input } from '@angular/core';
import { CooperativaService } from 'src/app/service/cooperativa.service';
import { CooperativaDto } from 'src/app/model/cooperativa.dto';

@Component({
  selector: 'guia-consulta-cliente',
  templateUrl: './consulta-cliente.component.html'
})
export class ConsultaClienteComponent implements OnInit {

  @Input() cooperativaDto: CooperativaDto;

  constructor(private cooperativaService: CooperativaService) { }

  ngOnInit() {
    this.cooperativaService.currentCoopertaiva.subscribe(c => this.cooperativaDto = c);
  }

}
