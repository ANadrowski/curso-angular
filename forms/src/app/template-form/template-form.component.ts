import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  consultaCEP(cep: any) {
    console.log(cep);

    cep = cep.replace(/\D/g, '');

    if (cep != '') {
      var validaCep = /^[0-9]{8}$/;

      if (validaCep.test(cep)) {
        this.httpClient.get(`//viacep.com.br/ws/${cep}/json`).subscribe(dados => console.log(dados));;
      }
    }
  }

}
