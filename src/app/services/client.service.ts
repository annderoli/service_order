import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private url = 'http://localhost:3000/clients'

  constructor(private http : HttpClient) { }

  // Método para buscar todos os clientes
  getClient(): Observable< Client[] > {

    return this.http.get< Client[] >( this.url );
  }

  // Método para buscar todos os clientes
  postClient( obj : Client) : Observable < Client > {

    return this.http.post< Client >( this.url, obj);
  }
  
}
