import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent {

  url: string = 'http://loiane.com';
  cursoAngular: boolean = true;
  urlImagem: string = 'http://lorempixel.com.br/500/400/?1';

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

}
