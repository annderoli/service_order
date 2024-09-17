import { Component, EventEmitter, input, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ClientService } from '../../services/client.service';
import { ClientComponent } from '../client/client.component';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-edit-client',
  standalone: true,
  imports: [HeaderComponent, CommonModule, FormsModule, ClientComponent, FooterComponent, RouterLink],
  templateUrl: './edit-client.component.html',
  styleUrl: './edit-client.component.scss'
})
export class EditClientComponent implements OnInit {
  nome! : any;
  client!:any;

constructor(
  private route : ActivatedRoute, 
  private clientService : ClientService) {}


 ngOnInit(): void { 

  this.route.paramMap.subscribe(params => { 
    const nome = String(this.route.snapshot.paramMap.get('nome'))

    this.clientService.getClients().subscribe(data => {
      this.client = data.find(client => client.nome === nome);

      console.log(this.client); }); });
}

}






    
