import { SaidaService } from './../../../../services/saida.service';
import { SaidaDeleteComponent } from './../saida-delete/saida-delete.component';
import { SaidaUpdateComponent } from './../saida-update/saida-update.component';
import { SaidaCreateComponent } from './../saida-create/saida-create.component';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Saida } from './../../../../models/saida';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saida-read',
  templateUrl: './saida-read.component.html',
  styleUrls: ['./saida-read.component.css']
})
export class SaidaReadComponent implements OnInit {

  saidas: Saida[];
  dataSource: MatTableDataSource<Saida>;

  displayedColumns = ['id', 'nome', 'valor', 'descricao','data', 'acoes'];

  constructor(public dialog: MatDialog, private saidaService: SaidaService) {
    this.buscarSaidas();
  }

  ngOnInit():void{
   
  }

  buscarSaidas(){
    this.saidaService.listarSaidas().subscribe(data =>{  
      this.dataSource = new MatTableDataSource(data);
    });
  }

  addSaida(): void {
    const dialogRef = this.dialog.open(SaidaCreateComponent, {
      minWidth: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  atualizarSaida(id:number): void{
    const dialogRefAtualizarSaida = this.dialog.open(SaidaUpdateComponent, {
      minWidth: '600px',
      data: {idSaida: id}
    });
  }

  deletarSaida(id:number): void{
    const dialogRefDeletarSaida = this.dialog.open(SaidaDeleteComponent, {
      minWidth: '600px',
      data: {idSaida: id}
    });
  }
}
