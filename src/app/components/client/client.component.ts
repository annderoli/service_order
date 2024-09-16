import { Component, OnInit } from "@angular/core";
import { HeaderComponent } from "../header/header.component";
import { CommonModule } from "@angular/common";
import { EditClientComponent } from "../edit-client/edit-client.component";
import { Client } from "../../model/Client";
import { Router, RouterLink } from "@angular/router";
import { ClientService } from "../../services/client.service";
import { ToastrService } from "ngx-toastr";


@Component({
  selector: 'app-client',
  standalone: true,
  imports: [HeaderComponent, CommonModule, EditClientComponent, RouterLink],
  templateUrl: './client.component.html',
  styleUrl: './client.component.scss'
})
export class ClientComponent implements OnInit{

  //Objeto Cliente
  client = new Client();

  //JSON de clientes
  clients : Client[] = [];

  constructor(
    private router : Router,  
    private clientService : ClientService,
    private toastr : ToastrService ) {}

  // Método GET Clientes
  getClients() : void {
    this.clientService.getClients()
    .subscribe(
      data => {
        this.clients = data
      }
    );
    
  }

  // Método de Inicialização
  ngOnInit() {
    this.getClients();
  }



// Rotas Paginas

  goToHome() {

    this.router.navigate([''])
  }

  addClient() {

    this.router.navigate(['add-client'])
  }

  goToOrder() {

    this.router.navigate(['order'])

  }

  goToEdit(nome: string) {

    this.router.navigate(['edit-client', nome])

  }

}
