import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../model/Client';
import { Observable } from 'rxjs';

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

  // Método para Inserir novos Clientes
  postClient(obj: Client): Observable< Client> {

    return this.http.post< Client >( this.url, obj );
  }
}
