import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.scss']
})
export class AlunoDetalheComponent {

  aluno: any;
  inscricao: Subscription;

  constructor(private route: ActivatedRoute, private alunosService: AlunosService, private router: Router) {
    /*
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];

        this.aluno = this.alunosService.getAluno(id);
      }
    );
    */

    this.inscricao = this.route.data.subscribe(
      (info) => {
        console.log(info);
        this.aluno = info['alunoX'];
      }
    );
  }

  ngOnDetroy() {
    this.inscricao.unsubscribe();
  }

  editarContato() {
    this.router.navigate(['/alunos', this.aluno.id, 'editar']);
  }

}
