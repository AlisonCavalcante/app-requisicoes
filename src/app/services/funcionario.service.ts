import { Constantes } from './../util/constantes';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Funcionario } from '../shared/login/models/funcionario.model';
import { tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Funcionario[]>{
    return this.http.get<Funcionario[]>(Constantes.URL_BASE + 'funcionario');
  }

  create(funcionario: Funcionario){
    return this.http.post(Constantes.URL_BASE + "", funcionario);
  }

  delete(funcionario: Funcionario){
    return this.http.delete(Constantes.URL_BASE + 'funcionario/' + funcionario._id);
  }

}
