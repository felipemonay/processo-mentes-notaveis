import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  textoOperandoAnterior: any;
  textoOperandoAtual: any;
  resetaValor: boolean;
  operandoAtual: string = '';
  operandoAnterior: string = '';
  operador: string = '';
  operadorAtual: string = '';

  constructor(){
    this.limpar()
  }


  limpar(){
    this.operandoAtual = '';
    this.operandoAnterior = '';
    this.operador = undefined;
    this.atualizarVisor();
  }

  incluirNumero(numero){
      this.operandoAtual = this.operandoAtual.toString() + numero.toString();
      this.atualizarVisor();
  }

  escolherOperacao(operador){
      if(this.operandoAtual === '') return;
      if(this.operandoAnterior !== '' && this.operandoAtual !== ''){
          this.calcular();
      }
      this.operador = operador;
      this.operandoAnterior = this.operandoAtual;
      this.operandoAtual = '';
      this.atualizarVisor();
  }

  calcular(){
      let resultado;
      const anterior = parseFloat(this.operandoAnterior);
      const atual = parseFloat(this.operandoAtual);
      if(isNaN(anterior) || isNaN(atual)){
          return
      }
      switch(this.operador) {
          case '+':
              resultado = anterior + atual;
          break;

          case '-':
              resultado = anterior - atual;
          break;

          case '÷':
              resultado = anterior / atual;
          break;

          case '×':
              resultado = anterior * atual;
          break;

          default:
          return;
      }
      this.resetaValor = true;
      this.operandoAtual = resultado;
      this.operador = undefined;
      this.operandoAnterior = '';
      this.atualizarVisor();
  }

  verNumeroVisor(numero){
      const numFloat = parseFloat(numero);
      if(isNaN(numFloat)) return '';
      return numFloat.toLocaleString('pt-BR');
  }

  atualizarVisor(){
      this.textoOperandoAtual = this.verNumeroVisor(this.operandoAtual);
      if(this.operador != null) {
          this.textoOperandoAnterior = `${this.verNumeroVisor(this.operandoAnterior)} ${this.operador}`;
      } else {
          this.textoOperandoAnterior = '';
      }
  }
}
