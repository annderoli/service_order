import { Component, OnInit, Output } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../../services/client.service';
import { ClientComponent } from '../client/client.component';
import { Client } from '../../model/Client';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ToastrService } from 'ngx-toastr';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-edit-client',
  standalone: true,
  imports: [HeaderComponent, CommonModule, FormsModule, ClientComponent, ModalComponent],
  templateUrl: './edit-client.component.html',
  styleUrl: './edit-client.component.scss'
})

export class EditClientComponent implements OnInit {
  @Output() client = new Client();
  clients : Client[] = [];

  constructor(
    private route: ActivatedRoute,
    private router : Router, 
    private clientService: ClientService,
    private toastr : ToastrService) {}


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.clientService.getClient(id).subscribe(data => {
      this.client = data;

      
    });
  }

  updateClient(): void {
    this.clientService.updateClient(this.client.id , this.client).subscribe(() => {

      this.router.navigate(['clients'])

      this.toastr.success("Cliente Salvo Com Sucesso!")

    });
  }

  openConfirmDeleteModal(): void {
    this.clientService.getClient(this.client.id).subscribe(data => {
      this.client = data;

    const modalElement = document.getElementById('confirmDeleteModal');
    const modal = new (window as any).bootstrap.Modal(modalElement);

    modal.show();


  });

}
  
  

  // Rotas
  goToClient() {
    this.router.navigate(['clients'])

  }

  }






    
