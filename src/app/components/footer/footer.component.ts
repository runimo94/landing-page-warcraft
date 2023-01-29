import { Component } from '@angular/core';
import { FooterService } from '../../services/footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  public bottomText?: string;

  constructor(private footerService: FooterService) {
    this.bottomText = this.footerService.bottomText;
  }
}
