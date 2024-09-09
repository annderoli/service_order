import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-add-service',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './add-service.component.html',
  styleUrl: './add-service.component.scss'
})
export class AddServiceComponent {

  constructor(private router : Router) {}

  goToHome() {

    this.router.navigate([''])

  }

  save() {

    this.router.navigate([''])

  }

  goToService() {

    this.router.navigate(['services'])

  }

}
