import { Component } from '@angular/core';
import { CursosService } from '../cursos.service';
import { Observable } from 'rxjs';
import { Curso } from '../curso';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss']
})
export class CursosListaComponent {

  cursos: Curso[];
  //cursos$: Observable<Curso[]>;

  constructor(private cursosService : CursosService) {
    cursos = [ ''];

    cursosService.list().subscribe(
      dados => this.cursos = dados
    );
  }

}
