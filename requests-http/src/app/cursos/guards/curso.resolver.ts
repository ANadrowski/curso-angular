import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { CursosService } from '../cursos.service';
import { inject } from '@angular/core';
import { of } from 'rxjs';

type CursoEditOrNewTypes = {
  id: number | null,
  nome: string | null
}

export const cursoResolver: ResolveFn<CursoEditOrNewTypes> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  if (route.params && route.params['id']) {
    return inject(CursosService).loadByID(route.params['id']);
  }

  return of({
    id: null,
    nome: null
  });

};


