export class Indicador {
  titulo: string;
  subtitulo: string;
  valor: number;
  tipoValor: string; // PERCENT / NUMERIC / MONETARY
  textoResumo: string;
  hasGrafico: boolean;
  valoresAnoAnterior: number[];
  valoresAnoAtual: number[];
  labelAnoAnterior: string;
  labelAnoAtual: string;
}
