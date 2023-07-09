import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.scss']
})
export class ExemplosPipesComponent {

  livro: any = {
    titulo: 'Lerning java with loiane',
    rating: '4.54321',
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url: 'http://www.google.com'
  }

  livros: string[] = ['Java', 'Angular'];

  filtro: string = '';

  addCurso(novoCurso: string) {
    console.log(this.livros);
    this.livros.push(novoCurso);
  }

  /* Falta pesquisar melhor aqui

  obterCursos() {
    if (this.livros.length === 0  || this.filtro === undefined || this.filtro.trim() === '') {
      return this.livros;
    }

    const filter = args.toLocaleString().toLocaleLowerCase();
      return value.filter(
        (v: string) => v.toLocaleLowerCase().includes(filter)
    );
  }
  */

  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Valor assíncrono'), 2000)
  });

  valorAsync2 = new Observable<string>(observable => {
    setTimeout(() => {
      observable.next('Valor assíncrono 2');
    }, 2000);
  });
}
