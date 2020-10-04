import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-teclado',
  templateUrl: './teclado.component.html'
})
export class TecladoComponent {

  @Output()
  public limparCalculo = new EventEmitter();
  @Output()
  public operacaoEscolhida = new EventEmitter();
  @Output()
  public numeroEscolido = new EventEmitter();
  @Output()
  public resultado = new EventEmitter();

  constructor() { }

  limpar(){
    this.limparCalculo.emit();
  }

  escolherOperacao(operacao: string){
    this.operacaoEscolhida.emit(operacao);
  }

  incluirNumero(numero: number){
    console.log(numero);

    this.numeroEscolido.emit(numero);
  }

  igualar(){
    this.resultado.emit();
  }

}
