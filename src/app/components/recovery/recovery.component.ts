import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recovery',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './recovery.component.html',
  styleUrl: './recovery.component.scss'
})
export class RecoveryComponent {

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const email = this.loginForm.get('username')?.value;
      this.authService.sendEmail(email, 'Recuperação de Senha', 'Clique no link para recuperar sua senha.')
        .subscribe(
          response => {
            console.log('Email enviado com sucesso!', response);
            alert('Email enviado com sucesso!');
            this.router.navigate(['/login']); // Redireciona para a página de login
          },
          error => {
            console.error('Erro ao enviar o email', error);
            alert('Erro ao enviar o email');
          }
        );
    }
  }

}
