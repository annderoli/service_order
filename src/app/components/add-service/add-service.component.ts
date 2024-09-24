import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { Service } from '../../model/Service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ServiceService } from '../../services/service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-service',
  standalone: true,
  imports: [HeaderComponent, FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './add-service.component.html',
  styleUrl: './add-service.component.scss'
})
export class AddServiceComponent implements OnInit{

  form!: FormGroup;

  constructor(
    private router : Router, 
    private serviceService : ServiceService,
    private toastr: ToastrService,
    private fb: FormBuilder ) {

      this.form = this.fb.group({
        servico: ['', [Validators.required, Validators.minLength(3)]],
        preco: ['', [Validators.required, Validators.minLength(3)]],
        detalhe: ['', [Validators.required, Validators.minLength(3)]],
      });
    }
  ngOnInit(): void {
  }

//JSON de clientes
services : Service[] = [];

//Novo objeto
service = new Service();

createService(): void {
  if (this.form.valid) { // Verifique se o formulário é válido
    // Extraindo os valores do formulário
    this.service.servico = this.form.value.servico;
    this.service.preco = this.form.value.preco;
    this.service.detalhe = this.form.value.detalhe;

    this.serviceService.createService(this.service).subscribe(data => {
      this.services.push(data);
      
      this.toastr.success('servicee Cadastrado Com Sucesso!', 'Parabéns!');

      this.router.navigate(['services']);
    }, error => {
      // Handle error case
      this.toastr.error('Erro ao cadastrar servicee!', 'Erro');
      console.error('Error:', error);
    });
  } else {
    // Mostrar erro se o formulário não é válido
    this.toastr.error('Por favor, preencha todos os campos corretamente!', 'Erro');
  }
}





  //Rotas
  goToHome() {

    this.router.navigate([''])

  }

  goToService() {

    this.router.navigate(['services'])

  }

}
