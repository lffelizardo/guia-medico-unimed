import { Injectable } from '@angular/core';
import { Cooperativa } from '../model/cooperativa.model';
import { BehaviorSubject } from 'rxjs';
import {Indicador} from '../model/indicador.model';

@Injectable({
  providedIn: 'root'
})
export class CooperativaService {

  constructor() { }

  carteira: Indicador = {
    titulo: 'Carteira de Clientes',
    valor: 146257,
    tipoValor: 'NUMERIC',
    // tslint:disable-next-line:max-line-length
    textoResumo: 'Encerramos o mês de maio com um saldode 146.257 beneficiários em nossa carteira, o que corresponde à uma queda de 832 usuários' +
      ' com relação ao mês anterior. Temos aumentado nossos esforços na criação de novos produtos e de outras estratégias que nos permitam' +
      ' competir com nossos concorrentes que possuem preços mais agressivos que os nossos.',
    valoresAnoAnterior: [85, 72, 78, 75, 77, 75, 78, 80, 82, 86, 89, 81],
    valoresAnoAtual:  [75, 82, 68, 55, 47, 45, 58, 60, 72, 86, 79, 61],
    hasGrafico: true,
    subtitulo: 'Beneficiários',
    labelAnoAnterior: '2018',
    labelAnoAtual: '2019'
  };

  sinistralidade: Indicador = {
    titulo: 'Sinistralidade Acumulada',
    valor: 81.6,
    tipoValor: 'PERCENT',
    textoResumo: 'Com Muitos esforços temos conseguido manter a sinistralidade dentro da meta estipulada para o ano sem a utilização de prorata. Isso se deve à maior racionalização na utilização dos recursos, bem como ao maior controle aplicado nos desperdícios no custo assistencial.',
    valoresAnoAnterior: [73, 52, 68, 65, 67, 75, 78, 80, 82, 86, 90, 81],
    valoresAnoAtual:  [55, 62, 68, 75, 57, 45, 78, 70, 59, 86, 86, 61],
    hasGrafico: true,
    subtitulo: 'Sinistralidade',
    labelAnoAnterior: '2018',
    labelAnoAtual: '2019'
  };

  contraprestacao: Indicador = {
    titulo: 'Contraprestação Efetiva',
    valor: 694479.57,
    tipoValor: 'MONETARY',
    textoResumo: 'Em alinhamento às exigências da ANS ao mercado de saúde suplementar, as Contraprestações Efetivas substituem o antigo indicador gerencial de Receita Bruta. O resultado de janeiro foi de R$ 341.202 milhões, se mantendo acima do realizado em 2018 no mesmo período. Houve ainda uma pequena queda no número quando comparamos com o mês anterior.',
    valoresAnoAnterior: [85, 70, 75, 75, 70, 75, 70, 89, 89, 80, 93, 91],
    valoresAnoAtual:  [65, 62, 78, 85, 77, 55, 78, 60, 72, 86, 79, 81],
    hasGrafico: true,
    subtitulo: 'Contraprestação Efetiva',
    labelAnoAnterior: '2018',
    labelAnoAtual: '2019'
  };

  consultaCliente: Indicador = {
    titulo: 'Consultas p/ Cliente',
    valor: 4.58,
    tipoValor: 'NUMERIC',
    textoResumo: 'Expressa a razão entre a quantidade de consultas médicas eletivas realizadas no período e o número de clientes ativos na carteira.',
    valoresAnoAnterior: null,
    valoresAnoAtual: null,
    hasGrafico: false,
    subtitulo: 'Consultas eletivas / ano',
    labelAnoAnterior: null,
    labelAnoAtual: null
  };

  liquidez: Indicador = {
    titulo: 'Liquidez Corrente',
    valor: 1.42,
    tipoValor: 'NUMERIC',
    textoResumo: 'Indica a capacidade que uma empresa tem de pagamento no curto prazo. Um índice de 1,0 mostra que a empresa tem o caixa equilibrado.',
    valoresAnoAnterior: null,
    valoresAnoAtual: null,
    hasGrafico: false,
    subtitulo: 'Liquidez frente as dívidas',
    labelAnoAnterior: null,
    labelAnoAtual: null
  };

  cooperativa: Cooperativa = {
    indicadores: [this.carteira, this.sinistralidade, this.contraprestacao, this.consultaCliente, this.liquidez]
  };

  private messageSource: BehaviorSubject<Cooperativa> = new BehaviorSubject(new Cooperativa());
  currentCoopertaiva = this.messageSource.asObservable();


  public findCooperativaDataById(): Cooperativa {
    this.messageSource.next(this.cooperativa);
    return this.cooperativa;
  }
}
