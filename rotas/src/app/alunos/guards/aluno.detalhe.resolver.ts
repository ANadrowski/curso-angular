import { ResolveFn } from '@angular/router';
import { Aluno } from '../aluno';
import { Inject, inject } from '@angular/core';
import { AlunosService } from '../alunos.service';

export const alunoDetalheResolver: ResolveFn<Aluno | null> = (route, state) => {

  const service = inject(AlunosService);

  let id = route.params['id'];

  return service.getAluno(id);
};
