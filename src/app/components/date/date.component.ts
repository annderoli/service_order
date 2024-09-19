import { AfterViewInit, Component } from '@angular/core';

declare var flatpickr: any; // Declaração para uso de flatpickr

@Component({
  selector: 'app-date',
  standalone: true,
  imports: [],
  templateUrl: './date.component.html',
  styleUrl: './date.component.scss'
})
export class DateComponent implements AfterViewInit {

  ngAfterViewInit() {
    flatpickr("#datepicker", {
      dateFormat: "Y-m-d", // Configuração de formato de data
    });
  }
}{

}
