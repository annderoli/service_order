import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [],
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



}
