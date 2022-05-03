import { Departamento } from './../shared/login/models/departamento.model';
import { Constantes } from './../util/constantes';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
      .subscribe(this.departamentoSubject$);
      this.load = true
    }
    return this.departamentoSubject$.asObservable();
  }

  update(departamento: Departamento): Observable<Departamento>{
    return this.http.patch<Departamento>(Constantes.URL_BASE  + `departamento/${departamento._id}`,departamento)
    .pipe(
      tap((dep)=> {
        let departamentos = this.departamentoSubject$.getValue();
        let i = departamentos.findIndex(d => d._id === departamento._id);
        if(i>=0){
          console.log(dep)
          departamentos[i] = dep;
        }
      })
    )
  }

  delete(departamento: Departamento, index: number): Observable<Departamento> {
    console.log(departamento._id)
    return this.http.delete<Departamento>(Constantes.URL_BASE +  'departamento/' + departamento._id).pipe(tap((dep: Departamento) => this.departamentoSubject$.getValue().splice(index, 1)))
  }



}
