import { CanDeactivateFn } from '@angular/router';
import { AlunoFormComponent } from '../alunos/aluno-form/aluno-form.component';

export const alunosDeactiveGuard: CanDeactivateFn<AlunoFormComponent> = (component, currentRoute, currentState, nextState) => {

  console.log(`guarda de desativação: ${component.formMudou} `);

  return component.podeMudarRota();
};
