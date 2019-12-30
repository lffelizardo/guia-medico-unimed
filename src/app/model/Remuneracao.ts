import { ProducaoMedica } from './ProducaoMedica';
import { OutrosEventos } from './OutrosEventos';
import { Descontos } from './Descontos';
import { Glosas } from './Glosas';


class Remuneracao{

    producaoTotal: string;
    descontos: string;
    glosa: string;
    totalRemuneracao: string;
    producaoMedica: ProducaoMedica[];
    outrosEventos: OutrosEventos;
    listDescontos: Descontos;
    glosas: Glosas;

}

export{ Remuneracao }