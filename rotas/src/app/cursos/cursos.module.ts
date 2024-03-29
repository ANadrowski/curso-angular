import { NgModule } from '@angular/core';
import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursosService } from './cursos.service';
import { CommonModule } from '@angular/common';
import { CursosRoutingModule } from './cursos.rounting.module';
//import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    CursosRoutingModule
    //RouterModule
  ],
  exports: [],
  declarations: [
    CursosComponent,
    CursoDetalheComponent,
    CursoNaoEncontradoComponent
  ],
  providers: [CursosService]
})

export class CursosModule { }
