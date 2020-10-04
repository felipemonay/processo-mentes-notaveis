import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-visor',
  templateUrl: './visor.component.html'
})
export class VisorComponent implements OnInit {
  @Input() textoOperandoAnterior;
  @Input() textoOperandoAtual;
  constructor() { }

  ngOnInit(): void {
  }

}
