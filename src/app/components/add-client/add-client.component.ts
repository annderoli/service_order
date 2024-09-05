import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-add-client',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './add-client.component.html',
  styleUrl: './add-client.component.scss'
})
export class AddClientComponent {

  constructor(private router : Router) {}

  goToHome() {

    this.router.navigate([''])

  }

  save() {

    this.router.navigate([''])

  }

}
