import { Component } from '@angular/core';
import { SectionObj } from './components/header/header.component';
import { FooterService } from './services/footer.service';
import { CaracteristicasItem } from './components/caracteristicas/caracteristicas.component';

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
  public headerLogoUrl1: string = 'assets/blizz.svg';
  public headerLogoUrl2: string = 'assets/world-of-warcraft.svg';

  //Datos de la primera sección
  public titulo1: string = '¡Entra en World of Warcraft!';
  public texto1: string =
    'Con más de 15 años de historia, este juego de rol en línea masivo cuenta con una comunidad activa de jugadores de todo el mundo, una amplia variedad de razas y clases, y una historia épica que se desarrolla en un mundo de fantasía. ¡No pierdas la oportunidad de formar parte de esta aventura!';
  public urlImg1: string = '../../../assets/screenshot_bridge.webp';
  public posLeftImg1: boolean = false;

  // Datos de la segunda sección
  public titulo2: string = 'Conoce el mundo de World of Warcraft';
  public texto2: string =
    'Explora un mundo de fantasía épico con una variedad de razas y clases. Lucha contra criaturas poderosas y completa misiones épicas. Desarrolla tu personaje a medida que subes de nivel. Conecta con una comunidad activa de jugadores de todo el mundo. Descubre nuevos contenidos con actualizaciones regulares.';
  public urlImg2: string = '../../../assets/screenshot_icecrown_full.webp';
  public posLeftImg2: boolean = true;

  //Datos seccion caracteristicas
  public caracteristicas: CaracteristicasItem[] = [
    {
      titulo: 'Jugabilidad',
      texto:
        'World of Warcraft es un juego de rol en línea masivo (MMORPG) que permite a los jugadores controlar un personaje y explorar un mundo virtual en tiempo real. Los jugadores pueden interactuar con otros jugadores, completar misiones y desafiar a monstruos y jefes para obtener experiencia, objetos y oro.',
    },
    {
      titulo: 'Ambientación',
      texto:
        'World of Warcraft cuenta con una ambientación épica de fantasía que se desarrolla en el mundo de Azeroth. El juego cuenta con gráficos en 3D que son impresionantes y detallados, con paisajes, personajes y monstruos muy bien diseñados.',
    },
    {
      titulo: 'Clases y razas',
      texto:
        'Los jugadores pueden elegir entre una variedad de razas y clases para controlar a sus personajes. Cada raza tiene su propia historia, habilidades y características distintivas. Las clases incluyen guerreros, magos, cazadores, sacerdotes, etc.',
    },
    {
      titulo: 'Contenido',
      texto:
        'World of Warcraft ofrece una gran cantidad de contenido para los jugadores. Hay una gran variedad de zonas para explorar, misiones para completar y monstruos para desafiar. Además, hay una serie de expansiones disponibles que agrega contenido adicional, incluyendo nuevas razas, clases, zonas y mazmorras.',
    },
    {
      titulo: 'Sistema de misiones',
      texto:
        'El juego cuenta con un sistema de misiones detallado y completo, que incluye misiones principales y secundarias. Los jugadores pueden seguir la trama principal del juego a través de estas misiones, y también pueden ganar recompensas valiosas y experiencia.',
    },
    {
      titulo: 'Sistema de combate',
      texto:
        'World of Warcraft tiene un sistema de combate dinámico y desafiante, que incluye una variedad de habilidades y mecánicas para cada clase. Los jugadores deben aprender a usar eficazmente las habilidades de su personaje y trabajar en equipo con otros jugadores para superar a los desafiantes monstruos y jefes.',
    },
    {
      titulo: 'Sistema de objetos',
      texto:
        'El juego cuenta con un sistema de objetos completo y detallado, que incluye una gran variedad de armas, armaduras y objetos de accesorios para los jugadores. Los jugadores pueden adquirir objetos a través de las misiones, las mazmorras e incursiones, y comprando en el mercado.',
    },
    {
      titulo: 'Comunidad',
      texto:
        'World of Warcraft cuenta con una gran comunidad de jugadores. Los jugadores pueden unirse a grupos de discusión y foros en línea para compartir consejos, estrategias y experiencias con otros jugadores. También hay una gran cantidad de sitios web y aplicaciones de fans que proporcionan información adicional y herramientas para ayudar a los jugadores a mejorar su experiencia.',
    },
  ];

  //Datos seccion ediciones
  //Edicion retail
  public imgEdRetail: string = '../../../assets/world-of-warcraft-2.svg';
  public tituloEdRetail: string = 'Edicion Retail';
  public listaCaracEdRetail: string[] = [
    'Juega como Monje, Evocador, Caballero de la muerte y Cazador de demonios',
    'Disfruta de contenido actualizado a la última expansión',
    'Gráficos y modelos mejorados',
    'Nuevas dificultades y mecánicas como mazmorras de dificultad mítica plus',
  ];
  public textoBotonEdRetail: string = 'Selecciona Retail';

  //Edicion classic
  public imgEdClassic: string = '../../../assets/world-of-warcraft.svg';
  public tituloEdClassic: string = 'Edicion Classic';
  public listaCaracEdClassic: string[] = [
    'Recuerda el juego como se lanzó en 2004 con las 9 clases originales',
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
