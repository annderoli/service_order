import { Component, OnInit } from "@angular/core";
import { FooterComponent } from "../footer/footer.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HeaderComponent } from "../header/header.component";
import { Router } from "@angular/router";
import { ClientService } from "../../services/client.service";
import { Client } from "../../model/Client";


@Component({
  selector: 'app-add-client',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CommonModule, FormsModule],
  templateUrl: './add-client.component.html',
  styleUrl: './add-client.component.scss'
})
export class AddClientComponent implements OnInit {

  constructor(private router : Router, private service : ClientService ) {}

    //JSON de clientes
    clients : Client[] = [];

    //Novo objeto
    client = new Client();
  
    // Método de seleção
    getClient() : void {
  
      this.service.getClient()
      .subscribe(
        data => this.clients = data);
  
    }

    // Método de cadastro
   postClient() : void {

    this.service.postClient(this.client)
    .subscribe(
      data => { 

        // Cadastra o cliente no vetor
        this.clients.push(data); 

        // LImpar Formulario
        this.client = new Client()

        // Mensagem
        alert('Cliente cadastrado com sucesso!!!')
      } );

  }

  //Inicializa
  ngOnInit() {

    this.getClient();
    
  }
  
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
