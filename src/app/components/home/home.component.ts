import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private router: Router) {}

  goToAddService() {
    this.router.navigate(['/add-service']);
  }

  goToAddClient() {
    this.router.navigate(['/add-client']);
  }

  goToOrder() {
    this.router.navigate(['/order']);
  }

}
