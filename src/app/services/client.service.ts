import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../model/Client';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http : HttpClient) { }

  private url = 'http://192.168.18.6:3000/clients'

  // Método para buscar todos os Clientes
  getClients(): Observable< Client[] > {

    return this.http.get< Client[] >( this.url );
  }

  // Método para Inserir novos Clientes
  setClient(obj: Client): Observable< Client> {

    return this.http.post< Client >( this.url, obj );
  }

  // Clientes por parametro
  getName(nome:String): Observable<Client[]> {

    return this.http.get<Client[]>(this.url)

  }
}
