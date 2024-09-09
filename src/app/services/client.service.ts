import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  //Url da API 
  private url : string = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  // Método para selecionar os clientes
  select():Observable<Client[]>{

    return this.http.get<Client[]>(this.url);
  }
}
