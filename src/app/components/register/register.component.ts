import { Component, OnInit } from '@angular/core';
import { DateComponent } from '../date/date.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [DateComponent, CommonModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService, 
    private router: Router,
    private toast : ToastrService) {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]], // Validação de email
      password: ['', Validators.required] // Outros campos
    });
  }

  onSubmit() {

    if (this.registerForm.valid) {
      const { username, password } = this.registerForm.value;
      this.authService.register(username, password).subscribe({
        next: () => {
          this.toast.success('Usuario Cadastrado com Sucesso!');
          this.router.navigate(['']); // Redireciona para a página de login após cadastro
        },
        error: error => {
          this.toast.error('Usuario Não Cadastrado');
          console.error(error); // Exibe detalhes do erro no console
        }
      });
    }
  }

  }
