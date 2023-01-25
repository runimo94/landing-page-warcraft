import { Component } from '@angular/core';
import { SectionObj } from './components/header/header.component';
import { FooterService } from './services/footer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'landing-page-warcraft';

  //Datos del header
  public listHeader: SectionObj[] = [
    { name: 'Resumen', id: 'resumen' },
    { name: 'Características', id: 'caracteristicas' },
    { name: 'Ediciones', id: 'ediciones' },
    { name: 'Multimedia', id: 'multimedia' },
  ];
  public headerLogoUrl: string = 'assets/world-of-warcraft.svg';

  //Datos de la primera sección
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

  //Multimedia
  public listUrlsImgsMultimedia: string[] = [
    'assets/gallery/cinematic_render_1.webp',
    'assets/gallery/cinematic_render_2.webp',
    'assets/gallery/cinematic_render_frostmourne_full.webp',
    'assets/gallery/cinematic_render_scourge_full.webp',
    'assets/gallery/screenshot_draktheron_full.webp',
    'assets/gallery/screenshot_garden.webp',
    'assets/gallery/screenshot_magma.webp',
    'assets/gallery/screenshot_utgardekeep_full.webp',
  ];

  //Footer
  public textoDerechos: string =
    '©2023 Blizzard Entertainment, Inc. Todos los derechos reservados. Todas las marcas comerciales a las que se hace referencia son propiedad de sus respectivos dueños.';

  constructor(private footerService: FooterService) {
    //Datos de info del footer
    this.footerService.urlImgInfoLogo = 'assets/world-of-warcraft.svg';
    this.footerService.tituloInfo = 'World of Warcraft';
    this.footerService.textoInfo =
      'World of Warcraft es un juego del rol en linea masivo de Blizzard Entertainment';

    //Datos de otros juegos
    this.footerService.tituloOtherGames = 'Otros juegos';
    this.footerService.listOtherGames = [
      { name: 'Hearthstone', url: '' },
      { name: 'StarCraft', url: '' },
      { name: 'Diablo', url: '' },
      { name: 'Overwatch', url: '' },
      { name: 'Warcraft III', url: '' },
    ];
  }
}
