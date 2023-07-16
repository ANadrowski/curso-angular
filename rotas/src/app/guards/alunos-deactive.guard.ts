import { CanDeactivateFn } from '@angular/router';
import { IformCandeactivate } from './iform-candeactivate';

export const alunosDeactiveGuard: CanDeactivateFn<IformCandeactivate> = (component, currentRoute, currentState, nextState) => {

  //console.log(`guarda de desativação: ${component.formMudou} `);

  //return component.podeMudarRota();

  return component.podeDesativar();
};
