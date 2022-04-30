import { Constantes } from './../util/constantes';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  // get(){
  //   this.http.get(Constantes.URL_BASE + 'pessoa').subscribe((res) => {
  //     console.log(res);
  //   })
  // }
}
