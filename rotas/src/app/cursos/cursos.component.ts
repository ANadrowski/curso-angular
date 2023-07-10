import { Component } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent {

  constructor(private cursosService: CursosService) {

  }

  getCursos() {
    return [
      {id: 1, nome: 'Angular'},
      {id: 2, nome: 'Java'}
    ];
  }

}
