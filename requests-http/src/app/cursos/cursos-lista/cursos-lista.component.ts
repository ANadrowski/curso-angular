import { Component } from '@angular/core';
import { CursosService } from '../cursos.service';
import { Observable, catchError, empty } from 'rxjs';
import { Curso } from '../curso';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss']
})
export class CursosListaComponent {

  cursos: Curso[] = [{ 'id': 1, 'nome': 'teste'  }];

  cursos$: Observable<Curso[]>;

  constructor(private cursosService : CursosService) {
    /*
    cursosService.list().subscribe(
      dados => this.cursos = dados
    );
    */

    this.cursos$ = this.cursosService.list().pipe(
      catchError(error => {
        console.error(`Descrição do erro: ${ error }`);
        return empty();
      })
    );
  }

}
