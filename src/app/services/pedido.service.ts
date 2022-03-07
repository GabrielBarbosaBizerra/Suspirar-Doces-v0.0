import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pedido } from '../models/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private http: HttpClient) { }

  urlApi = "https://suspirardocesapi.azurewebsites.net/api/Pedidos";
  
  listarPedidos(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(this.urlApi).pipe(map((obj) => obj));
  }

  buscarPorId(id: number): Observable<Pedido> {
    const url = `${this.urlApi}/${id}`;
    return this.http.get<Pedido>(url).pipe(map((obj) => obj));
  }

  atualizar(pedido: Pedido) {
    const url = `${this.urlApi}/${pedido.id}`;
    return this.http.put(url, pedido).pipe(map((obj) => obj));
  }

  cadastrar(pedido: Pedido) {
    return this.http.post(this.urlApi, pedido).pipe(map((obj) => obj));
  }

  remover(id: number) {
    const url = `${this.urlApi}/${id}`;
    return this.http.delete(url).pipe(map((obj) => obj));
  }
}
