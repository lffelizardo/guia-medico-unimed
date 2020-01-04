import { Carteira } from './carteira';
import { Sinistralidade } from './sinistralidade';
import { Contraprestacao } from './contraprestacao';
import { ConsultaCliente } from './consulta-cliente';
import { LiquidezCorrente } from './liquidez-corrente';

export class CooperativaDto {
    carteira: Carteira;
    sinistralidade: Sinistralidade;
    contraprestacao: Contraprestacao;
    consultaCliente: ConsultaCliente;
    liquidez: LiquidezCorrente;
}
