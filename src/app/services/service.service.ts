import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Service} from '../model/Service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http : HttpClient) { }

  private url = 'http://localhost:3000/services'

  // Método para buscar todos os Serviços
  getServices(): Observable< Service[] > {

    return this.http.get< Service[] >( this.url );
  }

  // Método para Inserir novos Serviços
  createService(obj: Service): Observable< Service> {

    return this.http.post< Service >( this.url, obj );
  }
}
