import {Injectable} from '@angular/core';

import { RemuneracaoDto } from 'src/app/model/remuneracao.dto';
import { Remuneracao } from 'src/app/model/Remuneracao';
import { ProducaoMedica } from 'src/app/model/ProducaoMedica';
import { Movimento } from 'src/app/model/Movimento';
import { Glosa } from 'src/app/model/Glosa';
import { Modificador } from 'src/app/model/Modificador';
import { BehaviorSubject } from 'rxjs';
import { RemuneracaoVariavel } from '../model/RemuneracaoVariavel';
import { GlosaPeriod } from '../model/GlosaPeriod';
import { Glosas } from '../model/Glosas';

@Injectable()
export class RemuneracaoService {

    constructor(){}

    private messageSource: BehaviorSubject<RemuneracaoDto> = new BehaviorSubject(new RemuneracaoDto());
    currentRemuneracao = this.messageSource.asObservable();

    movimentos1: Movimento[] = [
        {
          movimento: '401424555 - Cesariana',
          posicao: 'Cirurgião',
          valor: 890.00,
          modificador: '+R$ 861,69',
          glosa: '-',
          total: 1.78622
        },
        {
          movimento: '413245574 - Parto Normal',
          posicao: 'Cirurgião',
          valor: 631.26,
          modificador: '+R$ 611,17',
          glosa: '(R$ 1.242.43))',
          total: 0
        }
      ];

      movimentos2: [
        {
          movimento: '401424555 - Cesariana',
          posicao: 'Cirurgião',
          valor: 890.00,
          modificador: '+R$ 861,69',
          glosa: '-',
          total: 1.78622
        },
        {
          movimento: '413245574 - Parto Normal',
          posicao: 'Cirurgião',
          valor: 631.26,
          modificador: '+R$ 611,17',
          glosa: '(R$ 1.242.43))',
          total: 0
        }
      ];

      movimentos3: [
        {
          movimento: '401424555 - Cesariana',
          posicao: 'Cirurgião',
          valor: 890.00,
          modificador: '+R$ 861,69',
          glosa: '-',
          total: 1.78622
        },
        {
          movimento: '413245574 - Parto Normal',
          posicao: 'Cirurgião',
          valor: 631.26,
          modificador: '+R$ 611,17',
          glosa: '(R$ 1.242.43))',
          total: 0
        }
      ];

      glosas1: Glosa[] = [
        {
          movimento: '413245574 - Parto Normal',
          valor: 1267.77,
          motivo: 'Impossível cesariana e parto normal no mesmo paciente'
        }
      ];

      glosas2: Glosa[] = [
        {
          movimento: '589245574 - Parto Normal',
          valor: 2267.77,
          motivo: 'Impossível cesariana e parto normal no mesmo paciente'
        }
      ];

      modificadores1: Modificador[] = [
        {
          movimento: '401424555 - Cesariana',
          posicao: 'Cirurgião',
          valor: 890.00,
          acomodacao: 457.46,
          variavel: 26.94,
          urgencia: 412.32,
          total: 1786.72
        },
        {
          movimento: '413245574 - Parto Normal',
          posicao: 'Cirurgião',
          valor: 631.26,
          acomodacao: 324.46,
          variavel: 19.11,
          urgencia: 292.44,
          total: 1267.27
        }
      ];

      modificadores2: Modificador[] = [
        {
          movimento: '601424555 - Cesariana',
          posicao: 'Cirurgião',
          valor: 990.00,
          acomodacao: 457.46,
          variavel: 26.94,
          urgencia: 412.32,
          total: 1786.72
        },
        {
          movimento: '713245574 - Parto Normal',
          posicao: 'Cirurgião',
          valor: 831.26,
          acomodacao: 324.46,
          variavel: 19.11,
          urgencia: 292.44,
          total: 1267.27
        }
      ];

    producaoMedica1 = {
        paciente: 'ACELIO RICARDO COLACO',
        data: '08/05/2019',
        valor: 280,
        variavel: 5.60,
        glosa: 0,
        prorata: '-',
        valorRecebido: 285.60,
        dataAtendimento: '21/05/2019',
        carteiraPlano: '0335100551008626',
        movimentos: this.movimentos1,
        modificadores: this.modificadores1,
        glosas: this.glosas1,
        valorApresentado: 3029.15,
        totalPaciente: 1786.72
    };

    producaoMedica2 = {
        paciente: 'ADELINA GOMES DA FONSECA',
        data: '08/05/2019',
        valor: 183.25,
        variavel: 3.66,
        glosa: 0,
        prorata: '-',
        valorRecebido: 186.81,
        dataAtendimento: '21/05/2019',
        carteiraPlano: '0335100551008626',
        movimentos: this.movimentos2,
        modificadores: this.modificadores2,
        glosas: this.glosas1,
        valorApresentado: 3029.15,
        totalPaciente: 1786.72
    };

    evento1 = {
      nome: 'Plantão UTI Neonatal',
      valor: 'R$1.800,00',
      detalhes: 'Plantões na UTI Neonatal do Hospital Alberto Urquiza - Referente ao mês de Abril'
    };

    evento2 = {
      nome: 'Loteria Federal',
      valor: 'R$134,12',
      detalhes: 'Referente ao prêmio de consolação por não ter ganho na loteria'
    };

