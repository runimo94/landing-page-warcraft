import { Component } from '@angular/core';
import { OtherGame } from 'src/app/services/footer.service';
import { FooterService } from '../../../services/footer.service';

@Component({
  selector: 'app-other-games',
  templateUrl: './other-games.component.html',
  styleUrls: ['./other-games.component.scss'],
})
export class OtherGamesComponent {
  public titulo?: string;
  public listGames?: OtherGame[];

  constructor(public footerService: FooterService) {
    this.titulo = this.footerService.tituloOtherGames;
    this.listGames = this.footerService.listOtherGames;
  }
}
