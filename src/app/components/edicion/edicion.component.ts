import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-edicion',
  templateUrl: './edicion.component.html',
  styleUrls: ['./edicion.component.scss'],
})
export class EdicionComponent {
  @Input() public urlImg?: string;
  @Input() public titulo?: string;
  @Input() public listaCaracteristicas?: string[];
  @Input() public textoBoton?: string;
}
