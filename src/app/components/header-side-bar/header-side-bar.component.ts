import { Component, Input } from '@angular/core';

export interface SectionObj {
  name: string;
  id: string;
}
@Component({
  selector: 'app-header-side-bar',
  templateUrl: './header-side-bar.component.html',
  styleUrls: ['./header-side-bar.component.scss'],
})
export class HeaderSideBarComponent {
  @Input() urlLogo1?: string;
  @Input() urlLogo2?: string;
  @Input() listSectionObject?: SectionObj[];

  scrollToElement(id: string, offset: number): void {
    const element = document.getElementById(id);
    const position = element?.getBoundingClientRect();
    const offsetFinal = window.scrollY - offset;
    const scrolloptions: ScrollToOptions = {
      top: position?.top! + offsetFinal,
      behavior: 'auto',
    };
    window.scrollTo(scrolloptions);
  }

  toggle(id: string) {
    const elements: { [key: string]: HTMLElement } = {
      left: document.getElementById('leftSideNav') as HTMLElement,
      right: document.getElementById('rightSideNav') as HTMLElement,
    };

    // hide the opposite side nav
    if (id === 'rightSideNav') {
      elements['left'].classList.replace('inline', 'hidden');
    } else {
      elements['right'].classList.replace('inline', 'hidden');
    }
    // toggle the selected nav
    elements[id.replace('SideNav', '')].classList.toggle('inline');
    elements[id.replace('SideNav', '')].classList.toggle('hidden');
  }
}
