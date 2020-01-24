import {Indicador} from './indicador.model';

export class MinhaRemuneracaoDetalhe {
  mesAnoReferenciaValue: number; //Ex: 12019,112019
  mesAnoReferenciaLabel: string; //Ex: Janeiro/2019, Novembro/2019
  saldoTotal: number;
  totalProducao: number;
  totalDescontos: number;
  totalGlosas: number;

  remuneracaoVariavelValue: number;
  remuneracaoVariavelLabel: string; //Ex: 'ou 2% dos 4% possíveis'
  remuneracaoVariavelPercentual: number;
  remuneracaoVariavelPercentualLabel: string; //Ex: 'Você conquistou 50%'
}
