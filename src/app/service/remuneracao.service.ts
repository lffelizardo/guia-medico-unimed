import {Injectable} from '@angular/core'

import { RemuneracaoDto } from 'src/app/model/remuneracao.dto'
import { Remuneracao } from 'src/app/model/Remuneracao'
import { ProducaoMedica } from 'src/app/model/ProducaoMedica'
import { Movimento } from 'src/app/model/Movimento'
import { Glosa } from 'src/app/model/Glosa'
import { Modificador } from 'src/app/model/Modificador'

@Injectable()
export class RemuneracaoService {

    constructor(){}

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

      modificadores1: [
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

      modificadores2: [
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

   remuneracao1: Remuneracao =
      {
          producaoTotal: 44393.87,
          descontos:  5087.73,
          glosa: 2.040,
          producaoMedica:  [
              this.producaoMedica1, this.producaoMedica2
          ]
      };

      remuneracao2: Remuneracao =
      {
        producaoTotal: 44393.87,
        descontos:  5087.73,
        glosa: 2.040,
        producaoMedica: [
            this.producaoMedica1, this.producaoMedica2
        ]
    }

    remuneracoes: RemuneracaoDto[] = [
        {
            periodo: 'Novembro/2019',
            remuneracoes: [
              this.remuneracao1, this.remuneracao2
            ]
        },
        {
            periodo: 'Dezembro/2019',
            remuneracoes: [
              this.remuneracao1, this.remuneracao2
            ]
        }
    ];


    getRemuneracaoById(): RemuneracaoDto[] {
        return this.remuneracoes;
    }

}