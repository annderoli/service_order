import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
export class OrderComponent implements OnInit {

constructor( private router: Router, private route : ActivatedRoute) {}

clientAdded: boolean = false;
serviceAdded: boolean = false;

//Direciona para seleciona Cliente e Serviço
addClient() {
  this.router.navigate(['clients']); 
}

addService() {
  this.router.navigate(['services'])
}

// quando o cliente for selecionado
onClientSelected() {
  this.clientAdded = true; // Altera a visibilidade dos botões
}

// quando o serviço for selecionado
onServiceSelected() {
  this.serviceAdded = true; // Altera a visibilidade dos botões
}

ngOnInit() {

  this.route.queryParams.subscribe(params => {
    if (params['clientAdded']) {
      this.clientAdded = true;
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
