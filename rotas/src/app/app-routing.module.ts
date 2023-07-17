import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './guards/auth.guard';
import { cursosGuard } from './guards/cursos.guard';
import { alunosGuard } from './guards/alunos.guard';
import { podeCarregarGuard } from './guards/pode-carregar.guard';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
//import { CursosComponent } from './cursos/cursos.component';
//import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
//import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';

const routes: Routes = [
  { path: 'cursos', canActivate: [authGuard], canActivateChild: [cursosGuard], canMatch: [podeCarregarGuard], loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule)},
  { path: 'alunos', canActivate: [authGuard], canMatch: [podeCarregarGuard], /*canActivateChild: [alunosGuard],*/ loadChildren: () => import('./alunos/alunos.module').then(m => m.AlunosModule)},
  //{ path: 'cursos', component: CursosComponent },
  //{ path: 'curso/:id', component: CursoDetalheComponent },
  { path: 'login', component: LoginComponent },
  //{ path: 'naoEncontrado', component: CursoNaoEncontradoComponent },
  { path: 'home', canActivate: [authGuard], component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PaginaNaoEncontradaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
