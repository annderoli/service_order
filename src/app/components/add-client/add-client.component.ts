import { AfterViewInit, Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HeaderComponent } from "../header/header.component";
import { Router } from "@angular/router";
import { ClientService } from "../../services/client.service";
import { Client } from "../../model/Client";
import { ToastrService } from "ngx-toastr";
import { DateComponent } from "../date/date.component";


@Component({
  selector: 'app-add-client',
  standalone: true,
  imports: [HeaderComponent, CommonModule, FormsModule, DateComponent],
  templateUrl: './add-client.component.html',
  styleUrl: './add-client.component.scss'
})
export class AddClientComponent {

  constructor(
    private router : Router, 
    private clientService : ClientService,
   private toastr: ToastrService ) {}

//JSON de clientes
clients : Client[] = [];

//Novo objeto
client = new Client();

createClient(): void {
  this.clientService.createClient(this.client).subscribe(data => {
    this.clients.push(data);

    this.toastr.success('Cliente Cadastrado Com Sucesso!', 'Parabéns!')

    this.router.navigate(['clients'])
  });
}

  // Rotas
  goToHome() {

    this.router.navigate([''])

  }

  save() {

    this.router.navigate([''])

  }

  goToClient() {

    this.router.navigate(['clients'])

  }

}
