import { Component, OnInit, Output } from "@angular/core";
import { HeaderComponent } from "../header/header.component";
import { CommonModule } from "@angular/common";
import { EditClientComponent } from "../edit-client/edit-client.component";
import { Client } from "../../model/Client";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
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
  allClients : Client[] = [];

  constructor(
    private router : Router,
    private route : ActivatedRoute,  
    private clientService : ClientService,
    private toastr : ToastrService ) {}

    addClient(position: any) { 
      const client = this.clients[position];
    
      this.router.navigate(['order'], { 
        queryParams: { 
          clientId: client.id, // Passa o ID do cliente selecionado
          serviceId: this.route.snapshot.queryParams['serviceId'] // Mantém o ID do serviço, se existir
        }, 
        queryParamsHandling: 'merge' // Garante que os parâmetros existentes sejam preservados
      });
    }
    
    
  // Método cliente especifico
  selectClient(position : number) : void {
    const client = this.clients[position];

    this.router.navigate(['edit-client', client.id])

  }

  // Método GET Clientes
  getClients() : void {
    this.clientService.getClients().subscribe((data : Client[]) => {
        this.clients = data;
        this.allClients = data;
      });
  }

  ngOnInit() {
    this.getClients();

    
    
  }

  // Barra de pesquisa
  search(e: Event): void {
    const target = e.target as HTMLInputElement;
    const value = target.value.trim();
  
    if (!value) {
      // Se o valor estiver vazio, redefinir para todos os clientes
      this.clients = [...this.allClients];
    } else {
      // Filtrar os clientes
      this.clients = this.allClients.filter((data : Client) => {
        return data.nome.toLowerCase().includes(value.toLowerCase())
    });
    }

  }

  // Rotas Paginas
  goToOrder() {
    this.router.navigate(['order']);
  }

  goToAddClient() {
    this.router.navigate(['add-client']);
  }

}
