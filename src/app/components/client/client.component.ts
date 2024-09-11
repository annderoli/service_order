import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { ClientService } from '../../services/client.service';
import { Client } from '../../model/Client';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.scss'
})
export class ClientComponent {

  constructor(private router : Router,  private clientService : ClientService) {}

  //JSON de clientes
  clients : Client[] = [];

  // Método GET Clientes
  getClients() : void {

    this.clientService.getClients()
    .subscribe(
      data => this.clients = data);
}

//Inicializa
ngOnInit() {

  this.getClients();
  
}

  goToHome() {

    this.router.navigate([''])
  }

  addClient() {

    this.router.navigate(['add-client'])
  }

  goToOrder() {

    this.router.navigate(['order'])

  }



}
