import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs';
import { DropdownService } from '../shared/services/dropdown.service';
import { EstadoBr } from '../shared/models/estado-br';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss']
})
export class DataFormComponent implements OnInit {

  formulario!: FormGroup;
  estados!: EstadoBr[];


  constructor(private formBuilder: FormBuilder, private http: HttpClient, private dropDownService: DropdownService) {

    /*
    this.formulario = new FormGroup({
      nome: new FormControl(null),
      email: new FormControl(null)

      endereco: new FormGroup({
        cep: new FormGroup(null)
      })

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

      endereco: this.formBuilder.group({
        cep: [null, Validators.required],
        numero: [null, Validators.required],
        complemento: [null],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required]
      })
    })

    this.dropDownService.getEstadosBr().subscribe(
      dados => {
        this.estados = dados,
        console.log(this.estados);
      }
    );

  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.formulario.value);

    if (this.formulario.valid) {
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
    } else {
      console.log('formulario invalido');
      this.verificaValidacoesForm(this.formulario);
    }

  }

  verificaValidacoesForm(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(
      campo => {
        console.log(campo);
        const controle = formGroup.get(campo);
        controle?.markAsTouched; //Não vai mostrar a mensagem de erro pq não foi implementada com CSS.

        if (controle instanceof FormGroup) {
          this.verificaValidacoesForm(controle);
        }

      }
    );
  }

  resetar() {
    this.formulario.reset();
  }

  consultaCEP() {

    let cep = this.formulario.get('endereco.cep')?.value;

    console.log(cep);

    cep = cep.replace(/\D/g, '');

    if (cep != '') {
      var validaCep = /^[0-9]{8}$/;

      if (validaCep.test(cep)) {

        this.resetaDadosForm();

        //this.httpClient.get(`//viacep.com.br/ws/${cep}/json`).subscribe(dados => console.log(dados));
        this.http.get(`//viacep.com.br/ws/${cep}/json`).subscribe(dados => this.populaDadosForm(dados));
      }
    }
  }

  populaDadosForm(dados: any) {

    this.formulario.patchValue({
      endereco: {
        rua: dados.logradouro,
        //cep: dados.cep,
        //numero: '',
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });

    //Como setar um campo de modo independente:
    //this.formulario.get('nome').setValue('Loiane');
  }

  resetaDadosForm() {
    this.formulario.patchValue({
      endereco: {
        rua: null,
        complemento: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    });
  }
}
