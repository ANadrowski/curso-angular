import { Component } from '@angular/core';
import { AlunosService } from '../alunos.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IformCandeactivate } from 'src/app/guards/iform-candeactivate';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.scss']
})
export class AlunoFormComponent implements IformCandeactivate {

  aluno: any = {};
  inscricao: Subscription;
  formMudou: boolean = false;

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

  onInput() {
    this.formMudou = true;
    console.log('mudou!');
  }

  /*
  podeMudarRota() {
    if (this.formMudou) {
      if (confirm('tem certeza que deseja mudar de página?') == true) {
        return true;
      } else {
        return false;
      }
    }
    return true;
  }
  */

  podeDesativar() {
    if (this.formMudou) {
      if (confirm('tem certeza que deseja mudar de página?') == true) {
        return true;
      } else {
        return false;
      }
    }
    return true;
  }

}
