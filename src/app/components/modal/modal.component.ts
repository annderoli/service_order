import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Client } from '../../model/Client';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent implements OnInit {

  @Input() client! : Client; // Recebe o cliente a ser excluído

  constructor(private clientService: ClientService, private router: Router, private toastr: ToastrService) {}


  ngOnInit(): void {
  
  }
  
  // Função que será chamada ao confirmar exclusão no modal
  deleteClient(): void {
    this.clientService.deleteClient(this.client.id).subscribe( () => {
      
        this.router.navigate(['clients']);
        this.toastr.success('Cliente excluído com sucesso!');
      
      
    });

}

}
