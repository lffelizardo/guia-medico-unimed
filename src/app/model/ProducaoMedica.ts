import { Movimento } from './Movimento';
import { Modificador } from './Modificador';
import { Glosa } from './Glosa';

 class ProducaoMedica {
    paciente: string;
    data: string;
    valor: number;
    variavel: number;
    glosa: number;
    prorata: string;
    valorRecebido: number;
    dataAtendimento: string;
    carteiraPlano: string;
    valorApresentado: number;
    totalPaciente: number;
    movimentos: Movimento[];
    modificadores: Modificador[];
    glosas: Glosa[];
  }

  export {ProducaoMedica}