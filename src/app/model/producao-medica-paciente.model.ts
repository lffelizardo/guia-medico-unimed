import {MovimentoPaciente} from './movimento-paciente.model';
import {ModificadorPaciente} from './modificador-paciente.model';
import {GlosaPaciente} from './glosa-paciente.model';

export class ProducaoMedicaPaciente {
  nomePaciente: string;
  carteiraPaciente: string;
  data: Date;
  valorTotal: number;
  valorRecebido: number;
  valorVariavel: number;
  valorGlosas: number;
  valorProRata: number;

  movimentos: MovimentoPaciente[];
  modificadores: ModificadorPaciente[];
  glosas: GlosaPaciente[];

}
