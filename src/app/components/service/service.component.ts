import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ServiceService } from '../../services/service.service';
import { Service } from '../../model/Service';
import { EditServiceComponent } from '../edit-service/edit-service.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [HeaderComponent, CommonModule, EditServiceComponent,EditServiceComponent],
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss'
})
export class ServiceComponent implements OnInit {

//Objeto Serviços
service = new Service();

//JSON de Serviços
services : Service[] = [];
allServices : Service[] = [];

constructor(
  private router : Router, 
  private serviceService : ServiceService, 
  private route : ActivatedRoute,
  private toastr : ToastrService) {}

clientAdded: boolean = false;

addService(position: any) {
  const service = this.services[position];

  this.router.navigate(['order'], { 
    queryParams: { 
      serviceId: service.id, // Passa o ID do serviço selecionado
      clientId: this.route.snapshot.queryParams['clientId'] // Mantém o ID do cliente, se existir
    }, 
    queryParamsHandling: 'merge' // Garante que os parâmetros existentes sejam preservados
  });
}


// Método serviço especifico
selectService(position : number) : void {
  const service = this.services[position];

  this.router.navigate(['edit-service', service.id])

}

// Método GET Services
getServices() : void {
  this.serviceService.getServices().subscribe((data : Service[]) => {
      this.services = data;
      this.allServices = data;
    });
}



//Inicializa
ngOnInit() {
  this.getServices();
  
}

 // Barra de pesquisa
 search(e: Event): void {
  const target = e.target as HTMLInputElement;
  const value = target.value.trim();

  if (!value) {
    // Se o valor estiver vazio, redefinir para todos os clientes
    this.services = [...this.allServices];
  } else {
    // Filtrar os clientes
    this.services = this.allServices.filter((data : Service) => {
      return data.servico.toLowerCase().includes(value.toLowerCase())
  });
  }

}


  // Rotas
  goToOrder() {

    this.router.navigate(['order'])

  }

  goToAddService() {
    this.router.navigate(['add-service']);
  }

}
