import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './guards/auth.guard';
//import { CursosComponent } from './cursos/cursos.component';
//import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
//import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';

const routes: Routes = [
  { path: 'cursos', canActivate: [authGuard], loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule)},
  { path: 'alunos', canActivate: [authGuard], loadChildren: () => import('./alunos/alunos.module').then(m => m.AlunosModule)},
  //{ path: 'cursos', component: CursosComponent },
  //{ path: 'curso/:id', component: CursoDetalheComponent },
  { path: 'login', component: LoginComponent },
  //{ path: 'naoEncontrado', component: CursoNaoEncontradoComponent },
  { path: '', canActivate: [authGuard], component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
