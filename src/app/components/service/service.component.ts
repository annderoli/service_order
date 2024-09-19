import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { ActivatedRoute, Router } from '@angular/router';
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
export class ServiceComponent implements OnInit {

constructor(private router : Router, private serviceService : ServiceService, private route : ActivatedRoute) {}

clientAdded: boolean = false;

//Inicializa
ngOnInit() {
  this.getServices();
  
}

addService(service: any) {
  this.router.navigate(['order'], { 
    queryParams: { 
      clientAdded: this.route.snapshot.queryParams['clientAdded'], // Mantém o cliente selecionado
      serviceAdded: true // Atualiza para true quando um serviço é selecionado
    } 
  });
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
