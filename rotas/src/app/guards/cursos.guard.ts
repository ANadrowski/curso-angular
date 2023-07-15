import { CanActivateFn } from '@angular/router';

export const cursosGuard: CanActivateFn = (route, state) => {

  console.log('guarda de rota filha');

  return true;
};
