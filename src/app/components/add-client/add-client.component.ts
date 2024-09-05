import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-client',
  standalone: true,
  imports: [],
  templateUrl: './add-client.component.html',
  styleUrl: './add-client.component.scss'
})
export class AddClientComponent {

  constructor(private router : Router) {}

  goToHome() {

    this.router.navigate([''])

  }

}
