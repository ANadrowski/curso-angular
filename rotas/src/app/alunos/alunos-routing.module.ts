import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunosComponent } from './alunos.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { alunosGuard } from '../guards/alunos.guard';
import { alunosDeactiveGuard } from '../guards/alunos-deactive.guard';
import { alunoDetalheResolver } from './guards/aluno.detalhe.resolver';

const routes: Routes = [
  //{ path: 'alunos', component: AlunosComponent, children: [
    { path: '', component: AlunosComponent,
      canActivateChild: [alunosGuard],
      children: [
      { path: 'novo', component: AlunoFormComponent},
      { path: ':id', component: AlunoDetalheComponent, resolve: { alunoX : alunoDetalheResolver }},
      { path: ':id/editar', component: AlunoFormComponent, canDeactivate: [alunosDeactiveGuard] }
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule { }
