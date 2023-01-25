import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SeccionDatosComponent } from './components/seccion-datos/seccion-datos.component';
import { EdicionComponent } from './components/edicion/edicion.component';
import { FooterModule } from './components/footer/footer.module';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ImageComponent } from './components/image/image.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SeccionDatosComponent,
    EdicionComponent,
    GalleryComponent,
    ImageComponent,
  ],
  imports: [BrowserModule, FooterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
