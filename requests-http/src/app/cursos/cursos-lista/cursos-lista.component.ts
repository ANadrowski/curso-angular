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

  cursos: Curso[] = [{ 'id': 1, 'nome': 'teste'  }];

  constructor(private cursosService : CursosService) {
    cursosService.list().subscribe(
      dados => this.cursos = dados
    );
  }

}
