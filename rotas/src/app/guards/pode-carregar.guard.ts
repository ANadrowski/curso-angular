import { CanMatchFn, Router } from '@angular/router';
import { AuthService } from '../login/auth.service';
import { inject } from '@angular/core';

export const podeCarregarGuard: CanMatchFn = (route, segments) => {

  const service = inject(AuthService);
  const router = inject(Router);

  if (service.verificaUsuarioAutenticado) {
    return true;
  }

  router.navigate(['/login']);

  return false;
};
