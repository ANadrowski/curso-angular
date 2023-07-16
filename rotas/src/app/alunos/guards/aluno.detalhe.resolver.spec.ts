import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { alunoDetalheResolver } from './aluno.detalhe.resolver';

describe('alunoDetalheResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => alunoDetalheResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
