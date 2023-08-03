import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.scss']
})
export class CursosFormComponent {

  form!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(`onSumit!`);
    } else {
      console.log(`Formulário inválido!`);
    }


  }

  onCancel() {
    //console.log(`onCancel!`);
    this.form.reset();
  }

}
