import { Component } from '@angular/core';
import { CursosService } from './cursos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent {

  cursos: any[];
  pagina: number = 0;
  inscricao: Subscription;

  constructor(private cursosService: CursosService, private route: ActivatedRoute, private router: Router) {
    this.cursos = this.cursosService.getCursos();

    this.inscricao = this.route.queryParams.subscribe(
      (queryParams: any) => {
        this.pagina  = queryParams['pagina'];
      }
    );
  }

  ngOnDetroy() {
    this.inscricao.unsubscribe();
  }

  proximaPagina() {
    this.pagina++;
    this.router.navigate(['/cursos'], {queryParams: {'pagina': this.pagina}});
  }


}
