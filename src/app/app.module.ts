import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SeccionDatosComponent } from './components/seccion-datos/seccion-datos.component';
import { EdicionComponent } from './components/edicion/edicion.component';
import { FooterModule } from './components/footer/footer.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SeccionDatosComponent,
    EdicionComponent,
  ],
  imports: [BrowserModule, FooterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
