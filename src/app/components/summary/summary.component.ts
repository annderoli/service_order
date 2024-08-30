import { Component } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [ModalComponent],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss'
})
export class SummaryComponent {

  modalVisible = false;

  openModal() {
    this.modalVisible = true; // Define visibilidade do modal como verdadeiro
  }

  closeModal() {
    this.modalVisible = false; // Define visibilidade do modal como falso
  }

}
