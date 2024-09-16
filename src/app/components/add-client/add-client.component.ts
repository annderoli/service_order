import { Component, OnInit } from "@angular/core";
import { FooterComponent } from "../footer/footer.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HeaderComponent } from "../header/header.component";
import { Router } from "@angular/router";
import { ClientService } from "../../services/client.service";
import { Client } from "../../model/Client";
import { ToastrService } from "ngx-toastr";


@Component({
  selector: 'app-add-client',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CommonModule, FormsModule],
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
