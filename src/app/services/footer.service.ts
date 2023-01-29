import { Injectable } from '@angular/core';

export interface OtherGame {
  name: string;
  url: string;
}

@Injectable({
  providedIn: 'root',
})
export class FooterService {
  public bottomText?: string =
    '©2023 Blizzard Entertainment, Inc. Todos los derechos reservados. Todas las marcas comerciales a las que se hace referencia son propiedad de sus respectivos dueños.';

  //Datos de info del footer
  public urlImgInfoLogo: string = 'assets/world-of-warcraft.svg';
  public tituloInfo: string = 'World of Warcraft';
  public textoInfo: string =
    'World of Warcraft es un juego del rol en linea masivo de Blizzard Entertainment';

  //Datos de otros juegos
  public tituloOtherGames: string = 'Otros juegos';
  public listOtherGames: OtherGame[] = [
    { name: 'Hearthstone', url: '' },
    { name: 'StarCraft', url: '' },
    { name: 'Diablo', url: '' },
    { name: 'Overwatch', url: '' },
    { name: 'Warcraft III', url: '' },
  ];
}
