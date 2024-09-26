import { Component, OnInit } from '@angular/core';
import { DateComponent } from '../date/date.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [DateComponent, CommonModule,ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]], // Validação de email
      password: ['', Validators.required] // Outros campos
    });
  }

  onSubmit() {
    const { username, password } = this.loginForm.value;
    this.authService.login(username, password).subscribe((isAuthenticated) => {
      if (isAuthenticated) {
        this.router.navigate(['home']); // Redireciona ao dashboard em caso de sucesso
      } else {
        alert('Usuário ou senha incorretos'); // Mostra alerta em caso de falha
      }
    });
  }

  register() {
    this.router.navigate(['register']);
  }
}
