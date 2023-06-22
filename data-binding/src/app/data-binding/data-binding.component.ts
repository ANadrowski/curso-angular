import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent {

  url: string = 'http://loiane.com';
  cursoAngular: boolean = true;
  urlImagem: string = 'http://lorempixel.com.br/500/400/?1';

  valorAtual: string = '';
  valorSalvo: any = '';

  nome: string = 'abc';

  pessoa: any = {
    nome: 'def',
    idade: 20
  }

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  botaoClicado() {
    alert('Botão clicado');
  }

  onKeyUp(evento: KeyboardEvent) {
    //console.log();
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor: EventTarget) {
    this.valorSalvo = valor;
  }

}
