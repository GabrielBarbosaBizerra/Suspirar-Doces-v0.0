import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { Resultado } from './../models/resultado';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResultadoService {
  
  urlApi = 'https://suspirardocesapi.azurewebsites.net/api/resultados';
  constructor(private http: HttpClient) { }

  listar(): Observable<Resultado[]>{
    return this.http.get<Resultado[]>(this.urlApi);
  }

  errorHandler(e: any): Observable<any> {
    return EMPTY;
  }
}