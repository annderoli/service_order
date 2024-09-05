import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
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

  save() {

    this.router.navigate(['save'])

  }

}
