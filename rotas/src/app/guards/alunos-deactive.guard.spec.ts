import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { alunosDeactiveGuard } from './alunos-deactive.guard';

describe('alunosDeactiveGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => alunosDeactiveGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
