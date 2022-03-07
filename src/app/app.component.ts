import { LoginService } from './services/login.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent{
  
  isAuthenticated: boolean;

  constructor(private loginServices: LoginService) {
    if(localStorage.getItem('user_logged')){
      this.isAuthenticated = true;
    }
  }

}
