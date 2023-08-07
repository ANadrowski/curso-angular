import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CursosService } from '../cursos.service';
import { Location } from '@angular/common'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.scss']
})
export class CursosFormComponent {

  form!: FormGroup;

  constructor(private fb: FormBuilder, private cursoService: CursosService, private location: Location, private route: ActivatedRoute) {

    this.route.params.subscribe(
      (params: any) => {
        const id = params['id'];
        console.log(id);

        const curso$ = this.cursoService.loadByID(id);
        curso$.subscribe();
      }
    );

    this.form = fb.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(`onSumit!`);
      this.cursoService.create(this.form.value).subscribe(
        sucess => {
          console.log(sucess);
          this.location.back();
        },
        error => console.error(error),
        () => console.log('request completo')
      );
    } else {
      console.log(`Formulário inválido!`);
    }


  }

  onCancel() {
    //console.log(`onCancel!`);
    this.form.reset();
  }

}
