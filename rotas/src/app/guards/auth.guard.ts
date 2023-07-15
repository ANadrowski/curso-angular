import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../login/auth.service';

export const authGuard: CanActivateFn = (route, state) => {

  const auth = inject(AuthService);
  return auth.verificaUsuarioAutenticado;


};
