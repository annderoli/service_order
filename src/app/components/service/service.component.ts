import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss'
})
export class ServiceComponent {

  constructor(private router : Router) {}

  goToHome() {

    this.router.navigate([''])
  }

  addService() {

    this.router.navigate(['add-service'])
  }

  goToOrder() {

    this.router.navigate(['order'])

  }


}
