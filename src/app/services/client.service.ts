import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../model/Client';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http : HttpClient) { }

  private url = 'http://localhost:3000/clients'

  // Método para buscar todos os Clientes
  getClients(): Observable< Client[] > {

    return this.http.get< Client[] >( this.url );
  }

  getClient(id : any): Observable< Client > {

    return this.http.get<Client>(`${this.url}/${id}`)

  }

  // Método para Criar novos Clientes
  createClient(obj: Client): Observable< Client> {

    return this.http.post< Client >( this.url, obj );
  }

 // Método para Editar Cliente
 updateClient(id: any , obj: Client): Observable<Client> {
  return this.http.put<Client>(`${this.url}/${id}`, obj);
}

deleteClient(id: number) : Observable<void>{
  return this.http.delete<void>(`${this.url}/${id}`);
}

  
}
