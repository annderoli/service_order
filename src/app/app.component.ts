import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddServiceComponent } from "./components/add-service/add-service.component";
import { AddClientComponent } from './components/add-client/add-client.component';
import { FormsModule } from '@angular/forms';
import { EditClientComponent } from './components/edit-client/edit-client.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeComponent,
    AddServiceComponent,
    AddClientComponent,
    FormsModule,
    EditClientComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'service_order';
}
