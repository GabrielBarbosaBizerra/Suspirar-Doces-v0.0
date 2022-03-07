import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  sair(): void {
    localStorage.removeItem('user_logged');
    window.location.reload();
  }
  reload(): void {
    window.location.reload();
    window.location.reload();
  }
}
