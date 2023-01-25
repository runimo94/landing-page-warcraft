import { Component, Input } from '@angular/core';

export interface SectionObj {
  name: string;
  id: string;
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() urlLogo?: string;
  @Input() listSectionObject?: SectionObj[];

  clickNav(id: string): void {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  scrollToElement(id: string, offset: number): void {
    const element = document.getElementById(id);
    const position = element?.getBoundingClientRect();
    //top: position?.top? + offsetFinal,
    const offsetFinal = window.scrollY - offset;
    const scrolloptions: ScrollToOptions = {
      top: position?.top! + offsetFinal,
      behavior: 'smooth',
    };
    window.scrollTo(scrolloptions);
  }
}
