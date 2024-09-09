import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private router: Router) {}

  goToAddService() {
    console.log('Botão clicado! Navegando para Serviços.');
    this.router.navigate(['/add-service']);
  }

  goToAddClient() {
    console.log('Botão clicado! Navegando para Serviços.');
    this.router.navigate(['/add-client']);
  }

  goToOrder() {
    console.log('Botão clicado! Navegando para Serviços.');
    this.router.navigate(['/order']);
  }

  goToClient() {
    console.log('Botão clicado! Navegando para Serviços.');
    this.router.navigate(['/clients']);
  }

  goToService() {
    console.log('Botão clicado! Navegando para Serviços.');
    this.router.navigate(['/services']);
  }

}
