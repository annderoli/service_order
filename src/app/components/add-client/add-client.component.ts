import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { Client } from '../../model/Client';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-add-client',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './add-client.component.html',
  styleUrl: './add-client.component.scss'
})
export class AddClientComponent {

  constructor(private router : Router, private service : ClientService ) {}

  //objeto client
  client = new Client();

  //JSON Clientes 
  clients : Client[] = [];

  //Método de seleção
  select() : void {
  
  this.service.select().subscribe(returns => this.clients = returns)
  
  }

  //Método de inicialização
  ngOnInit(){
    this.select();
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
