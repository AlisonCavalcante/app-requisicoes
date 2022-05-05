import { Departamento } from './../shared/login/models/departamento.model';
import { DepartamentoService } from './departamento.service';
import { Constantes } from './../util/constantes';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Funcionario } from '../shared/login/models/funcionario.model';
import { tap} from 'rxjs/operators';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  funcionarioSubject$: BehaviorSubject<Funcionario[]> = new  BehaviorSubject<Funcionario[]>([]);
  load: boolean = false;
  private departamentos!: Departamento[];

  constructor(private departamentoService: DepartamentoService, private http: HttpClient) { }

  getAll(): Observable<Funcionario[]>{
    this.departamentoService.getAll().subscribe((dep) =>{
      this.departamentos = dep
      if(!this.load){
        this.http.get<Funcionario[]>(Constantes.URL_BASE + 'funcionario')
        .pipe(
          map((funcionarios) =>{
            for(let f of funcionarios){
              f.departamento = this.departamentos.filter(dep => dep._id == f.departamentoId)
            }
            return funcionarios
          })
        )
        .subscribe(this.funcionarioSubject$);
        this.load = true;
      }
    })
    return this.funcionarioSubject$.asObservable();
  }

  update(funcionario: Funcionario): Observable<Funcionario>{
    return this.http.patch<Funcionario>(Constantes.URL_BASE + `funcionario/${funcionario._id}`, funcionario)
    .pipe(
      tap((func)=> {
        let funcionarios = this.funcionarioSubject$.getValue();
        let i = funcionarios.findIndex(f => f._id === funcionario._id);
        if(i>=0){
          func.departamento = this.departamentos.filter(f => f._id == func.departamentoId)
          this.funcionarioSubject$.getValue().splice(i, 1, func);
        }
      })
    )
  }


  create(funcionario: Funcionario): Observable<Funcionario>{
    return this.http.post<Funcionario>(Constantes.URL_BASE + 'funcionario', funcionario)
    .pipe(
      map((f) =>{
          let id = f.departamentoId;
          f.departamento = this.departamentos.filter(dep => dep._id == id)
          this.funcionarioSubject$.getValue().push(f);
        return f
      }),
    );
   }

   delete(funcionario: Funcionario, index: number): Observable<Funcionario> {
    return this.http.delete<Funcionario>(Constantes.URL_BASE +  'funcionario/' + funcionario._id).pipe(tap((fun: Funcionario) => this.funcionarioSubject$.getValue().splice(index, 1)))
  }

}
