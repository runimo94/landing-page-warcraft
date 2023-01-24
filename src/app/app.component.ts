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

  // Datos de la segunda sección
  public titulo2: string =
    'Conoce las características clave de World of Warcraft y comienza tu aventura';
  public texto2: string =
    'Explora un mundo de fantasía épico con una variedad de razas y clases. Lucha contra criaturas poderosas y completa misiones épicas. Desarrolla tu personaje a medida que subes de nivel. Conecta con una comunidad activa de jugadores de todo el mundo. Descubre nuevos contenidos con actualizaciones regulares.';
  public urlImg2: string = '../../../assets/screenshot_icecrown_full.webp';
  public posLeftImg2: boolean = true;

  //Datos seccion ediciones
  //Edicion retail
  public imgEdRetail: string = '../../../assets/world-of-warcraft.svg';
  public tituloEdRetail: string = 'Edicion Retail';
  public listaCaracEdRetail: string[] = [
    'Juega con las nuevas clases como el Monje o Evocador',
    'Disfruta de contenido actualizado a la última expansión',
    'Gráficos y modelos mejorados',
    'Nuevas dificultades y mecánicas como mazmorras de dificultad mítica plus',
  ];
  public textoBotonEdRetail: string = 'Selecciona Retail';

  //Edicion classic
  public imgEdClassic: string = '../../../assets/world-of-warcraft.svg';
  public tituloEdClassic: string = 'Edicion Classic';
  public listaCaracEdClassic: string[] = [
    'Recuerda el juego como se lanzó en 2004',
    'Toda la dificultad de antaño en los tiempos de ahora',
    'Más social e interactivo',
    'Mayor importancia en el progreso de nivel de personaje y mundo mas inmersivo',
  ];
  public textoBotonEdClassic: string = 'Selecciona Classic';
}
