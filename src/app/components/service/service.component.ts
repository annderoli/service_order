import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ServiceService } from '../../services/service.service';
import { Service } from '../../model/Service';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [HeaderComponent,FooterComponent, CommonModule],
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss'
})
export class ServiceComponent {

constructor(private router : Router, private service : ServiceService ) {}

//JSON de clientes
services : Service[] = [];

// Método GET Serviços
getServices() : void {

  this.service.getServices()
  .subscribe(
    data => this.services = data);
}

//Inicializa
ngOnInit() {

  this.getServices();
  
}

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
