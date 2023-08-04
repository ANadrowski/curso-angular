import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.scss']
})
export class CursosFormComponent {

  form!: FormGroup;

  constructor(private fb: FormBuilder, private cursoService: CursosService) {
    this.form = fb.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(`onSumit!`);
      this.cursoService.create(this.form.value).subscribe(
        sucess => console.log(sucess),
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
