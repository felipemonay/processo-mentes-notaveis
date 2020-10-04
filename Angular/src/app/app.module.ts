import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VisorComponent } from './components/visor/visor.component';
import { TecladoComponent } from './components/teclado/teclado.component';
import { NumericasComponent } from './components/teclado/teclas/numericas/numericas.component';
import { OperadoresComponent } from './components/teclado/teclas/operadores/operadores.component';

@NgModule({
  declarations: [
    AppComponent,
    VisorComponent,
    TecladoComponent,
    NumericasComponent,
    OperadoresComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
