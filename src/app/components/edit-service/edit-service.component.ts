import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../../services/service.service';
import { ToastrService } from 'ngx-toastr';
import { Service } from '../../model/Service';
import { ModalComponent } from '../modal/modal.component';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-service',
  standalone: true,
  imports: [ModalComponent,HeaderComponent, CommonModule, FormsModule],
  templateUrl: './edit-service.component.html',
  styleUrl: './edit-service.component.scss'
})
export class EditServiceComponent implements OnInit {

  @Output() service = new Service();
  services : Service[] = [];

  constructor(
    private route: ActivatedRoute,
    private router : Router, 
    private serviceService: ServiceService,
    private toastr : ToastrService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.serviceService.getService(id).subscribe(data => {
      this.service = data;

      
    });
  }

  updateService(): void {
    this.serviceService.updateService(this.service.id , this.service).subscribe(() => {

      this.router.navigate(['services'])

      this.toastr.success("serviço Salvo Com Sucesso!")

    });
  }

  openConfirmDeleteModal(): void {
    this.serviceService.getService(this.service.id).subscribe(data => {
      this.service = data;

    const modalElement = document.getElementById('confirmDeleteModal');
    const modal = new (window as any).bootstrap.Modal(modalElement);

    modal.show();


  });

}
  
  

  // Rotas
  goToService() {
    this.router.navigate(['clients'])

  }

}
