import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Business } from '../model/Business';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  constructor(private http : HttpClient) { }

  private url = 'http://192.168.18.6:3000/business'

  getBusiness(): Observable< Business[] > {

    return this.http.get< Business[] >( `${this.url}` );
  }
}
