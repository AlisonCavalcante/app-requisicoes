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
    })
    if(!this.load){
      this.http.get<Funcionario[]>(Constantes.URL_BASE + 'funcionario')
      .pipe(
        map((funcionarios) =>{
          for(let f of funcionarios){
            let id = f.departamentoId;
            f.departamento = this.departamentos.filter(dep => dep._id == id)
          }
          return funcionarios
        })
      )
      .subscribe(this.funcionarioSubject$);
      this.load = true;
    }
    return this.funcionarioSubject$.asObservable();
  }

  update(funcionario: Funcionario): Observable<Funcionario>{
    return this.http.patch<Funcionario>(Constantes.URL_BASE + `funcionario/${funcionario._id}`, funcionario);
  }
  //tap((f: Funcionario) => console.log(f) )

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

  delete(funcionario: Funcionario){
    return this.http.delete(Constantes.URL_BASE + 'funcionario/' + funcionario._id);
  }

}
