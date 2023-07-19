import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome: null,
    email: null
  }

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    console.log(form.value);

    console.log(this.usuario);
  }

  consultaCEP(cep: any, form: NgForm) {
    console.log(cep);

    cep = cep.replace(/\D/g, '');

    if (cep != '') {
      var validaCep = /^[0-9]{8}$/;

      if (validaCep.test(cep)) {

        this.resetaDadosForm(form);

        //this.httpClient.get(`//viacep.com.br/ws/${cep}/json`).subscribe(dados => console.log(dados));
        this.httpClient.get(`//viacep.com.br/ws/${cep}/json`).subscribe(dados => this.populaDadosForm(dados, form));
      }
    }
  }

  populaDadosForm(dados: any, form: NgForm) {
    /*
    form.setValue({
      nome: form.value.nome,
      email: form.value.email,
      endereco: {
        rua: dados.logradouro,
        cep: dados.cep,
        numero: '',
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });
    */

    form.form.patchValue({
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
  }

  resetaDadosForm(form: NgForm) {
    form.form.patchValue({
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

