import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-service',
  standalone: true,
  imports: [],
  templateUrl: './add-service.component.html',
  styleUrl: './add-service.component.scss'
})
export class AddServiceComponent {

  constructor(private router : Router) {}

  goToHome() {

    this.router.navigate([''])

  }

}
