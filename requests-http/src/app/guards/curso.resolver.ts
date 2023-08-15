import { ResolveFn } from '@angular/router';

export const cursoResolver: ResolveFn<boolean> = (route, state) => {
  return true;
};
