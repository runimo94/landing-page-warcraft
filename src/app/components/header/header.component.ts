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
  @Input() urlLogo1?: string;
  @Input() urlLogo2?: string;
  @Input() listSectionObject?: SectionObj[];

  scrollToElement(id: string, offset: number): void {
    const element = document.getElementById(id);
    const position = element?.getBoundingClientRect();
    const offsetFinal = window.scrollY - offset;
    const scrolloptions: ScrollToOptions = {
      top: position?.top! + offsetFinal,
      behavior: 'smooth',
    };
    window.scrollTo(scrolloptions);
  }
}
