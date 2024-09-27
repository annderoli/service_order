import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { ServiceService } from '../../services/service.service';
import { Service } from '../../model/Service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [HeaderComponent, CommonModule, FormsModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent implements OnInit {

  service!: Service;

  constructor( 
    private router: Router, 
    private route : ActivatedRoute,
    private serviceService : ServiceService) {}

  clientId!: string; // ID do cliente
  serviceId!: string; // ID do serviço

  ngOnInit() {

    // Verifica se cliente ou serviço já foram adicionados via seus IDs
    this.route.queryParams.subscribe(params => {

      if (params['clientId']) {
        this.clientId = params['clientId']; // Captura o ID do cliente da URL
      }
      if (params['serviceId']) {
        this.serviceId = params['serviceId']; // Captura o ID do serviço da URL
      }
    });
  }

  // Navegar para a seleção de clientes, mantendo o estado do serviceId
  addClient() {
    this.router.navigate(['clients'], { 
      queryParams: { 
        clientId: null, // Permitir redefinir o cliente (pode ser null ou undefined)
        serviceId: this.serviceId // Mantém o ID do serviço selecionado
      } 
    });
  }

  // Navegar para a seleção de serviços, mantendo o estado do clientId
  addService() {
    this.router.navigate(['services'], { 
      queryParams: { 
        clientId: this.clientId, // Mantém o ID do cliente selecionado
        serviceId: null // Permitir redefinir o serviço (pode ser null ou undefined)
      } 
    });
  }

  //Rotas
  goToHome() {

    this.router.navigate([''])

  }

  save() {
    console.log(this.service)


  }

}
