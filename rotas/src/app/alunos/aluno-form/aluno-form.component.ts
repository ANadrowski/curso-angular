import { Component } from '@angular/core';
import { AlunosService } from '../alunos.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.scss']
})
export class AlunoFormComponent {

  aluno: any = {};
  inscricao: Subscription;

  constructor(private route: ActivatedRoute, private alunosService: AlunosService) {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];

        this.aluno = this.alunosService.getAluno(id);

        if (this.aluno == null) {
          this.aluno = {};
        }
      }
    )
  }

  ngOnDetroy() {
    this.inscricao.unsubscribe();
  }

}
