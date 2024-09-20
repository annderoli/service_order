import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";


@Component({
  selector: 'app-date',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule, // Adicionar MatFormField
    MatInputModule, // Adicionar MatInput
  ],
  templateUrl: './date.component.html',
  styleUrl: './date.component.scss'
})
export class DateComponent {

  dataNascimento: string = ''; // Valor da data

  formatarData(event: Event): void {
    let valor = (event.target as HTMLInputElement).value;
    valor = valor.replace(/\D/g, ""); // Remove caracteres que não são números

    if (valor.length > 2 && valor.length <= 4) {
      valor = valor.replace(/^(\d{2})(\d{0,2})/, "$1/$2"); // Adiciona a primeira barra
    } else if (valor.length > 4) {
      valor = valor.replace(/^(\d{2})(\d{2})(\d{0,4})/, "$1/$2/$3"); // Adiciona a segunda barra
    }

    this.dataNascimento = valor; // Atualiza o valor formatado
  }

}
