import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ServiceService } from '../../services/service.service';
import { Service } from '../../model/Service';
import { EditServiceComponent } from '../edit-service/edit-service.component';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [HeaderComponent,FooterComponent, CommonModule, EditServiceComponent],
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss'
})
export class ServiceComponent {

constructor(private router : Router, private serviceService : ServiceService ) {}

// Função chamada quando o cliente for selecionado
addService(service: any) {
  // Aqui você pode fazer a lógica para capturar o cliente selecionado
  // Após selecionar o cliente, volta para o OrderComponent
  this.router.navigate(['order'], { queryParams: { serviceAdded: true } });
}

//Objeto Serviços
service = new Service();

//JSON de Serviços
services : Service[] = [];
allServices : Service[] = [];

// Método cliente especifico
selectService(position : number) : void {
  const service = this.services[position];

  this.router.navigate(['edit-service', service])

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
  goToOrderSelected() {
    // Passa o parâmetro 'fromClient' como true para o OrderComponent
    this.router.navigate(['order'], { queryParams: { fromServices: true } });
  }

  goToHome() {

    this.router.navigate([''])
  }

  goToOrder() {

    this.router.navigate(['order'])

  }



}
