import { CanActivateFn } from '@angular/router';

export const alunosGuard: CanActivateFn = (route, state) => {

  if (state.url.includes('editar')) {
    alert('Usuário sem permissão!');
    return false;
  }

  console.log(route);
  console.log(state);

  return true;
};
