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
            let id = (f.departamento as string);
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

  create(funcionario: Funcionario){
    return this.http.post(Constantes.URL_BASE + "", funcionario);
  }

  delete(funcionario: Funcionario){
    return this.http.delete(Constantes.URL_BASE + 'funcionario/' + funcionario._id);
  }

}
