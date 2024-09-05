import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent {

  constructor( private router: Router) {}

  goToHome() {

    this.router.navigate([''])

  }

  goToClients() {

    this.router.navigate(['clients'])

  }

  goToServices() {

    this.router.navigate(['services'])

  }

}
