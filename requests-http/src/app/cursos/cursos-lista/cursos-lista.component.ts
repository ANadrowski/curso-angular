import { Component } from '@angular/core';
import { CursosService } from '../cursos.service';
import { Observable, catchError, empty } from 'rxjs';
import { Curso } from '../curso';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss']
})
export class CursosListaComponent {

  cursos: Curso[] = [{ 'id': 1, 'nome': 'teste'  }];

  cursos$: Observable<Curso[]>;

  constructor(private cursosService : CursosService, private router: Router, private route: ActivatedRoute) {
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

  onEdit(id: any) {
    this.router.navigate(['editar', id], { relativeTo: this.route});
  }

  onDelete(curso: Curso) {
    this.cursosService.remove(curso.id).subscribe(
      sucess => {
        this.router.navigate(['cursos'], { relativeTo: this.route});
      }
    );
  }

}
