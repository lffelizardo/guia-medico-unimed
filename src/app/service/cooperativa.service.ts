import { Injectable } from '@angular/core';
import { Carteira } from '../model/carteira';
import { CooperativaDto } from '../model/cooperativa.dto';
import { BehaviorSubject } from 'rxjs';
import { Sinistralidade } from '../model/sinistralidade';
import { Contraprestacao } from '../model/contraprestacao';
import { ConsultaCliente } from '../model/consulta-cliente';
import { LiquidezCorrente } from '../model/liquidez-corrente';

@Injectable({
  providedIn: 'root'
})
export class CooperativaService {

  constructor() { }

  carteira: Carteira = {
    totalBeneficiarios: 146.257,
    texto: 'Encerramos o mês de maio com um saldode 146.257 beneficiários em nossa carteira, o que corresponde à uma queda de 832 usuários com relação ao mês anterior. Temos aumentado nossos esforços na criação de novos produtos e de outras estratégias que nos permitam competir com nossos concorrentes que possuem preços mais agressivos que os nossos.',
    lastYear: [85, 72, 78, 75, 77, 75, 78, 80, 82, 86, 89, 81],
    currentYear:  [75, 82, 68, 55, 47, 45, 58, 60, 72, 86, 79, 61],
    labelLastYear: '2018',
    labelCurrentYear: '2019'
  };

  sinistralidade: Sinistralidade = {
    totalSinistralidade: 81.6,
    texto: 'Com Muitos esforços temos conseguido manter a sinistralidade dentro da meta estipulada para o ano sem a utilização de prorata. Isso se deve à maior racionalização na utilização dos recursos, bem como ao maior controle aplicado nos desperdícios no custo assistencial.',
    lastYear: [85, 72, 78, 75, 77, 75, 78, 80, 82, 86, 89, 81],
    currentYear:  [75, 82, 68, 55, 47, 45, 58, 60, 72, 86, 79, 61],
    labelLastYear: '2018',
    labelCurrentYear: '2019'
  };

  contraprestacao: Contraprestacao = {
    totalContraprestacao: 'R$694.479,00',
    texto: 'Em alinhamento às exigências da ANS ao mercado de saúde suplementar, as Contraprestações Efetivas substituem o antigo indicador gerencial de Receita Bruta. O resultado de janeiro foi de R$ 341.202 milhões, se mantendo acima do realizado em 2018 no mesmo período. Houve ainda uma pequena queda no número quando comparamos com o mês anterior.',
    lastYear: [85, 72, 78, 75, 77, 75, 78, 80, 82, 86, 89, 81],
    currentYear:  [75, 82, 68, 55, 47, 45, 58, 60, 72, 86, 79, 61],
    labelLastYear: '2018',
    labelCurrentYear: '2019'
  };

  consultaCliente: ConsultaCliente = {
    totalConsultas: 4.58,
    texto: 'Expressa a razão entre a quantidade de consultas médicas eletivas realizadas no período e o número de clientes ativos na carteira.'
  };

  liquidez: LiquidezCorrente = {
    totalLiquidez: 1.42,
    texto: 'Indica a capacidade que uma empresa tem de pagamento no curto prazo. Um índice de 1,0 mostra que a empresa tem o caixa equilibrado.'
  }

  cooperativa: CooperativaDto = {
    carteira: this.carteira,
    sinistralidade: this.sinistralidade,
    contraprestacao: this.contraprestacao,
    consultaCliente: this.consultaCliente,
    liquidez: this.liquidez
  };

  private messageSource: BehaviorSubject<CooperativaDto> = new BehaviorSubject(new CooperativaDto());
  currentCoopertaiva = this.messageSource.asObservable();


  public findCooperativaDataById(): CooperativaDto {
    this.messageSource.next(this.cooperativa);
    return this.cooperativa;
  }
}
