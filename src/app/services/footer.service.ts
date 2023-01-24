import { Injectable } from '@angular/core';

export interface OtherGame {
  name: string;
  url: string;
}

@Injectable({
  providedIn: 'root',
})
export class FooterService {
  //Info component
  public urlImgInfoLogo?: string;
  public tituloInfo?: string;
  public textoInfo?: string;

  //OtherGames component
  public tituloOtherGames?: string;
  public listOtherGames?: OtherGame[];
}
