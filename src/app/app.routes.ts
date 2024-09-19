import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddServiceComponent } from './components/add-service/add-service.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { OrderComponent } from './components/order/order.component';
import { ClientComponent } from './components/client/client.component';
import { ServiceComponent } from './components/service/service.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { TestComponent } from './components/test/test.component';
import { EditServiceComponent } from './components/edit-service/edit-service.component';

export const routes: Routes = [
    { path: '' , component: HomeComponent } ,
    { path: 'add-service' , component: AddServiceComponent},
    { path: 'add-client' , component: AddClientComponent},
    { path: 'order' , component: OrderComponent},
    { path: 'clients' , component: ClientComponent},
    { path: 'services' , component: ServiceComponent},
    { path: 'edit-client/:nome' , component: EditClientComponent},
    { path: 'edit-service/:nome' , component: EditServiceComponent},
    { path: 'test/:nome' , component: TestComponent}
];
