import { Entrada } from './../models/entrada';
import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY, map, catchError } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EntradaService {

  urlApi = 'https://suspirardocesapi.azurewebsites.net/api/entradas';
  constructor(private http: HttpClient) { }

  listarEntradas(): Observable<Entrada[]>{
    return this.http.get<Entrada[]>(this.urlApi);
  }


  buscarPorId(id: number): Observable<Entrada> {
    const url = `${this.urlApi}/${id}`;
    return this.http.get<Entrada>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  atualizar(entrada: Entrada) {
    const url = `${this.urlApi}/${entrada.id}`;
    return this.http.put(url, entrada).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  cadastrar(entrada: Entrada){
    return this.http.post(this.urlApi, entrada).pipe(
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
