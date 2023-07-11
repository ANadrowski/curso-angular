import { Component } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent {

  cursos: any[];

  constructor(private cursosService: CursosService) {
    this.cursos = this.cursosService.getCursos();
  }


}
