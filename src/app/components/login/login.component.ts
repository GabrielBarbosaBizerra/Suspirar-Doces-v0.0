import { LoginService } from './../../services/login.service';
import { Login } from './../../models/login';
import { Component, OnInit } from '@angular/core';
import {  Validators, FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login ={
    email: null,
    senha: null
  }
  public loginForm: FormGroup;

  constructor(private fb:FormBuilder, private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['',Validators.required],
      senha: ['', [Validators.required]],
    })
  }

  logar(): void{
    this.loginService.autenticar(this.login).subscribe((data)=>{
      localStorage.setItem('user_logged', JSON.stringify(data));
      this.loginService.isAuthenticated = true;
      window.location.reload();
      },
      erro => {
        if(erro){
          alert("Usuário Inválido");
        }
    });
  }

}
