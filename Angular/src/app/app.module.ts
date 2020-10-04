import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VisorComponent } from './components/visor/visor.component';
import { TecladoComponent } from './components/teclado/teclado.component';

@NgModule({
  declarations: [
    AppComponent,
    VisorComponent,
    TecladoComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
