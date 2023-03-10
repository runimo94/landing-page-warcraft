import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SeccionDatosComponent } from './components/seccion-datos/seccion-datos.component';
import { EdicionComponent } from './components/edicion/edicion.component';
import { FooterModule } from './components/footer/footer.module';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ImageComponent } from './components/image/image.component';
import { CaracteristicasComponent } from './components/caracteristicas/caracteristicas.component';
import { HeaderSideBarComponent } from './components/header-side-bar/header-side-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SeccionDatosComponent,
    EdicionComponent,
    GalleryComponent,
    ImageComponent,
    CaracteristicasComponent,
    HeaderSideBarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    GalleryModule,
    LightboxModule,
    FooterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
