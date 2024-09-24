import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Service} from '../model/Service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http : HttpClient) { }

  private url = 'http://192.168.18.6:3000/services'

  // Método para buscar todos os Serviços
  getServices(): Observable< Service[] > {

    return this.http.get< Service[] >( this.url );
  }

  getService(id : any): Observable< Service > {

    return this.http.get<Service>(`${this.url}/${id}`)

  }

  // Método para Inserir novos Serviços
  createService(obj: Service): Observable< Service> {

    return this.http.post< Service >( this.url, obj );
  }

   // Método para Editar Cliente
 updateService(id: any , obj: Service): Observable<Service> {
  return this.http.put<Service>(`${this.url}/${id}`, obj);
}

deleteClient(id: number) : Observable<void>{
  return this.http.delete<void>(`${this.url}/${id}`);
}
}
