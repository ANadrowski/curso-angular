import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  usuario: Usuario = new Usuario();

  constructor(private authService: AuthService) {

  }

  fazerLogin() {
    console.log(this.usuario);
    this.authService.fazerLogin(this.usuario);
  }

}
