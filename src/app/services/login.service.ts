import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../models/login';

var httpOptions = {headers: new HttpHeaders({"Content-Type": "application/json"})};

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isAuthenticated: boolean = false;
  urlApi = 'https://suspirardocesapi.azurewebsites.net/api/Login';

  constructor(private http: HttpClient) { }

  autenticar(login: Login){
    return this.http.post(this.urlApi, login);
  }

}
