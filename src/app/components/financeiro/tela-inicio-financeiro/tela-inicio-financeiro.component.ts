import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tela-inicio-financeiro',
  templateUrl: './tela-inicio-financeiro.component.html',
  styleUrls: ['./tela-inicio-financeiro.component.css']
})
export class TelaInicioFinanceiroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  reload():void{
    window.location.reload();
    window.location.reload();
    window.location.reload();
  }
}
