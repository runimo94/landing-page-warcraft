import { Component, Input, OnInit } from '@angular/core';

export interface SectionObj {
  name: string;
  id: string;
}
@Component({
  selector: 'app-header-side-bar',
  templateUrl: './header-side-bar.component.html',
  styleUrls: ['./header-side-bar.component.scss'],
})
export class HeaderSideBarComponent implements OnInit {
  @Input() urlLogo1?: string;
  @Input() urlLogo2?: string;
  @Input() listSectionObject?: SectionObj[];

  private leftSideNav?: HTMLElement | null;
  private rightSideNav?: HTMLElement | null;

  private isLeftOpen: boolean = false;
  private isRightOpen: boolean = false;

  ngOnInit(): void {
    this.leftSideNav = document.getElementById('leftSideNav');
    this.rightSideNav = document.getElementById('rightSideNav');

    window.onresize = this.resetAnimation;
  }

  resetAnimation() {
    if (window.innerWidth >= 1280) {
      this.leftSideNav?.classList.remove('animate__slideInLeft');
      this.leftSideNav?.classList.remove('animate__slideOutLeft');
      this.leftSideNav?.classList.add('hidden');
      this.rightSideNav?.classList.remove('animate__slideOutRight');
      this.rightSideNav?.classList.remove('animate__slideInRight');
      this.rightSideNav?.classList.add('hidden');
      this.isLeftOpen = false;
      this.isRightOpen = false;
    }
  }

  scrollToElement(id: string, offset: number): void {
    const element = document.getElementById(id);
    const position = element?.getBoundingClientRect();
    const offsetFinal = window.scrollY - offset;
    const scrolloptions: ScrollToOptions = {
      top: position?.top! + offsetFinal,
      behavior: 'auto',
    };
    window.scrollTo(scrolloptions);
    this.handleSideNav('close', 'left');
  }

  handleSideNav(action: 'open' | 'close', sidenav: 'left' | 'right') {
    const elements: { [key: string]: HTMLElement } = {
      left: document.getElementById('leftSideNav') as HTMLElement,
      right: document.getElementById('rightSideNav') as HTMLElement,
    };

    if (action === 'open') {
      elements[sidenav].classList.remove('hidden');

      if (sidenav === 'left') {
        elements[sidenav].classList.add('animate__slideInLeft');
        elements[sidenav].classList.remove('animate__slideOutLeft');
        this.isLeftOpen = true;

        if (this.isRightOpen) {
          elements['right'].classList.add('animate__slideOutRight');
          elements['right'].classList.remove('animate__slideInRight');
          this.isRightOpen = false;
        }
      } else {
        elements[sidenav].classList.add('animate__slideInRight');
        elements[sidenav].classList.remove('animate__slideOutRight');
        this.isRightOpen = true;

        if (this.isLeftOpen) {
          elements['left'].classList.add('animate__slideOutLeft');
          elements['left'].classList.remove('animate__slideInLeft');
          this.isLeftOpen = false;
        }
      }
    } else {
      if (sidenav === 'left') {
        elements[sidenav].classList.add('animate__slideOutLeft');
        elements[sidenav].classList.remove('animate__slideInLeft');
        this.isLeftOpen = false;
      } else {
        elements[sidenav].classList.add('animate__slideOutRight');
        elements[sidenav].classList.remove('animate__slideInRight');
        this.isRightOpen = false;
      }
    }
  }
}
