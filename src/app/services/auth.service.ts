import { Constantes } from './../util/constantes';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../shared/login/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  getUser(email: string): Observable<User> {
    return this.http.get<User>(Constantes.URL_BASE + "pessoa/" + email);
  }
}
