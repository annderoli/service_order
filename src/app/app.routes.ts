import { Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';

export const routes: Routes = [
    { path: '', component : DashboardComponent},
    { path: 'formulario', component : FormComponent}
];
