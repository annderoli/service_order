import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {

  // Recebe a visibilidade do componente pai
  @Input() isVisible = false; 
  
  // Emite um evento para o componente pai
  @Output() close = new EventEmitter<void>(); 

  closeModal() {
    this.isVisible = false; // Atualiza o estado local do modal
    this.close.emit(); // Emite um evento para notificar o componente pai
  }

}
