import { Constantes } from './../util/constantes';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Departamento } from '../shared/login/models/departamento.model';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  departamentoSubject$: BehaviorSubject<Departamento[]> = new  BehaviorSubject<Departamento[]>([]);
  private load: boolean = false;

  constructor(private http: HttpClient) { }

  createDepartamento(departamento: Departamento): Observable<Departamento>{
   return this.http.post<Departamento>(Constantes.URL_BASE + 'departamento', departamento).pipe(tap((dep: Departamento) => this.departamentoSubject$.getValue().push(dep)));
  }

  getAll(): Observable<Departamento[]>{
    if(!this.load){
      this.http.get<Departamento[]>(Constantes.URL_BASE + 'departamento')
      .pipe(tap((deps) => console.log(deps)))
      .subscribe(this.departamentoSubject$);
      this.load = true
    }
    return this.departamentoSubject$.asObservable();
  }

  delete(departamento: Departamento, index: number): Observable<Departamento> {
    return this.http.delete<Departamento>(Constantes.URL_BASE +  'departamento/' + departamento._id).pipe(tap((dep: Departamento) => this.departamentoSubject$.getValue().splice(index, 1)))
  }

}
