import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent implements OnInit {
  valorCalculado: any;
  valor2: any;
  valor1: any;
  tipoOperacao: any;

  constructor() { }

  ngOnInit(): void {
  }

  informaOperacao(tipo: string) {
    this.tipoOperacao = tipo;
  }
  acaoBotao(acao: string) {
    if (acao === 'calcular') {
      switch (this.tipoOperacao) {
        case '+':
          this.valorCalculado = this.valor1 + this.valor2;
          break;
        case '-':
          this.valorCalculado = this.valor1 - this.valor2;
          break;
        case '*':
          this.valorCalculado = this.valor1 * this.valor2;
          break;
        case '/':
          this.valorCalculado = this.valor1 / this.valor2;
          break;
        default:
          break;
      }
    } else if (acao === 'limpar') {
      this.valorCalculado = '';
      this.valor1 = '';
      this.valor2 = '';
      this.tipoOperacao = '';
    }
  }


}
