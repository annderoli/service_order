import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './client.component.html',
  styleUrl: './client.component.scss'
})
export class ClientComponent {

  constructor(private router : Router) {}

  goToHome() {

    this.router.navigate([''])
  }

  addClient() {

    this.router.navigate(['add-client'])
  }

  goToOrder() {

    this.router.navigate(['order'])

  }



}
