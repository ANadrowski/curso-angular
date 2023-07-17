import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { podeCarregarGuard } from './pode-carregar.guard';

describe('podeCarregarGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => podeCarregarGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