    outrosEventos1 = {
      totalCreditos: 'R$ 1.934,12',
      eventos: [this.evento1, this.evento2]
    };

    evento3 = {
      nome: 'Desconto Telefonia Claro',
      valor: 'R$342,42',
      detalhes: 'Referente à linha (83)9121-1221, contrato #22113556'
    };
    evento4 = {
      nome: 'Desconto Telefonia Claro',
      valor: 'R$342,42',
      detalhes: 'Referente à linha (83)9121-1225, contrato #22113556'
    };
    evento5 = {
      nome: 'Desconto Telefonia Claro',
      valor: 'R$342,42',
      detalhes: 'Referente à linha (83)9121-1222, contrato #22113556'
    };
    evento6 = {
      nome: 'Desconto Telefonia Claro',
      valor: 'R$342,42',
      detalhes: 'Referente à linha (83)9121-1224, contrato #22113556'
    };

    desconto =  {
      totalDescontos: 'R$ 5.087,73',
      eventos: [this.evento3, this.evento4, this.evento5, this.evento6]
    };

    glosasPeriod1 = {
      nomePaciente: 'AURICELIA TAVARES ANDRADE',
      movimento: '41324574 - Parto Normal',
      valor: 'R$1.267,27',
      recuperado: '-',
      status: 'Pendente de Auditoria'
    };

    glosasPeriod2 = {
      nomePaciente: 'MARIA JOSE DE MELO FALCAO',
      movimento: '40401214 - Visita hospitalar',
      valor: 'R$61,16',
      recuperado: '-',
      status: 'Indeferido'
    };
    glosasPeriod3 = {
      nomePaciente: 'PATRICIA FRANCA DE FREITAS',
      movimento: '41324574 - Visita hospitalar',
      valor: 'R$61,16',
      recuperado: '-',
      status: 'Indeferido'
    };
    glosasPeriod4 = {
      nomePaciente: 'VANUSA CRISTINA LAYME BAR',
      movimento: '40401214 - Visita hospitalar',
      valor: 'R$61,16',
      recuperado: 'R$61,16',
      status: 'Deferido (Pagamento em Junho/2019)'
    };
    glosasPeriod5 = {
      nomePaciente: 'VANUSA CRISTINA LAYME BAR',
      movimento: '40401214 - Visita hospitalar',
      valor: 'R$61,16',
      recuperado: 'R$61,16',
      status: 'Deferido (Pagamento em Junho/2019)'
    };
    glosasPeriod6 = {
      nomePaciente: 'VANUSA CRISTINA LAYME BAR',
      movimento: '40401214 - Visita hospitalar',
      valor: 'R$61,16',
      recuperado: 'R$61,16',
      status: 'Deferido (Pagamento em Junho/2019)'
    };

    glosaPeriod: Glosas = {
      totalGlosas: 'R$2.040,00',
      totalContestacao: 'R$1.267,27',
      totalRecuperado: 'R$183,48',
      glosas: [this.glosasPeriod1, this.glosasPeriod2, this.glosasPeriod3, this.glosasPeriod4, this.glosasPeriod5, this.glosasPeriod6]
    };


   remuneracao1: Remuneracao =
      {
          producaoTotal: 'R$ 44.393,87',
          descontos:  '-R$ 5.087,73',
          glosa: '-R$ 2.040,00',
          totalRemuneracao: 'R$ 37.269,14',
          producaoMedica:  [
              this.producaoMedica1, this.producaoMedica2
          ],
          outrosEventos: this.outrosEventos1,
          listDescontos: this.desconto,
          glosas: this.glosaPeriod
      };

      remuneracao2: Remuneracao =
      {
          producaoTotal: 'R$ 44.393,87',
          descontos:  '-R$ 5.087,73',
          glosa: '-R$ 2.040,00',
          totalRemuneracao: 'R$ 37.269,14',
          producaoMedica: [
              this.producaoMedica1, this.producaoMedica2
          ],
          outrosEventos: this.outrosEventos1,
          listDescontos: this.desconto,
          glosas: this.glosaPeriod
     };

     remuneracaoVariavel1: RemuneracaoVariavel =
     {
      totalValue: 'R$ 745,38',
      percentual: '2%',
      percentualConquista: '50%',
     };

     remuneracaoVariavel2: RemuneracaoVariavel =
     {
      totalValue: 'R$ 645,38',
      percentual: '3%',
      percentualConquista: '45%',
     };

    remuneracoes: RemuneracaoDto[] = [
        {
            periodo: '11-19',
            remuneracoes: this.remuneracao1,
            remuneracaoVariavel: this.remuneracaoVariavel1
        },
        {
            periodo: '12-19',
            remuneracoes: this.remuneracao2,
            remuneracaoVariavel: this.remuneracaoVariavel2
        }
    ];


    getRemuneracaoById(): RemuneracaoDto[] {
        return this.remuneracoes;
    }

    getRemuneracaoByPeriod(period: string): RemuneracaoDto{
      let remuneracaoDTO  = this.remuneracoes.filter(r => r.periodo === period)[0];
      this.messageSource.next(remuneracaoDTO);
      return remuneracaoDTO;
    }

}