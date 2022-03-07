import { catchError, EMPTY, map, Observable } from 'rxjs';
import { Cliente } from './../models/cliente';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

var httpOptions = {headers: new HttpHeaders({"Content-Type": "application/json"})};

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
 
  urlApi = 'https://suspirardocesapi.azurewebsites.net/api/clientes';
  constructor(private http: HttpClient) { }

  listarClientes(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.urlApi);
  }

  buscarPorId(id: number): Observable<Cliente> {
    const url = `${this.urlApi}/${id}`;
    return this.http.get<Cliente>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  atualizar(cliente: Cliente) {
    const url = `${this.urlApi}/${cliente.id}`;
    return this.http.put(url, cliente).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  cadastrar(cliente: Cliente){
    return this.http.post(this.urlApi, cliente).pipe(
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
