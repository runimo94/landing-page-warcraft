import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'landing-page-warcraft';

  // Datos de la primera sección
  public titulo1: string =
    '¡Entra en el mundo de World of Warcraft y vive una aventura épica!';
  public texto1: string =
    'Con más de 15 años de historia, este juego de rol en línea masivo cuenta con una comunidad activa de jugadores de todo el mundo, una amplia variedad de razas y clases, y una historia épica que se desarrolla en un mundo de fantasía. ¡No pierdas la oportunidad de formar parte de esta aventura!';
  public urlImg1: string = '../../../assets/screenshot_bridge.webp';
  public posLeftImg1: boolean = false;

  // Datos de la primera sección
  public titulo2: string =
    'Conoce las características clave de World of Warcraft y comienza tu aventura';
  public texto2: string =
    'Explora un mundo de fantasía épico con una variedad de razas y clases. Lucha contra criaturas poderosas y completa misiones épicas. Desarrolla tu personaje a medida que subes de nivel. Conecta con una comunidad activa de jugadores de todo el mundo. Descubre nuevos contenidos con actualizaciones regulares.';
  public urlImg2: string = '../../../assets/screenshot_icecrown_full.webp';
  public posLeftImg2: boolean = true;
}
