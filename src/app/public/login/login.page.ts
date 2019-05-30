import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public text: string = 'Mudar Idioma';
  public title: string = 'Login';
  public email: string = "your@email.com";
  public password: string = "Password";
  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
  }

  login(){
    this.authService.login();
  }

  changeText(): void{
    if(this.text === 'Mudar Idioma'){
      this.text = 'Change Language';
      this.title = 'Entrar';
      this.email = "seu@email.com";
      this.password = "Senha";
    } else {
      this.text = 'Mudar Idioma';
      this.title = 'Login';
      this.email = "your@email.com";
      this.password = "Password";
    }
  }

}
