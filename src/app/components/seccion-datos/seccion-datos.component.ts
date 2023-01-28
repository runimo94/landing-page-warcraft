import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-seccion-datos',
  templateUrl: './seccion-datos.component.html',
  styleUrls: ['./seccion-datos.component.scss'],
})
export class SeccionDatosComponent implements OnInit, OnDestroy {
  @Input() public titulo?: string;
  @Input() public texto?: string;
  @Input() public urlImagen?: string;
  @Input() public posLeftImg?: boolean;

  private isMoveToRightImg?: boolean;

  private resizeObservable?: Observable<Event>;
  private resizeSubscription?: Subscription;

  ngOnInit(): void {
    this.posLeftImg ? (this.isMoveToRightImg = true) : '';
    this.moveRightImg(window.innerWidth);

    this.resizeObservable = fromEvent(window, 'resize');
    this.resizeSubscription = this.resizeObservable.subscribe(
      ({ target }: any) => {
        this.moveRightImg(target?.innerWidth);
      }
    );
  }

  ngOnDestroy(): void {
    this.resizeSubscription?.unsubscribe();
  }

  moveRightImg(width: number) {
    if (this.isMoveToRightImg) {
      if (width < 768) {
        this.posLeftImg = false;
      } else {
        this.posLeftImg = true;
      }
    }
  }
}
