import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-seccion-datos',
  templateUrl: './seccion-datos.component.html',
  styleUrls: ['./seccion-datos.component.scss'],
})
export class SeccionDatosComponent {
  @Input() public titulo?: string;
  @Input() public texto?: string;
  @Input() public urlImagen?: string;
  @Input() public posLeftImg?: boolean;
}
