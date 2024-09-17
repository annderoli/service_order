import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent {

  constructor( private router: Router, private route : ActivatedRoute) {}

  selectedClient: any;

  // Visibilidade
  adicionar : boolean = true;

  adicionado : boolean = false;



ngOnInit() {
  // Verifica o parâmetro de rota 'fromClient'
  this.route.queryParams.subscribe(params => {
    if (params['fromClient']) {
      this.adicionar = false; // Oculta os botões "Adicionar"
      this.adicionado = true; // Exibe os botões de cliente adicionado
    }
  });


}




  //Rotas
  goToHome() {

    this.router.navigate([''])

  }

  goToClients() {

    this.router.navigate(['clients'])

  }

  goToServices() {

    this.router.navigate(['services'])

  }

  save() {

    this.router.navigate(['save'])

  }

}
