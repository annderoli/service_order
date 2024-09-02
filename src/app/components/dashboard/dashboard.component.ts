import { Component } from '@angular/core';
import { SummaryComponent } from '../summary/summary.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SummaryComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  summaryVisible = true;

  openDash() {
    this.summaryVisible = true; // Define visibilidade do modal como verdadeiro
  }

  closeDash() {
    this.summaryVisible = false; // Define visibilidade do modal como falso
  }


}
