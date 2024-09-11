import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { Service } from '../../model/Service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ServiceService } from '../../services/service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-service',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, FormsModule, CommonModule],
  templateUrl: './add-service.component.html',
  styleUrl: './add-service.component.scss'
})
export class AddServiceComponent {

  constructor(
    private router : Router, 
    private serviceService : ServiceService,
    private toastr: ToastrService ) {}

//JSON de clientes
services : Service[] = [];

//Novo objeto
service = new Service();

// Método de cadastro de Serviço
postService() : void {
  this.serviceService.postService(this.service)
  .subscribe(data => { 
    
    // Cadastrar
    this.service.push(data); });

    // Limpar formulario
    this.service = new Service();

    // Mensagem
    this.toastr.success('Serviço Cadastrado Com Sucesso!', 'Perfeito!');

}

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
