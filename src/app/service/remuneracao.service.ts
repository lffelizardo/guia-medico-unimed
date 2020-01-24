import {Injectable} from '@angular/core';
import {MinhaRemuneracao} from '../model/minha-remuneracao.model';
import {ProducaoMedicaPaciente} from '../model/producao-medica-paciente.model';

@Injectable()
export class RemuneracaoService {

  constructor() {
  }


  private producaoMedicaMock: ProducaoMedicaPaciente = {
    carteiraPaciente: '003356879852157',
    data: new Date(),
    nomePaciente: 'Auricelia Tavares Andrade',
    valorTotal: 280,
    valorGlosas: null,
    valorProRata: null,
    valorRecebido: 285.6,
    valorVariavel: 5.6,
    glosas: [
      {
        idMovimento: 401424555,
        movimento: 'Cesariana',
        motivo: 'Impossível cesariana e normal no mesmo parto',
        valorGlosado: 1231.6
      },
      {
        idMovimento: 301424444,
        movimento: 'Parto Normal',
        motivo: 'Impossível cesariana e normal no mesmo parto testando texto maior que uma linha.',
        valorGlosado: 1231.6
      }
    ],
    movimentos: [
      {
        idMovimento: 401424555,
        descricaoMovimento: 'Cesariana',
        posicao: 'Cirurgião',
        valor: 890,
        valorGlosa: null,
        valorModificador: 860,
        valorTotal: 890+860
      },
      {
        idMovimento: 413288988,
        descricaoMovimento: 'Parto Normal',
        posicao: 'Cirurgião',
        valor: 631.6,
        valorGlosa: 1231.6,
        valorModificador: 600,
        valorTotal: 0
      }],

    modificadores: [
      {
        idMovimento: 401424555,
        movimento: 'Cesariana',
        valor: 890,
        valorAcomodacao: 457.46,
        valorUrgencia: 412.32,
        valorVariavel: 26.94,
        valorTotal: 1786.72
      },
      {
        idMovimento: 413288988,
        movimento: 'Parto Normal',
        valor: 631.6,
        valorAcomodacao: 324.46,
        valorVariavel: 19.11,
        valorUrgencia: 292.44,
        valorTotal: 1267.61
      }
    ]

  };


  minhaRemuneracaoMock: MinhaRemuneracao = {
    periodos: [
      {
        mesAnoReferenciaLabel: 'Dezembro/2019',
        mesAnoReferenciaValue: 122019,
        saldoTotal: 39850.36,
        totalGlosas: 2040,
        totalDescontos: 5087.73,
        totalProducao: 46978.09,
        remuneracaoVariavelValue: 469.78,
        remuneracaoVariavelLabel: 'ou 1% de 4% possíveis.',
        remuneracaoVariavelPercentual: 25,
        remuneracaoVariavelPercentualLabel: 'Você conquistou 25% dos R$ 1.879,12 que seriam possíveis.'

      }
    ]
  };

  findMinhaRemuneracao(codPrestador: string): MinhaRemuneracao {
    return this.minhaRemuneracaoMock;
  };

  findProducaoMedica(codPrestador: string): ProducaoMedicaPaciente[] {
    return [this.producaoMedicaMock];
  }

}
