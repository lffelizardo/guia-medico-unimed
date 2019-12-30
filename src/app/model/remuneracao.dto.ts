import { Remuneracao } from './Remuneracao';
import { RemuneracaoVariavel } from './RemuneracaoVariavel';

class RemuneracaoDto {

    periodo: string;
    remuneracoes: Remuneracao;
    remuneracaoVariavel: RemuneracaoVariavel;
}

export { RemuneracaoDto }