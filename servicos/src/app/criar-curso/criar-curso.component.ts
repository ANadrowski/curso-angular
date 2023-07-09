import { Component } from '@angular/core';
import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.scss']
})
export class CriarCursoComponent  {

  cursos: string[] = [];

  constructor(private cursosService: CursosService) {
    this.cursos = cursosService.getCursos();
   }


}