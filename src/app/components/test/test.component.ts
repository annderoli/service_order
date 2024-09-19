import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../../services/client.service';
import { Client } from '../../model/Client';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent implements OnInit{
  
client = new Client();

name! : string;

constructor(private router : Router, private route : ActivatedRoute, private service : ClientService) {}

ngOnInit(): void{

  const name = this.route.snapshot.paramMap.get('nome') as string;

  this.service.getClients().subscribe(data => {
    this.client = data.find(client => client.nome === name) as Client;
        
  });

}

}
