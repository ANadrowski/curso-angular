import { Component } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent {

  nomePortal: string;

  cursos: string[];

  constructor() {
    this.nomePortal = "http://loiane.training";
    this.cursos = ['Java', 'Ext JS', 'Angular'];
  }

}
