import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosListaComponent } from './cursos-lista/cursos-lista.component';
import { CursosFormComponent } from './cursos-form/cursos-form.component';
import { cursoResolver } from './guards/curso.resolver';

const routes: Routes = [
  { path: "", component: CursosListaComponent},
  { path: "novo", component: CursosFormComponent,
      resolve: {
        curso: cursoResolver
      }
  },
  { path: "editar/:id", component: CursosFormComponent,
    resolve: {
      curso: cursoResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
