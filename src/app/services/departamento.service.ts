import { Constantes } from './../util/constantes';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Departamento } from '../shared/login/models/departamento.model';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  constructor(private http: HttpClient) { }

  createDepartamento(departamento: Departamento): Observable<Departamento>{
   return this.http.post<Departamento>(Constantes.URL_BASE + 'departamento', departamento);
  }

  getAll(): Observable<Departamento[]>{
    return this.http.get<Departamento[]>(Constantes.URL_BASE + 'departamento');
  }

}
