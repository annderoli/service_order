import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../../services/client.service';
import { ToastrService } from 'ngx-toastr';
import { BusinessService } from '../../services/business.service';
import { Business } from '../../model/Business';
import { CommonModule } from '@angular/common';
import { Client } from '../../model/Client';
import { Service } from '../../model/Service';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-pdf',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pdf.component.html',
  styleUrl: './pdf.component.scss'
})
export class PdfComponent implements OnInit{

  business!: Business;  // Variável para armazenar o resultado da chamada
  client! : Client;
  service! : Service;

  constructor(
    private router : Router,
    private route : ActivatedRoute,  
    private businessService : BusinessService,
    private clientService : ClientService,
    private serviceService : ServiceService,
    private toastr : ToastrService ) {}

  ngOnInit(): void {
    const idBusiness = 1
    const idClient = '238f'
    const idService = '9a68'

    this.businessService.getBusiness().subscribe(
      (data: Business[]) => {
        this.business = data.find(b => b.id == idBusiness) as Business;
      });

    this.clientService.getClients().subscribe(
      (data: Client[]) => {
        this.client = data.find(c => c.id == idClient) as Client;
      });

    this.serviceService.getServices().subscribe(
      (data: Service[]) => {
        this.service = data.find(s => s.id == idService) as Service;
      });
}
}
