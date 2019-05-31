import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  public text = 'Mudar Idioma';
  public title = 'Pollution Map';
  public display = 'Welcome the project more to be added in the future.';
  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
  }

  logout( ) {
    this.authService.logout();
  }

  changeText(): void {
    if (this.text === 'Mudar Idioma') {
      this.text = 'Change Language';
      this.title = 'Mapa de Poluição';
      this.display = 'Bem-vindo o projeto mais a ser adicionado no futuro.';
    } else {
      this.text = 'Mudar Idioma';
      this.title = 'Pollution Map';
      this.display = 'Welcome the project more to be added in the future.';
    }
  }
}
