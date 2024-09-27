import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated = false;
  private apiUrl = 'http://192.168.18.6:3000/users'; // URL do json-server

  constructor(private http: HttpClient) {}

  // Método para registrar um novo usuário
  register(username: string, password: string): Observable<any> {
    const newUser = { username, password };
    return this.http.post(this.apiUrl, newUser);
  }

  login(username: string, password: string): Observable<boolean> {
    return this.http.get<any[]>(`${this.apiUrl}?username=${username}&password=${password}`).pipe(
      map(users => users.length > 0) // Verifica se o usuário existe
    );
  }

  sendEmail(to: string, subject: string, text: string): Observable<any> {
    const emailData = { to, subject, text };
    return this.http.post<any>(this.apiUrl, emailData);
  }
}
