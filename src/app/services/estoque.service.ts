import { Estoque } from './../models/estoque';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

var httpOptions = {headers: new HttpHeaders({"Content-Type": "application/json"})};

@Injectable({
  providedIn: 'root'
})
export class EstoqueService {

  urlApi = "https://suspirardocesapi.azurewebsites.net/api/estoques";

  constructor(private http: HttpClient) { }

  listarEstoques(): Observable<Estoque[]>{
    return this.http.get<Estoque[]>(this.urlApi).pipe(map((obj) => obj));
  }

  buscarPorId(id: number): Observable<Estoque>{
    const url = `${this.urlApi}/${id}`;
    return this.http.get<Estoque>(url).pipe(map((obj) => obj));
  }

  atualizar(estoque: Estoque){
    const url = `${this.urlApi}/${estoque.id}`;
    return this.http.put(url,estoque).pipe(map((obj) => obj));
  }

  cadastrar(estoque: Estoque){
    return this.http.post(this.urlApi, estoque).pipe(map((obj) => obj));
  }

  remover(id: number){
    const url = `${this.urlApi}/${id}`;
    return this.http.delete(url).pipe(map((obj) => obj));
  }
}
