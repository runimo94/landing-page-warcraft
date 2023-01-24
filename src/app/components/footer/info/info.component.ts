import { Component } from '@angular/core';
import { FooterService } from '../../../services/footer.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent {
  public urlImgLogo?: string;
  public tituloInfo?: string;
  public textoInfo?: string;

  constructor(private footerService: FooterService) {
    this.urlImgLogo = this.footerService.urlImgInfoLogo;
    this.tituloInfo = this.footerService.tituloInfo;
    this.textoInfo = this.footerService.textoInfo;
  }
}
