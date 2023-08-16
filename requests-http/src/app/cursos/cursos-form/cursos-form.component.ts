import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CursosService } from '../cursos.service';
import { Location } from '@angular/common'
import { ActivatedRoute } from '@angular/router';
import { Curso } from '../curso';
import { map, switchMap } from 'rxjs/operators';
//import { map } from 'rxjs';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.scss']
})
export class CursosFormComponent {

  form!: FormGroup;

  constructor(private fb: FormBuilder, private cursoService: CursosService, private location: Location, private route: ActivatedRoute) {

    /*
    this.route.params.subscribe(
      (params: any) => {
        const id = params['id'];
        console.log(id);

        const curso$ = this.cursoService.loadByID(id);
        curso$.subscribe(curso => {
          this.updateForm(curso);
        });
      }
    );
    */


    /*
    this.route.params
    .pipe(
      map( (params: any) => params['id']),
      switchMap(id => this.cursoService.loadByID(id))
    )
    .subscribe(curso => this.updateForm(curso));
    */

    const curso = this.route.snapshot.data['curso'];

    this.form = fb.group({
      id: [curso.id],
      nome: [curso.nome, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]]
    });
  }

  /*
  updateForm(curso: any) {
    this.form.patchValue({
      id: curso.id,
      nome: curso.nome
    });
  }
  */

  onSubmit() {
    if (this.form.valid) {
      console.log(`onSumit!`);

      if (this.form.value.id) {
        //Existe id então faz o update
        this.cursoService.update(this.form.value).subscribe(
          sucess => {
            console.log(sucess);
            this.location.back();
          },
          error => console.error(error),
          () => console.log('update completo')
        );

      } else {
        this.cursoService.create(this.form.value).subscribe(
        sucess => {
          console.log(sucess);
          this.location.back();
        },
        error => console.error(error),
        () => console.log('request completo')
      );
      }


    } else {
      console.log(`Formulário inválido!`);
    }


  }

  onCancel() {
    //console.log(`onCancel!`);
    this.form.reset();
  }

}
