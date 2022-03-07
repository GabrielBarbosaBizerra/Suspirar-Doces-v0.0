import { Produto } from './../models/produto';
import { Observable, map } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

var httpOptions = {headers: new HttpHeaders({"Content-Type": "application/json"})};

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  urlApi = "https://suspirardocesapi.azurewebsites.net/api/produtos";
  constructor(private http: HttpClient) { }

  listarProdutos(): Observable<Produto[]>{
    return this.http.get<Produto[]>(this.urlApi);
  }

  buscarPorId(id: number): Observable<Produto>{
    const url = `${this.urlApi}/${id}`;
    return this.http.get<Produto>(url).pipe(map((obj) => obj));
  }

  atualizar(produto: Produto){
    const url = `${this.urlApi}/${produto.id}`;
    return this.http.put(url,produto).pipe(map((obj) => obj));
  }

  cadastrar(produto: Produto){
    return this.http.post(this.urlApi, produto).pipe(map((obj) => obj));
  }

  remover(id: number){
    const url = `${this.urlApi}/${id}`;
    return this.http.delete(url).pipe(map((obj) => obj));
  }
}
