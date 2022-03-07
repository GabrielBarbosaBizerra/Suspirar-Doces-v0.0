import { Saida } from './../models/saida';
import { Observable, map, catchError, EMPTY } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaidaService {

  urlApi = 'https://suspirardocesapi.azurewebsites.net/api/saidas';
  constructor(private http: HttpClient) { }

  listarSaidas(): Observable<Saida[]>{
    return this.http.get<Saida[]>(this.urlApi);
  }

  buscarPorId(id: number): Observable<Saida> {
    const url = `${this.urlApi}/${id}`;
    return this.http.get<Saida>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  atualizar(saida: Saida) {
    const url = `${this.urlApi}/${saida.id}`;
    return this.http.put(url, saida).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  cadastrar(saida: Saida){
    return this.http.post(this.urlApi, saida).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  remover(id:number){
    const url = `${this.urlApi}/${id}`;
    return this.http.delete(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    return EMPTY;
  }
}
