import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Router } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [MenuComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  constructor(private router: Router) {}

  goToHome() {
    console.log('Botão clicado! Navegando para Home.');
    this.router.navigate(['']);
  }

}
