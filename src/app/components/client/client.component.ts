import { Component, OnInit, Output } from "@angular/core";
import { HeaderComponent } from "../header/header.component";
import { CommonModule } from "@angular/common";
import { EditClientComponent } from "../edit-client/edit-client.component";
import { Client } from "../../model/Client";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { ClientService } from "../../services/client.service";
import { ToastrService } from "ngx-toastr";
import { TestComponent } from "../test/test.component";


@Component({
  selector: 'app-client',
  standalone: true,
  imports: [HeaderComponent, CommonModule, EditClientComponent, RouterLink, TestComponent],
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

    addClient(client: any) {
      this.router.navigate(['order'], { 
        queryParams: { 
          clientAdded: true, // Atualiza para true quando um cliente é selecionado
          serviceAdded: this.route.snapshot.queryParams['serviceAdded'] // Mantém o serviço selecionado, se existir
        } 
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

}
