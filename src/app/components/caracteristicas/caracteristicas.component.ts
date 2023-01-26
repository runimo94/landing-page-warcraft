import { Component, Input } from '@angular/core';

export interface CaracteristicasItem {
  titulo: string;
  texto: string;
}

@Component({
  selector: 'app-caracteristicas',
  templateUrl: './caracteristicas.component.html',
  styleUrls: ['./caracteristicas.component.scss'],
})
export class CaracteristicasComponent {
  @Input() public caracteristicas?: CaracteristicasItem[];
}
