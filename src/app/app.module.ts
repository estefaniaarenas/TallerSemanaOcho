import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraComponent } from './componente/barra/barra.component';

import { FooterComponent } from './componente/footer/footer.component';
import { LeyComponent } from './componente/ley/ley.component';
import { InicioComponent } from './componente/inicio/inicio.component';
import { DatosComponent } from './componente/datos/datos.component';
import { UneteComponent } from './componente/unete/unete.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraComponent,
    FooterComponent,
    LeyComponent,
    InicioComponent,
    DatosComponent,
    UneteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
