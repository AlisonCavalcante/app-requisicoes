import { Constantes } from './../util/constantes';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../shared/login/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  public loggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.loggedIn.asObservable();
  constructor(private http: HttpClient) {}

  getUser(email: string): Observable<User> {
    return this.http.get<User>(Constantes.URL_BASE + "pessoa/" + email);
  }
  updateLogin(user: User){
    if(user){
      this.loggedIn.next(true);
    } else
    this.loggedIn.next(false);
  }
  logout(){
    this.loggedIn.next(false);
  }
}
