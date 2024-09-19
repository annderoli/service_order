import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent implements OnInit {

constructor( private router: Router, private route : ActivatedRoute) {}

clientAdded: boolean = false;
serviceAdded: boolean = false;

ngOnInit() {
  // Verifica se cliente ou serviço já foram adicionados
  this.route.queryParams.subscribe(params => {
    if (params['clientAdded'] === 'true') {
      this.clientAdded = true;
    }
    if (params['serviceAdded'] === 'true') {
      this.serviceAdded = true;
    }
  });
}

// Navegar para a seleção de clientes, mantendo o estado de serviceAdded
addClient() {
  this.router.navigate(['clients'], { 
    queryParams: { 
      clientAdded: false, // Permitir redefinir o cliente
      serviceAdded: this.serviceAdded // Mantém o estado do serviço
    } 
  });
}

// Navegar para a seleção de serviços, mantendo o estado de clientAdded
addService() {
  this.router.navigate(['services'], { 
    queryParams: { 
      clientAdded: this.clientAdded, // Mantém o estado do cliente
      serviceAdded: false // Permitir redefinir o serviço
    } 
  });
}



  //Rotas
  goToHome() {

    this.router.navigate([''])

  }

  save() {

    this.router.navigate(['save'])

  }

}
