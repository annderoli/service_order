import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
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

}
