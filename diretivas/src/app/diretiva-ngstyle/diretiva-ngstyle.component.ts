import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngstyle',
  templateUrl: './diretiva-ngstyle.component.html',
  styleUrls: ['./diretiva-ngstyle.component.scss']
})
export class DiretivaNgstyleComponent {

  ativo: boolean = false;
  tamanhoFonte: number = 10;

  mudarAtivo(): void {
    this.ativo = !this.ativo;
  }
}
