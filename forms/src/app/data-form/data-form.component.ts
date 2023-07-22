import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss']
})
export class DataFormComponent implements OnInit {

  formulario!: FormGroup;


  constructor(private formBuilder: FormBuilder, private http: HttpClient) {

    /*
    this.formulario = new FormGroup({
      nome: new FormControl(null),
      email: new FormControl(null)
    });
    */

    this.formulario = this.formBuilder.group({
      nome: [null,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20)
        ]],
      email: [null,
        [
          Validators.required,
          Validators.email
        ]],
      cep: [null, Validators.required],
      numero: [null, Validators.required],
      complemento: [null],
      rua: [null, Validators.required],
      bairro: [null, Validators.required],
      cidade: [null, Validators.required],
      estado: [null, Validators.required]
    })

  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.formulario.value);

    this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
    .pipe(map((dados: any) => dados))
    .subscribe(dados => {
      console.log(dados);
      //reset do form
      //this.formulario.reset();
      this.resetar();
    },
    (erro: any) => alert('erro')
    );
  }

  resetar() {
    this.formulario.reset();
  }
}
