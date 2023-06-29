import { Component } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.scss']
})
export class OutputPropertyComponent {

  valor: number = 0;

  incrementa() {
    this.valor++;
  }

  decrementa() {
    this.valor--;
  }
}
