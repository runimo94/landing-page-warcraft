import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './info/info.component';
import { SocialComponent } from './social/social.component';
import { OtherGamesComponent } from './other-games/other-games.component';
import { FooterComponent } from './footer.component';

@NgModule({
  declarations: [
    InfoComponent,
    SocialComponent,
    OtherGamesComponent,
    FooterComponent,
  ],
  imports: [CommonModule],
  exports: [FooterComponent],
})
export class FooterModule {}
